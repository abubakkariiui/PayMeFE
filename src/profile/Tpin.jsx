import React from "react";


const Tpin =() =>{
    return ( 
    <>
         <form className="container">
  <h1 className="text-center">Tpin</h1>
  <div className="col-auto">
    <label for="reciverNumber" className="form-label">Tpin</label>
    <input type="text" className="form-control" id="reciverNumber" placeholder="Enter your 5 digit pin" aria-describedby="emailHelp"/>
  </div>
  <button type="submit" className="btn btn-success">Confirm</button>
</form>
    </>

    );
};
export default Tpin;