import React from "react";
import { NavLink } from "react-router-dom";

const transBank =() =>{
    return ( 
    <>
         <form className="container">
  <h2 className="text-center">PayMe to Bank Transfer</h2>
  <div className="mb-3 ">
  <label for="reciverNumber" className="form-label">Select Bank</label>
  
 
  <select className="form-select" id="inputGroupSelect01">
    <option selected>Choose...</option>
    <option value="1">HBL</option>
    <option value="2">UBL</option>
    <option value="3">Meezan Bank</option>
  </select>

  <br></br>
 
    <label for="reciverNumber" className="form-label">Account Number</label>
    <input type="text" className="form-control" id="reciverNumber" placeholder="Enter reciver's bank account number" aria-describedby="emailHelp"/>
<br></br>
  <label for="Amount"  className="form-label">Enter Amount</label>
  <div className="input-group ">
    
    <span className="input-group-text">$</span>
    <input type="text" className="form-control" id="Amount" placeholder="Enter amount to transfer"></input>
  </div>
  <div className="form-text">Make sure enter correct information before confirmation</div>
  <NavLink to="/Tpin"> <button type="submit" className="btn btn-success">Confirm</button>
</NavLink>
</div>
</form>
    </>

    );
};
export default transBank;