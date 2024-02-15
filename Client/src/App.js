import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen/DashboardScreen";
import AdminSigninScreen from "./screens/AdminSigninScreen/AdminSigninScreen";
import UserSignupScreen from "./screens/UserSignupScreen/UserSignupScreen";
import UserSigninScreen from "./screens/UserSigninScreen/UserSigninScreen";
import NotFoundScreen from "./screens/NotFoundScreen/NotFoundScreen";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import AdminScreen from "./screens/AdminScreen/AdminScreen";
import { useEffect } from "react";
import ViewRides from "./screens/ViewRides/ViewRides";
import ReqRide from "./screens/ReqRide/ReqRide";
import UserDashboard from "./screens/UserDashboard/UserDashboard";
import DriverDashboard from "./screens/DriverDashboard/DriverDashboard";
import SearchRideReq from "./screens/SearchRideReq/SearchRideReq";
import PublishRide from "./screens/PublishRide/PublishRide";
import AddVehicle from "./screens/AddVehicle/AddVehicle";
import ProfileScreen from "./screens/ProfileScreen/ProfileScreen";
import PastBookings from "./screens/PastBookings/PastBookings";
import StatesScreen from "./screens/StatesScreen/StatesScreen";
import CityScreen from "./screens/CityScreen/CityScreen";
import BookRide from "./screens/BookRide/BookRide";

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<DashboardScreen />} />
          <Route path="/admin" element={<AdminSigninScreen />} />
          <Route path="/admin/home" element={<AdminScreen />} />
          <Route path="/admin/states" element={<StatesScreen />} />
          <Route path="/admin/cities" element={<CityScreen />} />
          <Route path="/user/signup" element={<UserSignupScreen />} />
          <Route path="/user/signin" element={<UserSigninScreen />} />
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/user/viewRides" element={<ViewRides />} />
          <Route path="/user/bookRide/:driverId/:vehicleId/:rideId" element={<BookRide />} />
          <Route path="/user/reqRide" element={<ReqRide />} />
          <Route path="/user/bookings" element={<PastBookings />} />
          <Route path="/driver" element={<DriverDashboard />} />
          <Route path="/driver/addVehicle" element={<AddVehicle />} />
          <Route path="/driver/searchRideRequest" element={<SearchRideReq />} />
          <Route path="/driver/publishRide" element={<PublishRide />} />
          <Route path="/profile" element={<ProfileScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
        <ToastContainer theme="dark" />
      </Router>
    </>
  );
}

export default App;
