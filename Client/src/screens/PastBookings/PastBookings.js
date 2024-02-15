import React from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import "./PastBookings.css";
import { useSelector } from "react-redux";

const PastBookings = () => {
    const data = useSelector(state => state.userSignin);
  let user = data.response;
  return (
    <>
      <UserNavbar user={user} link={"/user"} />

    <div className="container mt-5 past_bookings_container">
    <table class="table">
        <thead class="table-dark">
            <tr>
                <th>Id</th>
                <th>Name</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>ajhaj</td>
            </tr>
            <tr>
                <td>1</td>
                <td>ajhaj</td>
            </tr>
            <tr>
                <td>1</td>
                <td>ajhaj</td>
            </tr>
            <tr>
                <td>1</td>
                <td>ajhaj</td>
            </tr><tr>
                <td>1</td>
                <td>ajhaj</td>
            </tr>
            <tr>
                <td>1</td>
                <td>ajhaj</td>
            </tr>
            <tr>
                <td>1</td>
                <td>ajhaj</td>
            </tr>
        </tbody>
      </table>
    </div>
      
      <UserFooter />
    </>
  );
};

export default PastBookings;
