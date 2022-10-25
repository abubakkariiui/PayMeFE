import React, { useEffect, useState } from "react";
import wallet from "../../src/images/wallet-icon.svg";
import his from "../../src/images/history_icon.svg";
import setting from "../../src/images/settings.svg";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const [pic, setPic] = useState();
  const [name, setName] = useState("");

  const adminLogin = useSelector((state) => state.adminLogin);
  const { adminInfo } = adminLogin;

  useEffect(() => {
    if (!adminInfo) {
      setName(adminInfo.name);
      setPic(adminInfo.pic);
    }
  }, [adminInfo]);

  return (
    <>
      <div className="container-fluid" style={{ margin: "100px 0px" }}>
        <div className="row">
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
              <NavLink to="/allAccountHandler">
                <img src={his} className="card-img-top" alt="img" />{" "}
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">All Account Handler</h5>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/allAccountant">
                <img src={his} className="card-img-top" alt="img" />{" "}
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">All Accountants</h5>
              </div>
            </div>
          </div>
          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/allCSR">
                <img src={his} className="card-img-top" alt="img" />{" "}
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">All CSR</h5>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/allFranchises">
                <img src={his} className="card-img-top" alt="img" />{" "}
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">All Franchises</h5>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/adminProfile">
                <img src={setting} className="card-img-top" alt="img" />
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">Settings</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
