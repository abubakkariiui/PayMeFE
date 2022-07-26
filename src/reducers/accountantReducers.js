import {
  ACCOUNTANT_LOGIN_FAIL,
  ACCOUNTANT_LOGIN_REQUEST,
  ACCOUNTANT_LOGIN_SUCCESS,
  ACCOUNTANT_LOGOUT,
  ACCOUNTANT_REGISTER_FAIL,
  ACCOUNTANT_REGISTER_REQUEST,
  ACCOUNTANT_REGISTER_SUCCESS,
  ACCOUNTANT_UPDATE_FAIL,
  ACCOUNTANT_UPDATE_REQUEST,
  ACCOUNTANT_UPDATE_SUCCESS,
} from "../constants/accountantConstants.js";

export const accountantLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case ACCOUNTANT_LOGIN_REQUEST:
      return { loading: true };
    case ACCOUNTANT_LOGIN_SUCCESS:
      return { loading: false, accountantInfo: action.payload };
    case ACCOUNTANT_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case ACCOUNTANT_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const accountantRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case ACCOUNTANT_REGISTER_REQUEST:
      return { loading: true };
    case ACCOUNTANT_REGISTER_SUCCESS:
      return { loading: false, accountantInfo: action.payload };
    case ACCOUNTANT_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const accountantUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case ACCOUNTANT_UPDATE_REQUEST:
      return { loading: true };
    case ACCOUNTANT_UPDATE_SUCCESS:
      return { loading: false, accountantInfo: action.payload, success: true };
    case ACCOUNTANT_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
