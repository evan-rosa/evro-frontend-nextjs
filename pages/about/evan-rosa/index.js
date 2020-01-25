import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBBtn, MDBCardBody } from 'mdbreact';
import Link from 'next/link';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Layout from '../../../components/Layout';
import axios from 'axios';
import { Helmet } from "react-helmet";
import '../../about/about.css';

class About extends React.Component {
    static async getInitialProps(ctx) {
        const resData = await axios.get('https://evro-prod-backend.herokuapp.com/api/v2/pages/?type=about.AboutPage&fields=*');
        const resume = await axios.get('https://evro-prod-backend.herokuapp.com/api/v2/documents/');
        return {
            about_title: resData.data.items[0].title,
            about_canonical: resData.data.items[0].canonical,
            about_description: resData.data.items[0].meta.search_description,
            about_p: resData.data.items[0].about_p,
            about_skill_web_development_col_one: resData.data.items[0].about_skill_web_development_col_one,
            about_skill_web_development_col_two: resData.data.items[0].about_skill_web_development_col_two,
            about_skill_digital_marketing: resData.data.items[0].about_skill_digital_marketing,
            about_skill_web_analytics_col_one: resData.data.items[0].about_skill_web_analytics_col_one,
            about_skill_web_analytics_col_two: resData.data.items[0].about_skill_web_analytics_col_two,
            about_skill_data_science_col_one: resData.data.items[0].about_skill_data_science_col_one,
            about_skill_data_science_col_two: resData.data.items[0].about_skill_data_science_col_two,
            about_education: resData.data.items[0].about_education,
            resume: resume.data.items[0].meta.download_url
        }
    }

    render() {
        return (
            <div className="height-inherit-vh parent-wrapper">
                <Helmet>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="google-site-verification" content="vB1wqK6_bK58jLO6iJr9uhz42Trvi3ukMEZ7FaK0MGk" />
                    <title>{this.props.about_title}</title>
                    <link rel="canonical" href={this.props.about_canonical} />
                    <meta name="description" content={this.props.about_description} />
                </Helmet>
                <Header />
                <Layout>
                    <MDBContainer className="pb-5">
                        <MDBRow className="pt-5">
                            <MDBCol md="12">
                                <h1 className="h1">About Evan Rosa</h1>
                                <p className="h5-responsive">{this.props.about_p}</p>
                            </MDBCol>
                        </MDBRow>

                        <MDBRow>
                            <MDBCol md="12 pb-5">
                                <a href={this.props.resume} data-internal="internal-resume-download">
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
                                            <MDBCol md="2">
                                                <div className="float-left">

                                                </div>
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBRow>
                                            <MDBCol md="10">
                                                <h3 className="skill-category h2-responsive">Full Stack Engineer</h3>
                                            </MDBCol>
                                        </MDBRow>

                                        <MDBRow className="skill-list">
                                            <MDBCol md="6">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: this.props.about_skill_web_development_col_one
                                                    }}
                                                />
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: this.props.about_skill_web_development_col_two
                                                    }}
                                                />
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
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: this.props.about_skill_digital_marketing
                                                    }}
                                                />
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
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: this.props.about_skill_web_analytics_col_one
                                                    }}
                                                />
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: this.props.about_skill_web_analytics_col_two
                                                    }}
                                                />
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
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: this.props.about_skill_data_science_col_one
                                                    }}
                                                />
                                            </MDBCol>
                                            <MDBCol md="6">
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: this.props.about_skill_data_science_col_two
                                                    }}
                                                />
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
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: this.props.about_education
                                    }}
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="12">
                                <Link href="/contact/evan-rosa">
                                    <a data-internal="internal-contact-button" className="nav-link">
                                        <MDBBtn outline className="evro-navy-btn">
                                            Contact
								    </MDBBtn>
                                    </a>
                                </Link>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </Layout>
                <Footer />
            </div>
        );
    }
}

export default About;
