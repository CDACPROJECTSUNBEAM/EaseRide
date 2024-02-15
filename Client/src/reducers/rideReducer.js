import { RIDE_ADD_FAILURE, RIDE_ADD_REQUEST, RIDE_ADD_SUCCESS, RIDE_GET_FAILURE, RIDE_GET_REQUEST, RIDE_GET_SUCCESS } from "../constants/rideConstants";


export const rideReducer = (state = {}, action) => {
    switch(action.type) {
        case RIDE_ADD_REQUEST: 
            return {loading: true};
        case RIDE_ADD_SUCCESS: 
            return {loading: false, response: action.payload};
        case RIDE_ADD_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const getRideReducer = (state = {}, action) => {
    switch(action.type) {
        case RIDE_GET_REQUEST: 
            return {loading: true};
        case RIDE_GET_SUCCESS: 
            return {loading: false, response: action.payload};
        case RIDE_GET_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}