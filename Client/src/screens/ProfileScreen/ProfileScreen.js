import React, { useEffect, useState } from "react";
import "./ProfileScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { updateProfileDetails } from "../../actions/userAuthAction";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const [toggle, setToggle] = useState(false);

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [contact, setContact] = useState();
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");

  const data = useSelector((state) => state.userSignin);
  let user = data.response;

  const navigate = useNavigate();

  const onEditClick = () => {
    setToggle(true);
    //navigate("/editProfile")
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setFname(user.fname);
    setLname(user.lname);
    setEmail(user.email);
    setDob(user.dob);
    setContact(user.contact);
    setAddress(user.address);
    setGender(user.gender);
  }, []);

  const updateProfile = (e) => {
    e.preventDefault();
    const updateDetails = {
      id: user.id,
      fname,
      lname,
      email,
      contact,
      gender,
      dob,
      address,
    };

    dispatch(updateProfileDetails(updateDetails, toast));
    
    setToggle(false);
  };

  return (
    <>
      {!toggle ? user && (
        <div class="container mt-4 mb-4 d-flex justify-content-center">
          <div class="card p-4 profile_card">
            <div class="image  profile_img">
              <span class="idd">
                <div className="row">
                  <div className="col-md-4 col-sm-12">Email -</div>
                  <div className="col-md-8 col-sm-12">
                    <span class="text-muted">{user.email}</span>
                  </div>
                </div>
              </span>
              <span class="idd">
                <div className="row">
                  <div className="col-md-4 col-sm-12">Contact -</div>
                  <div className="col-md-8 col-sm-12">
                    <span class="text-muted">{user.contact}</span>
                  </div>
                </div>
              </span>
              <span class="idd">
                <div className="row">
                  <div className="col-md-4 col-sm-12">Gender -</div>
                  <div className="col-md-8 col-sm-12">
                    <span class="text-muted">{user.gender}</span>
                  </div>
                </div>
              </span>
              <span class="idd">
                <div className="row">
                  <div className="col-md-4 col-sm-12">Birth date -</div>
                  <div className="col-md-8 col-sm-12">
                    <span class="text-muted">{user.dob}</span>
                  </div>
                </div>
              </span>
              <span class="idd">
                <div className="row">
                  <div className="col-md-4 col-sm-12">Address -</div>
                  <div className="col-md-8 col-sm-12">
                    <span class="text-muted">{user.address}</span>
                  </div>
                </div>
              </span>

              <div className="row mt-4">
                <div className="col-md-6 col-sm-12">
                  <button class="btn1 btn-dark" onClick={onEditClick}>
                    Edit Profile
                  </button>
                </div>
                <div className="col-md-6 col-sm-12">
                  <span class="join">Joined Dec,2023</span>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      ) : (
        <>
          <form onSubmit={updateProfile}>
            <div className="row">
              <div className="col-md-4 col-sm-12">
                <p className="publish_ride_labels">First Name:</p>
              </div>
              <div className="col-md-8 col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="fname"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-4 col-sm-12">
                <p className="publish_ride_labels">Last Name:</p>
              </div>
              <div className="col-md-8 col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="lname"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-4 col-sm-12">
                <p className="publish_ride_labels">Email:</p>
              </div>
              <div className="col-md-8 col-sm-12">
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-4 col-sm-12">
                <p className="publish_ride_labels">Contact:</p>
              </div>
              <div className="col-md-8 col-sm-12">
                <input
                  type="number"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="contact"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-4 col-sm-12">
                <p className="publish_ride_labels">Gender:</p>
              </div>
              <div className="col-md-8 col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-4 col-sm-12">
                <p className="publish_ride_labels">Birth date:</p>
              </div>
              <div className="col-md-8 col-sm-12">
                <input
                  type="date"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="dob"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>
            </div>

            <div className="row mt-2">
              <div className="col-md-4 col-sm-12">
                <p className="publish_ride_labels">Address:</p>
              </div>
              <div className="col-md-8 col-sm-12">
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            </div>

            <button type="submit" class="btn btn-primary mt-3" data-bs-dismiss="modal"
                aria-label="Close">
              Update
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default ProfileScreen;
