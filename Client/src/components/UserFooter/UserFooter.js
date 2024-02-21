import React from "react";
import "./UserFooter.css";
import google from "../../images/google.png";
import facebook from "../../images/facebook.png";
import gmail from "../../images/gmail.png";

const UserFooter = () => {
  return (
    <>
      {/* <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Company<span>logo</span>
          </h3>
          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
            <a href="#">About</a>
            <a href="#">Faq</a>
            <a href="#">Contact</a>
          </p>
          <p className="footer-company-name">Company Name © 2015</p>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker" />
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>
          <div>
            <i className="fa fa-phone" />
            <p>+1.555.555.5555</p>
          </div>
          <div>
            <i className="fa fa-envelope" />
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>
          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook" />
            </a>
            <a href="#">
              <i className="fa fa-twitter" />
            </a>
            <a href="#">
              <i className="fa fa-linkedin" />
            </a>
            <a href="#">
              <i className="fa fa-github" />
            </a>
          </div>
        </div>
      </footer> */}

      <footer className="footer-distributed">

        <div className="row">
          <div className="col-md-4">
            <h3 style={{color: 'white'}}>Ease<span style={{color: 'rgb(37, 142, 234)'}}>Ride</span></h3>
          </div>
          <div className="col-md-4 text-center">
            <p>
            Copyright © EaseRide 2024
            </p>
          </div>
          <div className="col-md-4 text-center">
            <div className="row">
              <div className="col-md-4">
                <img src={google} alt="" style={{height: "100%", width: "25%"}} />
              </div>
              <div className="col-md-4">
              <img src={facebook} alt="" style={{height: "100%", width: "25%"}} />
              </div>
              <div className="col-md-4">
              <img src={gmail} alt="" style={{height: "100%", width: "25%"}} />
              </div>
            </div>
          </div>
        </div>

      </footer>
    </>
  );
};

export default UserFooter;
