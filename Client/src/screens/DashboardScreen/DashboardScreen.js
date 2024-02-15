import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./DashboardScreen.css";
import car from "../../images/car.jpg";
import createRide from "../../images/create.svg";
import checked from "../../images/checked.svg";
import carRide from "../../images/riding-car.svg";
import dashboard2 from "../../images/dashboard2.svg";
import dashboard3 from "../../images/dashboard3.svg";
import { Link } from "react-router-dom";

const DashboardScreen = () => {
  return (
    <>
      <Header />

      <div class="container top_div">
        <div className="row">
          <div className="col-md-6">
            <img src={car} class="img-responsive dashboard_img" alt="Image" />
          </div>
          <div className="col-md-6 my-5 p-1 top_div_right">
            <h1 className="text-center">
              CAR SHARING <br /> SERVICES
            </h1>
            <br />
            <p className="text-center p-1">
              SwiftRide is a carpooling application that provides drivers{" "}
              <br /> with the ability to create ride offers and passengers to
              join <br /> available ride offers.
            </p>
            <div className="text-center">
              <button className="my-3 shadow start_btn">
                <Link to="/user/signup" style={{textDecoration: "none", color: "black"}}>
                Start Your Journey With Us
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container second_div">
        <h2 className="text-center">How it Works?</h2>
        <div className="row gx-5">
          <div className="col-md-4 text-center p-3 second_div_card1">
            <img src={createRide} alt="" className="second_div_imgs" />
            <h3 className="my-2">Create Ride Offer</h3>
            <p style={{ marginTop: "5%" }}>
              A driver creates a ride offer on the application for a particular
              destination.
            </p>
          </div>
          <div className="col-md-4 text-center p-3 second_div_card2">
            <img src={checked} alt="" className="second_div_imgs" />
            <h3 className="my-2">Request Ride</h3>
            <p>
              A passenger request for a available ride offers to a destination,
              and waits for the driver to either accept or reject the offer.
            </p>
          </div>
          <div className="col-md-4 text-center p-3 second_div_card3">
            <img src={carRide} alt="" className="second_div_imgs" />
            <h3 className="my-2">Take Ride</h3>
            <p>
              After successful request has been accepted. You can enjoy the ride
              with a new company and save money.
            </p>
          </div>
        </div>
      </div>

      <div className="container-fluid third_div">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img src={dashboard2} alt="" />
            </div>
            <div className="col-md-7 third_div_text">
              <h3 style={{color: 'white'}}>Your safety is our priority</h3>
              <p>
                At BlaBlaCar, we're working hard to make our platform as secure
                as it can be. But when scams do happen, we want you to know
                exactly how to avoid and report them.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-5 fourth_div">
        <div className="container">
          <div className="row">
            <div className="col-md-6 fourth_div_text">
              <h2>Driving in your car soon?</h2>
              <p>
              Good news, drivers: get rewarded for your good habits! Earn the Carpool Bonus by completing 3 carpools in 3 months. See eligibility conditions.
              </p>
            </div>
            <div className="col-md-6">
              <img src={dashboard3} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DashboardScreen;
