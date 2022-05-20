import React from 'react'

function Order({no,orderName,recipe,qty,tableNAme,amount,clientType,phoneNo}) {
    
  return (
    <div className="order">
    <div className='order-No'>
        <p>order {no} |</p>

    </div>
    <div className='order-details'>
        <h3>{orderName}</h3>
        <p>{recipe} | x {qty}</p>
        <div className='table-name'>
        <hr/> <p>{tableNAme}</p><hr/>
        </div>

    </div>
    <div className='order-prices'>
        <h3>FRW {amount}</h3>
        <div className='client-type'>
        <hr/> <p>{clientType}</p><hr/>
        
        </div>
        <span>{phoneNo}</span>
    </div>

</div>
  )
}

export default Order