import React, { useEffect } from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import "./PastBookings.css";
import { useDispatch, useSelector } from "react-redux";
import { getBookings } from "../../actions/userAuthAction";
import { useNavigate } from "react-router-dom";

const PastBookings = () => {
  const data = useSelector((state) => state.userSignin);
  let user = data.response;

  const bookingData = useSelector((state) => state.bookings);
  let bookings = bookingData.response;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getBookings(user.id));
  }, []);

  return (
    <>
      <UserNavbar user={user} link={"/user"} />

      <div className="container mt-5 past_bookings_container">
        <table class="table bookings_table">
          <thead class="table-dark">
            <tr>
              <th>Id</th>
              <th>From</th>
              <th>To</th>
              <th>Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Journey Date</th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings.map((b, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{b.rideIdStartCity}</td>
                  <td>{b.rideIdEndCity}</td>
                  <td>{b.noOfSeats}</td>
                  <td>{b.price}</td>
                  {b.status === "PENDING" ? (
                    <td style={{ color: "red", fontWeight: "bold" }}>{b.status}</td>
                  ) : (
                    <td style={{ color: "lightgreen", fontWeight: "bold" }}>{b.status}</td>
                  )}
                  <td>{b.createDate.slice(0, 10)}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-success"
                      data-bs-toggle="tooltip"
                      data-bs-placement="right"
                      title="Add Review"
                      disabled={b.status === "PENDING"}
                    onClick={() => navigate(`/user/rating/${b.rideIdDriverId}`)}
                    >
                      <i class="fa fa-plus-square" aria-hidden="true"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      <UserFooter />
    </>
  );
};

export default PastBookings;
