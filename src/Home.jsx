import React from "react";
import pm from "../src/images/payme.svg";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        intro="Send Money Anywhere with"
        imgsrc={pm}
        visit="/Signin"
        btname="Get Started"
      />
    </>
  );
};
export default Home;
