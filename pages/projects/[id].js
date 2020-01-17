import Footer from '../../components/Footer';
import Header from '../../components/Header.js';
import { MDBPagination, MDBPageItem, MDBPageNav, MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import '../../index.css';
import { useRouter } from 'next/router';

const ProjectBlock = () => {
    const router = useRouter();
    return (
        <div>
            <Header />
            <MDBContainer className="pt-5 d-flex flex-nowrap desk-margin">
                <MDBRow className="pb-5">
                    <MDBCol md="12" lg="6" className="order-lg-1 mobile-pad">
                        <h1 className="h1">{router.query.title}</h1>
                        <h2 className="h5-responsive">H2</h2>
                        <p>test</p>
                        <a data-outbound="outbound-see-project" href="#" target="_blank" rel="noopener noreferrer">
                            <MDBBtn outline className="evro-navy-btn">
                                See Project
								</MDBBtn>
                        </a>
                    </MDBCol>
                    <MDBCol md="12" lg="6" className="order-lg-2 mobile-pad">
                        <img src="#" alt="#" className="img-fluid z-depth-5" />
                    </MDBCol>
                    <MDBCol md="12" lg="12" className="order-lg-3 desk-absolute">
                        <h2 className="h2-responsive font-weight-normal">Site Released</h2>
                        <p>test</p>
                        <h2 className="h2-responsive font-weight-normal">Technologies and Services</h2>
                        <div>test</div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer />
        </div>
    );
};

export default ProjectBlock;