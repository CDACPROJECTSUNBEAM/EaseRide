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

  const [rcNoValidate, setRcNoValidate] = useState("");
  const [aadharValidate, setAadharValidate] = useState("");
  const [licenceValidate, setLicenceValidate] = useState("");

  const checkRcNoValidation = (e) => {
    setRcNumber(e.target.value);
    if (e.target.value.length !== 10) {
      setRcNoValidate("Rc Number length should be equal to 10");
    } else {
      setRcNoValidate("");
    }
  };

  const checkAadharValidation = (e) => {
    setAadharNo(e.target.value);
    if (e.target.value.length !== 12) {
      setAadharValidate("Aadhar Number length should be equal to 12");
    } else {
      setAadharValidate("");
    }
  };

  const checkLicenceValidation = (e) => {
    setLicence(e.target.value);
    if (e.target.value.length !== 16) {
      setLicenceValidate("Rc Number length should be equal to 16");
    } else {
      setLicenceValidate("");
    }
  };

  const data = useSelector((state) => state.userSignin);
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
      aadharNo,
    };

    dispatch(addVehicle(vehicleDetails, user.id, toast));

    setCompany("");
    setModel("");
    setRcNumber("");
    setDor("");
    setLicence("");
    setAadharNo("");
  };

  return (
    <>
      <UserNavbar user={user} link={"/driver"} />
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={vehicle} alt="" className="add_vehicle_img" />
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
                  onChange={(e) => setCompany(e.target.value)}
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
                  onChange={(e) => setModel(e.target.value)}
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
                  onChange={checkRcNoValidation}
                />
                <label for="floatingInput">
                  Registration Certificate Number
                </label>
                <div className="d-flex justify-content-center mt-1">
                  <span class="badge text-bg-danger">{rcNoValidate}</span>
                </div>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="date"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Date of Registration"
                  name="dor"
                  value={dor}
                  onChange={(e) => setDor(e.target.value)}
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
                  onChange={checkAadharValidation}
                />
                <label for="floatingInput">Adhar Card Number</label>
                <div className="d-flex justify-content-center mt-1">
                  <span class="badge text-bg-danger">{aadharValidate}</span>
                </div>
              </div>

              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control"
                  id="floatingInput"
                  placeholder="Licence Number"
                  name="licence"
                  value={licence}
                  onChange={checkLicenceValidation}
                />
                <label for="floatingInput">Licence</label>
                <div className="d-flex justify-content-center mt-1">
                  <span class="badge text-bg-danger">{licenceValidate}</span>
                </div>
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
