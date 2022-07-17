import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import img from "../images/coins.png";
const AgentWallet = () => {
  const [money, setMoney] = useState("");
  const dispatch = useDispatch();
  const agentLogin = useSelector((state) => state.agentLogin);
  const { agentInfo } = agentLogin;

  useEffect(() => {
    if (agentInfo) {
      setMoney(agentInfo.amount);
    }
  }, []);

  return (
    <>
      <div className="card mx-auto border-0" id="bgCard">
        <img className="card-img-top" src={img} alt="..." />
        <div className="card-img-overlay">
          <div className="card-body text-center wallet">
            <h1 className="card-title">{`${money} $`}</h1>
            <p className="card-text">Current Balance</p>
            <NavLink to="/agentMoney" className="btn btn-secondary">
              Send Money
            </NavLink>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentWallet;
