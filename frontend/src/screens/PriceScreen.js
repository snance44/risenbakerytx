import React, { useEffect } from "react";
import { Table, Button, Row, Col, Card, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import PriceCategory from "../components/PriceCategory";
import { listDesserts } from "../actions/dessertActions";


const PriceScreen = () => {
  const dispatch = useDispatch();

  
  const dessertList = useSelector((state) => state.dessertList);
  
  const { loading, error } = dessertList;

  const cupcakesList = dessertList.desserts.filter((dessert) => {
    return dessert.category === "Cupcakes";
  });

  const cakesList = dessertList.desserts.filter((dessert) => {
    return dessert.category === "Cakes";
  });

  const cookiesList = dessertList.desserts.filter((dessert) => {
    return dessert.category === "Cookies";
  });

  const breadsList = dessertList.desserts.filter((dessert) => {
    return dessert.category === "Breads";
  });

  const parfaitsList = dessertList.desserts.filter((dessert) => {
    return dessert.category === "Parfaits";
  });

  const jamsList = dessertList.desserts.filter((dessert) => {
    return dessert.category === "Jams";
  });

  const otherList = dessertList.desserts.filter((dessert) => {
    return dessert.category === "Other";
  });

  

  
  

  useEffect(() => {
    dispatch(listDesserts());
  }, [dispatch]);
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={12} md={10}>
          <Row>
            <Col>
              <h1>Menu</h1>
            </Col>
          </Row>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">error</Message>
          ) :cupcakesList.length === 0 ? (
            <></>
          ) : (
            <PriceCategory dessertList={cupcakesList} />
          )}

          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">error</Message>
          ) : cakesList.length === 0 ? (
            <></>
          ) : (
            <PriceCategory dessertList={cakesList} />
          )}

          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">error</Message>
          ) : cookiesList.length === 0 ? (
            <></>
          ) : (
            <PriceCategory dessertList={cookiesList} />
          )}

          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">error</Message>
          ) : breadsList.length === 0 ? (
            <></>
          ) : (
            <PriceCategory dessertList={breadsList} />
          )}

          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">error</Message>
          ) : parfaitsList.length === 0 ? (
            <></>
          ) : (
            <PriceCategory dessertList={parfaitsList} />
          )}

          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">error</Message>
          ) : jamsList.length === 0 ? (
            <></>
          ) : (
            <PriceCategory dessertList={jamsList} />
          )}

          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">error</Message>
          ) : otherList.length === 0 ? (
            <></>
          ) : (
            <PriceCategory dessertList={otherList} />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default PriceScreen;
