import Header from '../components/Header';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';
import FeatureForm from '../components/FormFeature';
import Sky from '../assets/img/svg/dc-skyline.svg';
import Link from 'next/link';

import React from 'react'

import fetch from 'isomorphic-unfetch';
import '../index.css';


class Index extends React.Component {

    static async getInitialProps(ctx) {
        const dataResponse = await fetch('https://www.evro.io/api/v2/pages/?type=home.HomePage&fields=*');
        const data = await dataResponse.json();
        console.log(data);
        return {

            id: data.items[0].id,
            title: data.items[0].meta.seo_title,
            canonical: data.items[0].canonical,
            search_description: data.items[0].meta.search_description,
            h_one: data.items[0].h_one,
            h_one_span: data.items[0].h_one_span,
            content: data.items[0].content
        }

    }
    render() {
        return <div>
            <Header />
            <div className="height-inherit-vh parent-wrapper">
                <div className="content pt-5">
                    <MDBContainer>
                        <MDBRow className="bring-to-front">
                            <MDBCol md="7" lg="8" className="mobile-pad">
                                <MDBContainer>
                                    <MDBRow className="pb-3">
                                        <MDBCol>
                                            <h1 className="h1">
                                                <strong>
                                                    {this.props.h_one}
                                                    <span className="evro-red-font"> {this.props.h_one_span}</span>
                                                </strong>
                                            </h1>
                                            <h2 className="h5-responsive line-height">{this.props.content}</h2>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol>
                                            <a
                                                href="https://www.linkedin.com/in/evan-rosa/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="li-ic mr-4"
                                                aria-label="Evan Rosa's LinkedIn Profile"
                                                data-outbound="outbound-social-linkedin"
                                            >
                                                <MDBIcon size="2x" fab icon="linkedin-in" />
                                            </a>
                                            <a
                                                href="https://github.com/evan-rosa"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="git-ic mr-4"
                                                aria-label="Evan Rosa's GitHub Profile"
                                                data-outbound="outbound-social-github"
                                            >
                                                <MDBIcon size="2x" fab icon="github" />
                                            </a>
                                            <a
                                                href="https://stackoverflow.com/users/5672482/evro?tab=profile"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="so-ic mr-4"
                                                aria-label="Evan Rosa's Stack Overflow Profile"
                                                data-outbound="outbound-social-stackoverflow"
                                            >
                                                <MDBIcon size="2x" fab icon="stack-overflow" />
                                            </a>
                                            <a
                                                href="https://evro-io.slack.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="slack-ic mr-4"
                                                aria-label="Evan Rosa's Slack Profile"
                                                data-outbound="outbound-social-slack"
                                            >
                                                <MDBIcon size="2x" fab icon="slack" />
                                            </a>
                                            <a
                                                href="https://www.instagram.com/_evro/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="ins-ic mr-4"
                                                aria-label="Evan Rosa's Instagram Profile"
                                                data-outbound="outbound-social-instagram"
                                            >
                                                <MDBIcon size="2x" fab icon="instagram" />
                                            </a>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow>
                                        <MDBCol>

                                            <Link href="/about">
                                                <a data-internal="internal-learn-about-evan" className="nav-link">
                                                    <MDBBtn outline className="evro-navy-btn">
                                                        Learn More About Evan Rosa
													    </MDBBtn>
                                                </a>
                                            </Link>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </MDBCol>
                            <MDBCol md="5" lg="4" className="mb-4">
                                <FeatureForm />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>

                <div className="child-wrapper">
                    <img className="home-hero" src={Sky} />
                </div>
            </div>
        </div>
    }
}

export default Index;
