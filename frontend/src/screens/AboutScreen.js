import React from "react";
import { Container, Accordion, Row, Col, Card } from "react-bootstrap";

const AboutScreen = () => {
  return (
    <div>
      <Container>
        <Row className="my-4">
          <Col xs={12} md={8}>
            <h3>Frequently Asked Questions: </h3>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Will you bake items according to dietary restrictions?
                </Accordion.Header>
                <Accordion.Body>
                  Yes. We can make items for clients who have glutton-free, lactose-free, and other types of dietary restrictions. 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  How much time do you need to complete an order? 
                </Accordion.Header>
                <Accordion.Body>
                 We expect a 2 weeks notice miniumum. We may be able to rush orders for an extra fee, depending on current work load. 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>When must payment be made for bigger orders?</Accordion.Header>
                <Accordion.Body>
                  Half of the payment must be made upfront. The rest needs to be paid three days before order completion. 
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col xs={12} md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="../images/bakerplaceholder.jpg"
              ></Card.Img>
              <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                  My name is Erin and it's been my dream to open a
                  bakery. I never dreamed it would be so soon into life, but as
                  doors started opening, it seemed clear that I needed to pursue my dreams. 
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutScreen;
