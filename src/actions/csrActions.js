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
} from "../constants/csrConstants";
import axios from "axios";

// Login
export const CSRsLogin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: CSR_LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const { data } = await axios.post(
      "/api/csrr/csrLogin",
      { email, password },
      config
    );

    dispatch({ type: CSR_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("csrInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CSR_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

// Logout
export const CSRsLogout = () => async (dispatch) => {
  localStorage.removeItem("csrInfo");
  dispatch({ type: CSR_LOGOUT });
};

// Register

export const CSRsRegister =
  (name, email, password, frontCNIC, backCNIC, pic) => async (dispatch) => {
    try {
      dispatch({ type: CSR_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/csrr/csrRegister",
        { name, email, password, frontCNIC, backCNIC,pic },
        config
      );

      dispatch({ type: CSR_REGISTER_SUCCESS, payload: data });

      dispatch({ type: CSR_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("csrInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: CSR_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// Update Profile
export const updateCSRsProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({ type: CSR_UPDATE_REQUEST });

    const {
      csrLogin: { csrInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${csrInfo.token}`,
      },
    };

    const { data } = await axios.post("/api/csrr/csrProfile", user, config);

    dispatch({ type: CSR_UPDATE_SUCCESS, payload: data });

    dispatch({ type: CSR_LOGIN_SUCCESS, payload: data });

    localStorage.setItem("csrInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: CSR_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
