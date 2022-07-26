import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { loginFranchise } from '../actions/franchiseActions';

const FLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const franchiseLogin = useSelector((state) => state.franchiseLogin);
  const { testInfo } = franchiseLogin;

  useEffect(() => {
    if (testInfo) {
      localStorage.getItem('testInfo');
      navigate("/fprofile");
    }
  }, [testInfo,navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginFranchise(email, password));
    setTimeout(() => {
      window.location.reload();
    },1000)
  };

  return (
    <>
    <div className="my-5">
        <h1 className="text-center">Franchise LogIn</h1>
      </div>
      <div className="Container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  placeholder="email"
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
    </>
  )
}

export default FLogin