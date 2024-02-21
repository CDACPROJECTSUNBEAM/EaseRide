import React, { useEffect, useState } from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import {
  addRating,
  getDriverDetails,
  getVehicleDetails,
} from "../../actions/userAuthAction";
import { toast } from "react-toastify";
import star from "../../images/star.png";

const RatingScreen = () => {
  const [ratingId, setRatingId] = useState();
  const [review, setReview] = useState();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const data = useSelector((state) => state.userSignin);
  let user = data.response;
  let { dId } = useParams();

  const submitData = (e) => {
    e.preventDefault();

    let rating = parseInt(ratingId);

    let ratingDetails = {
        rating,
        review
    };

    dispatch(addRating(ratingDetails, user.id, dId, toast));
    navigate("/user");

    setRatingId("");
    setReview("");
  };

  return (
    <>
      <UserNavbar user={user} link={"/user"} />

      <div className="container w-50 my-5">
        <h3 className="text-center my-5">Please Provide Rating</h3>
        <form onSubmit={submitData}>
          <div class="mb-3">
            <div
              className="dropdown"
              style={{
                width: "100%",
                display: "inline-block",
                position: "relative",
              }}
            >
              <label for="exampleInputPassword1" class="form-label">
                Rating
              </label>
              <select
                name="vehicleId"
                className="form-control"
                id="city-names"
                style={{ width: "100%", height: "100%" }}
                value={ratingId}
              onChange={(e) => setRatingId(e.target.value)}
              >
                <option value="0">Select</option>
                <option value="1">Very Bad</option>
                <option value="2">Bad</option>
                <option value="3">Good</option>
                <option value="4">Very Good</option>
                <option value="5">Excellent</option>
              </select>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Review
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleInputPassword1"
              value={review}
              onChange={(e) => setReview(e.target.value)}
            />
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>

      <UserFooter />
    </>
  );
};

export default RatingScreen;
