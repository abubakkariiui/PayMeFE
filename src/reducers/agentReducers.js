import {
    AGENT_LOGIN_REQUEST,
    AGENT_LOGIN_SUCCESS,
    AGENT_LOGIN_FAIL,
    AGENT_LOGOUT,
    AGENT_REGISTER_REQUEST,
    AGENT_REGISTER_SUCCESS,
    AGENT_REGISTER_FAIL,
    AGENT_UPDATE_REQUEST,
    AGENT_UPDATE_SUCCESS,
    AGENT_UPDATE_FAIL
  } from "../constants/agentConstants";
  
  export const agentLoginReducer = (state = {}, action) => {
    switch (action.type) {
      case AGENT_LOGIN_REQUEST:
        return { loading: true };
      case AGENT_LOGIN_SUCCESS:
        return { loading: false, agentInfo: action.payload };
      case AGENT_LOGIN_FAIL:
        return { loading: false, error: action.payload };
      case AGENT_LOGOUT:
        return {};
      default:
        return state;
    }
  };
  
  export const agentRegisterReducer = (state = {}, action) => {
    switch (action.type) {
      case AGENT_REGISTER_REQUEST:
        return { loading: true };
      case AGENT_REGISTER_SUCCESS:
        return { loading: false, agentInfo: action.payload };
      case AGENT_REGISTER_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export const agentUpdateReducer = (state = {}, action) => {
    switch (action.type) {
      case AGENT_UPDATE_REQUEST:
        return { loading: true };
      case AGENT_UPDATE_SUCCESS:
        return { loading: false, agentInfo: action.payload, success: true };
      case AGENT_UPDATE_FAIL:
        return { loading: false, error: action.payload, success: false };
      default:
        return state;
    }
  };
  