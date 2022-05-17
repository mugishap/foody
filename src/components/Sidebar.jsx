import React from "react";
import boxicons from "boxicons/css/boxicons.css";

function Sidebar() {
  return (
    <div className="h-screen w-2/12 fixed flex flex-col text-white sidebar box-border pt-1 pr-1 pb-1 text:white">
      <span className="text-4xl menu-logo">
        F<span className="text-4xl menu-logo oo">oo</span>die
      </span>
      <div className="mt-20 mb-96 flex items-center justify-center flex-col w-full">
        <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 text-gray-400 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
          <div className="flex items-center justify-start w-1/3 h-full">
            <div className="bg-blue-500 focused-div mr-4 w-1/12 h-full"></div>
            <span className="bx bx-list-ul bx-md"></span>
          </div>
          <div className="text-left flex items-center justify-start w-1/2">
            <span>Overview</span>
          </div>
        </div>
        <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 text-gray-400 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
          <div className="flex items-center justify-start w-1/3 h-full">
            <div className="bg-blue-500 focused-div mr-4 w-1/12 h-full"></div>
            <span className="bx bxs-bowl-rice bx-md"></span>
          </div>
          <div className="text-left flex items-center justify-start w-1/2">
            <span>Tables</span>
          </div>
        </div>
        <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 text-gray-400 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
          <div className="flex items-center justify-start w-1/3 h-full">
            <div className="bg-blue-500 focused-div mr-4 w-1/12 h-full"></div>
            <span className="bx bxs-group bx-md"></span>
          </div>
          <div className="text-left flex items-center justify-start w-1/2">
            <span>Orders</span>
          </div>
        </div>
        <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 text-gray-400 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
          <div className="flex items-center justify-start w-1/3 h-full">
            <div className="bg-blue-500 focused-div mr-4 w-1/12 h-full"></div>
            <span className="bx bxs-food-menu bx-md"></span>
          </div>
          <div className="text-left flex items-center justify-start w-1/2">
            <span>Menu</span>
          </div>
        </div>
      </div>
      <div className="mt-32 flex flex-col items-center justify-center">
        <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 text-gray-400 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
          <div className="flex items-center justify-start w-1/3 h-full">
            <div className="bg-blue-500 focused-div mr-4 w-1/12 h-full"></div>
            <span className="bx bxs-cog bx-md"></span>
          </div>
          <div className="text-left flex items-center justify-start w-1/2">
            <span>Settings</span>
          </div>
        </div>
        <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 text-gray-400 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
          <div className="flex items-center justify-start w-1/3 h-full">
            <div className="bg-blue-500 focused-div mr-4 w-1/12 h-full"></div>
            <span className="bx bxs-face bx-md"></span>
          </div>
          <div className="text-left flex items-center justify-start w-1/2">
            <span>Account</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
