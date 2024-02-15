import React from "react";
import "./DriverDashboard.css";
import publishRideImg from "../../images/publish_ride.jpg";
import searchRideImg from "../../images/search_ride.jpg";
import addVehicle from "../../images/addVehicle.jpg";
import { Link } from "react-router-dom";
import UserFooter from "../../components/UserFooter/UserFooter";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const data = useSelector(state => state.userSignin);
  let user = data.response;
  return (
    <>
      <UserNavbar user={user} link={"/driver"} />

      <div className="container my-3 text-center">
        <h1 className="mb-5 mt-5">Driver Dashboard</h1>
        <div className="row">
          <div className="col-md-4">
            <Link to="/driver/addVehicle">
              <div class="card shadow p-1 driver_card">
                <img src={addVehicle} alt="" />
                <h4 className="mb-3 driver_card_txt">
                  Add a Vehicle
                </h4>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/driver/publishRide">
              <div class="card shadow p-1 driver_card">
                <img
                  src={publishRideImg}
                  alt=""
                  style={{ width: "100%", marginLeft: "-2%" }}
                />
                <h4 className="driver_card_txt">Publish a Ride</h4>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/driver/searchRideRequest">
              <div class="card shadow p-1 driver_card">
                <img src={searchRideImg} alt="" />
                <h4 className="mb-3 driver_card_txt">
                  Search for a ride request
                </h4>
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
