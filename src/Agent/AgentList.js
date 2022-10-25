import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
const AgentList = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/agent/getAllAgent").then((res) => {
      const filterData = res.data.filter((item) => {
        return item.isApprove === false;
      });
      setData(filterData);
    });
  }, []);

  return (
    <>
      <NavLink to="/franchise" style={{ marginLeft: 150 }}>
        Back
      </NavLink>
      <br />
      <br />
      <h3 className="text-center">
        <u>AGENT LIST</u>
      </h3>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-image">
              <thead>
                <tr>
                  <th scope="col">Agent Name</th>
                  <th scope="col">Agent Email</th>
                  <th scope="col">Address</th>
                  <th scope="col">Franchise Name</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => (
                  <tr key={d._id}>
                    <th scope="row">{d.name}</th>
                    <td>{d.email}</td>
                    <td>{d.address}</td>
                    <td>{d.pranchiseName}</td>
                    <td>
                      <Link to={`/agent/${d._id}`}>
                        <button className="btn btn-info">View Detail</button>
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

export default AgentList;
