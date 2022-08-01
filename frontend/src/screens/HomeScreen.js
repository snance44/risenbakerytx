import React from "react";
import { Row, Col, Container } from "react-bootstrap";



function HomeScreen() {

  return (
    <Container>
      <Row>
        <Col className="text-center my-4">
          <h2>Welcome to Risen Bakery in New Braunfels, Texas!</h2>
        </Col>
      </Row>
      <Row className="m-4">
        <Col>
          <img
            className="d-block w-100"
            src="../images/erin-pastelcake75.jpg"
            alt="First slide"
          />
        </Col>
        <Col>
          <img
            className="d-block w-100"
            src="../images/erin-plates75.jpg"
            alt="First slide"
          />
        </Col>
        <Col>
          <img
            className="d-block w-100"
            alt="First slide"
            src="../images/erin-festcake75.jpg"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default HomeScreen;
