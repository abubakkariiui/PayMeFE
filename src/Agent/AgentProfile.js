import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../profile/UserProfile.css";
import { logoutAgent, updateAgentProfile } from "./../actions/agentActions";
import { toast, ToastContainer } from "react-toastify";
const AgentProfile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [picMessage, setPicMessage] = useState();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const agentLogin = useSelector((state) => state.agentLogin);
  const { agentInfo } = agentLogin;
  const notify = () => {};
  const agentUpdate = useSelector((state) => state.agentUpdate);
  const { loading, error, success } = agentUpdate;

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
          setPic(data.url.toString());
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
    if (!agentInfo) {
      navigate("/agentProfile");
    } else {
      setName(agentInfo.name);
      setEmail(agentInfo.email);
      setPic(agentInfo.pic);
      console.log(agentInfo.name);
      console.log(agentInfo.email);
    }
  }, [agentInfo]);

  const logoutHandler = () => {
    dispatch(logoutAgent());
    navigate("/");
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateAgentProfile({
        name,
        email,
        password,
        pic,
      })
    );
    toast.success("Profile Updated Successfully");
    if (password == confirmPassword) {
      dispatch(
        updateAgentProfile({
          name,
          email,
          password,
          pic,
        })
      );
      toast.success("Password Updated");
    } else {
      toast.info("Password is not updated");
      toast.error("Password and confirm Password Donot match");
    }
  };
  return (
    <>
      <div className="mb-3">
        <h1 className="text-center">Agent Profile</h1>
      </div>
      <div className="Container contact_div">
        <div className="row">
          <div className="col-md-8 col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <div className="avatar-upload">
                <div className="avatar-edit">
                  <input
                    type="file"
                    name="image"
                    id="imageUpload"
                    onChange={(e) => postDetails(e.target.files[0])}
                    accept=".png, .jpg, .jpeg"
                  />
                  <label htmlFor="imageUpload"></label>
                </div>
                <div className="avatar-preview">
                  <div
                    id="imagePreview"
                    style={{ backgroundImage: `url(${pic})` }}
                  ></div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    placeholder="name"
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="form-control"
                  placeholder="Password"
                />
              </div>
              <div style={{ float: "right" }}>
                <button
                  className="btn btn-primary"
                  type="submit"
                  id="btn"
                  onClick={notify}
                >
                  Update
                </button>
              </div>
              <br />
              <br />
              <br />
            </form>
            <button
              className="btn btn-primary"
              type="submit"
              id="btn"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} position="top-right" theme="dark" />
    </>
  );
};

export default AgentProfile;
