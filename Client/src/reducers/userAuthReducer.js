import { DRIVER_DETAILS_FAILURE, DRIVER_DETAILS_REQUEST, DRIVER_DETAILS_SUCCESS, USER_SIGNIN_FAILURE, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT, USER_SIGNUP_FAILURE, USER_SIGNUP_REQUEST, USER_SIGNUP_SUCCESS } from "../constants/authConstants";

export const userSignupReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_SIGNUP_REQUEST: 
            return {loading: true};
        case USER_SIGNUP_SUCCESS: 
            return {loading: false, response: action.payload};
        case USER_SIGNUP_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const userSigninReducer = (state = {}, action) => {
    switch(action.type) {
        case USER_SIGNIN_REQUEST: 
            return {loading: true};
        case USER_SIGNIN_SUCCESS: 
            return {loading: false, response: action.payload, isUserAuthenticated: action.authenticate};
        case USER_SIGNIN_FAILURE: 
            return {loading: false, error: action.payload, isUserAuthenticated: action.authenticate};
        case USER_SIGNOUT:
                return {};
        default:
            return state;
    }
}

export const driverReducer = (state = {}, action) => {
    switch(action.type) {
        case DRIVER_DETAILS_REQUEST: 
            return {loading: true};
        case DRIVER_DETAILS_SUCCESS: 
            return {loading: false, response: action.payload};
        case DRIVER_DETAILS_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}