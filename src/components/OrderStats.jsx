import React from 'react'

function OrderStats({status,number}) {
  return (
    <div className='option'>
    <h3>{status}</h3>
    <p>{number}</p>
    <hr/>

    </div>
  )
}

export default OrderStats