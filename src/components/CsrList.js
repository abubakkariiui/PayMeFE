import React, { useEffect, useState } from "react";
import axios from 'axios'
const CsrList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/csr").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <>
      <div className="container">
        <h4 className="text-center m-5">CSR Issues</h4>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Query</th>
              <th>Description</th>
            </tr>
          </thead>
          {data.map((d) => (
            <tbody key={d._id}>
              <tr>
                <th>1</th>
                <th>test</th>
                <th>{d.query}</th>
                <td>{d.description}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
};

export default CsrList;
