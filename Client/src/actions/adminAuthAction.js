import {
  USER_SIGNIN_FAILURE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/authConstants";

import {CITY_ADD_FAILURE, CITY_ADD_REQUEST, CITY_ADD_SUCCESS, CITY_GET_FAILURE, CITY_GET_REQUEST, CITY_GET_SUCCESS} from "../constants/cityConstants"
import { STATE_ADD_FAILURE, STATE_ADD_REQUEST, STATE_ADD_SUCCESS, STATE_GET_FAILURE, STATE_GET_REQUEST, STATE_GET_SUCCESS } from "../constants/stateConstants";

export const signin = (userDetails, toast, navigate) => (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
  });

  fetch("http://localhost:8081/api/auth/signin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 500 || data.role !== "ROLE_ADMIN") {
        dispatch({
          type: USER_SIGNIN_FAILURE,
          payload: "Invalid Credentials",
          authenticate: false,
        });
        toast.error("Invalid Credentials");
      } else {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: data,
          authenticate: true,
        });
        toast.success("Login successful");
        navigate("/admin/home");
      }
    })
    .catch((error) => {
      dispatch({
        type: USER_SIGNIN_FAILURE,
        payload: "Invalid Credentials",
        authenticate: false,
      });
      toast.error("Invalid Credentials");
    });
};

export const updateProfileDetails = (userDetails, toast) => (dispatch) => {
  dispatch({
    type: USER_SIGNUP_REQUEST,
  });

  fetch(`http://localhost:8081/api/auth/updateProfile/${userDetails.id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userDetails),
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: data,
      });
      toast.success("Profile update successful");
    })
    .catch((error) => {
      dispatch({
        type: USER_SIGNUP_FAILURE,
        payload: "Profile updation error!!",
      });
      toast.error("Profile updation error");
    });
};

export const getAllCities = () => (dispatch) => {
  dispatch({
    type: CITY_GET_REQUEST,
  });

  fetch('http://localhost:8081/api/admin/cities', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        dispatch({
          type: CITY_GET_SUCCESS,
          payload: data,
          authenticate: true,
        });
    })
    .catch(error => {
      dispatch({
        type: CITY_GET_FAILURE,
        payload: "Error in loading cities",
        authenticate: false,
      });
    });
};

export const getAllStates = () => (dispatch) => {
  dispatch({
    type: STATE_GET_REQUEST,
  });

  fetch('http://localhost:8081/api/states/', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        dispatch({
          type: STATE_GET_SUCCESS,
          payload: data,
          authenticate: true,
        });
    })
    .catch(error => {
      dispatch({
        type: STATE_GET_FAILURE,
        payload: "Error in loading states",
        authenticate: false,
      });
    });
};

export const addState = (stateDetails, toast) => (dispatch) => {

  dispatch({
    type: STATE_ADD_REQUEST,
  });

  fetch('http://localhost:8081/api/admin/add/state', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(stateDetails),
    })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: STATE_ADD_SUCCESS,
        payload: data,
      });
      toast.success("State addedd successful");
    })
    .catch(error => {
          dispatch({
        type: STATE_ADD_FAILURE,
        payload: "State addition error!!",
      });
      toast.error("State addition error");
    });
};

export const addCity = (cityDetails, toast) => (dispatch) => {

  dispatch({
    type: CITY_ADD_REQUEST,
  });

  fetch('http://localhost:8081/api/admin/add/city', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cityDetails),
    })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: CITY_ADD_SUCCESS,
        payload: data,
      });
      toast.success("City added successful");
    })
    .catch(error => {
          dispatch({
        type: CITY_ADD_FAILURE,
        payload: "City addition error!!",
      });
      toast.error("City addition error");
    });
};