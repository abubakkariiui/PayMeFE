import { registerAgent } from "../actions/agentActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { toast, ToastContainer } from "react-toastify";

const AgentSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [picMessage, setPicMessage] = useState("");
  const [picMessage1, setPicMessage1] = useState("");
  const [pranchiseName, setPranchiseName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState();
  const [backCNIC, setBackCNIC] = useState();
  const [frontCNIC, setFrontCNIC] = useState();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { agentInfo } = userRegister;

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
    if (agentInfo) {
      navigate("/agentLogin");
    }
  }, [agentInfo, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
      toast.success("Password and Comfirm Password donot match");
      return;
    } else
      dispatch(
        registerAgent(
          name,
          email,
          address,
          phone,
          pranchiseName,
          password,
          frontCNIC,
          backCNIC
        )
      );
    navigate("/agentLogin");
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Agent SignUp</h1>
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
                    placeholder="Ahsan Ejaz"
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
                    placeholder="name@mail.com"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control"
                  placeholder="Lahore"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone</label>
                <input
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  placeholder="00000000"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Select Franchise</label>
                <select
                  className="form-select"
                  name="pranchiseName"
                  value={pranchiseName}
                  onChange={(e) => setPranchiseName(e.target.value)}
                >
                  <option value="Commercial Market" selected>
                    Commercial Market
                  </option>
                  <option value="Valancia Town">Valancia Town</option>
                  <option value="Muslim Town">Muslim Town</option>
                  <option value="Wapda Town">Wapda Town</option>
                  <option value="Gawal Manddi">Gawal Manddi</option>
                </select>
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

export default AgentSignup;
