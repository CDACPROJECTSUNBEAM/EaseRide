import React, { useEffect } from "react";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import "./PastBookings.css";
import { useDispatch, useSelector } from "react-redux";
import { getBookings } from "../../actions/userAuthAction";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import { toast } from "react-toastify";

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

  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e, amount, bId) => {
    const response = await fetch("http://localhost:5000/order", {
      method: "POST",
      body: JSON.stringify({
        amount,
        currency,
        receipt: receiptId,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_wvIH289sunj2Hj",
      amount,
      currency,
      name: "EaseRide",
      description: "Test Transaction",
      image: { logo },
      order_id: order.id,
      handler: async function (response) {
        const body = {
          ...response,
        };

        const validateRes = await fetch(
          "http://localhost:5000/order/validate",
          {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const jsonRes = await validateRes.json();
        console.log(jsonRes);
      },
      prefill: {
        name: "EaseRide",
        email: "easeride@example.com",
        contact: "9000000000",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();

    setTimeout(() => {
      fetch(`http://localhost:8081/api/drivers/acceptRide/${bId}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => {
        toast.success(`Payment of Rs.${amount/100} successful`);
      })
      .catch((error) => {
        toast.error("Payment Failed!!");
      });
    }, [60000])

    setTimeout(() => {
      dispatch(getBookings(user.id));
    }, [62000])
    
  };

  return (
    <>
      <UserNavbar user={user} link={"/user"} />

      <div className="container mt-5 past_bookings_container">
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Notification!</strong> Payment status will be updated after 1 min. on doing the payment.
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
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
              <th>Payment</th>
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
                    <td style={{ color: "red", fontWeight: "bold" }}>
                      {b.status}
                    </td>
                  ) : (
                    <td style={{ color: "lightgreen", fontWeight: "bold" }}>
                      {b.status}
                    </td>
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
                      onClick={() =>
                        navigate(`/user/rating/${b.rideIdDriverId}`)
                      }
                    >
                      <i class="fa fa-plus-square" aria-hidden="true"></i>
                    </button>
                  </td>
                  <td>
                    <button
                    className="btn btn-primary"
                      onClick={(e) => paymentHandler(e, b.price * 100, b.id)}
                      disabled={b.status === "ACCEPTED"}
                    >
                      Pay
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
