import React, {  useState } from "react";
import { Row, Col, Container } from "react-bootstrap";



function HomeScreen() {

  return (
    <Container>
      <Row className="bg-primary">
        <Col className="bg-primary">
          <h1 className="text-center">Welcome to Risen Bakery!</h1>
        </Col>
        <Col>
          <Row>
            <Col className="bg-secondary m-0">
              <h4 className="text-end">Risen Bakery</h4>
            </Col>
          </Row>
          <Row>
            <Col className="bg-secondary m-0">
              <h6 className="text-end">
                <a
                  href={`mailto:erin@risenbakery.tx`}
                  style={{ color: "white" }}
                >
                  erin@risenbakery.tx
                </a>
              </h6>
            </Col>
          </Row>
          <Row>
            <Col className="bg-secondary m-0">
              <h6 className="text-end">
                <a href={`tel:555-555-5555`} style={{ color: "white" }}>
                  555-555-5555
                </a>
              </h6>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col></Col>
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
