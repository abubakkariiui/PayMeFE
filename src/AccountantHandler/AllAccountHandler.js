import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const AllAccountHandler = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("/api/handler/getAllHandler").then((res) => {
      const filterData = res.data.filter((item) => {
        return item.isApprove == false;
      });
      console.log(res.data);
      setData(filterData);
    });
  }, []);

  return (
    <>
      <NavLink to="/admin" style={{ marginLeft: 150 }}>
        Back
      </NavLink>
      <br />
      <br />
      <h3 className="text-center">
        <u>ACCOUNT HANDLER LIST</u>
      </h3>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <table className="table table-image">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((d) => (
                  <tr key={d._id}>
                    <th scope="row">{d.name}</th>
                    <td>{d.email}</td>
                    <td>
                      <Link to={`/handler/${d._id}`}>
                        <button className="btn btn-info">View Details</button>
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

export default AllAccountHandler;
