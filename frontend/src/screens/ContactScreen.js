import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";


const ContactScreen = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");


  const submitHandler = (e) => {
    alert('This is not a real bakery yet. This form has not been submitted.')
  };

  return (
    <FormContainer>
      <h1>Contact</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name" className="my-3">
          <Form.Label>Name: </Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="email" className="my-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="number" className="my-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="text" className="my-3">
          <Form.Label>Describe your request: </Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            rows={6}
            placeholder="Type here"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="my-3">
          Submit
        </Button>
      </Form>
    </FormContainer>
  );
};




export default ContactScreen;
