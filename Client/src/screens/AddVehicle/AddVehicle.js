import React, { useState } from "react";
import "./AddVehicle.css";
import UserFooter from "../../components/UserFooter/UserFooter";
import DriverNavbar from "../../components/DriverNavbar/DriverNavbar";
import vehicle from "../../images/vehicle.avif";
import { useDispatch, useSelector } from "react-redux";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import { addVehicle } from "../../actions/driverAuthAction";
import { toast } from "react-toastify";

const AddVehicle = () => {
  const [company, setCompany] = useState("");
  const [model, setModel] = useState("");
  const [rcNumber, setRcNumber] = useState("");
  const [dor, setDor] = useState("");
  const [licence, setLicence] = useState("");
  const [aadharNo, setAadharNo] = useState("");

  const data = useSelector(state => state.userSignin);
  let user = data.response;

  const dispatch = useDispatch();

  const submitData = (e) => {
    e.preventDefault();
    console.log(user.id);
    let vehicleDetails = {
      company,
      model,
      rcNumber,
      dor,
      licence,
      aadharNo
    }

    dispatch(addVehicle(vehicleDetails, user.id, toast));

    setCompany("");
    setModel("");
    setRcNumber("");
    setDor("");
    setLicence("");
    setAadharNo("");
  }

  return (
    <>
    <UserNavbar user={user} link={"/driver"} />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img
              src={vehicle}
              alt=""
              className="add_vehicle_img"
            />
          </div>
          <div className="col-md-6">
            <center>
              <br></br>
              <h1 style={{ fontSize: "35px" }}>Add Vehicle Details</h1>
            </center>
            <br></br>

            <form onSubmit={submitData} className="mt-3">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Car company"
                  name="company"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                />
                <label for="floatingInput">Car Company</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Car Model"
                  name="model"
                  value={model}
                  onChange={e => setModel(e.target.value)}
                />
                <label for="floatingInput">Car Model</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Registration Certificate Number"
                  name="rcNumber"
                  value={rcNumber}
                  onChange={e => setRcNumber(e.target.value)}
                />
                <label for="floatingInput">
                  Registration Certificate Number
                </label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="date"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Date of Registration"
                  name="dor"
                  value={dor}
                  onChange={e => setDor(e.target.value)}
                />
                <label for="floatingInput">Date of Registration</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Adhar Number"
                  name="aadharNo"
                  value={aadharNo}
                  onChange={e => setAadharNo(e.target.value)}
                />
                <label for="floatingInput">Adhar Card Number</label>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Licence Number"
                  name="licence"
                  value={licence}
                  onChange={e => setLicence(e.target.value)}
                />
                <label for="floatingInput">Licence</label>
              </div>

              <div class="d-grid">
                <button
                  class="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2 mt-3"
                  type="submit"
                >
                  Add Vehicle
                </button>
              </div>
            </form>
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

export default AddVehicle;
