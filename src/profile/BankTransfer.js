import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const BankTransfer = () => {
  const [receiverNumber, setReceiverNumber] = useState();
  const [amount, setAmount] = useState(0);
  const [senderNumber, setSenderNumber] = useState();
  const [senderName, setSenderName] = useState();

  const [receiverName, setReceiverName] = useState();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/history/moneyBank", {
        receiverNumber,
        amount,
        senderNumber,
        receiverName,
        senderName
      })
      .then((res) => {
        setAmount("");
        setReceiverNumber("");
        setReceiverName("");
        toast.success("Money Send");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (userInfo) {
      setSenderName(userInfo.name);
      setSenderNumber(userInfo.phone);
    }
  }, [userInfo]);

  return (
    <>
      <form className="container" onSubmit={submitHandler}>
        <h2 className="text-center">PayMe to Bank Transfer</h2>
        <div className="mb-3 ">
          <label className="form-label">Bank Name</label>
          <input
            type="text"
            value={receiverName}
            name="receiverName"
            onChange={(e) => setReceiverName(e.target.value)}
            className="form-control"
            placeholder="Enter Bank Name"
          />
          <br></br>
          <label className="form-label">Account Number</label>
          <input
            type="number"
            className="form-control"
            value={receiverNumber}
            name="receiverNumber"
            onChange={(e) => setReceiverNumber(e.target.value)}
            id="reciverNumber"
            placeholder="Enter reciver's bank account number"
            aria-describedby="emailHelp"
          />
          <br></br>
          <label className="form-label">Enter Amount</label>
          <div className="input-group ">
            <span className="input-group-text">$</span>
            <input
              type="number"
              value={amount}
              name="amount"
              onChange={(e) => setAmount(e.target.value)}
              className="form-control"
              id="Amount"
              placeholder="Enter amount to transfer"
            ></input>
          </div>
          <br />
          <label className="form-label">Sender Number</label>
          <div className="input-group ">
            <input
              type="number"
              value={senderNumber}
              name="senderNumber"
              onChange={(e) => setSenderNumber(e.target.value)}
              disabled
              className="form-control"
              placeholder="Sender Number"
            ></input>
          </div>
          <br />
          <label className="form-label">Sender Name</label>
          <div className="input-group ">
            <input
              type="text"
              value={senderName}
              name="senderName"
              onChange={(e) => setSenderName(e.target.value)}
              disabled
              className="form-control"
              placeholder="Sender Name"
            ></input>
          </div>
          <div className="form-text">
            Make sure enter correct information before confirmation
          </div>
          <button type="submit" className="btn btn-success">
            Confirm
          </button>
        </div>
      </form>
      <ToastContainer autoClose={2000} position="top-right" theme="dark" />
    </>
  );
};

export default BankTransfer;
