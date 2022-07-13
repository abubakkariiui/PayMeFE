import React from "react";
import { NavLink } from "react-router-dom";
const accountHandler =() =>{
    return ( 
    <>
    <NavLink to="/Accountant" className="btn btn-outline-secondary" type="submit" id="btn">Log In</NavLink>

    </>
    )
}

export default accountHandler;