import React from "react";
import web from "../images/svg-1.svg";
import Common from "../home/Common";
import app from "../images/app.svg";
import play from "../images/play.svg";
import master from "../images/master.svg";
import visa from "../images/visa.svg";


const About =() =>{
    return ( 
    <>
    <Common intro='Interest free and secure transactions' 
    imgsrc={web} 
    visit="/Contact" 
    btname="Contact Now"/>

<article id="header" className="info">
        <div className="container-fluid ">
            <div className= "row">
                <div className="col-10 mx-auto">
                <div className= "row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h2><strong className="brand-name">Install App</strong></h2>
                    <h2 className="my-3">
                    From App Store or Google Play
                    </h2>
                    <div className="mt-3">
                    <img src={app} width={100} height={100} alt="" />
          <img src={play} width={100} height={100} alt="" />
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                <h2 className="text-start"><strong> Secured Payment Gateways</strong></h2>
        <img className="img-fluid rounded float-start" src={visa} width={100} height={100} alt="logo" /> 
        <img className="img-fluid rounded float-start" src={master} width={100} height={100} alt="logo" />                    
                   
                </div>
                </div>
                </div>
            </div>
        </div>
        </article>
    </>
    );
};
export default About;