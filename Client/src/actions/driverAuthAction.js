import {
    USER_SIGNIN_FAILURE,
    USER_SIGNIN_REQUEST,
    USER_SIGNIN_SUCCESS,
  } from "../constants/authConstants";
import { VEHICLE_ADD_FAILURE, VEHICLE_ADD_REQUEST, VEHICLE_ADD_SUCCESS } from "../constants/vehicleConstants";
    
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
        if(data.status === 500 || data.role !== "ROLE_DRIVER"){
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
          navigate("/driver");
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

  export const addVehicle = (vehicleDetails, id, toast) => (dispatch) => {
    dispatch({
      type: VEHICLE_ADD_REQUEST,
    });
  
    fetch(`http://localhost:8081/api/drivers/addVehicle/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(vehicleDetails),
      })
      .then(response => response.json())
      .then(data => {
        
          dispatch({
            type: VEHICLE_ADD_SUCCESS,
            payload: data,
          });
          toast.success("Vehicle added successful");
        
      })
      .catch(error => {
        dispatch({
          type: VEHICLE_ADD_FAILURE,
          payload: "Vehicle added failure",
        });
        toast.error("Vehicle added failure");
      });
  };