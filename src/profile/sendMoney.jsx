import React from "react";
import bank from "../images/bank.svg";
import agent from "../images/agent.png";
import transfer from "../images/transfer.png";
import { NavLink } from "react-router-dom";

const sendMoney = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row  gy-7">
          <div className="col-10 mx-auto">
            <div className="row g-5">
              <div className="col-md-4 col-10 mx-auto">
                <div className="card border-0">
                  <img src={bank} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{}</h5>
                    <h4 className="card-text">
                      Transfer money from PayMe account to a bank account.
                    </h4>
                    <NavLink to="/bankTransfer" className="btn btn-secondary">
                      Bank transfer
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card border-0">
                  <img src={transfer} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{}</h5>
                    <h4 className="card-text">
                      Transfer money from PayMe to another PayMe account.
                    </h4>
                    <NavLink to="/transfer" className="btn btn-secondary">
                      PayMe transfer
                    </NavLink>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-10 mx-auto">
                <div className="card border-0">
                  <img src={agent} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title font-weight-bold">{}</h5>
                    <h4 className="card-text">
                      Withdraw cash from PayMe agent.
                    </h4>
                    <NavLink to="/transAgent" className="btn btn-secondary">
                      Agent transfer
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default sendMoney;
