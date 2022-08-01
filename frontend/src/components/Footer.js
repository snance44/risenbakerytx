import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="m-body">
      <Container className="pt-3">
        <Row className="mx-3 pt-3">
          <Col>
            <h6>
              Email: <a href={`mailto:erin@risenbakery.tx`}>erin@example.com</a>
            </h6>
          </Col>
        </Row>
        <Row className="mx-3">
          <Col>
            <h6>
              Phone Number: <a href={`tel:555-555-5555`}>555-555-5555</a>
            </h6>
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">Made by Sarah Nance</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
