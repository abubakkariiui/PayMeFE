import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
  return (
    <>
      <section id="header" className="row justify-content-md-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.intro} <strong className="brand-name">PayMe</strong>
                  </h1>
                  <h2 className="my-3">
                    Fintech based application for money transfer
                  </h2>

                  <div className="mt-3">
                    <NavLink
                      to={props.visit}
                      className="btn-get-started"
                      id="btn"
                    >
                      {props.btname}
                    </NavLink>
                  </div>
                  <div className="margin">
                    <h3>
                      {" "}
                      Have an account?{" "}
                      <NavLink to="/login" className="btn btn-secondary">
                        Log In
                      </NavLink>{" "}
                    </h3>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="common img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Common;
