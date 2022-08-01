import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Transfer = () => {
  const [receiverNumber, setReceiverNumber] = useState(0);
  const [amount, setAmount] = useState(0);
  const [senderNumber, setSenderNumber] = useState();
  const [senderPhone, setSenderPhone] = useState();

  const submitHandler = (e) => {
    // const data = { receiverNumber, amount };
    e.preventDefault();
    axios
      .post("/api/history/create", { receiverNumber, amount })
      .then((res) => {
        console.log("test");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form className="container" onSubmit={submitHandler}>
        <h2 className="text-center">PAYME to PayMe Transfer</h2>
        <div className="col-auto">
          <label className="form-label">Receiver Number</label>
          <input
            type="number"
            value={receiverNumber}
            name="receiverNumber"
            onChange={(e) => setReceiverNumber(e.target.value)}
            className="form-control"
            placeholder="Enter reciver's number"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Amount</label>
          <input
            type="number"
            value={amount}
            name="amount"
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
            placeholder="Enter amount to transfer"
          ></input>
        </div>
        {/* <div className="mb-3">
          <label className="form-label">Sender Number</label>
          <input
            type="text"
            value={senderNumber}
            name="senderNumber"
            onChange={(e) => setSenderNumber(e.target.value)}
            className="form-control"
            id="Amount"
            placeholder="Enter amount to transfer"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Sender Phone</label>
          <input
            type="text"
            value={senderPhone}
            name="senderPhone"
            onChange={(e) => setSenderPhone(e.target.value)}
            className="form-control"
            id="Amount"
            placeholder="Enter amount to transfer"
          ></input>
        </div> */}
        <div className="form-text">
          Make sure enter correct information before confirmation
        </div>
        <button type="submit" className="btn btn-success">
          Confirm
        </button>
      </form>
    </>
  );
};

export default Transfer;
