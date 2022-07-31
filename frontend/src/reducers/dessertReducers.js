import {
  DESSERT_LIST_REQUEST,
  DESSERT_LIST_SUCCESS,
  DESSERT_LIST_FAIL,
  DESSERT_DETAILS_SUCCESS,
  DESSERT_DETAILS_REQUEST,
  DESSERT_DETAILS_FAIL,
  DESSERT_DELETE_REQUEST,
  DESSERT_DELETE_SUCCESS,
  DESSERT_DELETE_FAIL,
  DESSERT_CREATE_REQUEST,
  DESSERT_CREATE_SUCCESS,
  DESSERT_CREATE_FAIL,
  DESSERT_CREATE_RESET,
  DESSERT_UPDATE_REQUEST,
  DESSERT_UPDATE_SUCCESS,
  DESSERT_UPDATE_FAIL,
  DESSERT_UPDATE_RESET,
} from "../constants/dessertConstants";

export const dessertListReducer = (state = { desserts: [] }, action) => {
  switch (action.type) {
    case DESSERT_LIST_REQUEST:
      return { loading: true, desserts: [] };
    case DESSERT_LIST_SUCCESS:
      return { loading: false, desserts: action.payload };
    case DESSERT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const dessertDetailsReducer = (
  state = { dessert: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case DESSERT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case DESSERT_DETAILS_SUCCESS:
      return { loading: false, dessert: action.payload };
    case DESSERT_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const dessertDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case DESSERT_DELETE_REQUEST:
      return { loading: true };
    case DESSERT_DELETE_SUCCESS:
      return { loading: false, success: true };
    case DESSERT_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const dessertCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case DESSERT_CREATE_REQUEST:
      return { loading: true };
    case DESSERT_CREATE_SUCCESS:
      return { loading: false, success: true, dessert: action.payload };
    case DESSERT_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case DESSERT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const dessertUpdateReducer = (state = { dessert: {} }, action) => {
  switch (action.type) {
    case DESSERT_UPDATE_REQUEST:
      return { loading: true };
    case DESSERT_UPDATE_SUCCESS:
      return { loading: false, success: true, dessert: action.payload };
    case DESSERT_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case DESSERT_UPDATE_RESET:
      return { dessert: {} };
    default:
      return state;
  }
};
