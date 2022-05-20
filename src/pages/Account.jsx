import { Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import swal from "sweetalert";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Account() {
  document.querySelector("title").textContent = "Foody | Account";

  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    JSON.parse(localStorage.getItem("userCredentials")) == {}
      ? window.location.replace("/login")
      : setUser(JSON.parse(localStorage.getItem("userCredentials")));
  }, []);
const handleUpdate = (e) => {
  e.preventDefault()
  swal("Ooops!!!","Feature is not yet available","error",{
    buttons:false,
    timer:1000
  })
}
  return (
    <div className="flex justify-between  items-center flex-row">
      <Sidebar tab="account" />
      <div className="w-10/12  fixed overflow-hidden flex flex-col items-center justify-center">
        <div className="m-24 flex flex-col justify-center items-center bg-slate-300 rounded-md w-6/12 box-border  h-auto p-10">
          <img
            src="https://res.cloudinary.com/precieux/image/upload/v1652201747/avatar-man_fzclmz.png"
            className="w-32 rounded-full h-32"
            alt=""
          />
          <div className="form w-8/12 flex flex-col justify-center items-center">
            <form className="w-full flex flex-col items-center justify-center ">
              <div className="labels mt-3 flex justify-between items-center w-full">
                <label htmlFor="username">First Name: </label>
                <input
                 onChange={()=>{}}
                  type="text"
                  className=" p-2 rounded bg-transparent w-2/3 "
                  disabled={true}
                  value={user.firstName}
                />
              </div>
              <div className="labels mt-3 flex justify-between items-center w-full">
                <label htmlFor="username">Last Name: </label>
                <input
                 onChange={()=>{}}
                  type="text"
                  className=" p-2 rounded bg-transparent w-2/3 "
                  disabled={true}
                  value={user.lastName}
                />
              </div>
              <div className="labels mt-3 flex justify-between items-center w-full">
                <label htmlFor="username">Email: </label>
                <input
                 onChange={()=>{}}
                  type="text"
                  className=" p-2 rounded bg-transparent w-2/3 "
                  disabled={true}
                  value={user.email}
                />
              </div>
              <div className="labels mt-3 flex justify-between items-center w-full">
                <label htmlFor="username">Phone: </label>
                <input
                 onChange={()=>{}}
                  type="text"
                  className=" p-2 rounded bg-transparent w-2/3 "
                  disabled={true}
                  value={user.phone}
                />
              </div>{" "}
            <Button
              variant="contained"
              onClick={handleUpdate}
              className="w-3/5"
              type="submit"
            >
              Edit profile
            </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
