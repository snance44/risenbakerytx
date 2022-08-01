import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  listPhotos,
  deletePhoto,
  createPhoto,
} from "../actions/photoActions";
import { PHOTO_CREATE_RESET } from "../constants/photoConstants";

const PhotoListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const photoList = useSelector((state) => state.photoList);
  const { loading, error, photos } = photoList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const photoDelete = useSelector((state) => state.photoDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = photoDelete;

  const photoCreate = useSelector((state) => state.photoCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    photo: createdPhoto,
  } = photoCreate;

  useEffect(() => {
    dispatch({ type: PHOTO_CREATE_RESET });

    if (!userInfo.isAdmin) {
      navigate("/login");
    }
    if (successCreate) {
      navigate(`/admin/photo/${createdPhoto._id}/edit`);
    } else {
      dispatch(listPhotos());
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    createdPhoto,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deletePhoto(id));
    }
  };
  const createPhotoHandler = () => {
    dispatch(createPhoto());
  };
  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Photos</h1>
        </Col>
        <Col className="text-end">
          <Button className="my-3" onClick={createPhotoHandler}>
            <i className="fas fa-plus"></i> Create Photo
          </Button>
        </Col>
      </Row>
      {loadingDelete && <Loader />}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {loadingCreate && <Loader />}
      {errorCreate && <Message variant="danger">{errorCreate}</Message>}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">error</Message>
      ) : (
        <Table striped bordered hover responsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>Price</th>
              <th>Category</th>
              <th>Brand</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {photos.map((photo) => (
              <tr key={photo._id}>
                <td>{photo._id}</td>
                <td>{photo.name}</td>
                <td>${photo.price}</td>
                <td>{photo.category}</td>
                <td>{photo.brand}</td>
                <td>
                  <LinkContainer to={`/admin/photo/${photo._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(photo._id)}
                  >
                    <i className="fas fa-trash"></i>
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default PhotoListScreen;
