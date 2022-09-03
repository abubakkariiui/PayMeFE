import axios from "axios";
import {
  AGENT_LOGIN_FAIL,
  AGENT_LOGIN_REQUEST,
  AGENT_LOGIN_SUCCESS,
  AGENT_LOGOUT,
  AGENT_REGISTER_FAIL,
  AGENT_REGISTER_REQUEST,
  AGENT_REGISTER_SUCCESS,
  AGENT_UPDATE_FAIL,
  AGENT_UPDATE_REQUEST,
  AGENT_UPDATE_SUCCESS,
} from "../constants/agentConstants";

// Login
export const loginAgent = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: AGENT_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/agent/loginAgent",
      { email, password },
      config
    );

    dispatch({ type: AGENT_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("agentInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: AGENT_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Logout
export const logoutAgent = () => async (dispatch) => {
  localStorage.removeItem("agentInfo");
  dispatch({ type: AGENT_LOGOUT });
};

// Register

export const registerAgent =
  (
    name,
    email,
    address,
    phone,
    pranchiseName,
    password,
    frontCNIC,
    backCNIC,
    city,
    postalCode,
    pic,
    cnic
  ) =>
  async (dispatch) => {
    try {
      dispatch({ type: AGENT_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/agent/agentRegister",
        {
          name,
          email,
          password,
          frontCNIC,
          backCNIC,
          pic,
          phone,
          pranchiseName,
          city,
          postalCode,
          address,
          cnic,
        },
        config
      );

      dispatch({ type: AGENT_REGISTER_SUCCESS, payload: data });

      dispatch({ type: AGENT_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("agentInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: AGENT_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// Update Profile
export const updateAgentProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: AGENT_UPDATE_REQUEST });

    const {
      agentLogin: { agentInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${agentInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/agent/agentProfile", user, config);

    dispatch({ type: AGENT_UPDATE_SUCCESS, payload: data });

    dispatch({ type: AGENT_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("agentInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: AGENT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
