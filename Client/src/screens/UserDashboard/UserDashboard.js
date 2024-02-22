import React from "react";
import "./UserDashboard.css";
import viewRidesImg from "../../images/viewRides.jpg"
import reqRideImg from "../../images/requestRide.jpg"
import RideRequest from "../../images/RideRequest.jpg"
import { Link } from "react-router-dom";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const data = useSelector(state => state.userSignin);
  let user = data.response;

  return (
    <>
      <UserNavbar user={user} link={"/user"} />

      <div className="container my-3 text-center user_dashboard">
        <h1 className="mb-5 mt-5">User Dashboard</h1>
        <div className="row">
          <div className="col-md-4">
            <Link to="/user/viewRides">
            <div class="card shadow p-1 user_card">
                <img src={viewRidesImg} alt="" />
                <h4 className="user_card_txt">View Available Rides</h4>
            </div>
            </Link>
          </div>
          <div className="col-md-4">
          <Link to="/user/bookings">
            <div class="card shadow p-1 user_card">
                <img src={reqRideImg} alt="" />
                <h4 className="mb-3 user_card_txt">View Past Bookings</h4>
            </div>
        </Link>
          </div>
          <div className="col-md-4">
          <Link to="/user/reqRide">
            <div class="card shadow p-1 user_card">
                <img src={RideRequest} alt="" className="mt-3" />
                <h4 className="user_card_txt">Request Ride</h4>
            </div>
        </Link>
          </div>
        </div>
      </div>

      <UserFooter />
    </>
  );
};

export default UserDashboard;
