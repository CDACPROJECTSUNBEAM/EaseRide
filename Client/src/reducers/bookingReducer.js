import { BOOKING_GET_FAILURE, BOOKING_GET_REQUEST, BOOKING_GET_SUCCESS } from "../constants/bookingConstants";

export const bookingReducer = (state = {}, action) => {
    switch(action.type) {
        case BOOKING_GET_REQUEST: 
            return {loading: true};
        case BOOKING_GET_SUCCESS: 
            return {loading: false, response: action.payload};
        case BOOKING_GET_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}