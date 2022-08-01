import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { listPhotos } from "../actions/photoActions";

const PhotoScreen = () => {
  const dispatch = useDispatch();
  const photoList = useSelector((state) => state.photoList);
  const { loading, error, photos } = photoList;

  useEffect(() => {
    dispatch(listPhotos());
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
          {photos.map((photo) => (
            <Col key={photo._id} sm={12} md={6} lg={4} xl={3}>
              <Product photo={photo} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default PhotoScreen;
