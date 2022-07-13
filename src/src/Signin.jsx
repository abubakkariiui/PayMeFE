import React from "react";
import { NavLink } from "react-router-dom";

const Signin =() =>{
    return ( 
    <>
          <div className="my-5">
           <h1 className="text-center">Sign In</h1> 
        </div>
        <div className="Container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Full Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Ahsan Ejaz"/>
</div>                
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
  <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="03024696946"/>
</div>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@mail.com"/>
</div> 
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">CNIC</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="85202-99223324-0"/>
</div> 
<div className="mb-3">
<label for="inputPassword5" className="form-label">Password</label>
<input type="password" id="inputPassword5" className="form-control" aria-describedby="passwordHelpBlock"/>
<div id="passwordHelpBlock" className="form-text">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</div>    
</div>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/></div>
    <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Agree to terms and conditions</label>
  </div>
 <div className="col-12">
 <NavLink to="/profile" className="btn btn-outline-secondary" type="submit" id="btn">Sign In</NavLink>
     
  </div>
</form>
</div>
</div>
</div>
    </>
    );
};
export default Signin;