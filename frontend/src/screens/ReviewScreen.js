import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listDesserts } from "../actions/dessertActions";

const ReviewScreen = () => {
  const dispatch = useDispatch();
  const dessertList = useSelector((state) => state.dessertList);
  const { loading, error, desserts } = dessertList;

  useEffect(() => {
    dispatch(listDesserts());
  }, [dispatch]);

  return (
    <>
      <h1>Welcome!</h1>
      {loading ? (
        <h2>
          <Loader />
        </h2>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {desserts.map((dessert) => (
            <Col key={dessert._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={dessert} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default ReviewScreen;
