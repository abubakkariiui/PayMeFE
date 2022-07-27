import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

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
      .then(() => {
        toast.success("Message sent successfully");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
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
                  value={name}
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
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@mail.com"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="number"
                  name="phone"
                  value={phone}
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
                  name="message"
                  value={message}
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
      <ToastContainer autoClose={2000} position="top-right" theme="dark" />
    </>
  );
};
export default Contact;
