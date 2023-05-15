import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Edit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  const { id }:any = useParams();
  const contact:any = useSelector((state) => state);
  const currentContact: any = contact.find((c: { id: any; })=>c.id === parseInt(id) );
 
  useEffect(() => {
    if (currentContact) {
      setName(currentContact.name);
      setEmail(currentContact.email);
      setNumber(currentContact.number);
    }
  }, [currentContact]);

  //chekcing
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const checkEmail = contact.find(
      (c: { id: number; email: string }) =>
        c.id !== parseInt(id) && c.email === email
    );
    const checkNumber = contact.find(
      (c: any) => c.id !== parseInt(id) && c.number === parseInt(number)
    );

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
      id: parseInt(id),
      name,
      email,
      number,
    };
    dispatch({ type: "UPDATE_CONTACT", payload: data });
    toast.success("Contact Updated Successfully");
    navigate("/");
  };

  return (
    <div className="container">
      {/* {currentContact ? (
        <> */}
      <h1 className="display-3 text-center m-5">Edit Contact {id} </h1>
      <div className="row">
        <div className="col-md-6 shadow mx-auto p-5">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Update Name"
                className="form-control m-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="email"
                placeholder="Update E-mail"
                className="form-control m-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="form-group">
              <input
                type="number"
                placeholder="Update Phone Number"
                className="form-control m-2"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              ></input>
            </div>
            <div
              className="form-group"
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <input
                type="submit"
                value="Update"
                className="btn btn-dark "
              ></input>
              <Link to="/" className="btn btn-block btn-danger ">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* </>
      ) : (
        <>
          <h1 className="display-3 my-5 text-center">Contact Id does not Exists</h1>
        </>
      )} */}
    </div>
  );
};
  
export default Edit;
