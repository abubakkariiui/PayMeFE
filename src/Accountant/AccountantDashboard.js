/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import his from "../../src/images/history_icon.svg";
import setting from "../../src/images/settings.svg";
import { useSelector } from "react-redux";

const AccountantDashboard = () => {
  const [name, setName] = useState();
  const [pic, setPic] = useState();

  const accountantLogin = useSelector((state) => state.accountantLogin);
  const { accountantInfo } = accountantLogin;

  useEffect(() => {
    if (accountantInfo) {
      setName(accountantInfo.name);
      setPic(accountantInfo.pic);
    }
  }, [accountantInfo]);

  return (
    <>
      <div className="container-fluid" style={{ margin: "100px 0px" }}>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-1"></div>
          <div className="col-2">
            <div className="card churai cd">
              <img
                src={pic}
                className="card-img-top"
                width="180"
                height="186"
                alt="image"
              />
              <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/AccountantList">
                <img src={his} className="card-img-top" alt="/history" />{" "}
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">All Transaction</h5>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/accountantProfile">
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
    </>
  );
};

export default AccountantDashboard;
