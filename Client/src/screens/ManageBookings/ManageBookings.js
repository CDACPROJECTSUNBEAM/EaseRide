import React, { useEffect, useState } from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import "./ManageBookings.css";
import { useSelector } from "react-redux";

const ManageBookings = () => {
  const data = useSelector((state) => state.userSignin);
  let user = data.response;

  const [bookings, setBookings] = useState();
  const [users, setUsers] = useState();

  useEffect(() => {
    fetch("http://localhost:8081/api/admin/bookings", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
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
  }, []);

  return (
    <>
      <UserNavbar user={user} link={"/admin/home"} />

      <div className="container mt-5 past_bookings_container">
        <table class="table bookings_table">
          <thead class="table-dark">
            <tr>
              <th>Id</th>
              <th>From</th>
              <th>To</th>
              <th>Customer</th>
              <th>Driver</th>
              <th>Seats Booked</th>
              <th>Price</th>
              <th>Booking Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings.map((b, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{b.rideIdStartCity}</td>
                  <td>{b.rideIdEndCity}</td>
                  <td>{b.userIdId}</td>
                  <td>{b.rideIdDriverId}</td>
                  <td>{b.noOfSeats}</td>
                  <td>{b.price}</td>
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

export default ManageBookings;
