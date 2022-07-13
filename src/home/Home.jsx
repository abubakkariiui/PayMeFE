import React from "react";
import pm from "../images/payme.svg";
import Common from "../home/Common";

const Home = () => {
  return (
    <>
      <Common
        intro="Send Money Anywhere with"
        imgsrc={pm}
        visit="/signup"
        btname="Get Started"
      />
    </>
  );
};
export default Home;
