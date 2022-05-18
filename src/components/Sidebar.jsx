import React from "react";
import boxicons from "boxicons/css/boxicons.css";
import { Link } from "react-router-dom";

function Sidebar(props) {
  let tab = props.tab;
  console.log(tab);
  setTimeout(() => {
    document.querySelector(".bg-blue-500").parentElement.style.color = "white";
  }, 100);
  return (
    <div className="sidebar-div h-screen w-2/12  flex flex-col text-white sidebar box-border pt-1 pr-1 pb-1 text:white">
      <span className="text-4xl menu-logo">
        F<span className="text-4xl menu-logo oo">oo</span>die
      </span>
      <div className="mt-16 mb-96 flex items-center justify-center flex-col w-full">
        <Link to="/overview" className="w-full">
          {tab === "overview" ? (
            <div className="border-l-white flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx bx-list-ul bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Overview</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx bx-list-ul bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Overview</span>
              </div>
            </div>
          )}
        </Link>
        <Link to="/tables" className="w-full">
          {tab === "overview" ? (
            <div className="border-l-white flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx bxs-bowl-rice bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Tables</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx bxs-bowl-rice bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Tables</span>
              </div>
            </div>
          )}
        </Link>
        <Link to="/orders" className="w-full">
          {tab === "overview" ? (
            <div className="border-l-white flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx bxs-group bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Orders</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx bxs-group bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Orders</span>
              </div>
            </div>
          )}
        </Link>
        <Link to="/menu" className="w-full">
          {tab === "overview" ? (
            <div className="border-l-white flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx bxs-food-menu bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Menu</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx bxs-food-menu bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Menu</span>
              </div>
            </div>
          )}
        </Link>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <Link to="/settings" className="w-full">
          {tab === "overview" ? (
            <div className="border-l-white flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx bxs-cog bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Settings</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx bxs-cog bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Settings</span>
              </div>
            </div>
          )}
        </Link>
        <Link to="/account" className="w-full">
          {tab === "overview" ? (
            <div className="border-l-white flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx bx-list-ul bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Account</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx bxs-face bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Account</span>
              </div>
            </div>
          )}
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
