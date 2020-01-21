import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Link from 'next/link';
import Sky from '../assets/img/svg/dc-skyline.svg';
import Layout from '../components/Layout';

function Error({ statusCode }) {
    return (
        <Layout>
            <div className="height-inherit-vh parent-wrapper">
                <div className="content pt-5 text-center">
                    <MDBContainer>
                        <MDBRow className="bring-to-front">
                            <MDBCol md="12" className="mobile-pad">
                                <MDBContainer>
                                    <MDBRow className="pb-3">
                                        <MDBCol>
                                            <h1 className="h1">{statusCode
                                                ? `An error ${statusCode} occurred on server`
                                                : 'An error occurred on client'}</h1>
                                            <h2 className="h5-responsive line-height">
                                                Maybe you're looking for something else?
											</h2>
                                        </MDBCol>
                                    </MDBRow>

                                    <MDBRow>
                                        <MDBCol>
                                            <Link href="/">
                                                <a data-internal="internal-home" className="nav-link">
                                                    <MDBBtn outline className="evro-navy-btn">
                                                        Back To Home Page
                                                    </MDBBtn>
                                                </a>
                                            </Link>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>

                <div className="child-wrapper">
                    <img className="home-hero" src={Sky} />
                </div>
            </div>
        </Layout>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error