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
import axios from "axios";

// Login
export const FLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: FRANCHISE_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/franchise/franchiseLogin",
      { email, password },
      config
    );

    dispatch({ type: FRANCHISE_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("fInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: FRANCHISE_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Logout
export const FLogout = () => async (dispatch) => {
  localStorage.removeItem("fInfo");
  dispatch({ type: FRANCHISE_LOGOUT });
};

// Register

export const FRegister =
  (name, email, password, frontCNIC, backCNIC, pic) => async (dispatch) => {
    try {
      dispatch({ type: FRANCHISE_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/franchise/franchiseRegister",
        { name, email, password, frontCNIC, backCNIC, pic },
        config
      );

      dispatch({ type: FRANCHISE_REGISTER_SUCCESS, payload: data });

      dispatch({ type: FRANCHISE_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("fInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: FRANCHISE_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// Update Profile
export const updateFProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: FRANCHISE_UPDATE_REQUEST });

    const {
      franchiseLogin: { fInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${fInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "/api/franchise/franchiseProfile",
      user,
      config
    );

    dispatch({ type: FRANCHISE_UPDATE_SUCCESS, payload: data });

    dispatch({ type: FRANCHISE_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("fInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: FRANCHISE_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
