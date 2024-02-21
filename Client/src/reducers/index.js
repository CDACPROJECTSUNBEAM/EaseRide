import { combineReducers } from "redux";
import { driverReducer, userSigninReducer, userSignupReducer } from "./userAuthReducer";
import { getVehicleReducer, vehicleReducer } from "./vehicleReducer";
import { cityAddReducer, cityReducer } from "./cityReducer";
import { stateAddReducer, stateReducer } from "./stateReducer";
import { USER_SIGNOUT } from "../constants/authConstants";
import { getRideReducer, rideReducer } from "./rideReducer";
import { bookingReducer } from "./bookingReducer";
import { getAvgRatingReducer } from "./ratingReducer";

const reducers = combineReducers({
    userSignup: userSignupReducer,
    userSignin: userSigninReducer,
    vehicle: vehicleReducer,
    driverVehicles: getVehicleReducer,
    driver: driverReducer,
    cities: cityReducer,
    cityAdd: cityAddReducer,
    states: stateReducer,
    stateAdd: stateAddReducer,
    rides: rideReducer,
    availableRides: getRideReducer,
    bookings: bookingReducer,
    avgRating: getAvgRatingReducer,
})

const rootReducer = (state, action) => {
    if (action.type === USER_SIGNOUT) {
        return reducers(undefined, action);
    }
    return reducers(state, action);
};

export default rootReducer;