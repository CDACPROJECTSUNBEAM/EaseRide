import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="new_footer_area bg_color">
        <div className="new_footer_top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.4s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.4s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18">Contact Us</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">Pune</a>
                    </li>
                    <li>
                      <a href="#">Ahmedabad</a>
                    </li>
                    <li>
                      <a href="#">Indore</a>
                    </li>
                    <li>
                      <a href="#">Mumbai</a>
                    </li>
                    <li>
                      <a href="#">Delhi</a>
                    </li>
                    <li>
                      <a href="#">Jodhpur</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="f_widget about-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.6s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.6s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18 help_section">Help</h3>
                  <ul className="list-unstyled f_list">
                    <li>
                      <a href="#">FAQ</a>
                    </li>
                    <li>
                      <a href="#">Term &amp; conditions</a>
                    </li>
                    <li>
                      <a href="#">Reporting</a>
                    </li>
                    <li>
                      <a href="#">Documentation</a>
                    </li>
                    <li>
                      <a href="#">Support Policy</a>
                    </li>
                    <li>
                      <a href="#">Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div
                  className="f_widget social-widget pl_70 wow fadeInLeft"
                  data-wow-delay="0.8s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.8s",
                    animationName: "fadeInLeft",
                  }}
                >
                  <h3 className="f-title f_600 t_color f_size_18 team_section">
                    Team Solutions
                  </h3>
                  <div className="f_social_icon">
                    <a href="#" className="fab fa-facebook" />
                    <a href="#" className="fab fa-twitter" />
                    <a href="#" className="fab fa-linkedin" />
                    <a href="#" className="fab fa-pinterest" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_bg">
            <div className="footer_bg_one" />
            <div className="footer_bg_two" />
          </div>
        </div>
        <div className="footer_bottom">
          <div className="container mt-5">
            <div className="row align-items-center">
              <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">
                  © cakecounter Inc.. 2019 All rights reserved.
                </p>
              </div>
              <div className="col-lg-6 col-sm-5 text-right">
                <p>
                  Made with <i className="icon_heart" /> in{" "}
                  <a href="http://cakecounter.com" target="_blank">
                    CakeCounter
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
