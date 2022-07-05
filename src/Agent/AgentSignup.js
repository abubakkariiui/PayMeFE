import { registerAgent } from "../actions/agentActions";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

const AgentSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");


  const navigate = useNavigate();
  const dispatch = useDispatch();
  const agentRegister = useSelector((state) => state.agentRegister);
  const { agentInfo } = agentRegister;

  useEffect(() => {
    if (agentInfo) {
      navigate("/agentLogin");
    }
  }, [agentInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmpassword) {
    } else
      dispatch(
        registerAgent(
          name,
          email,
          password,
          address,
        )
      );
  }

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
                  <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long, contain letters
                    and numbers, and must not contain spaces, special
                    characters, or emoji.
                  </div>
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
    </>
  );
};

export default AgentSignup;
