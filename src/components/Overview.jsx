import React from "react";
import Sidebar from "./Bar";
import { FaSearch, FaPlusCircle } from "react-icons/fa";
import { MdNotificationsActive } from "react-icons/md";
import "./Overview.css";
import Alldetails from "./Alldetails";

function Overview() {
  return (
    <div className="overall">
      <Sidebar />
      <div className="body">
       <div className="navBar">
        <h3>Overview</h3>
        <FaSearch className="search" />
        <MdNotificationsActive className="notify" />
        <div className="border"></div>
        
        <p className="sonia">Sonia Olga</p>
        </div>
        <img src="https://images.unsplash.com/photo-1556014633-e65544133b86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RhbmRpbmclMjBhbG9uZXxlbnwwfHwwfHw%3D&w=1000&q=80" alt=""></img>
        <div className="combine">
        <div className="Client">
          <h5 className="adding">New client</h5>
          <p className="ading">
            Add a new client <FaPlusCircle className="plus" />
          </p>
        </div>
       
          <div className="All">
              <h4>All Clients</h4>
              <div className="head">
         <p className="class">Class Details</p>
          <p className="sale">Sales</p>
          <p className="report">Detailed report</p>
          <p className="category">Category</p>
          </div>
          <hr/>
         <Alldetails />
          </div>
      
         </div>
         </div>
        </div>
  );
}

export default Overview;
//MdRemoveRedEye
