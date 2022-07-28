import React from "react";
import { NavLink } from "react-router-dom";
const Common = () => {
  return (
    <div className="container" style={{ marginTop: 150 }}>
      <div className="row">
        <div className="col-md-3 text-center">
          <h4>Login as Admin </h4>
          <NavLink className="btn btn-success" to="/adminLogin">
            Log in
          </NavLink>
          <h4>Register as Admin </h4>
          <NavLink className="btn btn-success" to="/adminRegister">
            Register
          </NavLink>
        </div>
        <div className="col-md-3 text-center">
          <h4>Login as Accountant </h4>
          <NavLink className="btn btn-success" to="/accountantLogin">
            Log in
          </NavLink>
          <h4>Register as Accountant</h4>
          <NavLink className="btn btn-success" to="/accountantRegister">
            Register
          </NavLink>
        </div>
        <div className="col-md-3 text-center">
          <h4>Login as CSR </h4>
          <NavLink className="btn btn-success" to="/csrLogin">
            Log in
          </NavLink>
          <h4>Register as CSR</h4>
          <NavLink className="btn btn-success" to="/csrRegister">
            Register
          </NavLink>
        </div>
        <div className="col-md-3 text-center">
        <h4>Login as  Franchise Manager</h4>
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
