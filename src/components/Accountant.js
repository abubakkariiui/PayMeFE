import axios from "axios";
import React, { useEffect, useState } from "react";
const Accountant = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/history").then((res) => {
      console.log(res.data);
      setData(res.data);
    },[]);
  });
  return (
    <>
      <br />
      <br />
      <br />
      <div className="container">
        <div style={{float: 'right'}}>
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Username"
            aria-label="Username"
          />
        </div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th colSpan="8" className="table-dark text-center">
                Transaction History
              </th>
            </tr>
            <tr>
              <th scope="col">Recever Name</th>
              <th scope="col">SenderName</th>
              <th scope="col">Receiver Phone</th>
              <th scope="col">Sender Phone</th>
              <th scope="col">Amount</th>
              <th scope="col">Date</th>
            </tr>
          </thead>
          {data.map((d) => (
            <tbody>
              <tr>
                <th>{d.receiverName}</th>
                <th>{d.senderName}</th>
                <th>{d.receiverNumber}</th>
                <th>{d.senderNumber}</th>
                <th>{d.amount}</th>
                <th>{d.createdAt}</th>
              </tr>
            </tbody>
          ))}
        </table>{" "}
      </div>
    </>
  );
};

export default Accountant;
