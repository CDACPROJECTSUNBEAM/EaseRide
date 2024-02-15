import React from "react";
import "./SearchRideReq.css";
import DriverNavbar from "../../components/DriverNavbar/DriverNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import { useSelector } from "react-redux";
import UserNavbar from "../../components/UserNavbar/UserNavbar";

const SearchRideReq = () => {
  const userData = useSelector(state => state.userSignin);
  let user = userData.response;
  return (
    <>
      <UserNavbar user={user} link={"/driver"} />

      <div className="container bootstrap snippets bootdeys">
        <h3 className="text-center mt-4">Ride Requests</h3>
        <div className="row">
          <div className="col-md-4 col-sm-6 content-card">
            <div className="card-big-shadow">
              <div
                className="card card-just-text"
                data-background="color"
                data-color="blue"
                data-radius="none"
              >
                <div className="content">
                  <h6 className="category mb-2">Ride Request 1</h6>

                  <p className="description">Name - Akshat Shah</p>
                  <p className="description">Source - Pune</p>
                  <p className="description">Destination - Mumbai</p>
                  <p className="description">Contact - 9292592925</p>
                  <p className="description">No. of Passengers - 4</p>

                  <div className="row">
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="btn"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-title="Tooltip on bottom"
                      >
                        <i className="fa fa-check-circle accept_icon" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="btn"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-title="Tooltip on bottom"
                      >
                        <i className="fa fa-ban reject_icon" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 content-card">
            <div className="card-big-shadow">
              <div
                className="card card-just-text"
                data-background="color"
                data-color="blue"
                data-radius="none"
              >
                <div className="content">
                  <h6 className="category mb-2">Ride Request 1</h6>

                  <p className="description">Name - Akshat Shah</p>
                  <p className="description">Source - Pune</p>
                  <p className="description">Destination - Mumbai</p>
                  <p className="description">Contact - 9292592925</p>
                  <p className="description">No. of Passengers - 4</p>

                  <div className="row">
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="btn"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-title="Tooltip on bottom"
                      >
                        <i className="fa fa-check-circle accept_icon" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="btn"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-title="Tooltip on bottom"
                      >
                        <i className="fa fa-ban reject_icon" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6 content-card">
            <div className="card-big-shadow">
              <div
                className="card card-just-text"
                data-background="color"
                data-color="blue"
                data-radius="none"
              >
                <div className="content">
                  <h6 className="category mb-2">Ride Request 1</h6>

                  <p className="description">Name - Akshat Shah</p>
                  <p className="description">Source - Pune</p>
                  <p className="description">Destination - Mumbai</p>
                  <p className="description">Contact - 9292592925</p>
                  <p className="description">No. of Passengers - 4</p>

                  <div className="row">
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="btn"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-title="Tooltip on bottom"
                      >
                        <i className="fa fa-check-circle accept_icon" aria-hidden="true"></i>
                      </button>
                    </div>
                    <div className="col-md-6">
                      <button
                        type="button"
                        className="btn"
                        data-bs-toggle="tooltip"
                        data-bs-placement="bottom"
                        data-bs-title="Tooltip on bottom"
                      >
                        <i className="fa fa-ban reject_icon" aria-hidden="true"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserFooter />
    </>
  );
};

export default SearchRideReq;
