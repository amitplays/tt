import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.css'
import Fade  from "react-reveal/Fade";
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
        <i class="fa fa-shield-alt"/>
          <h4> Why Choose us ?  </h4>
          <br></br>
          <Row fluid>
            <Col sm className="row justify-content-center">
              <Fade bottom>
                <Card
                  bg="dark"
                  border="dark"
                  text="black"
                  style={{ width: "15rem" }}
                >
                  <Card.Header> Quick Resolution</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Secure all your home devices.
                      <i class="fa fa-shield-alt"/>
                    </Card.Text>
                  {/*<Card.Img variant="bottom"  src={require("./safe.svg")} />*/}
                  <Button className="bannerBtn" style={{float:"right", margin:"20px"}} variant="secondary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
            <Col sm className="row justify-content-center">
              <Fade bottom>
                <Card
                  bg="dark"
                  text="white"
                  border="dark"
                  style={{ width: "15rem" }}
                >
                  <Card.Header>Committed to Quality</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      We will help you instal all your software and hardware
                      upgradations.
                    </Card.Text>
                    <Button className="bannerBtn" style={{float:"right", margin:"20px"}} variant="secondary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
            <Col sm className="row justify-content-center">
              <Fade bottom>
                <Card
                  bg="dark"
                  text="white"
                  border="dark"
                  style={{ width: "15rem" }}
                >
                  <Card.Header>Low-cost Home Service</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Our In-Home service cost is more affordable than most
                      competitors !
                    </Card.Text>
                    <Button className="bannerBtn" style={{float:"right", margin:"20px"}} variant="secondary">Learn More</Button>
                  </Card.Body>
                </Card>
              </Fade>
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
          <div className="HomepageBodyImageDiv">
          <Image src={require("./headerIllustration.png")} fluid/>
          <Button className="bannerBtn" style={{float:"right", margin:"20px"}} variant="outline-light">Learn More</Button>
          </div>
        </Container>
      </div>
    );
  }
}
export default HomePageBody;
