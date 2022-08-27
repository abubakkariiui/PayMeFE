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
} from "../constants/accountantConstants";
import axios from "axios";

// Login
export const AccountantsLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: ACCOUNTANT_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/accountant/accountantLogin",
      { email, password },
      config
    );

    dispatch({ type: ACCOUNTANT_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("accountantInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ACCOUNTANT_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Logout
export const AccountantsLogout = () => async (dispatch) => {
  localStorage.removeItem("accountantInfo");
  dispatch({ type: ACCOUNTANT_LOGOUT });
};

// Register

export const AccountantsRegister =
  (name, email, password, frontCNIC, backCNIC, pic) => async (dispatch) => {
    try {
      dispatch({ type: ACCOUNTANT_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/accountant/accountantRegister",
        { name, email, password, frontCNIC, backCNIC, pic },
        config
      );

      dispatch({ type: ACCOUNTANT_REGISTER_SUCCESS, payload: data });

      dispatch({ type: ACCOUNTANT_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("accountantInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: ACCOUNTANT_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// Update Profile
export const updateAccountantsProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: ACCOUNTANT_UPDATE_REQUEST });

    const {
      accountantLogin: { accountantInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accountantInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "/api/accountant/accountantProfile",
      user,
      config
    );

    dispatch({ type: ACCOUNTANT_UPDATE_SUCCESS, payload: data });

    dispatch({ type: ACCOUNTANT_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("accountantInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: ACCOUNTANT_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
