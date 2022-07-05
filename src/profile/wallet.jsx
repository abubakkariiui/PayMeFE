import React from "react";
import img from "../images/coins.png";

import { NavLink } from "react-router-dom";

const wallet =() =>{
    return ( 
    <>

    <div className="card mx-auto border-0" id="bgCard">
    <img className="card-img-top" src={img} alt="..."/>
    <div className="card-img-overlay">
  <div className="card-body text-center wallet">
    <h1 className="card-title">$100,00.00</h1>
    <p className="card-text">Current Balance</p>
    <NavLink to="/sendMoney" className="btn btn-secondary">Send Money</NavLink>  </div>
</div>
</div>

   
   
    
    
    
    </>

    );
};
export default wallet;