import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Menuside() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    getItems();
  }, []);
  const getItems = async () => {
    const token = localStorage.getItem("token");
    if (!token) return;
    const api = await fetch(
      "http://196.223.240.154:8099/supapp/api/menu-items?page=0&size=30",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );
    const data = await api.json();
    console.log(data);
    setItems(data);
  };
  return (
    <div className="relative ml-48 w-8/12 flex items-center">
      <Navbar />
      {JSON.stringify(items)}
    </div>
  );
}

export default Menuside;
