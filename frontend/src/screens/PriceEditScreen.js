import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../components/Message";
import Loader from "../components/Loader";
import FormContainer from "../components/FormContainer";
import { listDessertDetails, updateDessert } from "../actions/dessertActions";
import { DESSERT_UPDATE_RESET } from "../constants/dessertConstants";

const PriceEditScreen = () => {
  const navigate = useNavigate();

  const params = useParams();
  const dessertId = params.id;
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");


  const dispatch = useDispatch();

  const dessertDetails = useSelector((state) => state.dessertDetails);
  const { loading, error, dessert } = dessertDetails;

  const dessertUpdate = useSelector((state) => state.dessertUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = dessertUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: DESSERT_UPDATE_RESET });
      navigate("/admin/pricelist");
    } else {
      if (dessert.name || dessert._id !== dessertId) {
        dispatch(listDessertDetails(dessertId));
      } else {
        setName(dessert.name);
        setPrice(dessert.price);
        setCategory(dessert.category);
        setDescription(dessert.description);
      }
    }
  }, [dispatch, navigate, dessertId, dessert, successUpdate]);

  

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateDessert({
        _id: dessertId,
        name,
        price,
        category,
        description,
      })
    );
  };

  return (
    <>
      <Link to="/admin/pricelist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit Food Items</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name" className="my-3">
              <Form.Label>Food name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price" className="my-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="category" className="my-3">
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Pick a category</option>
                <option value="cakes">Cakes</option>
                <option value="cupcakes">Cupcakes</option>
                <option value="breads">Breads</option>
                <option value="cookies">Cookies</option>
                <option value="parfaits">Parfaits</option>
                <option value="jams">Jams</option>
                <option value="other">Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group controlId="description" className="my-3">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary" className="my-3">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default PriceEditScreen;
