import React from "react"
import "chart.js";
import { Line } from "react-chartjs-2";
import Revenues from "./Revenues";
import Chart from "chart.js/auto";
import moment from "moment";
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

const RevenuesData = [
  { title: "Orders", amount: 609721 },
  { title: "Items", amount: 557 },
  { title: "Order/hour", amount: 874678 },
  { title: "Clients", amount: 952203 },
];
function ChartDiv() {
  const date = moment().format("dddd, MMMM Do YYYY");

  return (
    <div className="flex  flex-col-reverse md:flex-row h-fit mt-6 w-[100%] xl:w-[95%] border-2  rounded-md border-blue-400">
      <div className="w-[100%] md:w-[83%] h-full md:border-r-2 md:border-blue-400 ">
        <div className="flex flex-row w-[93%] justify-between mt-4 pr-1 md:pr-3 flex-wrap">
          <div className="flex flex-col">
            <h5 className="text-base text-black font-bold ml-5">Todays trends</h5>
            <p className=" flex  text-xs text-gray-500 font-semibold mt-1  ml-5">
              {date}
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
          <Revenues
            RevenuesData={RevenuesData}
            title={revenue.title}
            amount={revenue.amount}
          />
        ))}
      </div>
    </div>
  );
}
export default ChartDiv;