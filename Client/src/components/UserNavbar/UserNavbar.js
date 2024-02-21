import React, { useEffect, useRef } from "react";
import "./UserNavbar.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/carLogo.png";
import ProfileScreen from "../../screens/ProfileScreen/ProfileScreen";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { logout } from "../../actions/userAuthAction";
import userImg from "../../images/user.avif";

const UserNavbar = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector(state => state.userSignin);
  let user = data.response;

  const stateRef = useRef(user);

  useEffect(() => {
    
    setTimeout(() => {
      stateRef.current = user;
    console.log(stateRef.current?.fname);
    }, 2000);
  }, [user])
  
  const logoutUser = () => {
    dispatch(logout(toast, navigate));
  }

  return (
    <>
      <nav class={`navbar navbar-expand-lg navbar-light bg-light shadow`}>
        <div class="container-fluid">
          <Link class="navbar-brand fw-bold" to={props.link}>
            <img
              src={logo}
              alt="profile"
              style={{ width: "7%", height: "7%", marginLeft: "2%", marginRight: "1%" }}
              className="brand_logo"
            />
            <span className="brand_name">EaseRide</span>
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>
            <ul class="navbar-nav">
              <li class="nav-item welcome">
              
                  {
                    !data.loading &&
                    <h5>
                  Welcome! <span className="text-muted"> {stateRef.current?.fname + " " + stateRef.current?.lname} </span>
                </h5>
                }
                
                
              </li>{" "}
              <span className="divide">|</span>
              <li class="nav-item profile">
                <button data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Profile
                </button>
              </li>{" "}
              <span className="divide">|</span>
              <li class="nav-item logout">
                <button onClick={logoutUser}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Profile Modal */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              
                <img src={userImg} alt="profile" height="50" width="50" />
                
                  <span class="name mt-3 mx-2">{stateRef.current?.fname + " " + stateRef.current?.lname}</span>
                
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <ProfileScreen />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserNavbar;
