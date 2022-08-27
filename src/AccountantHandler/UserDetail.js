import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const UserDetail = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const { id } = useParams();
  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/users/${id}`);
      setName(data.name);
      setEmail(data.email);
      setPhone(data.phone);
    };
    fetching();
  }, []);
  return (
    <>
      <br />
      <br />
      <h3 className="text-center">
        <u>USER DETAIL</u>
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
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>{name}</th>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>
                    <button className="btn btn-success">Approve</button>
                    <button className="btn btn-danger">Delete</button>
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

export default UserDetail;
