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
      "https://backend.supamenu.rw/supapp/api/auth/signin",
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
      <div className="bg-white flex-col flex  content-center items-center h-[35em] w-[30vw] absolute left-[40em] pt-16  rounded-lg scale-110 ">
      <Link to='/'><h1 className='text-black font-semibold text-5xl mb-5 leading-6 landing-logo font-[500]' >F<span className='text-[#F53B57] font-[kurale]'>oo</span>dy</h1></Link>


        <form action="" onSubmit={handleSubmit} className='mt-4'>
          <h3
            className="font-bold text-2xl text-center"
            style={{ marginBottom: "3rem" }}
          >
            Welcome back
          </h3>
          <div className="flex flex-col">
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
            />
          </div>
          <div className="flex flex-col mt-6">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              className=" placeholder-blue-600  w-80 rounded-lg text-sm pl-6 mt-5 "
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
              name="password"
            />
          </div>

          <div className="flex flex-col items-center">
            <button className="bg-[#F53B57] mt-10 h-[2.5em] w-60 text-white rounded-lg hover:scale-105  ">
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
