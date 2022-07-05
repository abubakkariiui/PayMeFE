import React from "react";
import { NavLink } from 'react-router-dom';
import dp from "../src/images/avatar.svg";
import wallet from "../src/images/wallet-icon.svg";
import bank from "../src/images/bank.svg";
import cs from "../src/images/customer-service.svg";
import his from "../src/images/history_icon.svg";
import setting from "../src/images/settings.svg";


const Profile =() => {
    return (
        <>

<div className="container-fluid">
  <div className="row">

    <div className="col-3">
    <div className="card" className="dp">
  <img src={dp} className="card-img-top" alt="..."/>
  <div className="card-body">
  <h5 className="card-title" >Ahsan Ejaz</h5>
    <a href="/" className="btn btn-secondary">Edit Profile</a>
  </div>
</div>
    </div>

    <div className="col-2">
    <div className="card" className="churai cd ">
  <img src={bank} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" className="text-center">Bank Transfer</h5>
  </div>
</div>
    </div>

    <div className="col-2">
    <div className="card" className="churai cd ">
    
    <NavLink to="/history" >     
  <img src={his} className="card-img-top" alt="/history" /> </NavLink>
  <div className="card-body">
  
    <h5 className="card-title" className="text-center">History</h5>
  
  </div>
</div>
    </div>
    
    <div className="col-2">
    <div className="card" className="churai cd ">
    <NavLink to="/CSR" > 
  <img src={cs} className="card-img-top" alt="..."/></NavLink>
  <div className="card-body">
    <h5 className="card-title" className="text-center">CSR</h5>
  </div>
</div>
    </div>

    <div className="col-2">
    <div className="card" className="churai cd ">
    
  <img src={setting} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" className="text-center">Settings</h5>
  </div>
</div>
    </div>
  </div>
  </div>

<div className="container-fluid">
  <div className="row">
    <div className="col-3">
    <div className="card" className="wallet">
    <NavLink to="/sendMoney" > 
  <img src={wallet} className="card-img-top" alt="..."/></NavLink>
  <div className="card-body">
    <h5 className="card-title">$10,101,10</h5>
    <a href="/" className="btn btn-secondary">Send Money</a>

  </div>
</div>
    </div>
    <div className="col-8">
    <table className="table table-striped table-hover tablee">
  <thead>
  <tr>
      <th colSpan="4" className="table-dark text-center">Recent Activity</th>
    </tr>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">deposit</th>
      <th scope="col">Sent</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>$200</td>
      <td>------</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>$30</td>
      <td>------</td>
    </tr>
    <tr>
    <th scope="row">4</th>
      <td>Faizan</td>
      <td>------</td>
      <td>$111</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Ahsan</td>
      <td>------</td>
      <td>$1009</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Hammad</td>
      <td>------</td>
      <td>$9</td>
    </tr>
  </tbody>
</table>

    </div>
  </div>
</div>
        </>
)
    }
export default Profile;