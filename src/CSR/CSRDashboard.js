import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import wallet from "../../src/images/wallet-icon.svg";
import his from "../../src/images/history_icon.svg";
import setting from "../../src/images/settings.svg";
import { useSelector } from "react-redux";

const CSRDashboard = () => {
  const [name, setName] = useState()
  const [pic, setPic] = useState()

  const csrLogin = useSelector((state) => state.csrLogin);
  const { csrInfo } = csrLogin;

  useEffect(() => {
    if (csrInfo) {
      setName(csrInfo.name);
      setPic(csrInfo.pic);
    }
  }, [csrInfo]);

  return (
    <>
      <div className="container-fluid" style={{margin: '100px 0px'}}>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-2">
            <div className="card churai cd">
              <img src={pic} className="card-img-top" width="180" height="186" alt="image" />
              <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/contactList">
                <img src={his} className="card-img-top" alt="/history" />{" "}
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">Contant List</h5>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/csrList">
                <img src={his} className="card-img-top" alt="/history" />{" "}
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">CSR List</h5>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/csrProfile">
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

export default CSRDashboard;
