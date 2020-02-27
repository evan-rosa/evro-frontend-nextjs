import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBBreadcrumb } from 'mdbreact';
import Layout from '../../../components/Layout';
import axios from 'axios';
import Region from '../../../components/charts-wine/regionOne';
import Country from '../../../components/charts-wine/countries';
import Head from '../../../components/charts-wine/head';
import Variety from '../../../components/charts-wine/variety';
import Stats from '../../../components/charts-wine/stats';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { Helmet } from "react-helmet";
import '../../projects/projects.module.css';


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
        let predictWine = this.props.page.includes('/projects/data-science/13') ? (
            <div className="evro-grey-back" id="predict-wine">
                <MDBContainer>
                    <MDBRow className="pt-5 pb-3">
                        <MDBCol md="12">
                            <h2>Exploratory Data Analysis</h2>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol>
                            <p>{this.props.dsProject.eda_section_one}</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol lg="6" md="12">
                            <figure className="figure">
                                <figcaption className="figure-caption">
                                    Figure 1: Wine Production by country
                                </figcaption>
                                <Country />
                            </figure>
                        </MDBCol>
                        <MDBCol lg="6" md="12">
                            <figure className="figure">
                                <figcaption className="figure-caption">
                                    Figure 2: Wine Production by region
                                </figcaption>
                                <Region />
                            </figure>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="pt-3 pb-3">
                        <MDBCol>
                            <p>{this.props.dsProject.eda_section_two}</p>
                        </MDBCol>
                    </MDBRow>

                    <MDBRow>
                        <MDBCol lg="6" md="12">
                            <figure className="figure">
                                <figcaption className="figure-caption">
                                    Figure 3: Wine Production by variety of wine
                                </figcaption>
                                <Variety />
                            </figure>
                        </MDBCol>
                        <MDBCol lg="6" md="12">
                            <figure className="figure">
                                <figcaption className="figure-caption">
                                    Figure 4: Wine dataset summary statistics
                                </figcaption>
                                <Stats />
                            </figure>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow className="pb-5">
                        <MDBCol>
                            <p>{this.props.dsProject.eda_section_three}</p>
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
                    <MDBContainer className="pt-5">
                        <MDBRow className="pb-5">
                            <MDBCol md="12" lg="6">
                                <h1 className="h1">{this.props.dsProject.h_one}</h1>
                                <div className="h5-responsive"
                                    dangerouslySetInnerHTML={{ __html: this.props.dsProject.problem_statement }}
                                />
                                <h2 className="pt-5">Data Summary</h2>
                                <p>{this.props.dsProject.data_summary}</p>



                            </MDBCol>
                            <MDBCol md="12" lg="6">
                                <img src={this.props.dsProject.ds_image_url.url} alt={this.props.dsProject.img_alt} className="img-fluid z-depth-5" />
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    {predictWine}
                    <MDBContainer className="pt-5 pb-5">
                        <MDBRow>
                            <MDBCol md="12">
                                <h2>Model Description</h2>
                                <div
                                    dangerouslySetInnerHTML={{ __html: this.props.dsProject.model_description }}
                                />
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="12">
                                <h2>Model Results</h2>
                                <p>{this.props.dsProject.model_result}</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="12">
                                <h2>Model Conclusion</h2>
                                <p>{this.props.dsProject.model_conclusion}</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>


                </Layout>


                <Footer />
            </div>
        )
    }
}

export default projectDS;