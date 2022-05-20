import React from 'react'

function Section2() {
  return (
    <div><h3>Restaurant Type(Restaurant,pub,hotel, coffeeshop,other)</h3>

    <select name="Restaurant type" id="type" value={'Restaurant'}>
      <option value="Restaurant">Restaurant</option>
      <option value="Pub">Pub</option>
      <option value="Hotel">Hotel</option>
      <option value="other">Other</option>
    </select>
    <select name="country" id="type" value={'African'}>
      <option value="African">African</option>
      <option value="Asian">Asian</option>
      <option value="American">American</option>
      <option value="European">European</option>
    </select>
    <h3>Opening hours</h3>
   <div className='opening-hours'>
    <div className='specialInput2'>
    <p>From |</p>
    <input onChange={()=>{}} type={"text"} placeholder="14:00"/>

  </div>
  <div className='specialInput2'>
    <p>From |</p>
    <input onChange={()=>{}} type={"text"} placeholder="14:00"/>

  </div>
  </div>
  <h3>Upload Images (Pictures or Logos)</h3>
  <div id='upload'><p>Upload Image</p></div>

</div>
  )
}

export default Section2