import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const data = { name, email, phone, message };
    axios
      .post("/api/contact/create", data)
      .then((res) => {
        console.log("Contact Data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="Container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={submitHandler}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  name="name"
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@mail.com"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="number"
                  name="name"
                  onChange={(e) => setPhone(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="0333 1234567"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  className="form-control"
                  name="name"
                  onChange={(e) => setMessage(e.target.value)}
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="What's your Query?"
                ></textarea>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="btn"
                >
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
