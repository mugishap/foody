import React from "react";

function Revenues({ RevenuesData,title, amount }) {
    return (
      <div
        className={(title!=RevenuesData[RevenuesData.length-1].title)?`  border-b-2  font-semibold    w-full h-20 xl:h-32 pt-3 `:"font-semibold border-b-2 md:border-b-0  w-full h-20 xl:h-32 pt-3 "}
      >
        <h5 className={"text-gray-500 w-fit m-auto text-sm md:text-base xl:text-lg"}>{title}</h5>
        <h5 className={"text-black w-fit m-auto text-xs md:text-sm"}>{amount}</h5>
      </div>
    );
  }
  export default Revenues