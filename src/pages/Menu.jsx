import React, { useState, useEffect } from "react";
import Menuside from "../components/Menuside";
import Sidebar from "../components/Sidebar";

function Menu() {
  return (
    <div className="flex justify-between flex-row">
      <Sidebar />
      <Menuside />
    </div>
  );
}

export default Menu;
