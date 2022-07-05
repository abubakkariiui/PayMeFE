import React,{useState,useEffect} from "react";
import { NavLink } from "react-router-dom";
import dp from "../images/avatar.svg";
import wallet from "../images/wallet-icon.svg";
import cs from "../images/customer-service.svg";
import his from "../images/history_icon.svg";
import setting from "../images/settings.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Profile = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('')
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
    }
  }, [userInfo]);

  const handleClick = () => {
    localStorage.clear();
    navigate("/signin");
  }


  return (
    <>
      <div className="container-fluid pCard">
        <div className="row">
          <div className="col-2">
            <div className="card churai cd">
              <img src={dp} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{name}</h5>

                <button onClick={handleClick}>logout</button>
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
export default Profile;
