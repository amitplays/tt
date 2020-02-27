import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Flip from "react-reveal/Flip";
import {
  ListGroupItem,
  Card,
  ListGroup,
  Jumbotron,
  Image,
  Button,
  Container,
  Row,
  Col
} from "react-bootstrap";
import HomeBanner from "./CommonComponents/HomeBanner";
import "./Components.css";

class HomePageBody extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth
    };
  }
  render() {
    return (
      <div className="mainBody">
        <HomeBanner> </HomeBanner>
        <Container>
          <h4> Why Choose us ? </h4>
          <br></br>
          <Row fluid>
            <Col sm className="row justify-content-center">
              <Flip top>
                <Card
                  bg="secondary"
                  text="white"
                  border="primary"
                  style={{ width: "15rem" }}
                >
                  <Card.Header>Quick Resolution</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Fast Response To Requests & Critical Response Time
                      Guaranteed.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Flip>
            </Col>
            <Col sm className="row justify-content-center">
              <Flip top>
                <Card
                  bg="dark"
                  text="white"
                  border="primary"
                  style={{ width: "15rem" }}
                >
                  <Card.Header>Committed to Quality</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      We will help you instal all your software and hardware
                      upgradations.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Flip>
            </Col>
            <Col sm className="row justify-content-center">
              <Flip top>
                <Card
                  bg="secondary"
                  text="white"
                  border="primary"
                  style={{ width: "15rem" }}
                >
                  <Card.Header>Low-cost Home Service</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Our In-Home service cost is more affordable than most
                      competitors !
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Flip>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <p>
          <Button variant="success">Contact Us</Button>
        </p>
        <br />
        <hr></hr>
        <Container fluid>
          <Image src={require("./tb.jpg")} fluid></Image>
        </Container>
      </div>
    );
  }
}
export default HomePageBody;
