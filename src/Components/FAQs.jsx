import React, { Component } from "react";
import Header from "./Header";
import "./Faq.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LabelBottomNavigation from "./LabelBottomNavigation";
import ReactBootstrap, {
  Jumbotron,
  Container,
  Card,
  Accordion
} from "react-bootstrap";
class FAQs extends Component {
  state = {};
  render() {
    return (
      <div className="faqBody">
        <Header />
        <br></br> <br></br>
        <Jumbotron fluid>
          <Container>
            <h1>Frequently Asked Questions</h1>
            <p>Here is a quick answer for your common queries.</p>
          </Container>
        </Jumbotron>
        <Accordion defaultActiveKey="0">
          <Card bg="dark" text="white">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              1. Can You Tell Me How Many Billable Hours This Might Take to Fix?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                Having yet to take a look under the hood, no computer repair
                service can tell you with absolute certainty how many billable
                hours something might take. If all you need is a simple hardware
                replacement or software installation, you might be quoted a
                specific amount, but otherwise, you should expect a little
                flexibility on the answer here.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="secondary" text="white">
            <Accordion.Toggle as={Card.Header} eventKey="1">
              2. How Much Do You Charge per Hour?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                Rates vary, and so do charging schemes (some computer repair
                services are billed per service), but $50 to $75 USD per hour is
                average. Too much higher than that and you're likely getting
                ripped off. Too much lower and you're probably in for subpar
                service or a scheme where you're billed for a
                higher-than-average number of hours.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="dark" text="white">
            <Accordion.Toggle as={Card.Header} eventKey="2">
              3. Do You Have a Minimum Charge?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Most computer repair services will charge you 1 hour of labor
                for any time up to one hour spent working on your PC. This is
                sometimes called a minimum bench charge and is completely
                customary.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="secondary" text="white">
            <Accordion.Toggle as={Card.Header} eventKey="3">
              4. Should I Expect Any Charges Other Than the Hourly Rate?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                It is not common practice for a computer repair service to
                charge extra fees for their standard services. Obviously, if you
                require replacement hardware or a new piece of software, you
                should expect to pay for it but you should not expect any sort
                of hidden fees or surcharges.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="dark" text="white">
            <Accordion.Toggle as={Card.Header} eventKey="4">
              5. Do You Charge Extra for In-Home/Business Service?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                If you're quoted a rate twice as high for in-home/business
                computer repair service, don't get it. Take your computer to
                their shop or find another computer repair service. You should,
                however, expect to see some kind of small charge to visit you —
                perhaps a $10 to $20 USD single "trip" charge or a 10-20% hourly
                rate increase.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="secondary" text="white">
            <Accordion.Toggle as={Card.Header} eventKey="5">
              6. Do You Guarantee Your Service?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                Anything less than 30 days isn't a good deal. If a computer
                repair service offers more than a 90-day guarantee, be sure to
                read the fine print to see what sorts of problems it covers
                before you choose that particular service based on their stellar
                guarantee.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="dark" text="white">
            <Accordion.Toggle as={Card.Header} eventKey="6">
              7. Will You Save My Files?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                Your computer itself is really just a collection of
                mostly-replaceable parts. It's the term papers, photos of your
                dog, and the first steps video of your little girl that are
                really important.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card bg="secondary" text="white">
            <Accordion.Toggle as={Card.Header} eventKey="7">
              8. When Might I Be Able to Pick Up My Computer?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                Aside from all the questions about how much this is all going to
                cost, it's important to ask when you might be able to pick up
                your computer. If you're getting in-home or in business service,
                a related question would be "When might you be able to come out
                to my home/business?"
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <br></br>
        <LabelBottomNavigation></LabelBottomNavigation>
      </div>
    );
  }
}

export default FAQs;
