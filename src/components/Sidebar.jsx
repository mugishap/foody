import React from "react";
import boxicons from "boxicons/css/boxicons.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { VscAccount } from "react-icons/vsc";

function Sidebar(props) {
  let tab = props.tab;
  const handleLogout = () => {
    localStorage.removeItem('userCredentials')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('images')
    window.location.replace('/login')
  }
  return (
    <div className="z-10 shadow-2xl shadow-black sidebar-div relative top-0  h-screen w-2/12  flex flex-col text-white sidebar box-border pt-1 pr-1 pb-1 text:white">
      <span className="text-4xl font-[500] menu-logo text-center">
        F<span className="text-4xl menu-logo oo">oo</span>dy
      </span>
      <div className="mt-16 mb-96 flex items-center justify-center flex-col w-full">
        <Link to="/overview" className="w-full">
          {tab == "overview" ? (
            <div className="border-l-white border-l-4 flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-600 rounded-xl hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx fixed absolute left-[30px] bx-list-ul bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Overview</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-600 rounded-xl hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx fixed bx-list-ul bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Overview</span>
              </div>
            </div>
          )}
        </Link>
        <Link to="/tables" className="w-full">
          {tab == "tables" ? (
            <div className="border-l-white border-l-8 flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-600 rounded-xl hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx fixed absolute left-[30px] bxs-bowl-rice bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Tables</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-600 rounded-xl hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx fixed bxs-bowl-rice bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Tables</span>
              </div>
            </div>
          )}
        </Link>
        <Link to="/orders" className="w-full">
          {tab == "orders" ? (
            <div className="border-l-white border-l-8 flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-600 rounded-xl hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx fixed absolute left-[30px] bxs-group bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Orders</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-600 rounded-xl hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx fixed bxs-group bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Orders</span>
              </div>
            </div>
          )}
        </Link>
        <Link to="/menu" className="w-full">
          {tab == "menu" ? (
            <div className="border-l-white border-l-8 flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-600 rounded-xl hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx fixed absolute left-[30px] bxs-food-menu bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Menu</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-600 rounded-xl hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx fixed bxs-food-menu bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Menu</span>
              </div>
            </div>
          )}
        </Link>
      </div>
      <div className=" flex flex-col items-center justify-center">
        <Link to="/account" className="w-full">
          {tab == "account" ? (
            <div className="border-l-white border-l-8 flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-600 rounded-xl hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx fixed absolute left-[30px] bxs-face bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Account</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xl h-10 cursor-pointer hover:bg-slate-600 rounded-xl hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx fixed bxs-face bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Account</span>
              </div>
            </div>
          )}
        </Link>
        <div className="w-full mt-10 flex flex-col items-center justify-center">
          <Button onClick={handleLogout} variant="contained" className="w-10/12">Logout</Button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
