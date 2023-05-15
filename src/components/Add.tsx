import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";

import { toast } from "react-toastify";


const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const contact: any = useSelector((state) => state);
  console.log(contact);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleSubmit = (e: any) => {
    e.preventDefault();

    const checkEmail = contact.find(
      (c: { email: string }) => c.email === email && email
    );
    const checkNumber = contact.find((c: any) => c.number === parseInt(number));

    if (!name || !email || !number) {
      return toast.warning("Please Enter all the details");
    }
    if (checkEmail) {
      return toast.error("Email Already Exists");
    }
    if (checkNumber) {
      return toast.error("Number Already Exists");
    }

    const data = {
      id: contact[contact.length - 1].id + 1,
      name,
      email,
      number,
    };
    dispatch({type: "ADD_CONTACT", payload: data});
    toast.success("Contact added successfully");
    navigate("/");
  };

  return (
    <div className="container">
      <h1 className="display-3 text-center m-5">Add Contact</h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Enter Name"
                className="form-control m-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Enter E-mail"
                className="form-control m-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Enter Phone Number"
                className="form-control m-2"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              ></input>
            </div>
            <div
              className="form-group"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <input
                type="submit"
                value="Add Person"
                className="btn btn-block btn-dark "
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add;
