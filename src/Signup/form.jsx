import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const logUserIn = async (data) => {
    const api = await fetch(
      "http://196.223.240.154:8099/supapp/api/auth/signin",
      {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify({
          login: data.email,
          password: data.password,
        }),
      }
    );
    const info = await api.json();
    const keys = Object.keys(info);
    console.log(keys);
    if (keys.includes("apierror")) {
      swal("Error", "There ocurred an error while logging you in", "error");
      setLoader(false);
      return;
    } else if (keys.includes("token")) {
      const accessToken = info.token.accessToken;
      const refreshToken = info.token.refreshToken;
      const user = {
        firstName: info.firstName.split(" ")[0],
        lastName: info.firstName.split(" ")[2],
        email: info.email,
        phone: info.mobile,
        authority: info.authorities.authority,
        status: info.status,
        id: info.id,
      };
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("userCredentials", JSON.stringify(user));
      setLoader(false);
      window.location.replace("/menu");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
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
    const keys = Object.keys(data);
    if (keys.includes("apierror")) {
      if (data.apierror.error == "Validation error") {
        swal(
          "Validation failed",
          "Password must contain capital letter,symbol, and, number. Nothing should be set to empty",
          "error",
          {
            timer: 2000,
            buttons: false,
          }
        );
        setLoader(false);
        return;
      }
    } else if (keys.includes("token")) {
      logUserIn({ email, password });
    }
  };

  return (
    <div
      className="absolute flex  content-center items-center"
      style={{ justifyContent: "center" }}
    >
      <div className="bg-white flex-col flex  content-center items-center h-[36em] w-[30vw] absolute left-[40em] pt-10  rounded-lg scale-110 ">
        <Link to="/">
          <h1 className="text-black font-semibold text-5xl mb-5 leading-6 landing-logo font-[500]">
            F<span className="text-[#F53B57] font-[kurale]">oo</span>dy
          </h1>
        </Link>

        <form className="mt-5 w-8/12" onSubmit={handleSubmit}>
          <div className="flex flex-col mt-6 mt-4">
            <TextField
              id="outlined-basic"
              label="Firstname"
              variant="outlined"
              type="text"
              className="w-full"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              name="firstName"
              style={{ fontFamily: "sans-serif" }}
            />
          </div>
          <div className="flex flex-col mt-4">
            <TextField
              id="outlined-basic"
              label="Lastname"
              variant="outlined"
              type="text"
              className="w-full"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              name="lastName"
            />
          </div>
          <div className="flex flex-col mt-4">
            <TextField
              id="outlined-basic"
              label="Phone"
              variant="outlined"
              type="text"
              className="w-full"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              name="phone"
            />
          </div>
          <div className="flex flex-col mt-4">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="text"
              className="w-full"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="Email"
            />
          </div>
          <div className="flex flex-col mt-4">
            <TextField
              id="outlined-basicl"
              label="Password"
              variant="outlined"
              className=" placeholder-blue-600  w-full rounded-lg text-sm pl-6 mt-5 "
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              name="password"
            />
          </div>
          <div className="flex flex-col items-center">
            {loader ? (
              <img
                src="https://res.cloudinary.com/precieux/image/upload/v1653023282/cube_wg1jwa.gif"
                className="w-[62px] "
                height={100}
                alt="logo"
              />
            ) : (
              <button className="bg-[#F53B57] mt-5 h-[3em] w-40 text-white text-md font-semibold border-box rounded-lg hover:scale-105">
                Register
              </button>
            )}
            <Link
              to="/login"
              className="text-[#F53B57] text-sm hover:font-semibold mt-2"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}