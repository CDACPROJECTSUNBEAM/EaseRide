import React, { useEffect } from "react";
import "./PublishRide.css";
import DriverNavbar from "../../components/DriverNavbar/DriverNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import publishRide from "../../images/publishRide.jpg";
import {useDispatch, useSelector} from "react-redux";
import { getAllCities } from "../../actions/adminAuthAction";
import UserNavbar from "../../components/UserNavbar/UserNavbar";

const PublishRide = () => {
  const dispatch = useDispatch();

  const data = useSelector(state => state.cities);
  let cities = data.response;

  const userData = useSelector(state => state.userSignin);
  let user = userData.response;

  console.log(cities);

  useEffect(() => {
    dispatch(getAllCities());
  }, [])

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

            <form className="mt-5">
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
                    >
                      {
                        cities && cities.map((c) => (
                          <option value={c.city}>{c.city}</option>
                        ))
                      }
                      
                      
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
                    >
                      {
                        cities && cities.map((c) => (
                          <option value={c.city}>{c.city}</option>
                        ))
                      }
                    </select>
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Date of Journey:</p>
                </div>
                <div className="col-md-8">
                <input type="date" className="form-control" style={{ display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }} placeholder="Model Name" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">End of Journey:</p>
                </div>
                <div className="col-md-8">
                <input type="date" className="form-control" style={{ display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }} placeholder="Model Name" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Departure Time:</p>
                </div>
                <div className="col-md-8">
                <input className="form-control" style={{ display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }} type="time" placeholder="RC Number" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Reaching Time:</p>
                </div>
                <div className="col-md-8">
                <input className="form-control" style={{ display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }} type="time" placeholder="RC Number" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Select Car:</p>
                </div>
                <div className="col-md-8">
                <div className="dropdown" style={{ width:"100%" ,display: "inline-block", position: "relative",}}>

                                    <select name="city-names" className="form-control" id="city-names" style={{ width: "100%", height: "100%" }}>
                                        <option value="Ertiga">Ertiga</option>
                                        <option value="Innova">Innova</option>
                                        <option value="Maruti Swift">Maruti Swift</option>
                                        <option value="Hyundai i20">Hyundai i20</option>
                                        <option value="Wagnar">Wagnar</option>
                                        <option value="Baleno">Baleno</option>
                                        <option value="BMW">BMW</option>
                                        <option value="i10">i10</option>
                                        <option value="Zest">Zest</option>
                                        <option value="Honda city">Honda city</option>
                                    </select>
                                </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Available Seats:</p>
                </div>
                <div className="col-md-8">
                <input className="form-control" style={{ display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }} type="number" placeholder="0" />
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-4">
                  <p className="publish_ride_labels">Price:</p>
                </div>
                <div className="col-md-8">
                <input className="form-control" style={{ display: "inline-block", position: "relative", boxShadow: "0px 8px 16px 0px rgba(0,0,0,0.2)" }} type="number" placeholder="Rs. 0.00" />
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
            <img src={publishRide} className="publish_ride_img" />
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
