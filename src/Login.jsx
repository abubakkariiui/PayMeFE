import React from "react";
import { NavLink } from "react-router-dom";

const Login =() =>{
    return ( 
    <>
          <div className="my-5">
           <h1 className="text-center">Log In</h1> 
        </div>
        <div className="Container contact_div">
        <div className="row">
            <div className="col-md-6 col-10 mx-auto">
                <form>
<div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Email address</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@mail.com"/>
</div>
<div className="mb-3">
<label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/></div>
    <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Keep me signed in</label>
  </div>
 <div className="col-12">
 <NavLink to="/Profile" className="btn btn-outline-secondary" type="submit" id="btn">Log In</NavLink>
     
  </div>
</form>
</div>
</div>
</div>
    </>
    );
};
export default Login;