import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Layout from '../../../components/Layout';
import axios from 'axios';
import Region from '../../../components/charts-wine/regionOne';
import Country from '../../../components/charts-wine/countries';
import Variety from '../../../components/charts-wine/variety';
import Stats from '../../../components/charts-wine/stats';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Helmet } from "react-helmet";


class projectDS extends React.Component {
    static async getInitialProps(ctx) {
        const id = ctx.query.id;
        const path = ctx.asPath;
        const res = await axios.get(`https://evro-stage-backend.herokuapp.com/api/v2/pages/${id}/?type=projects.DSProjectsPage&fields=*`);
        return {
            dsProject: res.data,
            image: res.data.ds_image_url.url,
            title: res.data.meta.seo_title,
            canonical: res.data.project_canonical,
            description: res.data.meta.search_description,
            url: res.data.meta.html_url,
            page: path,
        }
    }
    render() {
        //conditional rendering of charts for DS projects based on url
        let dsTen = this.props.page.includes('/projects/data-science/10') ? (
            <div className="evro-grey-back" id="ds-10">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol md="12">
                            <h2 className="h5-responsive">{this.props.dsProject.h_two_eda}</h2>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <Country />
                        </MDBCol>
                        <MDBCol md="6">
                            <Region />
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="6">
                            <Variety />
                        </MDBCol>
                        <MDBCol md="6">
                            <Stats />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer></div >) : null;

        return (
            <div>
                <Helmet>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="google-site-verification" content="vB1wqK6_bK58jLO6iJr9uhz42Trvi3ukMEZ7FaK0MGk" />
                    <title>{this.props.title}</title>
                    <meta name="canonical" content={this.props.canonical} />
                    <meta name="description" content={this.props.description} />
                </Helmet>
                <Header />
                <Layout>
                    <MDBContainer>
                        <MDBRow className="pb-5">
                            <MDBCol md="12" lg="6">
                                <h1 className="h1">{this.props.dsProject.h_one}</h1>
                                <div
                                    dangerouslySetInnerHTML={{ __html: this.props.dsProject.problem_statement }}
                                />
                            </MDBCol>
                            <MDBCol md="12" lg="6">
                                <img src={this.props.dsProject.ds_image_url.url} alt={this.props.dsProject.img_alt} className="img-fluid z-depth-5" />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    {dsTen}


                </Layout>


                <Footer />
            </div>
        )
    }
}

export default projectDS;