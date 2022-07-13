import axios from "axios";
import React, { useEffect, useState } from "react";

const ContactList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/contact").then((res) => {
      console.log("contact list", res.data);
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        <h4 className="text-center m-5">Issues and Messages By Users</h4>
        <table className="table table-bordered table-dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Message</th>
            </tr>
          </thead>
          {data.map((d) => (
            <tbody key={d._id}>
              <tr>
                <th>{d.name}</th>
                <td>{d.email}</td>
                <td>{d.phone}</td>
                <td>{d.message}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default ContactList;
