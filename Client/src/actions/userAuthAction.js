import {
  DRIVER_DETAILS_FAILURE,
  DRIVER_DETAILS_REQUEST,
  DRIVER_DETAILS_SUCCESS,
  USER_SIGNIN_FAILURE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/authConstants";
import { RIDE_GET_FAILURE, RIDE_GET_REQUEST, RIDE_GET_SUCCESS } from "../constants/rideConstants";
import { VEHICLE_GET_FAILURE, VEHICLE_GET_REQUEST, VEHICLE_GET_SUCCESS } from "../constants/vehicleConstants";


export const signin = (userDetails, toast, navigate) => (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
  });

  fetch('http://localhost:8081/api/auth/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    })
    .then(response => response.json())
    .then(data => {
      if(data.status === 500 || data.role === "ROLE_ADMIN"){
        dispatch({
          type: USER_SIGNIN_FAILURE,
          payload: "Invalid Credentials",
          authenticate: false,
        });
        toast.error("Invalid Credentials");
      }else{
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: data,
          authenticate: true,
        });
        toast.success("Login successful");
        if(data.role === "ROLE_USER"){
          navigate("/user");
        }else{
          navigate("/driver");
        }
      }
    })
    .catch(error => {
      dispatch({
        type: USER_SIGNIN_FAILURE,
        payload: "Invalid Credentials",
        authenticate: false,
      });
      toast.error("Invalid Credentials");
    });
};

export const signup = (userDetails, toast) => (dispatch) => {

  dispatch({
    type: USER_SIGNUP_REQUEST,
  });

  fetch('http://localhost:8081/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: USER_SIGNUP_SUCCESS,
        payload: data,
      });
      toast.success("Registration successful");
    })
    .catch(error => {
          dispatch({
        type: USER_SIGNUP_FAILURE,
        payload: "Registration error!!",
      });
      toast.error("Registration error");
    });
};

export const updateProfileDetails = (userDetails, toast) => (dispatch) => {

  dispatch({
    type: USER_SIGNIN_REQUEST,
  });

  fetch(`http://localhost:8081/api/auth/updateProfile/${userDetails.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: USER_SIGNIN_SUCCESS,
        payload: data,
      });
      toast.success("Profile update successful");
    })
    .catch(error => {
          dispatch({
        type: USER_SIGNIN_FAILURE,
        payload: "Profile updation error!!",
      });
      toast.error("Profile updation error");
    });
};

export const logout = (toast, navigate) => (dispatch) => {
        dispatch({
          type: USER_SIGNOUT,
        });
        toast.error("Logged Out Successfully");
        navigate("/");
};

export const getUser = (id) => (dispatch) => {
  dispatch({
    type: USER_SIGNIN_REQUEST,
  });

  fetch(`http://localhost:8081/api/auth/get/user/${id}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        dispatch({
          type: USER_SIGNIN_SUCCESS,
          payload: data,
          authenticate: true,
        });
    })
    .catch(error => {
      dispatch({
        type: USER_SIGNIN_FAILURE,
        payload: "Error in loading cities",
        authenticate: false,
      });
    });
};

export const getAvailableRides = () => (dispatch) => {
  dispatch({
    type: RIDE_GET_REQUEST,
  });

  fetch('http://localhost:8081/api/users/availableRides', {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        dispatch({
          type: RIDE_GET_SUCCESS,
          payload: data,
        });
    })
    .catch(error => {
      dispatch({
        type: RIDE_GET_FAILURE,
        payload: "Error in loading rides",
      });
    });
};

export const searchRides = (searchDetails) => (dispatch) => {

  dispatch({
    type: RIDE_GET_REQUEST,
  });

  fetch('http://localhost:8081/api/users/getRidesByCity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchDetails),
    })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: RIDE_GET_SUCCESS,
        payload: data,
      });
    })
    .catch(error => {
          dispatch({
        type: RIDE_GET_FAILURE,
        payload: "Rides fetching error!!",
      });
    });
};

export const getDriverDetails = (driverId) => (dispatch) => {
  dispatch({
    type: DRIVER_DETAILS_REQUEST,
  });

  fetch(`http://localhost:8081/api/drivers/driver/${driverId}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
        dispatch({
          type: DRIVER_DETAILS_SUCCESS,
          payload: data,
        });
    })
    .catch(error => {
      dispatch({
        type: DRIVER_DETAILS_FAILURE,
        payload: "Error in loading driver details",
      });
    });
};

export const getVehicleDetails = (driverId, vehicleId) => (dispatch) => {
  dispatch({
    type: VEHICLE_GET_REQUEST,
  });

  fetch(`http://localhost:8081/api/users/vehicleDetails/${driverId}/${vehicleId}`, {
      method: 'GET',
    })
    .then(response => response.json())
    .then(data => {
      
        dispatch({
          type: VEHICLE_GET_SUCCESS,
          payload: data,
        });
      
    })
    .catch(error => {
      dispatch({
        type: VEHICLE_GET_FAILURE,
        payload: "Vehicle fetching failure",
      });
    });
};