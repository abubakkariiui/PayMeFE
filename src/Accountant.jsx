import React from "react";
import { NavLink } from "react-router-dom";

const Accountant = () => {
  return (
    <>
      <NavLink
        to="/accountHandler"
        className="btn btn-outline-secondary"
        type="submit"
        id="btn"
      >
        Log In
      </NavLink>
    </>
  );
};

export default Accountant;
