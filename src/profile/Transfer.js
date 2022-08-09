import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Transfer = () => {
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
      .post("/api/history/create", {
        receiverNumber,
        amount,
        senderNumber,
        senderName,
        receiverName,
      })
      .then((res) => {
        setAmount("")
        setReceiverName("")
        setReceiverNumber("")
        setSenderName("")
        setSenderNumber("")
        toast.success("Money Send")
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
        <h2 className="text-center">PAYMENT TRANSFER</h2>
        <div className="mb-3">
          <label className="form-label">Receiver Name</label>
          <input
            type="text"
            name="receiverName"
            value={receiverName}
            className="form-control"
            id="receiverName"
            required
            placeholder="Enter Receiver Name"
            onChange={(e) => setReceiverName(e.target.value)}
          />
        </div>
        <div className="col-auto">
          <label className="form-label">Receiver Number</label>
          <input
            type="number"
            value={receiverNumber}
            name="receiverNumber"
            onChange={(e) => setReceiverNumber(e.target.value)}
            className="form-control"
            required
            placeholder="Enter reciver's number"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Enter Amount</label>
          <input
            type="number"
            value={amount}
            name="amount"
            required
            onChange={(e) => setAmount(e.target.value)}
            className="form-control"
            placeholder="Enter amount to transfer"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Sender Number</label>
          <input
            type="Number"
            value={senderNumber}
            name="senderNumber"
            disabled
            onChange={(e) => setSenderNumber(e.target.value)}
            className="form-control"
            id="Amount"
            placeholder="Enter amount to transfer"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Sender Name</label>
          <input
            type="text"
            disabled
            value={senderName}
            name="senderName"
            onChange={(e) => setSenderName(e.target.value)}
            className="form-control"
            id="Amount"
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

export default Transfer;
