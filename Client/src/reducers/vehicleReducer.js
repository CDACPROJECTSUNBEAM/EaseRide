import { VEHICLE_ADD_FAILURE, VEHICLE_ADD_REQUEST, VEHICLE_ADD_SUCCESS, VEHICLE_GET_FAILURE, VEHICLE_GET_REQUEST, VEHICLE_GET_SUCCESS } from "../constants/vehicleConstants";

export const vehicleReducer = (state = {}, action) => {
    switch(action.type) {
        case VEHICLE_ADD_REQUEST: 
            return {loading: true};
        case VEHICLE_ADD_SUCCESS: 
            return {loading: false, response: action.payload};
        case VEHICLE_ADD_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const getVehicleReducer = (state = {}, action) => {
    switch(action.type) {
        case VEHICLE_GET_REQUEST: 
            return {loading: true};
        case VEHICLE_GET_SUCCESS: 
            return {loading: false, response: action.payload};
        case VEHICLE_GET_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}