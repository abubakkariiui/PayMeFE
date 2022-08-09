import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

const TransferAgent = () => {
    const [receiverNumber, setReceiverNumber] = useState();
    const [amount, setAmount] = useState(0);
    const [senderNumber, setSenderNumber] = useState();
    const [senderName, setSenderName] = useState();
    const [receiverName, setReceiverName] = useState();
  
    const agentLogin = useSelector((state) => state.agentLogin);
    const { agentInfo } = agentLogin;
  
    const submitHandler = (e) => {
      e.preventDefault();
      axios
        .post("/api/history/sendMoney", {
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
      if (agentInfo) {
        setSenderName(agentInfo.name);
        setSenderNumber(agentInfo.phone);
      }
    }, [agentInfo]);
  
    return (
      <>
        <form className="container" onSubmit={submitHandler}>
          <h2 className="text-center">AGENT TRANSFER</h2>
          <div className="mb-3">
            <label className="form-label">Receiver Name</label>
            <input
              type="text"
              name="receiverName"
              value={receiverName}
              required
              className="form-control"
              id="receiverName"
              placeholder="Enter Receiver Name"
              onChange={(e) => setReceiverName(e.target.value)}
            />
          </div>
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
}

export default TransferAgent