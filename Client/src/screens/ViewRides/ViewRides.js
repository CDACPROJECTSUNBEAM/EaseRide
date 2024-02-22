import React, { useEffect, useState } from "react";
import "./ViewRides.css";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import { useDispatch, useSelector } from "react-redux";
import { getAvailableRides, searchRides } from "../../actions/userAuthAction";
import { Link } from "react-router-dom";

const ViewRides = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const dispatch = useDispatch();

  const data = useSelector(state => state.userSignin);
  let user = data.response;

  const ridesData = useSelector(state => state.availableRides);
  let rides = ridesData.response;

  useEffect(() => {
    dispatch(getAvailableRides());
  }, [])

  const submitData = (e) => {
    e.preventDefault();
    console.log(start + " " + end);
    let searchDetails = {
      startCity: start,
      endCity: end,
    }

    dispatch(searchRides(searchDetails));
  }

  return (
    <>
      <UserNavbar user={user} link={"/user"} />

    <div className="viewRide_dash">
      <h1 className="text-center mt-5 mb-4">View Rides</h1>

      <div className="container mb-5 mt-3">
        <div class="row justify-content-center padding">
          <div class="col-md-8 ftco-animate fadeInUp ftco-animated">
            <form onSubmit={submitData} class="domain-form">
              <div class="form-group d-md-flex">
                <input
                  type="text"
                  class="form-control px-4"
                  placeholder="Enter start location..."
                  value={start}
                  name="startLocation"
                  onChange={(e) => setStart(e.target.value)}
                />
                <span>&lt;--&gt;</span>
                <input
                  type="text"
                  class="form-control px-4"
                  placeholder="Enter end location..."
                  value={end}
                  name="endLocation"
                  onChange={(e) => setEnd(e.target.value)}
                />
                <input
                  type="submit"
                  class="search-domain btn btn-primary px-5"
                  value="Search"
                />
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="container my-3">
        <div className="row">
          {
            rides && rides.map((r) => (
              <div className="col-md-4">
            <div
              class="card fw-bold text-center mb-3 viewRide_card"
              style={{ maxWidth: "100%" }}
            >
              <div class="card-header">{r.startCity} &lt;-&gt; {r.endCity}</div>
              <div class="card-body">
                <h5 class="card-title">Journey Details</h5>
                <p class="card-text">
                  <span className="text-muted">Seats Available </span> - {r.availableSeats}{" "}
                  <br />
                  <span className="text-muted">Journey Date </span> - {r.doj}{" "}
                  <br />
                  <span className="text-muted">Reaching Date </span> - {r.eoj}{" "}
                  <br />
                  <span className="text-muted">Departure Time </span> - {r.departureTime}{" "}
                  <br />
                  <span className="text-muted">Reaching Time </span> - {r.reachingTime}{" "}
                  <br />
                  <span className="text-muted">Cost Per Seat </span> - Rs. {r.price}/-
                  <br />
                </p>
                <Link to={`/user/bookRide/${r.driverIdId}/${r.vehicleId}/${r.id}`}>
                <button disabled={r.availableSeats === 0} className="btn btn-primary w-100 book_btn">
                  
                  Book a Ride
                  
                </button>
                </Link>
              </div>
            </div>
          </div>
            ))
          }
        </div>
      </div>

      <UserFooter />
      </div>
    </>
  );
};

export default ViewRides;
