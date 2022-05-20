import React, { useState } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default function LogForm() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const api = await fetch(
      "http://196.223.240.154:8099/supapp/api/auth/signin",
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          login: email,
          password: password,
        }),
      }
    );
    const data = await api.json();
    const keys = Object.keys(data);
    if (keys.includes("apierror")) {
      swal("Typo", `Wrong credentials entered for ${email}`, "error");
    } else if (keys.includes("token")) {
      const accessToken = data.token.accessToken;
      const refreshToken = data.token.refreshToken;
      const user = {
        firstName: data.firstName.split(" ")[0],
        lastName: data.firstName.split(" ")[1],
        email: data.email,
        phone: data.mobile,
        authority: data.authorities.authority,
        status: data.status,
        id: data.id,
      };
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("userCredentials", JSON.stringify(user));
      window.location.replace("/menu");
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
          style={{ fontFamily: "Damion" }}
        >
          Sign In
        </h3>

        <form action="" onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
          <h3
            className="font-bold text-2xl text-center"
            style={{ marginBottom: "3rem" }}
          >
            Welcome back
          </h3>
          <div className="flex flex-col">
            {/* <label className="text-sm pt-2">EMAIL</label> */}
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="text"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
              name="Email"
              // className="bg-[#C4C4C4] opacity-25 placeholder-black h-8 w-80 rounded-lg text-sm pl-1"
            />
          </div>
          <div className="flex flex-col mt-6">
            {/* <label className="text-sm pt-2">PASSWORD</label> */}
            <TextField
              id="outlined-basicl"
              defaultValue="Small"
              label="Passoword"
              variant="outlined"
              className=" placeholder-blue-600  w-80 rounded-lg text-sm pl-6 mt-5 "
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              name="password"
              // className="bg-[#C4C4C4] opacity-25 placeholder-black h-8 w-80 rounded-lg text-sm pl-1"
            />
          </div>

          <div className="flex flex-col items-center">
            <button className="bg-[#F53B57] mt-10 h-[2em] w-40 text-white rounded-lg hover:scale-105  ">
              Login
            </button>
          </div>
          <div className="mt-10">
            <p className=" text-center">
              Don't have an account ?
              <Link
                to="/signup"
                className="text-[#F53B57] hover:font-semibold "
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
