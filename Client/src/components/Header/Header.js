import React from 'react'
import {Link} from "react-router-dom"
import "./Header.css";
import logo from "../../images/carLogo.png";

const Header = (props) => {
  return (
    <>
      <nav class={`navbar navbar-expand-lg navbar-light bg-light ${props.prop_name} shadow`}>
        <div class="container-fluid">
          <Link class="navbar-brand" to="/" style={{fontWeight: "bold", letterSpacing: "2px", color: "#0574cf"}}>
          <img
              src={logo}
              alt="profile"
              style={{ width: "7%", height: "7%", marginLeft: "2%", marginRight: "1%" }}
              className="brand_logo"
            />
            <span className="brand_name">SwiftRide</span>
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <ul class="navbar-nav">
              <li class="nav-item">
                <button class="nav-link active btn" style={{backgroundColor: "rgb(68, 158, 247)"}}>
                  <Link to="/user/signup" style={{textDecoration: "none", color: "black"}}>
                  Get Started
                  </Link>
                </button>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"> Login </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                  <li><Link class="dropdown-item" to="/user/signIn">User</Link></li>
                  <li><Link class="dropdown-item" to="/admin">Admin</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

Header.defaultProps = {
  prop_name: "main_nav",
}

export default Header