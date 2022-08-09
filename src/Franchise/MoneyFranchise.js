import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const MoneyFranchise = () => {
  const [receiverNumber, setReceiverNumber] = useState();
  const [amount, setAmount] = useState(0);

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/history/moneyFranchise", {
        receiverNumber,
        amount,
      })
      .then((res) => {
        setAmount("");
        setReceiverNumber("");
        toast.success("Money Send");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <form className="container" onSubmit={submitHandler}>
        <h2 className="text-center">AGENT TRANSFER</h2>
        <div className="col-auto">
          <label className="form-label">Receiver Number</label>
          <input
            type="number"
            value={receiverNumber}
            required
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
            required
            name="amount"
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
            placeholder="Enter amount to transfer"
          ></input>
        </div>

        <div className="form-text">
          Make sure enter correct information before confirmation
        </div>
        <button type="submit" className="btn btn-success">
          Confirm
        </button>
      </form>
      <ToastContainer autoClose={2000} position="top-right" theme="dark" />
    </>
  );
};

export default MoneyFranchise;
