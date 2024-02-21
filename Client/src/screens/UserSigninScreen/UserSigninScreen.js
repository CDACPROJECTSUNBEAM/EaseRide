import React, { useState } from 'react';
import "./UserSigninScreen.css";
import { Link, useNavigate } from "react-router-dom";
import login from "../../images/login.avif";
import { signin } from '../../actions/userAuthAction';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Header from "../../components/Header/Header";

const UserSigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValidate, setEmailValidate] = useState("");
  const [passwordValidate, setPasswordValidate] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{4,}$/g;

  const checkEmailValidation = (e) => {
    if(e.target?.value && e.target.value.match(isValidEmail)){
      setEmailValidate("");
    }else{
      setEmailValidate("Invalid email");
      setEmail(e.target.value);
    }
  }

  const checkPasswordValidation = (e) => {
    setPassword(e.target.value);
    if(e.target.value.length < 6){
      setPasswordValidate("Password length should be > 6");
    }else{
      setPasswordValidate("");
    }
  }


  const submitData = (e) => {
    e.preventDefault();
    console.log({
      email,
      password
    });

    if(passwordValidate === ""){
      const userDetails = {
        email, password
      }
  
      dispatch(signin(userDetails, toast, navigate))
  
      setEmail("");
      setPassword("");
    }

  }

  return (
    <>
    <Header />
      <div className="card mx-auto register__card">
        <form onSubmit={submitData}>
          <div className="row g-0">
            <div className="col-lg-6 col-sm-12">
              <div className="card-body">
                <div className="register__head text-center mt-4">Welcome User!</div>
                <div className="register__para text-center">Login to continue</div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-user email__icon"></i>
                    <input type="email"
                      className="input__email"
                      placeholder="Enter Email (eg. test@test.com)"
                      id="email"
                      name="email"
                      value={email}
                      onChange={checkEmailValidation}
                      required={true} />
                      <div className="d-flex justify-content-center mt-1">
                      <span class="badge text-bg-danger">{emailValidate}</span>
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <i className="fa-solid fa-lock password__icon"></i>
                    <input type="password"
                      className="input__password"
                      placeholder="Enter Password"
                      id="password"
                      name="password"
                      value={password}
                      onChange={checkPasswordValidation}
                      required={true}
                       />
                      <div className="d-flex justify-content-center mt-1">
                      <span class="badge text-bg-danger">{passwordValidate}</span>
                      </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-sm-12 register__btn">
                    <button type="submit"
                      className="login__button w-100"
                      value="Login"
                    >
                      Login
                    </button>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12 col-sm-12 go__signup">
                    <p className="text-center">Not a Member Yet?<Link to="/user/signup"> Register Here</Link></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12">
              <img src={login} className="img-fluid rounded-start login__image" alt="signup" />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default UserSigninScreen;