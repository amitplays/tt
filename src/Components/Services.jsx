import React, { Component } from "react";
import Header from "./Header";
import "./Faq.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LabelBottomNavigation from "./LabelBottomNavigation";
import ReactBootstrap, {
	Jumbotron,
	Container,
	Tab,
	Tabs,
	Table,
	Card,
	Button,
	Badge
} from "react-bootstrap";
class FAQs extends Component {
	state = {};
	render() {
		return (
			<div className="serviceBody">
				<Header />
				<br></br> <br></br>
				<Jumbotron fluid>
					<Container>
						<h1>Our Services</h1>
						<p>
							All in-Home services include a 30 day Customer Satisfaction
							Guarantee.
						</p>
					</Container>
				</Jumbotron>
				<Tabs
					defaultActiveKey="home"
					transition={false}
					id="noanim-tab-example"
				>
					<Tab eventKey="home" title="In-Home Services">
                    <br></br>
						<Container fluid>
							<Table size="lg" variant="dark"  striped bordered hover responsive>
								<thead>
									<tr>
										<th>#</th>
										<th>Service</th>
										<th>Description</th>
										<th>Cost</th>
										<th>Valid Till</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>
											Computer Setup <Badge variant="secondary">New</Badge>
										</td>
										<td>Table cell</td>
										<td>
											$150 <Badge variant="secondary">Sale</Badge>
										</td>
										<td>Table cell</td>
									</tr>
									<tr>
										<td>2</td>
										<td>Table cell</td>
										<td>Table cell</td>
										<td>Table cell</td>
										<td>Table cell</td>
									</tr>
									<tr>
										<td>3</td>
										<td>Table cell</td>
										<td>Table cell</td>
										<td>Table cell</td>
										<td>Table cell</td>
									</tr>
									<tr>
										<td>4</td>
										<td>Table cell</td>
										<td>Table cell</td>
										<td>Table cell</td>
										<td>Table cell</td>
									</tr>
									<tr>
										<td>5</td>
										<td>Table cell</td>
										<td>Table cell</td>
										<td>Table cell</td>
										<td>Table cell</td>
									</tr>
									<tr>
										<td>6</td>
										<td>Table cell</td>
										<td>Table cell</td>
										<td>Table cell</td>
										<td>Table cell</td>
									</tr>
									<tr>
										<td>7</td>
										<td>Table cell</td>
										<td>Table cell</td>
										<td>Table cell</td>
										<td>Table cell</td>
									</tr>
									<tr>
										<td>8</td>
										<td>Table cell</td>
										<td>Table cell</td>
										<td>Table cell</td>
										<td>Table cell</td>
									</tr>
								</tbody>
							</Table>
						</Container>
					</Tab>
					<Tab eventKey="profile" title="In-Store">
						<br></br>
						<Card>
							<Card.Header as="h5">In-store Service Coming Soon</Card.Header>
							<Card.Body>
								<Card.Title>
									In-Store Services would have free Home Delivery for your
									repairs
								</Card.Title>
								<Card.Text>
									With supporting text below as a natural lead-in to additional
									content.
								</Card.Text>
								<Button href="/Services" variant="info">Try In-Home Service</Button>
							</Card.Body>
						</Card>
					</Tab>
				</Tabs>
				<LabelBottomNavigation></LabelBottomNavigation>
			</div>
		);
	}
}

export default FAQs;
