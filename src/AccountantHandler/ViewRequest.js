import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const ViewRequest = () => {
  const [filterData, setFilterData] = useState([]);
  useEffect(() => {
    axios.get("/api/users/getAllUser").then((res) => {
      const data1 = res.data.filter((item) => {
        return item.isApprove === false;
      });
      setFilterData(data1);
    });
  }, []);

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
          <div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {filterData.map((d) => (
                  <tr key={d._id}>
                    <th scope="row">{d.name}</th>
                    <td>{d.email}</td>
                    <td>
                      <Link to={`/users/${d._id}`}>
                        <button className="btn btn-info mx-3">
                          View Details
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewRequest;
