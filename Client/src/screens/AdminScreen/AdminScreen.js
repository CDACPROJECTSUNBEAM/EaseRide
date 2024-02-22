import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import "./AdminScreen.css";
import { getAllStates } from "../../actions/adminAuthAction";
import { Link } from "react-router-dom";

const AdminScreen = () => {
  const data = useSelector((state) => state.userSignin);
  let user = data.response;
  const [cityLength, setCityLength] = useState(0);
  const [stateLength, setStateLength] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [bookings, setBookings] = useState();
  const [users, setUsers] = useState();
  const [drivers, setDrivers] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllStates());

    fetch("http://localhost:8081/api/admin/city/count", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setCityLength(data.count);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("http://localhost:8081/api/admin/state/count", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setStateLength(data.count);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("http://localhost:8081/api/admin/revenue", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setRevenue(data);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("http://localhost:8081/api/admin/bookings", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        let filteredData = data.filter((d) => d.status === "ACCEPTED");
        setBookings(filteredData);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("http://localhost:8081/api/admin/users", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("http://localhost:8081/api/admin/drivers", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setDrivers(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <UserNavbar user={user} link={"/admin/home"} />

    <div className="admin_ctr">
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">
              <div class="card-block">
                <h6 class="m-b-20">Total Users</h6>
                <h2 class="text-right">
                  <i class="fa fa-users" aria-hidden="true"></i>
                  <span className="mx-2">{users?.length}</span>
                </h2>
                <Link to="/admin/users" class="m-b-0">Manage Users</Link>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
              <div class="card-block">
                <h6 class="m-b-20">Total Drivers</h6>
                <h2 class="text-right">
                  <i class="fa fa-user" aria-hidden="true"></i>
                  <span className="mx-2">{drivers?.length}</span>
                </h2>
                <Link to="/admin/drivers" class="m-b-0">Manage Drivers</Link>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-yellow order-card">
              <div class="card-block">
                <h6 class="m-b-20">Total Bookings</h6>
                <h2 class="text-right">
                  <i class="fa fa-car" aria-hidden="true"></i>
                  <span className="mx-2">{bookings?.length}</span>
                </h2>
                <Link to="/admin/bookings" class="m-b-0">Bookings</Link>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-pink order-card">
              <div class="card-block">
                <h6 class="m-b-20">Total Revenue</h6>
                <h2 class="text-right">
                  <i class="fa fa-credit-card f-left mt-1"></i>
                  <span className="mx-2">{revenue}</span>
                </h2>
                <a
                  class="m-b-0"
                  style={{ textDecoration: "none", cursor: "default" }}
                >
                  Total Revenue
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div className="col-md-4 col-xl-3"></div>
          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-blue order-card">
              <div class="card-block">
                <h6 class="m-b-20">Total Cities</h6>
                <h2 class="text-right">
                  <i class="fa-solid fa-city"></i>
                  <span className="mx-2">{cityLength}</span>
                </h2>
                <Link class="m-b-0" to="/admin/cities">
                  Cities Registered
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xl-3">
            <div class="card bg-c-green order-card">
              <div class="card-block">
                <h6 class="m-b-20">Total States</h6>
                <h2 class="text-right">
                  <i class="fa-solid fa-city"></i>
                  <span className="mx-2">{stateLength}</span>
                </h2>
                <Link class="m-b-0" to="/admin/states">
                  States Registered
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-xl-3"></div>
        </div>
      </div>

      
      </div>
      <UserFooter />
    </>
  );
};

export default AdminScreen;
