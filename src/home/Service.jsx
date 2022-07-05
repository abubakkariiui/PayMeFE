import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";
const Service =() =>{
    return ( 
    <>
        <div className="my-5">
         <h1 className="text-center"> Our Services </h1>    
        </div>
        <div className="container-fluid">
            <div className= "row  gy-7">
                <div className="col-8 mx-auto">
                <div className="row g-4">
                {
                  Sdata.map((val, ind) =>{
                    return <Card key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    />
                  })
                }
                </div>
              </div>
            </div>
        </div>
    </>

    );
};
export default Service;