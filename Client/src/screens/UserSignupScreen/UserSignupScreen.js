import React, { useRef, useState } from "react";
import "./UserSignupScreen.css";
import { Link } from "react-router-dom";
import register from "../../images/register.avif";
import { useDispatch } from "react-redux";
import { signup } from "../../actions/userAuthAction";
import { toast } from "react-toastify";
import Header from "../../components/Header/Header";

const UserSignupScreen = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCPassword] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState();
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [role, setRole] = useState("");

  const dispatch = useDispatch();

  const submitData = (e) => {
    e.preventDefault();
    console.log({
      fname,
      lname,
      email,
      password,
      cpassword,
      dob,
      contact,
      address,
      gender,
      role
    });

    const userDetails = {
      fname,
      lname,
      email,
      password,
      contact,
      gender,
      role,
      dob,
      address
    }

    dispatch(signup(userDetails, toast))

    setFname(p => "");
    setLname("");
    setEmail("");
    setPassword("");
    setCPassword("");
    setDob("");
    setContact("");
    setAddress("");
    setGender("");
    setRole("");

  }

  const ref = useRef();
  return (
    <>
    <Header />
      <div className="card mx-auto register_card">
        <form onSubmit={submitData}>
          <div className="row g-0">
            <div className="col-lg-6 col-sm-12">
              <img
                src={register}
                className="img-fluid rounded-start signup__image"
                alt="signup"
              />
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="card-body">
                <div className="register__head text-center">Welcome User!</div>
                <div className="register__para text-center">
                  Register to continue
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input
                      type="text"
                      className="input__email"
                      placeholder="Enter Firstname"
                      id="fname"
                      name="fname"  
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                      required={true}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input
                      type="text"
                      className="input__email"
                      placeholder="Enter Lastname"
                      id="lname"
                      name="lname"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                      required={true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input
                      type="email"
                      className="input__email"
                      placeholder="Enter Email (eg. test@test.com)"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required={true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <i className="fa-solid fa-lock password__icon"></i>
                    <input
                      type="password"
                      className="input__password"
                      placeholder="Enter Password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required={true}
                      minLength={6}
                    />
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <i className="fa-solid fa-lock password__icon"></i>
                    <input
                      type="password"
                      className="input__password"
                      placeholder="Confirm Password"
                      id="cpassword"
                      name="cpassword"
                      value={cpassword}
                      onChange={(e) => setCPassword(e.target.value)}
                      required={true}
                      minLength={6}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input
                      type="number"
                      className="input__email"
                      placeholder="Enter contact number"
                      id="contact"
                      name="contact"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      required={true}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-lock password__icon"></i>
                    <input
                      ref={ref}
                      className="input__password"
                      type="text"
                      placeholder="Enter Date of Birth"
                      onFocus={() => (ref.current.type = "date")}
                      onBlur={() => (ref.current.type = "text")}
                      id="dob"
                      name="dob"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                      required={true}
                      minLength={6}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input
                      type="text"
                      className="input__email"
                      placeholder="Enter Address"
                      id="address"
                      name="address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </div>
                <div className="row fw-bold text-muted mt-4 text-center">
                  <div className="col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-md-3">
                        <label>Gender: </label>
                      </div>
                      <div className="col-md-3">
                        <input type="radio" name="gender" value="MALE" checked={gender === "MALE"} onChange={(e) => setGender(e.target.value)} /> Male
                      </div>
                      <div className="col-md-3">
                        <input type="radio" name="gender" value="FEMALE" checked={gender === "FEMALE"} onChange={(e) => setGender(e.target.value)} />
                        Female
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row fw-bold text-muted mt-4 text-center">
                  <div className="col-md-12 col-sm-12">
                    <div className="row">
                      <div className="col-md-3">
                        <label>Role: </label>
                      </div>
                      <div className="col-md-3">
                        <input type="radio" name="role" value="ROLE_USER" checked={role === "ROLE_USER"} onChange={(e) => setRole(e.target.value)} /> User
                      </div>
                      <div className="col-md-3">
                        <input type="radio" name="role" value="ROLE_DRIVER" checked={role === "ROLE_DRIVER"} onChange={(e) => setRole(e.target.value)} />
                        Driver
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12 register_btn">
                    <button
                      type="submit"
                      className="register_button w-100"
                      value="Register"
                    >
                      Register
                    </button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12 col-sm-12 go__signup">
                    <p className="text-center">
                      Already a Member?<Link to="/user/signin">Login Here</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserSignupScreen;
