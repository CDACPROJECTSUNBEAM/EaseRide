import React, { useEffect, useState } from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getDriverDetails, getVehicleDetails } from "../../actions/userAuthAction";
import { toast } from "react-toastify";

const BookRide = () => {

    const [seats, setSeats] = useState();
    const [validation, setValidation] = useState("");

  const dispatch = useDispatch();

  const data = useSelector((state) => state.userSignin);
  let user = data.response;

  const driverData = useSelector((state) => state.driver);
  let driver = driverData.response;
  console.log(driver);

  const vehicleData = useSelector((state) => state.driverVehicles);
  let vehicle = vehicleData.response;
  console.log(driver);

  let { driverId, vehicleId, rideId } = useParams();

  useEffect(() => {
    dispatch(getDriverDetails(driverId));
    dispatch(getVehicleDetails(driverId, vehicleId));
  }, []);

  const submitData = (e) => {
    e.preventDefault();

    if(seats <= 0){
        setValidation("Seat selection should be greater than zero!!");
    }else{
        let seatsBook = {
            noOfSeats: seats,
        }
          
            fetch(`http://localhost:8081/api/users/bookRide/${user.id}/${rideId}`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(seatsBook),
              })
              .then(response => response.json())
              .then(data => {
                toast.success("Booking request successful")
              })
              .catch(error => {
                toast.error("Seats not available!!")
              });
          
    
        setSeats(0);
        setValidation("");
    }
  };

  return (
    <>
      <UserNavbar user={user} link={"/user"} />

      <div className="container mt-5 text-center">
        <div className="row">
          <div class="col-md-6 col-xl-6">
            <div class="card bg-c-blue order-card">
              <div class="card-block">
                <h4 class="m-b-20">Driver Details</h4>
                <h6 class="text-right">
                  <span>Name - {driver?.fname} {driver?.lname}</span>
                  <br />
                  <span>Contact No. - {driver?.contact}</span>
                  <br />
                  <span>Rating - 5</span>
                </h6>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-xl-6">
            <div class="card bg-c-blue order-card text-center">
              <div class="card-block">
                <h4 class="m-b-20">Vehicle Details</h4>
                <h6 class="text-right">
                  <span>Company - {vehicle?.company}</span>
                  <br />
                  <span>Model - {vehicle?.model}</span>
                  <br />
                  <span>Vehicle Number - {vehicle?.rcNumber}</span>
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-content-center padding my-5">
          <div class="col-md-8 ftco-animate fadeInUp ftco-animated">
            <form onSubmit={submitData} class="domain-form">
              <div class="form-group d-md-flex">
                <input
                  type="number"
                  class="form-control px-4"
                  placeholder="Enter no. of seats..."
                  value={seats}
                  name="seats"
                  onChange={(e) => setSeats(e.target.value)}
                />
                <input
                  type="submit"
                  class="search-domain btn btn-primary px-5"
                  value="Book"
                />
              </div>
              <div className="d-flex justify-content-center mt-2">
                      <span class="badge w-50" style={{backgroundColor: "#f04c47"}}>{validation}</span>
                      </div>
            </form>
          </div>
        </div>
      </div>

      <UserFooter />
    </>
  );
};

export default BookRide;
