import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "../App.css";
import Navbar from "../components/Navbar";
import Order from "../components/Order";
import OrderStats from "../components/OrderStats";
import { AiFillPlusCircle } from "react-icons/ai";
import OrderType from "../components/OrderType";
import moment from "moment";

function Orders() {
  const [data, setData] = useState({});
  const date = moment().format("dddd, MMMM Do YYYY");
  const [loader, setLoader] = useState(true);

  const getOrders = async () => {
    const token = localStorage.getItem("accessToken");
    if (!token) return window.location.replace("/login");

    const api = await fetch(
      "https://backend.supamenu.rw/supapp/api/orders?page=0&size=30",
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
    setData(data.content);
    setLoader(false)
  };
  useEffect(() => {
    getOrders();
  }, []);


  return (
    <div className="order-main flex items-start justify-start  w-full">
      <Sidebar />
      <div className="orders fixed flex items-center justify-center ml-[5 em] flex-col  w-10/12">
        <Navbar />
        {loader ? (
          <img src="https://res.cloudinary.com/precieux/image/upload/v1653023282/cube_wg1jwa.gif" className="w-1/12 m-auto" alt="" />
        ) : (
          <div className="order-tab  ml-[30vw]">
            <div className="lfloaters">
              <div className="uppers ">
                <div className="">
                  <h3>Orders</h3>
                  <p>{date}</p>
                </div>
                <div className="btns">
                  <button className="hover:bg-[#f53b57] hover:text-white">
                    New
                  </button>
                  <button className="hover:bg-[#f53b57] hover:text-white">
                    Delivered
                  </button>
                  <button className="hover:bg-[#f53b57] hover:text-white">
                    Rejected
                  </button>
                  <button className="hover:bg-[#f53b57] hover:text-white">
                    All
                  </button>
                </div>
              </div>
              <div className="all-orders">
                {data.map((item) => (
                  <Order
                    no={item.id}
                    clientName={item.customer.firstName}
                    orderName={item.orderDetails[0].item.name}
                    recipe={item.orderDetails[0].item.name}
                    qty={item.numberOfProducts}
                    tableName={item.tableName}
                    amount={item.orderDetails[0].item.unitPrice}
                    clientType={item.serviceProvider.address}
                    phoneNo={item.customer.mobile}
                    key={item.createdAt}
                  />
                ))}
              </div>
            </div>
            <div className="rfloaters">
              {data.map((item) => (
                <OrderStats
                  status={item.status}
                  number={item.numberOfProducts}
                  key={item.createdAt}
                />
              ))}
              <div className="add-order w-11/12 flex flex-col items-center justify-start h-auto ">
                <h3>Add Order</h3>
                <p>Manually</p>
                <div className="field flex justify-between items-center">
                  <input
                    onChange={() => {}}
                    type="text"
                    value="Create new order"
                  />
                  <AiFillPlusCircle className="icon" />
                </div>
                {data.map((item) => (
                  <OrderType
                    type={item.orderType}
                    state={"state"}
                    key={item.type}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
