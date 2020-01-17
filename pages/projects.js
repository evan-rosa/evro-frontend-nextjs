import { useRouter } from 'next/router';
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

export default function ProjectList() {
    const router = useRouter();

    return (
        <MDBContainer className="pb-3">
            <MDBRow className="text-center">
                <MDBCol lg="4" md="6" className="mb-lg-0 mb-4">
                    <section>
                        <MDBCard cascade wide>
                            <MDBView cascade overlay>
                                <MDBCardImage top src="#" alt="#" className="img-fluid" />
                                <Link href="/projects/[id]" as={`/projects/${props.id}`}>
                                    <a data-internal="internal-project-image-click">
                                        <MDBMask overlay="white-slight" />
                                    </a>
                                </Link>
                            </MDBView>

                            <MDBCardBody className="pb-3" cascade>
                                <h2 className="font-weight-bold my-3">H2</h2>

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
}
