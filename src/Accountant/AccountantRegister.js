import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";
import { AccountantsRegister } from "../actions/accountantActions";
import "./Register.css";

const AccountantRegister = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [picMessage, setPicMessage] = useState("");
  const [picMessage1, setPicMessage1] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [cnic, setCnic] = useState();
  const [backCNIC, setBackCNIC] = useState();
  const [frontCNIC, setFrontCNIC] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const accountantRegister = useSelector((state) => state.accountantRegister);
  const { accountantInfo } = accountantRegister;

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

  useEffect(() => {
    if (accountantInfo) {
      navigate("/accountantLogin");
    }
  }, [accountantInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      toast.success("Password and Comfirm Password donot match");
      return;
    } else
      dispatch(AccountantsRegister(name, email, password, frontCNIC, backCNIC));
    toast.success("Please Login");
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">ACCOUNTANT SIGNUP</h1>
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
              <div>
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
                    aria-describedby="passwordHelpBlock"
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
                    id="exampleInputPassword1"
                  />
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
              </div>
              <div className="row">
                <div className="col-md-10 mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label">
                    Agree to terms and conditions
                  </label>
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-outline-secondary"
                    type="submit"
                    id="btn"
                  >
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} position="top-right" theme="dark" />
    </>
  );
};

export default AccountantRegister;
