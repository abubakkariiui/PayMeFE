import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { FLogout, updateFProfile } from "../actions/franchiseActions";

const FranchiseProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [picMessage, setPicMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const franchiseLogin = useSelector((state) => state.franchiseLogin);
  const { fInfo } = franchiseLogin;

  const franchiseUpdate = useSelector((state) => state.franchiseUpdate);
  const { loading, error, success } = franchiseUpdate;

  const notify = () => {};

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
    if (fInfo) {
      setName(fInfo.name);
      setEmail(fInfo.email);
      setPic(fInfo.pic);
    }
  }, [fInfo, navigate]);

  const logoutHandler = () => {
    dispatch(FLogout());
    navigate("/");
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateFProfile({
        name,
        email,
        password,
        pic,
      })
    );
    toast.success("Profile Updated Successfully");
    if (password == confirmPassword) {
      dispatch(
        updateFProfile({
          password,
        })
      );
      toast.success("Password Updatd");
    } else {
      toast.info("Password is not updated");
      toast.error("Password and confirm Password Donot match");
    }
  };

  return (
    <>
      <div className="mb-3">
        <div>
          <NavLink to="/franchise" style={{ marginLeft: 150 }}>
            Back
          </NavLink>
        </div>
        <h1 className="text-center text-uppercase">Franchise Profile</h1>
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
                    required
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

export default FranchiseProfile;
