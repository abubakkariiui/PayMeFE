import axios from "axios";
import React from "react";

const UserRequest = () => {

  return (
    <>
      <br />
      <br />
      <h3 className="text-center">User Payment Request</h3>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-image">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">User Name</th>
                  <th scope="col">User Number</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>test</td>
                    <td>Cristina</td>
                    <td>913</td>
                    <td>
                      <button className="btn btn-danger">Decline</button>
                      <button className="btn btn-success" style={{marginLeft: 10}}>Approve</button>
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

export default UserRequest;
