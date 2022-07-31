import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listDesserts } from "../actions/dessertActions";
import { DESSERT_CREATE_RESET } from "../constants/dessertConstants";

const DessertListScreen = () => {
  const dispatch = useDispatch();
  const dessertList = useSelector((state) => state.dessertList);
  const { loading, error, desserts } = dessertList;

  useEffect(() => {
    dispatch(listDesserts());
  }, [dispatch]);
  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Menu</h1>
        </Col>
      </Row>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">error</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {desserts.map((dessert) => (
              <tr key={dessert._id}>
                <td>{dessert.name}</td>
                <td>${dessert.price}</td>
                <td>{dessert.category}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default DessertListScreen;
