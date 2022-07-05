import React from "react";
import { NavLink } from "react-router-dom";

const transPayme =() =>{
    return ( 
    <>
         <form className="container">
  <h2 className="text-center">PayMe to PayMe Transfer</h2>
  <div className="col-auto">
    <label for="reciverNumber" className="form-label">Account Number</label>
    <input type="text" className="form-control" id="reciverNumber" placeholder="Enter reciver's number" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label for="Amount"  className="form-label">Enter Amount</label>
    <input type="text" className="form-control" id="Amount" placeholder="Enter amount to transfer"></input>
  </div>
  <div className="form-text">Make sure enter correct information before confirmation</div>
  <NavLink to="/Tpin"> <button type="submit" className="btn btn-success">Confirm</button>
</NavLink>
</form>
    </>

    );
};
export default transPayme;