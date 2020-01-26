const express = require('express');
const next = require('next');
const bodyParser = require('body-parser');
const port = parseInt(process.env.PORT, 10) || 3000

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


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

app.prepare().then(() => {
    const server = express();

    // Set up the proxy.
    if (dev && devProxy) {
        const proxyMiddleware = require('http-proxy-middleware');
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

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, err => {
        if (err) throw err;
        console.log('> Read on http://localhost:${port}');
    });
});