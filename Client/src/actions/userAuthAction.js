import {
  USER_SIGNIN_FAILURE,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_SIGNUP_FAILURE,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
} from "../constants/authConstants";


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