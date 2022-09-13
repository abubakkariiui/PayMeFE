import {
  HANDLER_LOGIN_FAIL,
  HANDLER_LOGIN_REQUEST,
  HANDLER_LOGIN_SUCCESS,
  HANDLER_LOGOUT,
  HANDLER_REGISTER_FAIL,
  HANDLER_REGISTER_REQUEST,
  HANDLER_REGISTER_SUCCESS,
  HANDLER_UPDATE_FAIL,
  HANDLER_UPDATE_REQUEST,
  HANDLER_UPDATE_SUCCESS,
} from "../constants/handlerConstants";
import axios from "axios";

// Login
export const HandlerLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: HANDLER_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/handler/handlerLogin",
      { email, password },
      config
    );

    dispatch({ type: HANDLER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("handlerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: HANDLER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Logout
export const HandlerLogout = () => async (dispatch) => {
  localStorage.removeItem("handlerInfo");
  dispatch({ type: HANDLER_LOGOUT });
};

// Register

export const HandlerRegister =
  (name, email, password, frontCNIC, backCNIC, pic) => async (dispatch) => {
    try {
      dispatch({ type: HANDLER_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/handler/handlerRegister",
        { name, email, password, frontCNIC, backCNIC, pic },
        config
      );

      dispatch({ type: HANDLER_REGISTER_SUCCESS, payload: data });

      dispatch({ type: HANDLER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("handlerInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: HANDLER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// Update Profile
export const updateHandlerProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: HANDLER_UPDATE_REQUEST });

    const {
      handlerLogin: { handlerInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${handlerInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "/api/handler/handlerProfile",
      user,
      config
    );

    dispatch({ type: HANDLER_UPDATE_SUCCESS, payload: data });

    dispatch({ type: HANDLER_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("handlerInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: HANDLER_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
