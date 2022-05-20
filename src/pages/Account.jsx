import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Account() {
  document.querySelector("title").textContent = "Foody | Account";

  const [user, setUser] = useState({});
  const [loader, setLoader] = useState(true);
  return (
    <div className="flex justify-between  items-stretch flex-row">
      <Sidebar tab="account" />
      <div className="w-10/12  fixed overflow-hidden z-10 flex flex-col items-center justify-center">
        <Navbar />
        <div className="m-24 flex flex-col justify-center items-center bg-slate-300 rounded-md w-6/12 box-border  h-auto p-10">
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.UFzzd3TPwLbF6giTYKpJogHaHa&pid=Api"
            className="w-32 rounded-full h-32"
            alt=""
          />
          <div className="form w-8/12 flex flex-col justify-center">
            <form className="w-full">
              <div className="labels flex justify-between items-center w-full">
                <label htmlFor="username">Username: </label>
                <input type="text" className=" p-1 w-2/3" disabled={true} value={"Hello"} />
              </div>
              <div className="labels flex justify-between items-center w-full">
                <label htmlFor="username">Username: </label>
                <input type="text" className=" p-1 w-2/3" disabled={true} value={"Hello"} />
              </div>
              <div className="labels flex justify-between items-center w-full">
                <label htmlFor="username">Username: </label>
                <input type="text" className=" p-1 w-2/3" disabled={true} value={"Hello"} />
              </div>
              <div className="labels flex justify-between items-center w-full">
                <label htmlFor="username">Username: </label>
                <input type="text" className=" p-1 w-2/3" disabled={true} value={"Hello"} />
              </div>{" "}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
