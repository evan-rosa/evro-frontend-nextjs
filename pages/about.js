
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBCardBody } from 'mdbreact';
import '../index.css';
import Link from 'next/link';
import ReactStoreIndicator from 'react-score-indicator';
import Header from '../components/Header';




class About extends React.Component {
    static async getInitialProps(ctx) {
        const dataResponse = await fetch('https://www.evro.io/api/v2/pages/?type=about.AboutPage&fields=*');
        const data = await dataResponse.json();
        console.log(data);
        return {
            about_p: data.items[0].about_p,
            about_skill_web_development_col_one: data.items[0].about_skill_web_development_col_one
        }

    }

    render() {
        return (
            <div className="height-inherit-vh parent-wrapper">
                <Header />
                <MDBContainer className="pb-5">
                    <MDBRow className="pt-5">
                        <MDBCol md="12">
                            <h1 className="h1">About Evan Rosa</h1>
                            <p className="h5-responsive">{this.props.about_p}</p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol md="12 pb-5">
                            <a href="#" data-internal="internal-resume-download">
                                <MDBBtn outline className="evro-navy-btn">
                                    Download my Resume
								</MDBBtn>
                            </a>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow className="pb-2">
                        <MDBCol md="12">
                            <h2 className="h2-responsive font-weight-normal">Skills and Techniques</h2>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol lg="6" md="12" className="mb-4">
                            <MDBCard id="skill-web-dev">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md="12">
                                            <div className="float-left">
                                                <ReactStoreIndicator
                                                    value={80}
                                                    maxValue={100}
                                                    lineWidth={15}
                                                    lineGap={0}
                                                />
                                            </div>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol md="12">
                                            <h3 className="skill-category h2-responsive">Full Stack Engineer</h3>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className="skill-list">
                                        <MDBCol md="6">
                                            <div>{this.propsabout_skill_web_development_col_one}</div>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <div>test</div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol lg="6" md="12" className="mb-lg-0 mb-4">
                            <MDBCard id="skill-mk">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md="12">
                                            <div className="float-left">
                                                <ReactStoreIndicator
                                                    value={90}
                                                    maxValue={100}
                                                    lineWidth={15}
                                                    lineGap={0}
                                                />
                                            </div>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol md="12">
                                            <h3 className="skill-category h2-responsive">Digital Marketing</h3>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className="skill-list">
                                        <MDBCol md="6">
                                            <div>test</div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol lg="6" md="12" className="mb-lg-0 mb-4">
                            <MDBCard id="skill-analytics">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md="12">
                                            <div className="float-left">
                                                <ReactStoreIndicator
                                                    value={90}
                                                    maxValue={100}
                                                    lineWidth={15}
                                                    lineGap={0}
                                                />
                                            </div>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol md="12">
                                            <h3 className="skill-category h2-responsive">Digital Analytics</h3>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className="skill-list">
                                        <MDBCol md="6">
                                            <div>test</div>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <div>test</div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>

                        <MDBCol lg="6" md="12" className="mb-lg-0 mb-4">
                            <MDBCard id="skill-ds">
                                <MDBCardBody>
                                    <MDBRow>
                                        <MDBCol md="12">
                                            <div className="float-left">
                                                <ReactStoreIndicator
                                                    value={70}
                                                    maxValue={100}
                                                    lineWidth={15}
                                                    lineGap={0}
                                                />
                                            </div>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol md="12">
                                            <h3 className="skill-category h2-responsive">Data Science</h3>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow className="skill-list">
                                        <MDBCol md="6">
                                            <div>test</div>
                                        </MDBCol>
                                        <MDBCol md="6">
                                            <div>test</div>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>

                    <hr />

                    <MDBRow>
                        <MDBCol md="12">
                            <h2 className="h2-responsive font-weight-normal" id="skill-edu">
                                Education, Training, and Certifications
							</h2>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="skill-list">
                        <MDBCol md="12">
                            <div>test</div>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="12">
                            <Link href="/contact">
                                <a data-internal="internal-contact-button" className="nav-link">
                                    <MDBBtn outline className="evro-navy-btn">
                                        Contact
								    </MDBBtn>
                                </a>
                            </Link>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div>
        );
    }
}

export default About;
