import React, { useState } from "react";
import axios from "axios";
const AgentTransfer = () => {
  const [name, setName] = useState("");
  const [userNumber, setUserNumber] = useState("");
  const [amount, setAmount] = useState("");
  const [agentNumber, setAgentNumber] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("/api/payRequest/create", {
        name,
        userNumber,
        amount,
        agentNumber,
      })
      .then((res) => {
        setName("")
        setUserNumber("")
        setAmount("")
        setAgentNumber("")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <form className="container" onSubmit={submitHandler}>
        <h2 className="text-center">Withdraw from Agent</h2>
        <div className="mb-3 ">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter Name"
          />
          <br></br>

          <label className="form-label">User Number</label>
          <input
            type="text"
            name="userNumber"
            value={userNumber}
            required
            onChange={(e) => setUserNumber(e.target.value)}
            className="form-control"
            placeholder="Enter User Number"
          />
          <br></br>
          <label className="form-label">Enter Amount</label>
          <div className="input-group ">
            <span className="input-group-text">$</span>
            <input
              type="text"
              name="amount"
              value={amount}
              required
              onChange={(e) => setAmount(e.target.value)}
              className="form-control"
              placeholder="Enter amount to transfer"
            ></input>
          </div>
          <br></br>

          <label className="form-label">Agent Number</label>
          <input
            type="text"
            name="agentNumber"
            value={agentNumber}
            onChange={(e) => setAgentNumber(e.target.value)}
            className="form-control"
            placeholder="Enter Agent Number"
          />
          <div className="form-text">
            <br />
            Make sure enter correct information before making request
          </div>
          <button type="submit" className="btn btn-secondary">
            Request withdrawal
          </button>
        </div>
      </form>
    </>
  );
};

export default AgentTransfer;
