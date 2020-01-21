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
import Link from 'next/link';

import axios from 'axios';


const WebProjectList = props => (
    <div>
        <MDBContainer className="pb-3">
            <MDBRow className="text-center">
                <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
                    <section>
                        <ul>
                            {props.projects.map(project => (
                                <li key={project.id}>
                                    <MDBCard cascade wide>
                                        <MDBView cascade overlay>
                                            <MDBCardImage top src={project.project_image_url.url} alt={project.project_img_alt} className="img-fluid" />
                                            <Link data-internal="internal-project-image-click" to={`/portfolio/web/${project.id}/${project.meta.slug}`}>
                                                <MDBMask overlay="white-slight" />
                                            </Link>
                                        </MDBView>

                                        <MDBCardBody className="pb-3" cascade>
                                            <h2 className="font-weight-bold my-3">{project.project_h_one}</h2>

                                            <MDBCardText>{project.project_h_two}</MDBCardText>
                                            <Link data-internal="internal-project-button-click" to={`/portfolio/web/${project.id}/${project.meta.slug}`}>
                                                <MDBBtn outline className="evro-navy-btn">
                                                    View Project Details
										                </MDBBtn>
                                            </Link>
                                        </MDBCardBody>
                                    </MDBCard>
                                </li>
                            ))}
                        </ul>
                    </section>
                </MDBCol>

            </MDBRow>
        </MDBContainer>
    </div>
);

WebProjectList.getInitialProps = async function () {
    const data = await axios.get('https://evro-prod-backend.herokuapp.com/api/v2/pages/?type=projects.ProjectsPage&fields=*');
    console.log(`Show data fetched. Count: ${data.length}`);
    return {
        projects: data.data.items
    };
};

export default WebProjectList;
