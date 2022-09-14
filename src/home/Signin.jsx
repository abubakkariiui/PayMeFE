import React, { useEffect, useState } from "react";
import { register } from "./../actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [picMessage, setPicMessage] = useState("");
  const [picMessage1, setPicMessage1] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cnic, setCnic] = useState("");
  const [backCNIC, setBackCNIC] = useState();
  const [frontCNIC, setFrontCNIC] = useState();
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );

  const postDetails = (pics) => {
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setFrontCNIC(data.url.toString());
          toast.success("Image Uploaded");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage("Please Select an Image");
    }
  };

  const postDetails1 = (pics) => {
    setPicMessage1(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notezipper");
      data.append("cloud_name", "piyushproj");
      fetch("https://api.cloudinary.com/v1_1/piyushproj/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          setBackCNIC(data.url.toString());
          toast.success("Image Uploaded");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return setPicMessage1("Please Select an Image");
    }
  };

  const notify = () => {};
  const dispatch = useDispatch();

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      toast.error("Password and Confirm Password Do not Match");
      return;
    } else
      dispatch(
        register(
          name,
          email,
          password,
          pic,
          phone,
          city,
          postalCode,
          address,
          cnic,
          frontCNIC,
          backCNIC
        )
      );
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Sign Up</h1>
        <p className="text-center">
          Sign up as <Link to="/agentRegister">Agent</Link>
        </p>
      </div>
      <div className="Container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <div className="row">
                <div className=" col-md-6 mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="form-control"
                    placeholder="Address"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="city"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="form-control"
                    placeholder="City"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Postal Code</label>
                  <input
                    type="number"
                    name="postalCode"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    className="form-control"
                    placeholder="Postal Code"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    type="number"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="form-control"
                    placeholder="00000000000"
                  />
                </div>
              </div>
              <div className="row">
                <div className="mb-3 col-md-6">
                  <label className="form-label">CNIC</label>
                  <input
                    type="number"
                    name="cnic"
                    value={cnic}
                    onChange={(e) => setCnic(e.target.value)}
                    className="form-control"
                    placeholder="CNIC"
                  />
                </div>
                <div className="mb-3 col-md-6">
                  <label className="form-label">DOB</label>
                  <input
                    type="date"
                    name="dob"
                    className="form-control"
                    placeholder="DOB"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    id="inputPassword5"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Confirm Password</label>
                  <input
                    type="password"
                    name="password"
                    value={confirmpassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="form-control"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Front Image Of CNIC</label>
                  <span>
                    <input
                      type="file"
                      name="image"
                      id="imageUpload"
                      onChange={(e) => postDetails(e.target.files[0])}
                      accept=".png, .jpg, .jpeg"
                    />
                  </span>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Back Image Of CNIC</label>
                  <span>
                    <input
                      type="file"
                      name="image"
                      id="imageUpload"
                      onChange={(e) => postDetails1(e.target.files[0])}
                      accept=".png, .jpg, .jpeg"
                    />
                  </span>
                </div>
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" />
                <label className="form-check-label">
                  Agree to terms and conditions
                </label>
              </div>
              <div style={{ float: "right" }}>
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="btn"
                  onClick={notify}
                >
                  Register
                </button>
                <br />
                <br />
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} position="top-right" theme="dark" />
    </>
  );
};
export default Signin;
