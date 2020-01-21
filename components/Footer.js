import { MDBContainer, MDBFooter } from 'mdbreact';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <MDBFooter className="font-small pt-4 mt-4 evro-navy-back">
                    <div className="footer-copyright text-center py-3">
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: EvRo.io is created with{' '}
                            <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
                                Djangoproject.com
						</a>,{' '}
                            <a href="https://www.django-rest-framework.org/" target="_blank" rel="noopener noreferrer">
                                Django-Rest-Framework.org
						</a>,{' '}
                            <a href="https://wagtail.io/" target="_blank" rel="noopener noreferrer">
                                Wagtail.io
						</a>,
						<a href="https://www.MDBootstrap.com" target="_blank" rel="noopener noreferrer">
                                {' '}
                                MDBootstrap.com{' '}
                            </a>,
						<a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                {' '}
                                ReactJS.org{' '}
                            </a>,
                            and
						<a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                                {' '}
                                NextJS.org{' '}
                            </a>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </footer>
        );
    }
}

export default Footer;
