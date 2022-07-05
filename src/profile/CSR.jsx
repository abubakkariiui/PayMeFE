import React from "react";

const CSR = () => {
  return (
    <>
      <form className="container">
        <h2 className="text-center">Customer Service Representative</h2>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Query
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Give brief info"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" rows="3" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="What's your Query?"
          ></textarea>
        </div>
        <div id="emailHelp" className="form-text">
          We'll reach you soon.
        </div>
        <button type="submit" className="btn btn-secondary">
          Submit
        </button>
      </form>
    </>
  );
};
export default CSR;
