import { CITY_ADD_FAILURE, CITY_ADD_REQUEST, CITY_ADD_SUCCESS, CITY_GET_FAILURE, CITY_GET_REQUEST, CITY_GET_SUCCESS } from "../constants/cityConstants";

export const cityReducer = (state = {}, action) => {
    switch(action.type) {
        case CITY_GET_REQUEST: 
            return {loading: true};
        case CITY_GET_SUCCESS: 
            return {loading: false, response: action.payload};
        case CITY_GET_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const cityAddReducer = (state = {}, action) => {
    switch(action.type) {
        case CITY_ADD_REQUEST: 
            return {loading: true};
        case CITY_ADD_SUCCESS: 
            return {loading: false, response: action.payload};
        case CITY_ADD_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}