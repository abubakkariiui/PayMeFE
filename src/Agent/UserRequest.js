import React, { useEffect, useState } from "react";
import axios from "axios";
const UserRequest = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/payRequest/getRequest`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`/api/payRequest/${id}`)
      .then((res) => {
        console.log("data delete");
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <>
      <br />
      <br />
      <h3 className="text-center">User Payment Request</h3>
      <br />
      <div className="container">
        <table className="table table-image">
          <thead>
            <tr>
              
              <th scope="col" className="col-2">#</th>
              <th scope="col" className="col-3">Name</th>
              <th scope="col" className="col-3">Amount</th>
              <th scope="col" className="col-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{d.name}</td>
                <td>{d.amount}</td>
                <td>
                  <button
                    className="btn btn-success"
                    onClick={() => handleDelete(d._id)}
                  >
                    Accept
                  </button>
                  <button
                    className="btn btn-danger mx-3"
                    onClick={() => handleDelete(d._id)}
                  >
                    Decline
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default UserRequest;
