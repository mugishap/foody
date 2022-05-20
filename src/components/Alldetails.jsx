import React from 'react'
import './css/Alldetails.css';
import { MdRemoveRedEye } from "react-icons/md";

function Alldetails() {
  return (
    <div><div className="sales">
    <p className='restaurant'>Say Restaurant
    <div className='update'>update yesterday</div></p>
    <p className="frw">234000 FRW
    <div className='update'>on 2450000 frw</div></p>
   <div className='eye'><MdRemoveRedEye /></div>
   <div className='rest'><button >RESTED</button></div>
   </div>
   <hr/>
   <div className="sales">
    <p className='restaurant'>Choose Kigali
    <div className='update'>update yesterday</div></p>
    <p className="frw">234000 FRW
    <div className='update'>on 2450000 frw</div></p>
   <div className='eye'><MdRemoveRedEye /></div>
   <div className='rest'><button >RESTED</button></div>
   </div>
   <hr/>
   <div className="sales">
    <p className='restaurant'>Burger Planet
    <div className='update'>update yesterday</div></p>
    <p className="frw">234000 FRW
    <div className='update'>on 2450000 frw</div></p>
   <div className='eye'><MdRemoveRedEye /></div>
   <div className='rest'><button >RESTED</button></div>
   </div>
   <hr/>
   <div className="hotel">
    <p className='rest'>M Hotel
    <div className='update'>update yesterday</div></p>
    <p className="franc">234000 FRW
    <div className='update'>on 2450000 frw</div></p>
   <div className='eyes'><MdRemoveRedEye /></div>
   <div className='resting'><button >RESTED</button></div>
   </div></div>
  )
}

export default Alldetails