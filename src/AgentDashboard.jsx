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
  const [agentImage, setAgentImage] = useState('')
  const dispatch = useDispatch();

  const agentLogin = useSelector((state) => state.agentLogin);
  const { agentInfo } = agentLogin;

  useEffect(() => {
    if (!agentInfo) {
      navigate("/");
    } else {
      setName(agentInfo.name);
      setAgentImage(agentInfo.pic)
    }
  }, [agentInfo]);

  const logoutHandler = () => {
    dispatch(logoutAgent());
    navigate("/");
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2">
            <div className="card churai cd">
              <img src={agentImage} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">{name}</h5>

                <button onClick={logoutHandler}>logout</button>
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

      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-striped table-hover tablee">
              <thead>
                <tr>
                  <th colSpan="4" className="table-dark text-center">
                    Recent Activity
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
export default AgentDashboard;
