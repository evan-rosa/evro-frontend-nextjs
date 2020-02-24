const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const sitemapOptions = {
    root: __dirname + '/public/',
    headers: {
        'Content-Type': 'text/xml;charset=UTF-8'
    }
};

const devProxy = {
    '/api': {
        target: 'https://evro-prod-backend.herokuapp.com/api',
        pathRewrite: { '^/api': '/' },
        changeOrigin: true
    }
};
const port = parseInt(process.env.PORT, 10) || 3000
const env = process.env.NODE_ENV
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev })
const handle = app.getRequestHandler();




let server
app
    .prepare()
    .then(() => {
        server = express()

        // Set up the proxy.
        if (dev && devProxy) {
            const proxyMiddleware = require('http-proxy-middleware')
            Object.keys(devProxy).forEach(function (context) {
                server.use(proxyMiddleware(context, devProxy[context]))
            })
        }

        server.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'GET,POST');
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });

        server.use(bodyParser.json()); // support json encoded bodies
        server.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


        // serve sitemap
        server.get('/sitemap.xml', (req, res) => res.status(200).sendFile('sitemap.xml', sitemapOptions));


        // Default catch-all handler to allow Next.js to handle all other routes
        server.all('*', (req, res) => {
            return handle(req, res);
        });

        server.listen(port, err => {
            if (err) {
                throw err
            }
            console.log(`> Ready on port ${port} [${env}]`)
        })
    })
    .catch(err => {
        console.log('An error occurred, unable to start the server')
        console.log(err)
    })