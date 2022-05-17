import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import moment from "moment";

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
  const date = moment().format("dddd, MMMM Do YYYY");
  console.log(date);
  return (
    <div className="ml-72 w-10/12 flex flex-col items-center">
      <Navbar />
      <div className="rounded-xl w-10/12 bg-white flex flex-col items-center p-8 box-border h-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col items-start">
            <span className="text-3xl font-bold">Menu</span>
            <span className="text-xl text-gray-500">On {date}</span>
          </div>
          <div className="buttons ml-48">
            <button
              className="p-3 rounded-md border-4 m-3 menu-btn w-32"
              onMouseOver={(e) => {
                e.target.classList.add("focused-btn");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("focused-btn");
              }}
            >
              Drinks
            </button>
            <button
              className="p-3 rounded-md border-4 m-3 menu-btn w-32"
              onMouseOver={(e) => {
                e.target.classList.add("focused-btn");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("focused-btn");
              }}
            >
              Starter
            </button>
            <button
              className="p-3 rounded-md border-4 m-3 menu-btn w-32"
              onMouseOver={(e) => {
                e.target.classList.add("focused-btn");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("focused-btn");
              }}
            >
              Appetizer
            </button>
            <button
              className="p-3 rounded-md border-4 m-3 menu-btn w-32"
              onMouseOver={(e) => {
                e.target.classList.add("focused-btn");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("focused-btn");
              }}
            >
              Desert
            </button>
            <button
              className="p-3 rounded-md border-4 m-3 menu-btn w-32"
              onMouseOver={(e) => {
                e.target.classList.add("focused-btn");
              }}
              onMouseLeave={(e) => {
                e.target.classList.remove("focused-btn");
              }}
            >
              Main
            </button>
          </div>
        </div>
        {items.content &&
          items.content.map((item) => {
            return (
              <div className="w-10/12 h-48 m-3 rounded-xl bg-gray-200 flex flex-col ">
                <span>{item.description}</span>
                <span>{item.name}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Menuside;
