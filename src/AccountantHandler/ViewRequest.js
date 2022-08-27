import React from "react";

const ViewRequest = () => {
  return (
    <>
      <br />
      <br />
      <h3 className="text-center">
        <u>USER'S LIST</u>
      </h3>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-responsive">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">test</th>
                  <td>test@gmail.com</td>
                  <td>
                    <button className="btn btn-info">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewRequest;
