import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import wallet from "../images/wallet-icon.svg";
import cs from "../images/customer-service.svg";
import his from "../images/history_icon.svg";
import setting from "../images/settings.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../actions/userActions";
import RecentActivity from './RecentActivity'
const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdate = useSelector((state) => state.userUpdate);
  const { loading, error, success } = userUpdate;

  useEffect(() => {
    if (!userInfo) {
      navigate("/");
    } else {
      setName(userInfo.name);
      setImage(userInfo.pic);
    }
  }, [userInfo]);

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="container-fluid" style={{ margin: "0px 90px" }}>
        <div className="row">
          <div className="col-2">
            <div className="card churai cd">
              <img
                src={image}
                className="card-img-top"
                width="180"
                height="189"
                alt="image"
              />
              <div className="card-body text-center">
                <h5 className="card-title text-uppercase">{name}</h5>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/wallet">
                <img src={wallet} className="card-img-top" alt="..." />
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">Wallet</h5>
              </div>
            </div>
          </div>

          <div className="col-2">
            <div className="card churai cd">
              <NavLink to="/history">
                <img src={his} className="card-img-top" alt="/history" />{" "}
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">History</h5>
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
              <NavLink to="/userProfile">
                <img src={setting} className="card-img-top" alt="..." />
              </NavLink>
              <div className="card-body">
                <h5 className="card-title text-center">Settings</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RecentActivity />
    </>
  );
};
export default Profile;
