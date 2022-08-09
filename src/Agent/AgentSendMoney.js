import React from "react";
import { NavLink } from "react-router-dom";
import bank from "../images/bank.svg";
import transfer from "../images/transfer.png";
const AgentSendMoney = () => {
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
                    <NavLink to="/transBank" className="btn btn-secondary">
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
                    <NavLink to="/tansferAgent" className="btn btn-secondary">
                      PayMe transfer
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

export default AgentSendMoney;
