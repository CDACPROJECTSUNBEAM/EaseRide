import React, { useEffect, useState } from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import "./ManageDrivers.css";
import { useSelector } from "react-redux";

const ManageDrivers = () => {
  const data = useSelector((state) => state.userSignin);
  let user = data.response;

  const [drivers, setDrivers] = useState();

  useEffect(() => {
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

      <div className="container mt-5 past_bookings_container">
        <table class="table bookings_table">
          <thead class="table-dark">
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Contact</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Joined On</th>
            </tr>
          </thead>
          <tbody>
            {drivers &&
              drivers.map((b, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{b.fname + " " + b.lname}</td>
                  <td>{b.email}</td>
                  <td>{b.contact}</td>
                  <td>{b.gender}</td>
                  <td>{b.address}</td>
                  <td>{b.createDate.slice(0, 10)}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <UserFooter />
    </>
  );
};

export default ManageDrivers;
