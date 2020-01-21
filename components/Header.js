import Link from 'next/link';
import {
    MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavbarToggler, MDBCollapse
} from "mdbreact";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
    }

    toggleCollapse = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <div className="flyout-wrapper">
                <header>
                    <MDBNavbar color="white" dark expand="md" scrolling fixed="top">
                        <MDBNavbarBrand>
                            <Link href="/">
                                <a data-header="head-nav-logo">
                                    <strong className="App-logo">EVRO</strong>
                                </a>
                            </Link>
                        </MDBNavbarBrand>

                        <MDBNavbarToggler
                            className="hide-ham"
                            color="#2c3d5c"
                            id="hamburger1"
                            onClick={this.toggleCollapse}
                        />
                        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                            <MDBNavbarNav right>
                                <MDBNavItem>
                                    <Link href="/about">
                                        <a data-header="head-nav-about" className="nav-link">About</a>
                                    </Link>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <Link href="/projects">
                                        <a data-header="head-nav-portfolio" className="nav-link">Projects</a>
                                    </Link>
                                </MDBNavItem>

                                <MDBNavItem>
                                    <Link href="/contact">
                                        <a data-header="head-nav-contact" className="nav-link">Contact</a>
                                    </Link>
                                </MDBNavItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBNavbar>
                </header>
            </div>

        );
    }
}

export default Header;