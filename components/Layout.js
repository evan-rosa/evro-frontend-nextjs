import Header from '../components/Header';
import Footer from '../components/Footer';

const layoutStyle = {
    paddingTop: 100,
};

const Layout = props => (
    <div style={layoutStyle}>
        {props.children}

    </div>
);

export default Layout;