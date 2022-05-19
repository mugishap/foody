import { TextField } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";


export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = await fetch(
      "http://196.223.240.154:8099/supapp/api/auth/client/signup",
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          email: email,
          firstName: firstName,
          lastName: lastName,
          mobile: phone,
          password: password,
        }),
      }
    );
    const data = await api.json();
    console.log(data);
    if (data.error === "Bad Request") {
      swal(
        "Validation failed",
        "Password must contain capital letter,symbol, and, number.",
        "error"
      );
    }
  };

  return (
    <div
      className="absolute flex  content-center items-center"
      style={{ justifyContent: "center" }}
    >
      <div className="bg-white flex-col flex  content-center items-center h-[35em] w-[30vw] absolute left-[40em]  rounded-lg scale-110 ">
        <h3
          className="font-bold text-2xl mt-10"
          style={{ fontFamily: "Damion", fontSize: "2.1rem" }}
        >
          Sign up
        </h3>
        <form className="mt-5" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-6" style={{ marginTop: "2rem" }}>
            {/* <label className="text-sm pt-2">FIRSTNAME</label> */}
            <TextField
             id="outlined-basic" label="Firstname" variant="outlined"
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              name="firstName"
              // className="bg-[#C4C4C4]  placeholder-gray-500 h-8 w-80 rounded-lg text-sm pl-1  text-black focus:bg-white focus:border-blue-600 focus:outline-red"
              style={{ fontFamily: "sans-serif" }}
            />
          </div>
          <div className="flex flex-col mt-4">
            {/* <label className="text-sm pt-2">LASTNAME</label> */}
            <TextField
             id="outlined-basic" label="Lastname" variant="outlined"
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              name="lastName"
              className=" fo"
            />
          </div>
          <div className="flex flex-col mt-4">
            {/* <label className="text-sm pt-2">PHONE</label> */}
            <TextField
             id="outlined-basic" label="Phone" variant="outlined"
              type="text"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              name="phone"
className=""
/>
          </div>
          <div className="flex flex-col mt-4">
            {/* <label className="text-sm pt-2">EMAIL</label> */}
            <TextField
             id="outlined-basic" label="Email" variant="outlined"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="Email"
              // className="bg-[#C4C4C4] opacity-25 placeholder-black h-8 w-80 rounded-lg text-sm pl-1"
            />
          </div>
          <div className="flex flex-col mt-4">
            {/* <label className="text-sm pt-2">PASSWORD</label> */}
            <TextField
             id="outlined-basicl"
             defaultValue="Small" label="Passoword" variant="outlined" className=" placeholder-blue-600  w-80 rounded-lg text-sm pl-6 mt-5 "
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
              // className="bg-[#C4C4C4] opacity-25 placeholder-black h-8 w-80 rounded-lg text-sm pl-1"
            />
          </div>
          <div className="flex flex-col items-center">
            <button className="bg-[#F53B57] mt-5 h-[2em] w-40 text-white rounded-lg hover:scale-105">
              Register
            </button>
            <Link to="/login" className="text-[#F53B57] hover:font-semibold ">
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
