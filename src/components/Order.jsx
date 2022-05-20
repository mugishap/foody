import React from "react";

function Order({
  no,
  clientName,
  orderName,
  recipe,
  qty,
  tableName,
  amount,
  clientType,
  phoneNo,
}) {
  return (
    <div className="order h-32 flex items-center justify-around ">
      <div className="order-No">
        <p>Order {no} |</p>
      </div>
      <div className="order-details">
        <h3>{orderName}</h3>
        <p>
          {recipe} x {qty}
        </p>
        <div className="table-name flex items-center flex-col justify-center">
          <p>{tableName}</p>
          <hr />
          <p>{clientName}</p>
        </div>
      </div>
      <div className="order-prices">
        <h3>FRW {amount}</h3>
        <div className="client-type">
          <hr /> <p>{clientType}</p>
          <hr />
        </div>
        <span>{phoneNo}</span>
      </div>
    </div>
  );
}

export default Order;
