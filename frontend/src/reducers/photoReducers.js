import {
  PHOTO_LIST_REQUEST,
  PHOTO_LIST_SUCCESS,
  PHOTO_LIST_FAIL,
  PHOTO_DETAILS_SUCCESS,
  PHOTO_DETAILS_REQUEST,
  PHOTO_DETAILS_FAIL,
  PHOTO_DELETE_REQUEST,
  PHOTO_DELETE_SUCCESS,
  PHOTO_DELETE_FAIL,
  PHOTO_CREATE_REQUEST,
  PHOTO_CREATE_SUCCESS,
  PHOTO_CREATE_FAIL,
  PHOTO_CREATE_RESET,
  PHOTO_UPDATE_REQUEST,
  PHOTO_UPDATE_SUCCESS,
  PHOTO_UPDATE_FAIL,
  PHOTO_UPDATE_RESET,
} from "../constants/photoConstants";

export const photoListReducer = (state = { photos: [] }, action) => {
  switch (action.type) {
    case PHOTO_LIST_REQUEST:
      return { loading: true, photos: [] };
    case PHOTO_LIST_SUCCESS:
      return { loading: false, photos: action.payload };
    case PHOTO_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const photoDetailsReducer = (
  state = { photo: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PHOTO_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PHOTO_DETAILS_SUCCESS:
      return { loading: false, photo: action.payload };
    case PHOTO_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const photoDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PHOTO_DELETE_REQUEST:
      return { loading: true };
    case PHOTO_DELETE_SUCCESS:
      return { loading: false, success: true };
    case PHOTO_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const photoCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PHOTO_CREATE_REQUEST:
      return { loading: true };
    case PHOTO_CREATE_SUCCESS:
      return { loading: false, success: true, photo: action.payload };
    case PHOTO_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case PHOTO_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const photoUpdateReducer = (state = { photo: {} }, action) => {
  switch (action.type) {
    case PHOTO_UPDATE_REQUEST:
      return { loading: true };
    case PHOTO_UPDATE_SUCCESS:
      return { loading: false, success: true, photo: action.payload };
    case PHOTO_UPDATE_FAIL:
      return { loading: false, error: action.payload };
    case PHOTO_UPDATE_RESET:
      return { photo: {} };
    default:
      return state;
  }
};
