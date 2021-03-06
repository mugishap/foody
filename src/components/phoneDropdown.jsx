import React from "react";
import { Link } from "react-router-dom";
function PhoneDropdown({ tab,display }) {
  return (
    <div className={`absolute ${display}   bg-[#061730]  mt-10 w-fit rounded-md`}>
      <div className="  flex flex-col  items-center justify-center pr-5 ">
        <Link to="/overview" className="w-full">
          {tab === "overview" ? (
            <div className="border-l-white border-l-4 flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xs md:text-sm xl:text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx fixed text-white bx-list-ul bx-xs md:bx-sm xl:bx-md"></span>
              </div>
              <div className="text-left text-white flex  justify-start w-1/2">
                <span>Overview</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xs md:text-sm xl:text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx fixed bx-list-ul bx-xs md:bx-sm xl:bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Overview</span>
              </div>
            </div>
          )}
        </Link>
        <Link to="/tables" className="w-full">
          {tab === "tables" ? (
            <div className="border-l-white border-l-8 flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xs md:text-sm xl:text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx fixed bxs-bowl-rice bx-xs md:bx-sm xl:bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Tables</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xs md:text-sm xl:text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx fixed bxs-bowl-rice bx-xs md:bx-sm xl:bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Tables</span>
              </div>
            </div>
          )}
        </Link>
        <Link to="/orders" className="w-full">
          {tab === "orders" ? (
            <div className="border-l-white border-l-8 flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xs md:text-sm xl:text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx fixed bxs-group bx-xs md:bx-sm xl:bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Orders</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xs md:text-sm xl:text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx fixed bxs-group bx-xs md:bx-sm xl:bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Orders</span>
              </div>
            </div>
          )}
        </Link>
        <Link to="/menu" className="w-full">
          {tab === "menu" ? (
            <div className="border-l-white border-l-8 flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xs md:text-sm xl:text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx fixed bxs-food-menu bx-xs md:bx-sm xl:bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Menu</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xs md:text-sm xl:text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx fixed bxs-food-menu bx-xs md:bx-sm xl:bx-md"></span>
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
          {tab === "settings" ? (
            <div className="border-l-white border-l-8 flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xs md:text-sm xl:text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx fixed bxs-cog bx-xs md:bx-sm xl:bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Settings</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xs md:text-sm xl:text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx fixed bxs-cog bx-xs md:bx-sm xl:bx-md"></span>
              </div>
              <div className="text-left text-gray-500 flex items-center justify-start w-1/2">
                <span>Settings</span>
              </div>
            </div>
          )}
        </Link>
        <Link to="/account" className="w-full">
          {tab === "account" ? (
            <div className="border-l-white border-l-8 flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xs md:text-sm xl:text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full">
                <span className="bx fixed bxs-face bx-xs md:bx-sm xl:bx-md"></span>
              </div>
              <div className="text-left text-white flex items-center justify-start w-1/2">
                <span>Account</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xs md:text-sm xl:text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
              <div className="flex items-center justify-start w-1/3 h-full text-gray-500">
                <span className="bx fixed bxs-face bx-xs md:bx-sm xl:bx-md"></span>
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

export default PhoneDropdown;
