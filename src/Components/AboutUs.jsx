import React, { Component } from "react";
import Header from "./Header";
import "./Faq.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LabelBottomNavigation from "./LabelBottomNavigation";
import ReactBootstrap, {
  Jumbotron,
  Container,
  Card,
  ListGroup
} from "react-bootstrap";
class AboutUs extends Component {
  state = {};
  render() {
    return (
      <div className="faqBody">
        <Header />
        <br></br> <br></br>
        <Jumbotron fluid>
          <Container>
            <h1>About Toronto Techie</h1>
            <p>Here is a quick answer for your common queries.</p>
          </Container>
        </Jumbotron>
        <Card bg="dark" text="white">
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                Richard McClintock, a Latin scholar from Hampden-Sydney College,
                is credited with discovering the source behind the ubiquitous
                filler text. In seeing a sample of lorem ipsum, his interest was
                piqued by consectetur—a genuine, albeit rare, Latin word.
                Consulting a Latin dictionary led McClintock to a passage from
                De Finibus Bonorum et Malorum (“On the Extremes of Good and
                Evil”), a first-century B.C. text from the Roman philosopher
                Cicero. In particular, the garbled words of lorem ipsum bear an
                unmistakable resemblance to sections 1.10.32–33 of Cicero's
                work, with the most notable passage excerpted below:{" "}
              </p>
              <br></br>
              <ListGroup variant="dark">
                <ListGroup.Item variant="dark">Cras justo odio</ListGroup.Item>
                <ListGroup.Item variant="secondary">
                  Dapibus ac facilisis in
                </ListGroup.Item>
                <ListGroup.Item variant="dark"> Morbi leo risus</ListGroup.Item>
                <ListGroup.Item variant="secondary">
                  Porta ac consectetur ac
                </ListGroup.Item>
              </ListGroup>
              <br></br>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
        <br></br>
        <LabelBottomNavigation></LabelBottomNavigation>
      </div>
    );
  }
}

export default AboutUs;
