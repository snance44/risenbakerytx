import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { Table, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import {
  listDesserts,
  deleteDessert,
  createDessert,
} from "../actions/dessertActions";
import { DESSERT_CREATE_RESET } from "../constants/dessertConstants";

const PriceListScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const dessertList = useSelector((state) => state.dessertList);
  const { loading, error, desserts } = dessertList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const dessertDelete = useSelector((state) => state.dessertDelete);
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = dessertDelete;

  const dessertCreate = useSelector((state) => state.dessertCreate);
  const {
    loading: loadingCreate,
    error: errorCreate,
    success: successCreate,
    dessert: createdDessert,
  } = dessertCreate;

  useEffect(() => {
    dispatch({ type: DESSERT_CREATE_RESET });

    if (!userInfo.isAdmin) {
      navigate("/login");
    }
    if (successCreate) {
      navigate(`/admin/price/${createdDessert._id}/edit`);
    } else {
      dispatch(listDesserts());
    }
  }, [
    dispatch,
    navigate,
    userInfo,
    successDelete,
    successCreate,
    createdDessert,
  ]);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteDessert(id));
    }
  };
  const createDessertHandler = () => {
    dispatch(createDessert());
  };
  return (
    <>
      <Row className="align-items-center">
        <Col>
          <h1>Desserts</h1>
        </Col>
        <Col className="text-end">
          <Button className="my-3" onClick={createDessertHandler}>
            <i className="fas fa-plus"></i> Create Dessert
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {desserts.map((dessert) => (
              <tr key={dessert._id}>
                <td>{dessert._id}</td>
                <td>{dessert.name}</td>
                <td>${dessert.price}</td>
                <td>{dessert.category}</td>
                <td>
                  <LinkContainer to={`/admin/price/${dessert._id}/edit`}>
                    <Button variant="light" className="btn-sm">
                      <i className="fas fa-edit"></i>
                    </Button>
                  </LinkContainer>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(dessert._id)}
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

export default PriceListScreen;
