import React from "react";
import { NavLink } from "react-router-dom";
const Common = () => {
  return (
    <div className="container" style={{ marginTop: 100 }}>
      <div className="row">
        <div className="col-md-6 text-center">
          <h4>Login as Accountant </h4>
          <NavLink className="btn btn-success" to="/accountantLogin">
            Log in
          </NavLink>
          <h4>Register as Accountant</h4>
          <NavLink className="btn btn-success" to="/accountantRegister">
            Register
          </NavLink>
        </div>
        <div className="col-md-6 text-center">
          <h4>Login as Accountant Handler </h4>
          <NavLink className="btn btn-success" to="/handlerLogin">
            Log in
          </NavLink>
          <h4>Register as Accountant Handler</h4>
          <NavLink className="btn btn-success" to="/handlerRegister">
            Register
          </NavLink>
        </div>
      </div>
      <hr />
      <div className="row mt-5">
        <div className="col-md-6 text-center">
          <h4>Login as CSR </h4>
          <NavLink className="btn btn-success" to="/csrLogin">
            Log in
          </NavLink>
          <h4>Register as CSR</h4>
          <NavLink className="btn btn-success" to="/csrRegister">
            Register
          </NavLink>
        </div>
        <div className="col-md-6 text-center">
          <h4>Login as Franchise Manager</h4>
          <NavLink className="btn btn-success" to="/franchiseLogin">
            Log in
          </NavLink>
          <h4>Register as Franchise Manager</h4>
          <NavLink className="btn btn-success" to="/franchiseRegister">
            Register
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default Common;
