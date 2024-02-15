import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserNavbar from "../../components/UserNavbar/UserNavbar";
import UserFooter from "../../components/UserFooter/UserFooter";
import "./StatesScreen.css";
import { addState, getAllStates } from "../../actions/adminAuthAction";
import { toast } from "react-toastify";

const StatesScreen = () => {
    const [state, setState] = useState("");
  const data = useSelector((state) => state.userSignin);
  let user = data.response;
  const statesData = useSelector((state) => state.states);
  let states = statesData.response;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllStates());
  }, []);

  const submitData = (e) => {
    e.preventDefault();

    let stateDetails = {state};
    
    dispatch(addState(stateDetails, toast));
    setTimeout(() => {
      dispatch(getAllStates());
    }, 700);

    setState("");
  }

  return (
    <>
      <UserNavbar user={user} link={"/admin/home"} />

      <div class="container mt-5">
        <button data-bs-toggle="modal" data-bs-target="#exampleModal2" className="mb-4 btn btn-primary">
          Add State
        </button>
        <div class="row">
          {states &&
            states.map((s) => (
              <div class="col-md-4 col-xl-3">
                <div class="card bg-c-yellow order-card">
                  <div class="card-block">
                    <h6 class="m-b-20">{s.state}</h6>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Profile Modal */}
      <div
        class="modal fade"
        id="exampleModal2"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form onSubmit={submitData}>
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    State Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name="state"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>
                <button type="submit" class="btn btn-primary" data-bs-dismiss="modal"
                aria-label="Close">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <UserFooter />
    </>
  );
};

export default StatesScreen;
