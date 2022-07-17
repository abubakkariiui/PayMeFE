import React, { useState } from "react";
import img from "../images/coins.png";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const Wallet = () => {
  const [money, setMoney] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      setMoney(userInfo.amount);
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
            <NavLink to="/sendMoney" className="btn btn-secondary">
              Send Money
            </NavLink>{" "}
          </div>
        </div>
      </div>
    </>
  );
};
export default Wallet;
