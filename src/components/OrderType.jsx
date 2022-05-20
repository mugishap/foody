import React from 'react'

function OrderType({type,state}) {
  return (
    <div className="order-type">
        <input type="checkbox" name="" id="check" className=' rounded-full'/>
        <p>{type}</p>
        <button>{state}</button>
    </div>
  )
}

export default OrderType