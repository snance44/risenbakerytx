import axios from "axios";

import {
  DESSERT_LIST_REQUEST,
  DESSERT_LIST_SUCCESS,
  DESSERT_LIST_FAIL,
  DESSERT_DETAILS_REQUEST,
  DESSERT_DETAILS_SUCCESS,
  DESSERT_DETAILS_FAIL,
  DESSERT_DELETE_REQUEST,
  DESSERT_DELETE_SUCCESS,
  DESSERT_DELETE_FAIL,
  DESSERT_CREATE_REQUEST,
  DESSERT_CREATE_SUCCESS,
  DESSERT_CREATE_FAIL,
  DESSERT_UPDATE_REQUEST,
  DESSERT_UPDATE_SUCCESS,
  DESSERT_UPDATE_FAIL,
  DESSERT_CAKE_SUCCESS,
  DESSERT_CAKE_REQUEST,
  DESSERT_CAKE_FAIL,
} from "../constants/dessertConstants";

export const listDesserts = () => async (dispatch) => {
  try {
    dispatch({ type: DESSERT_LIST_REQUEST });

    const { data } = await axios.get("/api/desserts");

    dispatch({ type: DESSERT_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DESSERT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listDessertDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: DESSERT_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/desserts/${id}`);

    dispatch({ type: DESSERT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DESSERT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteDessert = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DESSERT_DELETE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`/api/desserts/${id}`, config);

    dispatch({
      type: DESSERT_DELETE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DESSERT_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createDessert = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: DESSERT_CREATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(`/api/desserts`, {}, config);

    dispatch({
      type: DESSERT_CREATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DESSERT_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateDessert = (dessert) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DESSERT_UPDATE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.put(
      `/api/desserts/${dessert._id}`,
      dessert,
      config
    );

    dispatch({
      type: DESSERT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DESSERT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listCakes = () => async (dispatch) => {
  try {
    dispatch({
      type: DESSERT_CAKE_REQUEST,
    });

    const { data } = await axios.post(`/api/desserts/cakes`);

    dispatch({
      type: DESSERT_CAKE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DESSERT_CAKE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
