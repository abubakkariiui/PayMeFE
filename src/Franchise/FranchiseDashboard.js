import React from "react";
import { NavLink } from "react-router-dom";

import wallet from "../../src/images/wallet-icon.svg";
import his from "../../src/images/history_icon.svg";
import setting from "../../src/images/settings.svg";

const FranchiseDashboard = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-1"></div>
          <div className="col-2">
            <div className="card churai cd">
              <img src={wallet} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">Franchise</h5>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/allAgents">
                <img src={his} className="card-img-top" alt="/history" />{" "}
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">All Agents</h5>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/franchiseProfile">
                <img src={setting} className="card-img-top" alt="..." />
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">Settings</h5>
              </div>
            </div>
          </div>
          <div className="col-2"></div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-striped table-hover tablee">
              <thead>
                <tr>
                  <th colSpan="4" className="table-dark text-center">
                    Agents
                  </th>
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
  );
};

export default FranchiseDashboard;
