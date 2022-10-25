import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAgent } from "../actions/agentActions";
import { toast, ToastContainer } from "react-toastify";

const AgentSignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const agentLogin = useSelector((state) => state.agentLogin);
  const { agentInfo } = agentLogin;
  useEffect(() => {
    if (agentInfo) {
      if (agentInfo.isApprove === false) {
        return;
      }
      navigate("/agentProfile");
    }
  }, [agentInfo, navigate]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginAgent(email, password));
    toast.warning("Account not approved.");
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Agent LogIn</h1>
      </div>
      <div className="Container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="email"
                  required
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
                />
              </div>
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="btn"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer autoClose={2000} position="top-right" theme="dark" />
    </>
  );
};

export default AgentSignIn;
