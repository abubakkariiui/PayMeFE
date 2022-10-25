import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { FLogin } from "../actions/franchiseActions";
import { toast, ToastContainer } from "react-toastify";

const FranchiseLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const franchiseLogin = useSelector((state) => state.franchiseLogin);
  const { loading, error, fInfo } = franchiseLogin;

  useEffect(() => {
    if (fInfo) {
      if (fInfo.isApprove === false) {
        return
      } else {
        navigate("/franchiseProfile");
      }
    }
  }, [fInfo, navigate]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(FLogin(email, password));
    toast.warning("Account not approved.");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">FRANCHISE LOGIN</h1>
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

export default FranchiseLogin;
