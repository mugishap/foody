import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

import { Line } from "react-chartjs-2";

import ChartDiv from "../components/ChartDiv"
import TypeDesrciber from "../components/TypeDescriber"
import PlaceIncomeDetails from "../components/PlaceIncomeDetails";
import "chart.js";

import Chart from "chart.js/auto";
import boxicons from "boxicons/css/boxicons.css";
import CatAvatar from "/CatProfile.png";
function OverViewChart() {
  const titles = [
    { title: "Clients", amount: 60 },
    { title: "Revenues (RWF)", amount: 3571100 },
    { title: "Orders", amount: 67597 },
  ];
  const placeIncomes = [
    {
      title: "Restaurant",
      description1: "Sole Luna",
      amount1: 46000,
      description2: "Soy",
      amount2: 12000,
    },
    {
      title: "Hotels",
      description1: "Park Inn",
      amount1: 46000,
      description2: "M Hotel",
      amount2: 12000,
    },
    {
      title: "Pubs",
      description1: "Sundowner",
      amount1: 46000,
      description2: "Gate N10",
      amount2: 12000,
    },
    {
      title: "Cafes",
      description1: "Aroma",
      amount1: 46000,
      description2: "Patisserie Royale",
      amount2: 12000,
    },
  ];
  const RevenuesData = [
    { title: "Orders", amount: 609721 },
    { title: "Items", amount: 557 },
    { title: "Order/hour", amount: 874678 },
    { title: "Clients", amount: 952203 },
  ];
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Items",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.4,
      },
      {
        label: "Orders",
        data: [33, 25, 35, 51, 54, 76],
        fill: false,
        borderColor: "#742774",
        tension: 0.4,
      },
    ],
  };
  function TypeDesrciber({ title, amount }) {
    const [selected, setSelected] = useState(titles[0].title);
    return (
      <div
        className={
          selected == title
            ? ` bg-rose-400 text-[10px] xl:text-lg font-semibold   rounded-md w-36 xl:w-48 h-16 xl:h-24 pt-3 hover:cursor-pointer`
            : "border-2 text-[10px] xl:text-lg font-semibold border-blue-400 hover:bg-rose-300 rounded-md w-36 xl:w-48 h-16 xl:h-24 pt-3 hover:cursor-pointer"
        }
        onClick={() => {
          setSelected(title);
        }}
      >
        <h5
          className={
            selected == title
              ? "text-white w-fit m-auto "
              : "text-gray-500 w-fit m-auto "
          }
        >
          {title}
        </h5>
        <h5
          className={
            selected == title
              ? "text-white w-fit m-auto"
              : "text-black w-fit m-auto"
          }
        >
          {amount}
        </h5>
      </div>
    );
  }
  function Revenues({ title, amount }) {
    return (
      <div
        className={
          title != RevenuesData[RevenuesData.length - 1].title
            ? `  border-b-2  font-semibold   w-full h-20 xl:h-32 pt-3 `
            : "font-semibold border-b-2 md:border-b-0   w-full h-20 xl:h-32 pt-3 "
        }
      >
        <h5
          className={
            "text-gray-500 w-fit m-auto text-sm md:text-base xl:text-lg"
          }
        >
          {title}
        </h5>
        <h5 className={"text-black w-fit m-auto text-xs md:text-sm"}>
          {amount}
        </h5>
      </div>
    );
  }
  function PlaceIncomeDetails({
    title,
    description1,
    amount1,
    description2,
    amount2,
  }) {
    return (
      <div className="h-32 xl:h-40 w-[100%] md:w-80 border-2 text-sm xl:text-base border-blue-400 rounded-md py-2 flex flex-col">
        <div className="px-3 border-b-2 flex flex-col">
          <div className="flex flex-row justify-between">
            <h5 className=" text-black font-semibold ">{title}</h5>
            <h5 className=" text-rose-500 font-semibold">View Details</h5>
          </div>
          <h5 className=" flex   text-gray-500 font-semibold mt-2 mx-0  ">
            Sales
          </h5>
          <div className="flex flex-row mt-2 justify-between">
            <h5 className=" text-black font-semibold ">{description1}</h5>
            <h5 className=" text-gray-500 font-semibold">{amount1}</h5>
          </div>
        </div>
        <div className="flex flex-row mt-2 px-3 justify-between">
          <h5 className=" text-black font-semibold">{description2}</h5>
          <h5 className=" text-gray-500 font-semibold">{amount2}</h5>
        </div>
      </div>
    );
  }
  function ChatDiv() {
    return (
      <div className="flex  flex-col-reverse md:flex-row h-fit md:h-[500px] mt-6 w-[100%] xl:w-[95%] border-2  rounded-md border-blue-400">
        <div className="w-[100%] xl:w-[83%] h-full md:border-r-2 md:border-blue-400 ">
          <div className="flex flex-row w-[93%] justify-between mt-4 pr-1 md:pr-3 flex-wrap">
            <div className="flex flex-col">
              <h5 className="text-base text-black font-bold">Todays trends</h5>
              <p className=" flex  text-xs text-gray-500 font-semibold mt-1  ml-5">
                as of 25 2022 09:41 pm
              </p>
            </div>

            <div className="flex flex-row mt-2.5 md:text-sm text-xs">
              <div className="flex flex-row ml-3 md:ml-5">
                <div className="w-2 md:w-5 h-[2px] xl:h-[3px] bg-blue-400 mt-2" />
                <h5 className=" ml-1.5 text-black">Today</h5>
              </div>
              <div className="flex flex-row ml-3 md:ml-5">
                <div className="w-2 md:w-5 h-[2px] xl:h-[3px] bg-gray-400 mt-2" />
                <h5 className=" ml-1.5 text-gray-500">Week</h5>
              </div>
              <div className="flex flex-row ml-3 md:ml-5">
                <div className="w-2 md:w-5 h-[2px] xl:h-[3px] bg-gray-400 mt-2" />
                <h5 className=" ml-1.5 text-gray-500">Month</h5>
              </div>
              <div className="flex flex-row ml-3 md:ml-5">
                <div className="w-2 md:w-5 h-[2px] xl:h-[3px] bg-gray-400 mt-2" />
                <h5 className=" ml-1.5 text-gray-500">Year</h5>
              </div>
            </div>
          </div>
          <Line datasetIdKey="id" data={data} width={400} height={185} />
        </div>
        <div className="w-[100%] md:w-[17%] h-full flex flex-col">
          {RevenuesData.map((revenue) => (
            <Revenues title={revenue.title} amount={revenue.amount} />
          ))}
        </div>
      </div>
    );
  }
  

  // const RevenuesData = [
  //   { title: "Orders", amount: 609721 },
  //   { title: "Items", amount: 557 },
  //   { title: "Order/hour", amount: 874678 },
  //   { title: "Clients", amount: 952203 },
  // ];
  // const data = {
  //   labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  //   datasets: [
  //     {
  //       label: "Items",
  //       data: [33, 53, 85, 41, 44, 65],
  //       fill: true,
  //       backgroundColor: "rgba(75,192,192,0.2)",
  //       borderColor: "rgba(75,192,192,1)",
  //       tension: 0.4,
  //     },
  //     {
  //       label: "Orders",
  //       data: [33, 25, 35, 51, 54, 76],
  //       fill: false,
  //       borderColor: "#742774",
  //       tension: 0.4,
  //     },
  //   ],
  // };
  function TypeDesrciber({ title, amount }) {
    const [selected, setSelected] = useState(titles[0].title);
    return (
      <div
        className={
          selected == title
            ? ` bg-rose-400 text-[10px] xl:text-lg font-semibold   rounded-md w-36 xl:w-48 h-16 xl:h-24 pt-3 hover:cursor-pointer`
            : "border-2 text-[10px] xl:text-lg font-semibold border-blue-400 hover:bg-rose-300 rounded-md w-36 xl:w-48 h-16 xl:h-24 pt-3 hover:cursor-pointer"
        }
        onClick={() => {
          setSelected(title);
        }}
      >
        <h5
          className={
            selected == title
              ? "text-white w-fit m-auto "
              : "text-gray-500 w-fit m-auto "
          }
        >
          {title}
        </h5>
        <h5
          className={
            selected == title
              ? "text-white w-fit m-auto"
              : "text-black w-fit m-auto"
          }
        >
          {amount}
        </h5>
      </div>
    );
  }
  function Revenues({ title, amount }) {
    return (
      <div
        className={
          title != RevenuesData[RevenuesData.length - 1].title
            ? `  border-b-2  font-semibold   w-full h-20 xl:h-32 pt-3 `
            : "font-semibold border-b-2 md:border-b-0   w-full h-20 xl:h-32 pt-3 "
        }
      >
        <h5
          className={
            "text-gray-500 w-fit m-auto text-sm md:text-base xl:text-lg"
          }
        >
          {title}
        </h5>
        <h5 className={"text-black w-fit m-auto text-xs md:text-sm"}>
          {amount}
        </h5>
      </div>
    );
  }
  function PlaceIncomeDetails({
    title,
    description1,
    amount1,
    description2,
    amount2,
  }) {
    return (
      <div className="h-32 xl:h-40 w-[100%] md:w-80 border-2 text-sm xl:text-base border-blue-400 rounded-md py-2 flex flex-col">
        <div className="px-3 border-b-2 flex flex-col">
          <div className="flex flex-row justify-between">
            <h5 className=" text-black font-semibold ">{title}</h5>
            <h5 className=" text-rose-500 font-semibold">View Details</h5>
          </div>
          <h5 className=" flex   text-gray-500 font-semibold mt-2 mx-0  ">
            Sales
          </h5>
          <div className="flex flex-row mt-2 justify-between">
            <h5 className=" text-black font-semibold ">{description1}</h5>
            <h5 className=" text-gray-500 font-semibold">{amount1}</h5>
          </div>
        </div>
        <div className="flex flex-row mt-2 px-3 justify-between">
          <h5 className=" text-black font-semibold">{description2}</h5>
          <h5 className=" text-gray-500 font-semibold">{amount2}</h5>
        </div>
      </div>
    );
  }
  function ChatDiv() {
    return (
      <div className="flex  flex-col-reverse md:flex-row h-fit md:h-[500px] mt-6 w-[100%] xl:w-[95%] border-2  rounded-md border-blue-400">
        <div className="w-[100%] xl:w-[83%] h-full md:border-r-2 md:border-blue-400 ">
          <div className="flex flex-row w-[93%] justify-between mt-4 pr-1 md:pr-3 flex-wrap">
            <div className="flex flex-col">
              <h5 className="text-base text-black font-bold">Todays trends</h5>
              <p className=" flex  text-xs text-gray-500 font-semibold mt-1  ml-5">
                as of 25 2022 09:41 pm
              </p>
            </div>

            <div className="flex flex-row mt-2.5 md:text-sm text-xs">
              <div className="flex flex-row ml-3 md:ml-5">
                <div className="w-2 md:w-5 h-[2px] xl:h-[3px] bg-blue-400 mt-2" />
                <h5 className=" ml-1.5 text-black">Today</h5>
              </div>
              <div className="flex flex-row ml-3 md:ml-5">
                <div className="w-2 md:w-5 h-[2px] xl:h-[3px] bg-gray-400 mt-2" />
                <h5 className=" ml-1.5 text-gray-500">Week</h5>
              </div>
              <div className="flex flex-row ml-3 md:ml-5">
                <div className="w-2 md:w-5 h-[2px] xl:h-[3px] bg-gray-400 mt-2" />
                <h5 className=" ml-1.5 text-gray-500">Month</h5>
              </div>
              <div className="flex flex-row ml-3 md:ml-5">
                <div className="w-2 md:w-5 h-[2px] xl:h-[3px] bg-gray-400 mt-2" />
                <h5 className=" ml-1.5 text-gray-500">Year</h5>
              </div>
            </div>
          </div>
          <Line datasetIdKey="id" data={data} width={400} height={185} />
        </div>
        <div className="w-[100%] md:w-[17%] h-full flex flex-col">
          {RevenuesData.map((revenue) => (
            <Revenues title={revenue.title} amount={revenue.amount} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-row w-full h-full fixed">
      <Sidebar tab='overview'/>
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
              Bruce Asante
            </h6>
            <img
              src={CatAvatar}
              alt=""
              className="ml-0.5 xl:ml-3 h-8 xl:h-12 relative bottom-1 xl:bottom-2"
            />
          </div>
        </div>
        <div className="flex flex-row w-[100%] md:w-[85%]  xl:w-[78%] mt-4 justify-between gap-x-2">
          {titles.map((title) => (
            <TypeDesrciber titles={titles} title={title.title} amount={title.amount} />
          ))}
        </div>
        <ChartDiv />
        <div className="flex flex-col md:flex-row justify-between  w-[100%] md:w-[95%] ">
          <div className="grid xl:grid-cols-2 grid-cols-1 w-[100%]  gap-5 mt-5">
            {placeIncomes.map((placeIncome) => (
              <PlaceIncomeDetails
                title={placeIncome.title}
                description1={placeIncome.description1}
                amount1={placeIncome.amount1}
                description2={placeIncome.description2}
                amount2={placeIncome.amount2}
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
      {/* <div className="bg-[#000000] w-6 " /> */}
    </div>
  );
}

export default OverViewChart;
