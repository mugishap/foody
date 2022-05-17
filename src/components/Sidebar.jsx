import React from "react";
import boxicons from "boxicons/css/boxicons.css";

function Sidebar() {
  return (
    <div className="h-screen w-2/12 fixed flex flex-col text-white sidebar box-border pt-1 pr-1 pb-1 text:white">
      <span className="text-2xl">Foodie</span>
      <div className="mt-10 flex items-center justify-center flex-col w-full">
        <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 text-gray-400 cursor-pointer hover:bg-slate-600 pr-7 pl-7">
          <div className="flex items-center justify-start w-1/2 h-full">
            <div className="bg-blue-500 focused-div mr-4 w-1/12 h-full"></div>
            <span className="bx bx-list-ul bx-md"></span>
          </div>
          <div className="text-left flex items-center justify-start w-1/2">
            <span>Overview</span>
          </div>
        </div>
        <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 text-gray-400 cursor-pointer hover:bg-slate-600 pr-7 pl-7">
          <div className="flex items-center justify-start w-1/2 h-full">
            <div className="bg-blue-500 focused-div mr-4 w-1/12 h-full"></div>
            <span className="bx bx-list-ul bx-md"></span>
          </div>
          <div className="text-left flex items-center justify-start w-1/2">
            <span>Tables</span>
          </div>
        </div>
        <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 text-gray-400 cursor-pointer hover:bg-slate-600 pr-7 pl-7">
          <div className="flex items-center justify-start w-1/2 h-full">
            <div className="bg-blue-500 focused-div mr-4 w-1/12 h-full"></div>
            <span className="bx bx-list-ul bx-md"></span>
          </div>
          <div className="text-left flex items-center justify-start w-1/2">
            <span>Orders</span>
          </div>
        </div>
        <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 text-gray-400 cursor-pointer hover:bg-slate-600 pr-7 pl-7">
          <div className="flex items-center justify-start w-1/2 h-full">
            <div className="bg-blue-500 focused-div mr-4 w-1/12 h-full"></div>
            <span className="bx bx-list-ul bx-md"></span>
          </div>
          <div className="text-left flex items-center justify-start w-1/2">
            <span>Menu</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
