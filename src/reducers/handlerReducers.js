import { HANDLER_LOGIN_FAIL, HANDLER_LOGIN_REQUEST, HANDLER_LOGIN_SUCCESS, HANDLER_LOGOUT, HANDLER_REGISTER_FAIL, HANDLER_REGISTER_REQUEST, HANDLER_REGISTER_SUCCESS, HANDLER_UPDATE_FAIL, HANDLER_UPDATE_REQUEST, HANDLER_UPDATE_SUCCESS } from "../constants/handlerConstants";

export const handlerLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case HANDLER_LOGIN_REQUEST:
      return { loading: true };
    case HANDLER_LOGIN_SUCCESS:
      return { loading: false, handlerInfo: action.payload };
    case HANDLER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case HANDLER_LOGOUT:
      return {};
    default:
      return state;
  }
};

export const handlerRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case HANDLER_REGISTER_REQUEST:
      return { loading: true };
    case HANDLER_REGISTER_SUCCESS:
      return { loading: false, handlerInfo: action.payload };
    case HANDLER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const handlerUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case HANDLER_UPDATE_REQUEST:
      return { loading: true };
    case HANDLER_UPDATE_SUCCESS:
      return { loading: false, handlerInfo: action.payload, success: true };
    case HANDLER_UPDATE_FAIL:
      return { loading: false, error: action.payload, success: false };
    default:
      return state;
  }
};
