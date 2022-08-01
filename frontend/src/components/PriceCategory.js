import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import Message from "./Message";
import { Card, Table, Row, Col, Container } from "react-bootstrap";

const PriceCategory = ({ dessertList }) => {
  return (
    <Row className="my-3">
      <Col className="col-6">
        <h5>{dessertList[0] && dessertList[0].category}</h5>
      </Col>
      
      {dessertList.map((dessert) => (
        <Row key={dessert._id}>
          <Col className="col-7">{dessert.name}</Col>
          <Col className="col-5">${dessert.price}</Col>
        </Row>
      ))}
    </Row>
  );
};

export default PriceCategory;
