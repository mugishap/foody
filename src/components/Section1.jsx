import React from 'react'

function Section1() {
  return (
    <div>
        <h3>Restaurant Information</h3>
    <input type={"text"} placeholder="Restaurant name"/>
    <input type={"text"} placeholder="Restaurant complete name"/>
    <h3>Contact number @ Restaurants</h3>
    <div className='specialInput'>
      <p>250 |</p>
      <input type={"text"} placeholder="Mobile number"/>

    </div>
    <h3>Restaurant owner details</h3>
    <div className='specialInput'>
      <p>250 |</p>
      <input type={"text"} placeholder="Mobile number"/>

    </div>
    <div className='owner-det'>
    <input type={"text"} placeholder="Mobile number"/>
    <input type={"text"} placeholder="Owner email" id='owner-email'/>

    </div>
    </div>
  )
}

export default Section1