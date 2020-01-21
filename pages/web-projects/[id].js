import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Layout from '../../components/Layout';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';



class projectWeb extends React.Component {
    static async getInitialProps(ctx) {
        const id = ctx.query.id;
        const resProjects = await axios.get(`https://evro-prod-backend.herokuapp.com/api/v2/pages/${id}/?type=projects.ProjectsPage&fields=*`);
        return {
            webProject: resProjects.data,
            image: resProjects.data.project_image_url.url,
            title: resProjects.data.meta.seo_title,
            search_description: resProjects.data.meta.search_description,
        }
    }
    render() {
        const { projectWeb } = this.props;
        return (
            <div>
                <Header />
                <Layout>

                    <MDBContainer className="pt-5 d-flex flex-nowrap desk-margin">
                        <MDBRow className="pb-5">
                            <MDBCol md="12" lg="6" className="order-lg-1 mobile-pad">
                                <h1 className="h1">{this.props.webProject.project_h_one}</h1>
                                <h2 className="h5-responsive">{this.props.webProject.project_h_two}</h2>
                                <p>{this.props.webProject.project_intro_p}</p>
                                <a data-outbound="outbound-see-project" href={this.props.webProject.project_url} target="_blank" rel="noopener noreferrer">
                                    <MDBBtn outline className="evro-navy-btn">
                                        See Project
								</MDBBtn>
                                </a>
                            </MDBCol>
                            <MDBCol md="12" lg="6" className="order-lg-2 mobile-pad">
                                <img src={this.props.image} alt={this.props.webProject.project_img_alt} className="img-fluid z-depth-5" />
                            </MDBCol>
                            <MDBCol md="12" lg="12" className="order-lg-3 desk-absolute">
                                <h2 className="h2-responsive font-weight-normal">Site Released</h2>
                                <p>{this.props.webProject.project_p}</p>
                                <h2 className="h2-responsive font-weight-normal">Technologies and Services</h2>
                                <div
                                    dangerouslySetInnerHTML={{ __html: this.props.webProject.project_tech_stack_description }}
                                />


                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>

                </Layout>
                <Footer />
            </div>
        );
    }
}

export default projectWeb;
