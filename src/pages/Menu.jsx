import React, { useState, useEffect } from "react";
import Menuside from "../components/Menuside";
import Sidebar from "../components/Sidebar";

function Menu() {
  document.querySelector('title').textContent = 'Foody | Menu'

  return (
    <div className="flex justify-between flex-row">
      <Sidebar tab='menu' />
      <Menuside />
    </div>
  );
}

export default Menu;
