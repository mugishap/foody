import React from "react";
import {FaKiwiBird} from 'react-icons/fa'
import {GiPlantSeed} from 'react-icons/gi'
function Notfound() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <div className="bg-white h-1/3 w-2/5 rounded-2xl flex flex-col font-bold text-4xl items-center justify-center text-[#f53b57]">
        <FaKiwiBird className="text-black mb-6 text-6xl"/>
        <GiPlantSeed className="float-right relative top-1 left-16 text-black"/>
        <span className="mb-3">404</span>
        <span>Page not found</span>
      </div>
    </div>
  );
}

export default Notfound;
