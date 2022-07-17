import React from "react";
import { NavLink } from "react-router-dom";

const transAgent = () => {
  return (
    <>
      <form className="container">
        <h2 className="text-center">Withdraw from Agent</h2>
        <div className="mb-3 ">
          <label className="form-label">
            Select Franchise
          </label>

          <select className="form-select">
            <option selected>Branch...</option>
            <option value="1">Valancia Town</option>
            <option value="2">Muslim Town</option>
            <option value="3">Wapda Town</option>
            <option value="3">Gawal Manddi</option>
          </select>

          <br></br>

          <label className="form-label">
            Agent Number
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Number"
          />
          <br></br>
          <label className="form-label">
            Enter Amount
          </label>
          <div className="input-group ">
            <span className="input-group-text">$</span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter amount to transfer"
            ></input>
          </div>
          <div className="form-text">
            Make sure enter correct information before making request
          </div>
          <NavLink to="/Tpin">
            {" "}
            <button type="submit" className="btn btn-secondary">
              Request withdrawal
            </button>
          </NavLink>
        </div>
      </form>
    </>
  );
};
export default transAgent;
