import React, { useEffect, useState } from "react";
import "./PublishRide.css";
import DriverNavbar from "../../components/DriverNavbar/DriverNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import publishRide from "../../images/publishRide.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getAllCities } from "../../actions/adminAuthAction";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import { getVehicleByDriverId, publishRideApi } from "../../actions/driverAuthAction";
import { toast } from "react-toastify";

const PublishRide = () => {

  const [startCity, setStartCity] = useState("");
  const [endCity, setEndCity] = useState("");
  const [doj, setDoj] = useState("");
  const [eoj, setEoj] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [reachingTime, setReachingTime] = useState("");
  const [vehicleId, setVehicleId] = useState();
  const [price, setPrice] = useState();
  const [availableSeats, setAvailableSeats] = useState();

  const dispatch = useDispatch();

  const data = useSelector((state) => state.cities);
  let cities = data.response;

  const userData = useSelector((state) => state.userSignin);
  let user = userData.response;

  const vehicleData = useSelector((state) => state.driverVehicles);
  let vehicles = vehicleData.response;

  useEffect(() => {
    dispatch(getAllCities());
    dispatch(getVehicleByDriverId(user.id));
  }, []);

  const submitData = (e) => {
    e.preventDefault();

    let vehicleDetails = {
      startCity,
      endCity,
      doj,
      eoj,
      departureTime,
      reachingTime,
      vehicleId,
      price,
      availableSeats
    }

    console.log(vehicleDetails);

    dispatch(publishRideApi(vehicleDetails, user.id, vehicleId, toast));

    setStartCity("");
    setEndCity("");
    setDoj("");
    setEoj("");
    setDepartureTime("");
    setReachingTime("");
    setVehicleId("");
    setPrice(0);
    setAvailableSeats(0);
  }

  return (
    <>
      <UserNavbar user={user} link={"/driver"} />

      <div className="container">
        <div className="row">
          <div className="col-md-6 publish_ride_left">
            <center>
              <br></br>
              <h1 style={{ fontSize: "30px" }}>Publish Ride</h1>
            </center>

            <form className="mt-5" onSubmit={submitData}>
              <div className="row">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Start City:</p>
                </div>
                <div className="col-md-8">
                  <div
                    className="dropdown"
                    style={{
                      width: "100%",
                      display: "inline-block",
                      position: "relative",
                    }}
                  >
                    <select
                      name="city-names"
                      className="form-control"
                      id="city-names"
                      style={{ width: "100%", height: "100%" }}
                      onChange={(e) => setStartCity(e.target.value)}
                    >
                      <option value="">Select</option>
                      {cities &&
                        cities.map((c) => (
                          <option value={c.city}>{c.city}</option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Destination:</p>
                </div>
                <div className="col-md-8">
                  <div
                    className="dropdown"
                    style={{
                      width: "100%",
                      display: "inline-block",
                      position: "relative",
                    }}
                  >
                    <select
                      name="city-names"
                      className="form-control"
                      id="city-names"
                      style={{ width: "100%", height: "100%" }}
                      onChange={(e) => setEndCity(e.target.value)}
                    >
                      <option value="">Select</option>
                      {cities &&
                        cities.map((c) => (
                          <option value={c.city}>{c.city}</option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Date of Journey:</p>
                </div>
                <div className="col-md-8">
                  <input
                    type="date"
                    className="form-control"
                    style={{
                      display: "inline-block",
                      position: "relative",
                      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    }}
                    placeholder="Model Name"
                    name="doj"
                    value={doj}
                    onChange={(e) => setDoj(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">End of Journey:</p>
                </div>
                <div className="col-md-8">
                  <input
                    type="date"
                    className="form-control"
                    style={{
                      display: "inline-block",
                      position: "relative",
                      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    }}
                    placeholder="Model Name"
                    name="eoj"
                    value={eoj}
                    onChange={(e) => setEoj(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Departure Time:</p>
                </div>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    style={{
                      display: "inline-block",
                      position: "relative",
                      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    }}
                    type="time"
                    placeholder="RC Number"
                    name="departureTime"
                    value={departureTime}
                    onChange={(e) => setDepartureTime(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Reaching Time:</p>
                </div>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    style={{
                      display: "inline-block",
                      position: "relative",
                      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    }}
                    type="time"
                    placeholder="RC Number"
                    name="reachingTime"
                    value={reachingTime}
                    onChange={(e) => setReachingTime(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Select Car:</p>
                </div>
                <div className="col-md-8">
                  <div
                    className="dropdown"
                    style={{
                      width: "100%",
                      display: "inline-block",
                      position: "relative",
                    }}
                  >
                    <select
                      name="vehicleId"
                      className="form-control"
                      id="city-names"
                      style={{ width: "100%", height: "100%" }}
                      onChange={(e) => setVehicleId(e.target.value)}
                    >
                      <option value="">Select</option>
                      {vehicles &&
                        vehicles.map((c) => (
                          <option value={c.id}>{c.model}</option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Available Seats:</p>
                </div>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    style={{
                      display: "inline-block",
                      position: "relative",
                      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    }}
                    type="number"
                    placeholder="0"
                    name="availableSeats"
                    value={availableSeats}
                    onChange={(e) => setAvailableSeats(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Price:</p>
                </div>
                <div className="col-md-8">
                  <input
                    className="form-control"
                    style={{
                      display: "inline-block",
                      position: "relative",
                      boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)",
                    }}
                    type="number"
                    placeholder="Rs. 0.00"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </div>

              <div className="row mt-5">
                <div className="col-md-12">
                  <button
                    class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2 w-100"
                    type="submit"
                  >
                    Publish Ride
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <img src={publishRide} alt="" className="publish_ride_img" />
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>

      <UserFooter />
    </>
  );
};

export default PublishRide;
