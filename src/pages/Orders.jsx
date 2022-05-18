import React from 'react'
import Orderside from '../components/Orderside'
import Sidebar from '../components/Sidebar'

function Orders() {
  return (
    <div>
      <Sidebar/>
      <Orderside tab='orders'/>  
    </div>
  )
}

export default Orders