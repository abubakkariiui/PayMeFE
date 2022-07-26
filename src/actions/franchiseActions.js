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
export const loginFranchise = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: FRANCHISE_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/franchise/flogin",
      { email, password },
      config
    );

    dispatch({ type: FRANCHISE_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("testInfo", JSON.stringify(data));
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
export const logoutFranchise = () => async (dispatch) => {
  localStorage.removeItem("testInfo");
  dispatch({ type: FRANCHISE_LOGOUT });
};

// Register

export const registerFranchise =
  (name, email, password, pic) => async (dispatch) => {
    try {
      dispatch({ type: FRANCHISE_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/franchise",
        { name, email, password, pic },
        config
      );

      dispatch({ type: FRANCHISE_REGISTER_SUCCESS, payload: data });

      dispatch({ type: FRANCHISE_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("testInfo", JSON.stringify(data));
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
export const updateFranchiseProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: FRANCHISE_UPDATE_REQUEST });

    const {
      userLogin: { testInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${testInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/franchise/fprofile", user, config);

    dispatch({ type: FRANCHISE_UPDATE_SUCCESS, payload: data });

    dispatch({ type: FRANCHISE_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("testInfo", JSON.stringify(data));
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
