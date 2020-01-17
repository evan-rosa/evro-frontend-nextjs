import { MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import '../index.css';


class ContactForm extends React.Component {

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleFormSubmit(event)} className="needs-validation" noValidate>
                    <MDBRow>
                        <MDBCol md="12">
                            <div className="md-form mb-0">
                                <MDBInput
                                    required
                                    name="name"
                                    type="text"
                                    id="contact-name"
                                    label="Your name"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="md-form mb-0">
                                <MDBInput
                                    required
                                    name="email"
                                    type="email"
                                    id="contact-email"
                                    label="Your email"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="md-form mb-0">
                                <MDBInput
                                    required
                                    name="subject"
                                    type="text"
                                    id="contact-text"
                                    label="Subject Line"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div className="md-form mb-0">
                                <MDBInput
                                    required
                                    name="message"
                                    type="textarea"
                                    id="contact-message"
                                    label="Your message"
                                    onChange={this.handleChange}
                                />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <MDBBtn data-internal="form submit" outline size="md" type="submit" className="btn-block z-depth-2 evro-navy-btn">
                        Send
					</MDBBtn>
                </form>
            </div>
        );
    }
}

export default ContactForm;
