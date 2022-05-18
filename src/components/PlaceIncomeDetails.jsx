import React from "react";

  function PlaceIncomeDetails({
    title,
    description1,
    amount1,
    description2,
    amount2,
  }) {
    return (
      <div className="h-32 xl:h-40 w-[100%] md:w-80 border-2 text-sm xl:text-base border-blue-400 rounded-md py-2 flex flex-col">
        <div className="px-3 border-b-2 flex flex-col">
          <div className="flex flex-row justify-between">
            <h5 className=" text-black font-semibold ">{title}</h5>
            <h5 className=" text-rose-500 font-semibold">
              View Details
            </h5>
          </div>
          <h5 className=" flex   text-gray-500 font-semibold mt-2 mx-0  ">
            Sales
          </h5>
          <div className="flex flex-row mt-2 justify-between">
            <h5 className=" text-black font-semibold ">
              {description1}
            </h5>
            <h5 className=" text-gray-500 font-semibold">{amount1}</h5>
          </div>
        </div>
        <div className="flex flex-row mt-2 px-3 justify-between">
          <h5 className=" text-black font-semibold">{description2}</h5>
          <h5 className=" text-gray-500 font-semibold">{amount2}</h5>
        </div>
      </div>
    );
  }
export default PlaceIncomeDetails