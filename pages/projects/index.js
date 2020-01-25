import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardText,
    MDBBtn,
    MDBView,
    MDBMask
} from 'mdbreact';
import Layout from '../../components/Layout';
import axios from 'axios';
import Link from 'next/link';
import { Helmet } from "react-helmet";

class ProjectIndexPage extends React.Component {
    static async getInitialProps() {
        const res = await axios.get('https://evro-prod-backend.herokuapp.com/api/v2/pages/?type=project_index.ProjectIndexPage&fields=*');
        const resProject = await axios.get('https://evro-prod-backend.herokuapp.com/api/v2/pages/?type=projects.ProjectsPage&fields=*');
        return {
            id: res.data.items[0].id,
            title: res.data.items[0].title,
            seo_title: res.data.items[0].meta.seo_title,
            seo_description: res.data.items[0].meta.search_description,
            h1: res.data.items[0].project_h1,
            content: res.data.items[0].project_p,
            canonical: res.data.items[0].canonical,
            projectWeb: resProject.data.items
        }

    }
    render() {
        const { projectWeb } = this.props;
        return (
            <div>
                <Helmet>
                    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                    <meta name="google-site-verification" content="vB1wqK6_bK58jLO6iJr9uhz42Trvi3ukMEZ7FaK0MGk" />
                    <title>{this.props.seo_title}</title>
                    <link rel="canonical" href={this.props.canonical} />
                    <meta name="description" content={this.props.seo_description} />
                </Helmet>
                <Header />
                <Layout>
                    <MDBContainer className="pt-5">
                        <MDBRow className="pb-3">
                            <MDBCol md="12">
                                <h1 className="h1">{this.props.h1}</h1>
                                <p className="h5-responsive">{this.props.content}</p>
                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                            {projectWeb.map((project) => (
                                <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
                                    <section key={project.id}>
                                        <MDBCard cascade wide>
                                            <MDBView cascade overlay>
                                                <MDBCardImage top src={project.project_image_url.url} alt={project.project_img_alt} className="img-fluid" />
                                                <Link href="/projects/[id]" as={`/projects/web/${project.id}`}>
                                                    <a data-internal="internal-project-image-click"><MDBMask overlay="white-slight" /></a>
                                                </Link>
                                            </MDBView>

                                            <MDBCardBody className="pb-3 text-center" cascade>
                                                <h2 className="font-weight-bold my-3">{project.project_h_one}</h2>
                                                <MDBCardText>{project.project_h_two}</MDBCardText>
                                                <Link href="/projects/[id]" as={`/projects/web/${project.id}`}>
                                                    <a data-internal="internal-project-button-click">
                                                        <MDBBtn outline className="evro-navy-btn">
                                                            View Project Details
										                </MDBBtn>
                                                    </a>
                                                </Link>
                                            </MDBCardBody>
                                        </MDBCard>
                                    </section>
                                </MDBCol>
                            ))}
                        </MDBRow>
                    </MDBContainer>
                </Layout>
                <Footer />
            </div>
        );
    }
}

export default ProjectIndexPage;
