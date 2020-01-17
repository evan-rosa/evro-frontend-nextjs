import Footer from '../components/Footer';
import Header from '../components/Header';
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
import '../index.css';
import Link from 'next/link';

class ProjectIndexPage extends React.Component {
    render() {

        const Project = props => (
            <MDBContainer className="pb-3">
                <MDBRow className="text-center">
                    <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
                        <section>
                            <MDBCard cascade wide>
                                <MDBView cascade overlay>
                                    <MDBCardImage top src="#" alt={props.title} className="img-fluid" />
                                    <Link href="/projects/[id]" as={`/projects/${props.id}`}>
                                        <a data-internal="internal-project-image-click">
                                            <MDBMask overlay="white-slight" />
                                        </a>
                                    </Link>
                                </MDBView>{props.id}

                                <MDBCardBody className="pb-3" cascade>
                                    <h2 className="font-weight-bold my-3">{props.title} </h2>

                                    <MDBCardText>test</MDBCardText>
                                    <Link href="/projects/[id]" as={`/projects/${props.id}`}>
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
                </MDBRow>
            </MDBContainer>
        );

        return (
            <div>
                <Header />
                <MDBContainer className="pt-5">
                    <MDBRow className="pb-3">
                        <MDBCol md="12">
                            <h1 className="h1">H1</h1>
                            <p className="h5-responsive">P</p>
                        </MDBCol>
                    </MDBRow>
                    <MDBRow>
                        <MDBCol md="12">
                            <Project title="Ayoba" />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Footer />
            </div>
        );
    }
}

export default ProjectIndexPage;
