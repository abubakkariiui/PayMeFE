import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const CSR = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [query, setQuery] = useState("");
  const [description, setDescription] = useState("");

  const submitHandler = (e) => {
    const data = { name, phone, query, description };
    axios
      .post("/api/csr/create", data)
      .then(() => {
        toast.success("Message sent successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // const emptyFields = () => {
  //   setQuery("");
  //   setDescription("");
  // };

  return (
    <>
      <form className="container" onSubmit={submitHandler}>
        <h2 className="text-center">Customer Service Representative</h2>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            type="number"
            name="phone"
            value={phone}
            required
            onChange={(e) => setPhone(e.target.value)}
            className="form-control"
            placeholder="Enter Your Phone"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Query</label>
          <input
            type="text"
            name="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="form-control"
            placeholder="Give brief info"
          />
        </div>
        <div className="mb-3">
          <label rows="3" className="form-label">
            Description
          </label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            rows="3"
            placeholder="What's your Query?"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
      <ToastContainer autoClose={2000} position="top-right" theme="dark" />
    </>
  );
};
export default CSR;
