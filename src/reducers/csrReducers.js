import {
  CSR_LOGIN_FAIL,
  CSR_LOGIN_REQUEST,
  CSR_LOGIN_SUCCESS,
  CSR_LOGOUT,
  CSR_REGISTER_FAIL,
  CSR_REGISTER_REQUEST,
  CSR_REGISTER_SUCCESS,
  CSR_UPDATE_FAIL,
  CSR_UPDATE_REQUEST,
  CSR_UPDATE_SUCCESS,
} from "../constants/csrConstants.js";

export const csrLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case CSR_LOGIN_REQUEST:
      return { loading: true };
    case CSR_LOGIN_SUCCESS:
      return { loading: false, csrInfo: action.payload };
    case CSR_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case CSR_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const csrRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case CSR_REGISTER_REQUEST:
      return { loading: true };
    case CSR_REGISTER_SUCCESS:
      return { loading: false, csrInfo: action.payload };
    case CSR_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const csrUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case CSR_UPDATE_REQUEST:
      return { loading: true };
    case CSR_UPDATE_SUCCESS:
      return { loading: false, csrInfo: action.payload, success: true };
    case CSR_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
