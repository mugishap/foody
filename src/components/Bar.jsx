import React from 'react';
import './css/Bar.css'
import { MdOutlineAccountCircle } from "react-icons/md";
import { BsPieChartFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { AiTwotoneSetting } from "react-icons/ai";
import { FcSlrBackSide } from "react-icons/fc";


function Sidebar() {
  return (
    <div>
        <form className='.bar-form form'>
        <div className='rec'>
        <h2 className='food'><div>F</div><div className='oo'>oo</div><div>dy</div></h2>
            <div className='over'>
                
        <div className='view'><BsPieChartFill/>  Overview</div>
     <div className='clients'><FcSlrBackSide/>  Clients</div>
     <div className='users'><HiUserGroup/>    users</div>
     </div>
     <div className='sac'>
     <div className='settings'><AiTwotoneSetting/> Settings</div>
     <div className='account'><MdOutlineAccountCircle/>  My Account</div>
    </div>
            </div>
       
     <div className='cu'></div>
     

        
        </form>
        </div>
        
  )
}

export default Sidebar
// HiUserGroup