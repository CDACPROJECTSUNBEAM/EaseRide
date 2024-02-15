import { combineReducers } from "redux";
import { userSigninReducer, userSignupReducer } from "./userAuthReducer";
import { vehicleReducer } from "./vehicleReducer";
import { cityAddReducer, cityReducer } from "./cityReducer";
import { stateAddReducer, stateReducer } from "./stateReducer";
import { USER_SIGNOUT } from "../constants/authConstants";

const reducers = combineReducers({
    userSignup: userSignupReducer,
    userSignin: userSigninReducer,
    vehicle: vehicleReducer,
    cities: cityReducer,
    cityAdd: cityAddReducer,
    states: stateReducer,
    stateAdd: stateAddReducer,
})

const rootReducer = (state, action) => {
    if (action.type === USER_SIGNOUT) {
        return reducers(undefined, action);
    }
    return reducers(state, action);
};

export default rootReducer;