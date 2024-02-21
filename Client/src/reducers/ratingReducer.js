import { RATING_ADD_FAILURE, RATING_ADD_REQUEST, RATING_ADD_SUCCESS, RATING_GET_FAILURE, RATING_GET_REQUEST, RATING_GET_SUCCESS } from "../constants/ratingConstants";

export const ratingReducer = (state = {}, action) => {
    switch(action.type) {
        case RATING_ADD_REQUEST: 
            return {loading: true};
        case RATING_ADD_SUCCESS: 
            return {loading: false, response: action.payload};
        case RATING_ADD_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const getAvgRatingReducer = (state = {}, action) => {
    switch(action.type) {
        case RATING_GET_REQUEST: 
            return {loading: true};
        case RATING_GET_SUCCESS: 
            return {loading: false, response: action.payload};
        case RATING_GET_FAILURE: 
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}