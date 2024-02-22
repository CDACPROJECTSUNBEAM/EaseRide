import React, { useState } from "react";
import reqRide from "../../images/reqRide.jpg";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import { toast } from "react-toastify";

const ReqRide = () => {
  const [reqRideDetails, setReqRideDetails] = useState({
    name: "",
    from: "",
    to: "",
    contact: "",
    doj: "",
    seats: "",
  });

  const submitData = (e) => {
    e.preventDefault();

    console.log(reqRideDetails);

    toast.success("Ride requested successfully");

    setReqRideDetails({
      name: "",
      from: "",
      to: "",
      contact: "",
      doj: "",
      seats: "",
    });
  };

  return (
    <>
      <UserNavbar user={"Akshat Shah"} link={"/user"} />
      <div className="container mb-5">
        <div className="row mt-5">
          <div className="col-md-7">
            <img
              src={reqRide}
              alt=""
              style={{ width: "100%", height: "80%", marginTop: "5%" }}
            />
          </div>
          <div className="col-md-5">
            <h2>
              To request a ride, please fill out the details in the below form
            </h2>
            <form className="mt-3" onSubmit={submitData}>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Name of passenger"
                  value={reqRideDetails.name}
                  onChange={(e) => setReqRideDetails({...reqRideDetails, name: e.target.value})}
                />
                <label for="floatingInput">Passenger Name</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Start location"
                  value={reqRideDetails.from}
                  onChange={(e) => setReqRideDetails({...reqRideDetails, from: e.target.value})}
                />
                <label for="floatingInput">Start location</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="End location"
                  value={reqRideDetails.to}
                  onChange={(e) => setReqRideDetails({...reqRideDetails, to: e.target.value})}
                />
                <label for="floatingInput">End location</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Contact No."
                  value={reqRideDetails.contact}
                  onChange={(e) => setReqRideDetails({...reqRideDetails, contact: e.target.value})}
                />
                <label for="floatingInput">Contact No.</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="date"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Date of journey"
                  value={reqRideDetails.doj}
                  onChange={(e) => setReqRideDetails({...reqRideDetails, doj: e.target.value})}
                />
                <label for="floatingInput">Date of journey</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Total person"
                  value={reqRideDetails.seats}
                  onChange={(e) => setReqRideDetails({...reqRideDetails, seats: e.target.value})}
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
