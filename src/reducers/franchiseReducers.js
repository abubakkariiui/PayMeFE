import {
  FRANCHISE_LOGIN_FAIL,
  FRANCHISE_LOGIN_REQUEST,
  FRANCHISE_LOGIN_SUCCESS,
  FRANCHISE_LOGOUT,
  FRANCHISE_REGISTER_FAIL,
  FRANCHISE_REGISTER_REQUEST,
  FRANCHISE_REGISTER_SUCCESS,
  FRANCHISE_UPDATE_FAIL,
  FRANCHISE_UPDATE_REQUEST,
  FRANCHISE_UPDATE_SUCCESS,
} from "../constants/franchiseConstants";

export const franchiseLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case FRANCHISE_LOGIN_REQUEST:
      return { loading: true };
    case FRANCHISE_LOGIN_SUCCESS:
      return { loading: false, fInfo: action.payload };
    case FRANCHISE_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case FRANCHISE_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const franchiseRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case FRANCHISE_REGISTER_REQUEST:
      return { loading: true };
    case FRANCHISE_REGISTER_SUCCESS:
      return { loading: false, fInfo: action.payload };
    case FRANCHISE_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const franchiseUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case FRANCHISE_UPDATE_REQUEST:
      return { loading: true };
    case FRANCHISE_UPDATE_SUCCESS:
      return { loading: false, fInfo: action.payload, success: true };
    case FRANCHISE_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
