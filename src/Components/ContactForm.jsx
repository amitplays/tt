import React, { useState, useEffect } from "react";
import '../Components/Components.css'
import fireDb from "../firebase"
import ReactBootstrap, {
  Col,
  Badge,
  Button,
  Card,
  Jumbotron,
  Container,
  Form,
  Row,
  InputGroup
} from "react-bootstrap";
import LabelBottomNavigation from "./LabelBottomNavigation";
import Header from "./Header";
import { initializeApp } from "firebase";

const ContactForm = () => {

  const intialValues = {
    FullName: "",
    Mobile: "",
    Email: "",
    ServiceRequired: ""
  }

  var [values, setValues] = useState(intialValues);
  // defining anonymous function
  const handleInputChange = e => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
    console.log(value)
  }

  const handleFormSubmit = e => {
    e.preventDefault();

    fireDb.child('Contacts').push(
      values,
      err => {
        if (err)
          console.log(err)
      }
    )
  }
  var link = <a href={'FAQs'}>Agree to Terms & Conditions</a>;

  // Contact Us button Method
  return (
    <div className="ModalBody">
      <Header></Header>
      <Jumbotron className="JumbotronCustom" fluid>
        <h1>Contact us for a Free-Estimate !</h1>
        <p>
          All in-Store services will include a 30 day Customer Satisfaction
          Guarantee.
          </p>
      </Jumbotron>
      <hr></hr>
      <Container>
        {/* ------------------------ From Starts Here ---------------------------- */}

        <Container>
          <Row>
            <Col>
            </Col>
            <Col>
              <Card bg="dark" text="white">
                <Card.Header>
                  <Jumbotron className="JumbotronCustom" fluid>
                    <h5> Fill the form below and we will get in touch with you..</h5>
                  </Jumbotron>
                </Card.Header>
                <Card.Body>
                  <Form
                    noValidate
                    className="Form"
                    onSubmit={handleFormSubmit}
                  >
                    <Form.Row>
                      <Form.Group as={Col} md="6" controlId="validationCustom01">

                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="FullName"
                          onChange={handleInputChange}
                          placeholder="Full name"
                          value={values.FullName}
                        />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                      </Form.Group>
                      <Form.Group
                        as={Col}
                        md="6"
                        controlId="validationCustomUsername"
                      >
                        <Form.Label>Email Address</Form.Label>
                        <InputGroup>
                          <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">
                              @
                        </InputGroup.Text>
                          </InputGroup.Prepend>
                          <Form.Control
                            type="email"
                            placeholder="Email Id"
                            aria-describedby="inputGroupPrepend"
                            name="Email"
                            onChange={handleInputChange}
                            value={values.Email}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please enter the valid data.
                      </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} md="" controlId="validationCustom03">
                        <Form.Label>I need help with</Form.Label>
                        <Form.Control
                          as="select"
                          type="text"
                          name="ServiceRequired"
                          placeholder="Choose.."
                          value={values.ServiceRequired}

                          required
                        >
                          {" "}
                          <option>I want to get my Laptop/Desktop Repaired</option>
                          <option>I want to get my network devices secured</option>
                          <option>I want a privacy check on my device</option>
                          <option>I want to talk and discuss my issues</option>
                        </Form.Control>
                      </Form.Group>

                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} md="9" controlId="validationCustom05">
                        <Form.Label>Contact</Form.Label>
                        <Form.Control
                          min="1"
                          max="10"
                          type="number"
                          name="Mobile"
                          onChange={handleInputChange}
                          placeholder="Contact"
                          required
                          value={values.Mobile}

                        />
                        <Form.Control.Feedback type="invalid">
                          Please provide a valid Contact.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} md="9">
                        <Form.Check
                          required
                          label={link}
                          feedback="You must answer before submitting."
                        />
                      </Form.Group>
                    </Form.Row>
                    <Button variant="success" type="submit" value="Save">
                      Send
                </Button>{" "}<Badge variant="warning"> You should be 18 or above to ask for a service at home</Badge>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <br></br>
      </Container>
      <LabelBottomNavigation></LabelBottomNavigation>
    </div>
  );
}

export default ContactForm;
