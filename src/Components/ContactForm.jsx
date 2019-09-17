import React from "react";
import ReactBootstrap, {
	Col,
	Row,
	Button,
	Image,
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
				<Row>
					<Col md="auto">
						<Image src={require("./contactus.png")} fluid></Image>
					</Col>
					<Col md="auto">
						<Container>
							{/* ------------------------ From Starts Here ---------------------------- */}
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
								<Button variant="success" type="submit">
									Apply Now !
								</Button>
							</Form>
							<br></br>
						</Container>
					</Col>
				</Row>
				<LabelBottomNavigation></LabelBottomNavigation>
			</div>
		);
	}
}

export default ContactForm;
