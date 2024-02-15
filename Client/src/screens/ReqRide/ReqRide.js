import React from "react";
import reqRide from "../../images/reqRide.jpg";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";

const ReqRide = () => {
  return (
    <>
        <UserNavbar user={"Akshat Shah"} link={"/user"} />
      <div className="container mb-5">
        <div className="row mt-5">
            <div className="col-md-7">
                <img src={reqRide} alt="" style={{width: '100%', height: '100%'}} />
            </div>
            <div className="col-md-5">
                <h2>To request a ride, please fill out the details in the below form</h2>
            <form className="mt-3">
                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Start location"
                        />
                        <label for="floatingInput">Start location</label>
                      </div>

                      <div class="form-floating mb-3">
                        <input
                          type="text"
                          class="form-control"
                          id="floatingInput"
                          placeholder="End location"
                        />
                        <label for="floatingInput">End location</label>
                      </div>

                      <div class="form-floating mb-3">
                        <input
                          type="date"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Date of journey"
                        />
                        <label for="floatingInput">Date of journey</label>
                      </div>

                      <div class="form-floating mb-3">
                        <input
                          type="number"
                          class="form-control"
                          id="floatingInput"
                          placeholder="Total person"
                        />
                        <label for="floatingInput">Total person</label>
                      </div>

                      <div class="d-grid">
                        <button
                          class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2"
                          type="submit"
                        >
                          Request a Ride
                        </button>
                      </div>
                    </form>
                  </div>
            </div>
      </div>
      <UserFooter />
    </>
  );
};

export default ReqRide;
