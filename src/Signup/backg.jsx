import React from 'react'
// import image from "../public/honey.jpg"


export default function Backg() {
  return (
    <div className=" h-screen w-full overflow-y-hidden flex">
    <div className="h-full w-2/4">
     <img src="honey.jpg" alt="honey" className=" w-full h-"/>
    <div className="w-2/4 h-full absolute top-0  bg-[#F53B57] opacity-40 items-center content-center">
      
    </div>
      </div>
      <div className=" bg-[#F53B57] h-full w-2/4 opacity-40">
      </div>
      </div>
  )
}
