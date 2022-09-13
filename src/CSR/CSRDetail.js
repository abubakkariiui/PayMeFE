import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
const CSRDetail = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [cnicFront, setCnicFront] = useState();
  const [cnicBack, setCnicBack] = useState();
  const [isAdmin, setIsAdmin] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/csrr/${id}`);
      console.log(data);
      setName(data.name);
      setEmail(data.email);
      setCnicFront(data.frontCNIC);
      setCnicBack(data.backCNIC);
    };
    fetching();
  }, []);

  const handleApprove = () => {
    axios.post(`/api/csrr/handleApprove/${id}`);
    navigate("/allCSR");
  };

  const handleDelete = (id) => {
    axios
      .delete(`/api/csrr/${id}`)
      .then((res) => {
        navigate("/allCSR");
        console.log("data delete");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <br />
      <br />
      <h3 className="text-center">
        <u>CSR DETAIL</u>
      </h3>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-md-6">Name</div>
          <div className="col-md-6">{name}</div>
        </div>
        <div className="row">
          <div className="col-md-6">Email</div>
          <div className="col-md-6">{email}</div>
        </div>
        <div className="row">
          <div className="col-md-6">CNIC FRONT PIC</div>
          <div className="col-md-6">
            <img src={cnicFront} alt="cnic" width="400" height="200" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">CNIC BACK PIC</div>
          <div className="col-md-6">
            <img src={cnicBack} alt="cnic" width="400" height="200" />
          </div>
        </div>
        <div className="m-5" style={{ float: "right" }}>
          <button className="btn btn-success mx-3" onClick={handleApprove}>
            Approve
          </button>
          <button className="btn btn-danger" onClick={() => handleDelete(id)}>
            Reject
          </button>
        </div>
      </div>
    </>
  );
};

export default CSRDetail;
