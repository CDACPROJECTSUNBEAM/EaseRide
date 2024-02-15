import { STATE_GET_FAILURE, STATE_GET_REQUEST, STATE_GET_SUCCESS } from "../constants/stateConstants";


export const stateReducer = (state = {}, action) => {
    switch(action.type) {
        case STATE_GET_REQUEST: 
            return {loading: true};
        case STATE_GET_SUCCESS: 
            return {loading: false, response: action.payload};
        case STATE_GET_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const stateAddReducer = (state = {}, action) => {
    switch(action.type) {
        case STATE_GET_REQUEST: 
            return {loading: true};
        case STATE_GET_SUCCESS: 
            return {loading: false, response: action.payload};
        case STATE_GET_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}