import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'

const AdminProfile = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [pic, setPic] = useState("");
  const [picMessage, setPicMessage] = useState();
  const [city, setCity] = useState("");
  const [franchise, setFranchise] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const notify = () => {};

  const postDetails = (pics) => {

  }

  const logoutHandler = () => {
  };
  const submitHandler = () => {

  }

  return (
    <>
      <div className="mb-3">
        <div>
          <NavLink to="/admin" style={{ marginLeft: 150 }}>
            Back
          </NavLink>
        </div>
        <h1 className="text-center text-uppercase">Admin Profile</h1>
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
              <div className="mb-3">
                <label className="form-label">Franchise</label>
                <input disabled
                  type="text"
                  name="franchise"
                  value={franchise}
                  onChange={(e) => setFranchise(e.target.value)}
                  className="form-control"
                  placeholder="Franchise"
                />
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
  )
}

export default AdminProfile