import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const AllAccountant = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
      axios.get("/api/accountant/getAllAccountant").then((res) => {
        console.log(res.data);
        setData(res.data);
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
          <u>ACCOUNTANT LIST</u>
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
                        <button className="btn btn-danger">Delete</button>
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
}

export default AllAccountant