import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.css'
import Header from "./Header"
import Fade from "react-reveal/Fade";
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
        {/* <Header></Header> */}
        <HomeBanner>
        </HomeBanner>
        <Container>
          <i class="fa fa-shield-alt" />
          <h3> Why Choose us ?  </h3>
          <br></br>
          <br></br>
          <Row fluid>
            <Col sm className="row justify-content-center homeCard">
              <Fade bottom>
                <Card
                  bg="dark"
                  border="dark"
                  text="white"
                  style={{ width: "15rem" }}
                >
                  <Card.Header> Technical support </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Secure all your home devices.
                      <i class="fa fa-shield-alt" />
                    </Card.Text>
                    {/*<Card.Img variant="bottom"  src={require("./safe.svg")} />*/}
                    <Button className="bannerBtn" style={{ margin: "15px" }} variant="warning">Learn More</Button>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>

            <Col sm className="row justify-content-center homeCard">
              <Fade bottom>
                <Card
                  bg="dark"
                  text="white"
                  border="dark"
                  style={{ width: "15rem" }}
                >
                  <Card.Header>Secure your Tech</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      We will help you instal all your software and hardware
                      upgradations.
                    </Card.Text>
                    <Button className="bannerBtn" style={{ float: "right", margin: "15px" }} variant="light">Learn More</Button>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>

            <Col sm className="row justify-content-center homeCard">
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
                      Get the best help at the comfort of your home !
                    </Card.Text>
                    <Button className="bannerBtn" style={{ float: "right", margin: "15px" }} variant="warning">Learn More</Button>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
          </Row>
        </Container>
        <br></br>
        <br />
        <hr></hr>
        <Container fluid>
          <div className="HomepageBodyImageDiv">
            <Image src={require("./assets/bannertech.jpg")} fluid />
            <Button className="bannerBtn" style={{ float: "right", margin: "20px" }} variant="outline-light">Learn More</Button>
          </div>
        </Container>

        <Container border="dark">
          <i class="fa fa-shield-alt" />
          <h3> Why do you need a Data & Security Check  </h3>
          <br></br>
          <br></br>
          <Row fluid>
            <Col sm className="row justify-content-center homeCard">
              <Fade bottom>
                <Card
                  bg="dark"
                  border="dark"
                  text="white"
                  style={{ width: "15rem" }}
                >
                  <Card.Header> Technical support </Card.Header>
                  <Card.Body>
                    <Card.Text>
                      Secure all your home devices.
                      <i class="fa fa-shield-alt" />
                    </Card.Text>
                    {/*<Card.Img variant="bottom"  src={require("./safe.svg")} />*/}
                    <Button className="bannerBtn" style={{ margin: "15px" }} variant="danger">Learn More</Button>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>

            <Col sm className="row justify-content-center homeCard">
              <Fade bottom>
                <Card
                  bg="dark"
                  text="white"
                  border="dark"
                  style={{ width: "15rem" }}
                >
                  <Card.Header>Secure your Tech</Card.Header>
                  <Card.Body>
                    <Card.Text>
                      We will help you instal all your software and hardware
                      upgradations.
                    </Card.Text>
                    <Button className="bannerBtn" style={{ float: "right", margin: "15px" }} variant="light">Learn More</Button>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>

            <Col sm className="row justify-content-center homeCard">
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
                      Get the best help at the comfort of your home !
                    </Card.Text>
                    <Button className="bannerBtn" style={{ float: "right", margin: "15px" }} variant="danger">Learn More</Button>
                  </Card.Body>
                </Card>
              </Fade>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <hr></hr>
        <Container fluid>
          <div className="HomepageBodyImageDiv">
            <Image src={require("./headerIllustration.png")} fluid />
            <Button className="bannerBtn" style={{ float: "right", margin: "20px" }} variant="outline-light">Learn More</Button>
          </div>
        </Container>
      </div>
    );
  }
}
export default HomePageBody;
