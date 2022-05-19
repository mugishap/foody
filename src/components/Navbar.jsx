import React from 'react'
import {FaSearch} from "react-icons/fa"
import {MdNotifications} from "react-icons/md"

function Navbar() {
  return (
    <div className="navbar">
        <p>F<span>OO</span>DY</p>

        <div className='icons'>
           <FaSearch id='search'/>
           <MdNotifications id='notif'/>

        </div>
        <div className='user'>
            <p>Shyaka Valentin</p>
            <img src="profile.png" />

        </div>


    
         
    </div>
  )
}

export default Navbar