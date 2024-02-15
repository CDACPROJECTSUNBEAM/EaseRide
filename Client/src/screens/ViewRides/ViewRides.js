import React, { useState } from "react";
import "./ViewRides.css";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import { useSelector } from "react-redux";

const ViewRides = () => {
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const data = useSelector(state => state.userSignin);
  let user = data.response;

  const submitData = (e) => {
    e.preventDefault();
    console.log(start + " " + end);
  }

  return (
    <>
      <UserNavbar user={user} link={"/user"} />

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
          <div className="col-md-3">
            <div
              class="card fw-bold text-center mb-3 viewRide_card"
              style={{ maxWidth: "100%" }}
            >
              <div class="card-header">Pune &lt;-&gt; Mumbai</div>
              <div class="card-body">
                <h5 class="card-title">Journey Details</h5>
                <p class="card-text">
                  <span className="text-muted">Seats Available </span> - 4{" "}
                  <br />
                  <span className="text-muted">Driver's Name </span> - ABC{" "}
                  <br />
                  <span className="text-muted">Contact No. </span> - 9191919919{" "}
                  <br />
                  <span className="text-muted">Cost of Ride </span> - Rs. 1000/-
                  <br />
                </p>
                <button className="btn btn-primary w-100 book_btn">
                  Book a Ride
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              class="card fw-bold text-center mb-3 viewRide_card"
              style={{ maxWidth: "100%" }}
            >
              <div class="card-header">Pune &lt;-&gt; Mumbai</div>
              <div class="card-body">
                <h5 class="card-title">Journey Details</h5>
                <p class="card-text">
                  <span className="text-muted">Seats Available </span> - 4{" "}
                  <br />
                  <span className="text-muted">Driver's Name </span> - ABC{" "}
                  <br />
                  <span className="text-muted">Contact No. </span> - 9191919919{" "}
                  <br />
                  <span className="text-muted">Cost of Ride </span> - Rs. 1000/-
                  <br />
                </p>
                <button className="btn btn-primary w-100 book_btn">
                  Book a Ride
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              class="card fw-bold text-center mb-3 viewRide_card"
              style={{ maxWidth: "100%" }}
            >
              <div class="card-header">Pune &lt;-&gt; Mumbai</div>
              <div class="card-body">
                <h5 class="card-title">Journey Details</h5>
                <p class="card-text">
                  <span className="text-muted">Seats Available </span> - 4{" "}
                  <br />
                  <span className="text-muted">Driver's Name </span> - ABC{" "}
                  <br />
                  <span className="text-muted">Contact No. </span> - 9191919919{" "}
                  <br />
                  <span className="text-muted">Cost of Ride </span> - Rs. 1000/-
                  <br />
                </p>
                <button className="btn btn-primary w-100 book_btn">
                  Book a Ride
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              class="card fw-bold text-center mb-3 viewRide_card"
              style={{ maxWidth: "100%" }}
            >
              <div class="card-header">Pune &lt;-&gt; Mumbai</div>
              <div class="card-body">
                <h5 class="card-title">Journey Details</h5>
                <p class="card-text">
                  <span className="text-muted">Seats Available </span> - 4{" "}
                  <br />
                  <span className="text-muted">Driver's Name </span> - ABC{" "}
                  <br />
                  <span className="text-muted">Contact No. </span> - 9191919919{" "}
                  <br />
                  <span className="text-muted">Cost of Ride </span> - Rs. 1000/-
                  <br />
                </p>
                <button className="btn btn-primary w-100 book_btn">
                  Book a Ride
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div
              class="card fw-bold text-center mb-3 viewRide_card"
              style={{ maxWidth: "100%" }}
            >
              <div class="card-header">Pune &lt;-&gt; Mumbai</div>
              <div class="card-body">
                <h5 class="card-title">Journey Details</h5>
                <p class="card-text">
                  <span className="text-muted">Seats Available </span> - 4{" "}
                  <br />
                  <span className="text-muted">Driver's Name </span> - ABC{" "}
                  <br />
                  <span className="text-muted">Contact No. </span> - 9191919919{" "}
                  <br />
                  <span className="text-muted">Cost of Ride </span> - Rs. 1000/-
                  <br />
                </p>
                <button className="btn btn-primary w-100 book_btn">
                  Book a Ride
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserFooter />
    </>
  );
};

export default ViewRides;
