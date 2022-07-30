import React, {  useState } from "react";
import { Row, Col, Container } from "react-bootstrap";



function HomeScreen() {

  return (
    <Container>
      <Row>
        <Col className="bg-primary p-0">
          <h1 className="text-center">Welcome to Risen Bakery!</h1>
        </Col>
        <Col className="bg-secondary p-0">
          <h4 className="text-end p-">Welcome to Risen Bakery!</h4>
        </Col>
      </Row>
      <Row className="p-4">
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
