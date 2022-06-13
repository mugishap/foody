import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";

import { Line } from "react-chartjs-2";
import ChartDiv from "../components/ChartDiv";
import TypeDesrciber from "../components/TypeDescriber";
import PlaceIncomeDetails from "../components/PlaceIncomeDetails";
import "chart.js";
import Chart from "chart.js/auto";
import boxicons from "boxicons/css/boxicons.css";
import CatAvatar from "/CatProfile.png";
function OverViewChart() {
  const [user, setUser] = useState({});
  const [providers, setProvideres] = useState([]);
  const [loader, setLoader] = useState(true);
  const [providerArr, setProviderArr] = useState([]);
  useEffect(() => {
    JSON.parse(localStorage.getItem("userCredentials")) == {}
      ? window.location.replace("/login")
      : setUser(JSON.parse(localStorage.getItem("userCredentials")));
  }, []);
  const getProvider = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) return window.location.replace("/login");
    const api = await fetch(
      "https://backend.supamenu.rw/supapp/api/service-providers?page=0&size=30",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
        method: "GET",
      }
    );
    const data = await api.json();
    // console.log(data);
    let arr = [];
    for (let i = 0; i < data.content.length; i++) {
      arr.push(data.content[i].name);
    }
    // console.log(arr)
    setProviderArr(arr)
    setProvideres(data.content);
    setLoader(false);
  };
  useEffect(() => {
    getProvider();
  }, []);
  

  return (
    <div className="flex flex-col md:flex-row w-full h-full fixed ">
      <Sidebar tab="overview" />
      {
        loader ? (
          <div className="flex items-center justify-center w-full h-full ">
            <img
              src="https://res.cloudinary.com/precieux/image/upload/v1653023282/cube_wg1jwa.gif"
              className="w-32 h-32"
              alt=""
            />
          </div>
        ) : (
          <div className="flex flex-col w-full px-2 md:px-6 xl:px-14 overflow-y-scroll pt-6 mb-4">
            <div className="flex flex-row justify-between w-[100%] xl:w-[95%]">
              <h3 className="text-base xl:text-xl font-bold">Overview</h3>
              <div className="flex flex-row">
                <div className="border-r-2 pr-1 xl:pr-2 h-6 xl:h-8 border-gray-500 ">
                  <span className="bx bx-search-alt-2 text-[20px] xl:bx-sm mt-1"></span>
                </div>
                <div className=" w-2 h-2 xl:w-3 xl:h-3 relative left-[22px] xl:left-9 mt-1 xl:mt-0.5 bg-blue-700 rounded-full" />
                <span className="bx bx-bell text-xl xl:bx-sm ml-1 xl:ml-3"></span>
                <h6 className="ml-2 text-xs mt-1.5 xl:text-base  xl:ml-4">
                  {user.firstName} {user.lastName}
                </h6>
                <img
                  src={CatAvatar}
                  alt=""
                  className="ml-0.5 xl:ml-3 h-8 xl:h-12 relative bottom-1 xl:bottom-2"
                />
              </div>
            </div>
            <div className="flex flex-row w-[100%] md:w-[85%]  xl:w-[78%] mt-4 justify-between gap-x-2">
              {providers.map((provider) => (
                <TypeDesrciber
                  titles={"provider.serviceCategory.name"}
                  title={provider.serviceCategory.name}
                  amount={provider.email}
                />
              ))}
            </div>
            <ChartDiv />
            <div className="flex flex-col md:flex-row justify-between  w-[100%] md:w-[95%] ">
              <div className="grid xl:grid-cols-2 grid-cols-1 w-[100%]  gap-5 mt-5">
                {providers.map((provider) => (
                  <PlaceIncomeDetails
                    title={provider.name}
                    description1={provider.status}
                    amount1={20000000}
                    description2={provider.phone}
                    amount2={provider.closingHour}
                    key={provider.createdAt}
                  />
                ))}
              </div>
              <div className="flex flex-col   border-2 rounded-md border-blue-400 md:mx-0 mx-auto md:w-fit w-[100%] xl:w-96 h-[335px] mt-[20px]">
                <div className="px-3 border-b-2 flex flex-col">
                  <div className="flex flex-row mt-2 px-3 justify-between">
                    <h5 className="text-md text-black font-semibold">Create</h5>
                    <h5 className="text-md text-rose-500 font-semibold">
                      View all
                    </h5>
                  </div>
                  <div className="flex flex-row mt-8 mb-3 px-3 justify-between">
                    <h5 className="text-md text-gray-500 font-semibold">
                      Create new
                    </h5>
                    <div className="flex flex-row  bg-gray-600 w-5 h-5 rounded-full hover:bg-gray-300 hover:cursor-pointer">
                      <span className="bx bx-plus-medical text-[12px]  ml-1 mt-1 text-white "></span>
                    </div>
                  </div>
                </div>
                <div className="px-6 py-2 justify-between border-b-2 flex flex-row ">
                  <div className="flex flex-row">
                    <div className="w-4 mt-1.5 h-4 border-2 rounded-full" />
                    <h5 className="text-md text-black  ml-2">Restaurant</h5>
                  </div>
                  <button className="h-6 w-12 bg-rose-400 hover:bg-rose-300 hover:cursor-pointer text-white font-semibold text-sm rounded-md">
                    New
                  </button>
                </div>
                <div className="px-6 py-2 justify-between border-b-2 flex flex-row ">
                  <div className="flex flex-row">
                    <div className="w-4 mt-1.5 h-4 border-2 rounded-full" />
                    <h5 className="text-md text-black ml-2">Hotels</h5>
                  </div>
                  <button className="h-6 w-12 bg-rose-400  hover:bg-rose-300 hover:cursor-pointer  text-white font-semibold text-sm rounded-md">
                    New
                  </button>
                </div>
                <div className="px-6 py-2 justify-between  flex flex-row ">
                  <div className="flex flex-row">
                    <div className="w-4 mt-1.5 h-4  bg-red-400 rounded-full">
                      <span className="bx bx-check text-sm  relative bottom-1 text-white "></span>
                      {/* <input type={"checkbox"} className="rounded-full"/> */}
                    </div>
                    <h5 className="text-md text-black  ml-2">Pub</h5>
                  </div>
                  <button className="h-6 w-16 bg-gray-200 hover:bg-gray-300 hover:cursor-pointer text-gray-500  font-semibold text-sm rounded-md">
                    Default
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
        /* <div className="bg-[#000000] w-6 " /> */
      }
    </div>
  );
}

export default OverViewChart;
