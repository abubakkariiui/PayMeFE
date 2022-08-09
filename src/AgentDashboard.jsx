import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import dp from "../src/images/avatar.svg";
import wallet from "../src/images/wallet-icon.svg";
import bank from "../src/images/bank.svg";
import cs from "../src/images/customer-service.svg";
import his from "../src/images/history_icon.svg";
import setting from "../src/images/settings.svg";
import { useDispatch, useSelector } from "react-redux";
import { logoutAgent } from "./actions/agentActions";

const AgentDashboard = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [agentImage, setAgentImage] = useState("");
  const dispatch = useDispatch();

  const agentLogin = useSelector((state) => state.agentLogin);
  const { agentInfo } = agentLogin;

  useEffect(() => {
    if (!agentInfo) {
      navigate("/");
    } else {
      setName(agentInfo.name);
      setAgentImage(agentInfo.pic);
    }
  }, [agentInfo]);

  const logoutHandler = () => {
    dispatch(logoutAgent());
    navigate("/");
  };

  return (
    <>
      <div className="container-fluid" style={{ margin: "100px -25px" }}>
        <div className="row">
          <div className="col-2">
            <div className="card churai cd">
              <img
                src={agentImage}
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
              <NavLink to="/agentWallet">
                <img src={wallet} className="card-img-top" alt="..." />
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">Wallet</h5>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/userRequest">
                <img src={his} className="card-img-top" alt="/history" />{" "}
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">User Request</h5>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/CSR">
                <img src={cs} className="card-img-top" alt="..." />
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">CSR</h5>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="">
                <img src={his} className="card-img-top" alt="/history" />{" "}
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">History</h5>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/agentProfile">
                <img src={setting} className="card-img-top" alt="..." />
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
export default AgentDashboard;
