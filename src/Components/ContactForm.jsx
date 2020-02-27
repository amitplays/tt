import React from "react";
import ReactBootstrap, {
  Col,
  Row,
  Button,
  Card,
  Jumbotron,
  Container,
  Form,
  InputGroup
} from "react-bootstrap";
import LabelBottomNavigation from "./LabelBottomNavigation";
import Header from "./Header";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { validated: false };
  }
  // Contact Us button Method
  render() {
    const { validated } = this.state;
    return (
      <div className="ModalBody">
        <Header></Header>
        <Jumbotron fluid>
          <h1>Contact us for a Free-Estimate !</h1>
          <p>
            All in-Store services will include a 30 day Customer Satisfaction
            Guarantee.
          </p>
        </Jumbotron>
        {/*  this is the card for the social media components  */}
        <Card>
          <Card.Header as="h5">Social Media Queries</Card.Header>
          <Card.Body>
            <Card.Title>
              Get in touch with us for a quick quote using your social media
              accounts.
            </Card.Title>
            <Card.Text>Following are our social media handles. </Card.Text>
            <Container className="row justify-content-center" fluid>
              <Button
                style={{ margin: "5px" }}
                href="/Services"
                variant="success"
              >
                WhatsApp
              </Button>{" "}
              <Button
                style={{ margin: "5px" }}
                href="/Services"
                variant="danger"
              >
                Intagram
              </Button>{" "}
              <Button
                style={{ margin: "5px" }}
                href="/Services"
                variant="warning"
              >
                Snapchat
              </Button>{" "}
              <Button
                style={{ margin: "5px" }}
                href="/Services"
                variant="primary"
              >
                Facebook
              </Button>{" "}
              <Button
                style={{ margin: "5px" }}
                href="/Services"
                variant="secondary"
                href="tel:+900300400"
              >
                Call Us !
              </Button>{" "}
            </Container>
          </Card.Body>
        </Card>
        <hr></hr>

        <Container>
          {/* ------------------------ From Starts Here ---------------------------- */}
          <Card bg="dark" text="white">
            <Card.Header>
              Fill the form below and we will get in touch with you..
            </Card.Header>
            <Card.Body>
              <Form
                noValidate
                className="Form"
                validated={validated}
                onSubmit={e => this.handleSubmit(e)}
              >
                <Form.Row>
                  <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Full name"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="4" controlId="validationCustom02">
                    <Form.Label>Age</Form.Label>
                    <Form.Control required type="number" placeholder="Age" />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="4"
                    controlId="validationCustomUsername"
                  >
                    <Form.Label>Instagram Username</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroupPrepend">
                          @
                        </InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        type="email"
                        placeholder="or your Email"
                        aria-describedby="inputGroupPrepend"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter the valid data.
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6" controlId="validationCustom03">
                    <Form.Label>Things you are good with</Form.Label>
                    <Form.Control
                      as="select"
                      type="text"
                      placeholder="Choose.."
                      required
                    >
                      {" "}
                      <option>I am good with Numbers</option>
                      <option>I am good with Chess</option>
                      <option>I am good with X</option>
                      <option>I am good with Y</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom04">
                    <Form.Label>Profession</Form.Label>
                    <Form.Control
                      as="select"
                      type="text"
                      placeholder="Profession"
                      required
                    >
                      {" "}
                      <option>Student (Above 18)</option>
                      <option>Woking Professional</option>
                      <option>UnEmployed</option>
                      <option>Self-Employed</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group as={Col} md="3" controlId="validationCustom05">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                      min="1"
                      max="10"
                      type="number"
                      placeholder="Contact"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid Contact.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Form.Row>
                <Form.Row>
                  <Form.Group as={Col} md="6">
                    <Form.Check
                      required
                      label="Do you smoke Weed ? "
                      feedback="You must answer before submitting."
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="6">
                    <Form.Check
                      required
                      label="Do you drink Alcohol ? "
                      feedback="You must answer before submitting."
                    />
                  </Form.Group>
                  <Form.Group as={Col} md="12">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                    />
                  </Form.Group>
                </Form.Row>
                <Button variant="secondary" type="submit">
                  Send
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <br></br>
        </Container>
        <LabelBottomNavigation></LabelBottomNavigation>
      </div>
    );
  }
}

export default ContactForm;
