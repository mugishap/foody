import React,{useState} from "react";
import boxicons from "boxicons/css/boxicons.css";
import { Link } from "react-router-dom";
import PhoneDropdown from "./phoneDropdown";
function Sidebar(props) {
  const [displayDropdown,setDisplayDropdown]=useState("left-[1000px]")
  let tab = props.tab;
  const handleLogout = () => {
    localStorage.removeItem('userCredentials')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')
    localStorage.removeItem('images')
    window.location.replace('/login')
  }
  return (
    <div className="w-full md:w-2/12">

      <div className="z-10 shadow-2xl shadow-black sidebar-div relative top-0  h-screen   hidden md:flex flex-col text-white sidebar box-border pt-1 pr-1 pb-1 text:white">
        <span className="xl:text-4xl text-xl md:text-3xl  font-[500] menu-logo text-center">
          F
          <span className="xl:text-4xl text-xl md:text-3xl menu-logo oo">
            oo
          </span>
          dy
        </span>
        <div className="mt-16 mb-96 flex items-center justify-center flex-col w-full pr-5">
          <Link to="/overview" className="w-full">
            {tab === "overview" ? (
              <div className="border-l-white border-l-4 flex items-center flex-row justify-between w-full box-border m-1 font-semibold text-xs md:text-sm xl:text-xl h-10 cursor-pointer hover:bg-slate-700 hover:text-white pr-7 pl-7">
                <div className="flex items-center justify-start w-1/3 h-full">
                  <span className="bx fixed bx-list-ul bx-xs md:bx-sm xl:bx-md"></span>
                </div>
                <div className="text-left text-white flex items-center justify-start w-1/2">
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
      <div className="sm:hidden flex flex-row w-full bg-[#061730]">
        <div className="flex flex-row px-5 pt-1 w-fit m-auto">
          <h4 className="xl:text-4xl text-xl md:text-3xl  font-[500] text-white menu-logo text-center">
            F
            <span className="xl:text-4xl text-xl md:text-3xl menu-logo oo">
              oo
            </span>
            dy
          </h4>
          <button onFocus={()=>setDisplayDropdown("left-[8px]")} onBlur={()=>setDisplayDropdown("left-[1000px]")}>
            <span className="bx bxs-detail bx-sm ml-6 mt-1 hover:text-rose-500   text-white" ></span>
        <PhoneDropdown tab={tab} display={displayDropdown}/>

          </button>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
