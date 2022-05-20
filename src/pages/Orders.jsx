import React from 'react'
import Sidebar from "../components/Sidebar"
import "../App.css"
import Navbar from '../components/Navbar'
import Order from '../components/Order'
import OrderStats from '../components/OrderStats'
import {AiFillPlusCircle} from "react-icons/ai"
import { MdOutlineSignalWifiStatusbarConnectedNoInternet4 } from 'react-icons/md'
import OrderType from '../components/OrderType'

function Orders() {
    const orderstats=[
        {
            status:'delivered',
            number: 6
        },
        {
            status:'Waiting',
            number: 12
        },
        {
            status:'Rejected',
            number: 1
        },
        {
            status:'All',
            number: 30
        }
    ]
    const order=[
        {
            no:1,
            orderName:"Kaffir Lime vodka lemongreass,Ginger,citrus",
            recipe:'Tommy yummy',
            qty:2,
            tableName:"Table 8",
            amount:5000,
            clientType:'Guest',
            phoneNo:"0788457865"

        },
        {
            no:2,
            orderName:"Kaffir Lime vodka lemongreass,Ginger,citrus",
            recipe:'Tommy yummy',
            qty:2,
            tableName:"Table 8",
            amount:5000,
            clientType:'Guest',
            phoneNo:"0788457865"

        },
        {
            no:3,
            orderName:"Kaffir Lime vodka lemongreass,Ginger,citrus",
            recipe:'Tommy yummy',
            qty:2,
            tableName:"Table 8",
            amount:5000,
            clientType:'Guest',
            phoneNo:"0788457865"

        },
        {
            no:4,
            orderName:"Kaffir Lime vodka lemongreass,Ginger,citrus",
            recipe:'Tommy yummy',
            qty:2,
            tableName:"Table 8",
            amount:5000,
            clientType:'Guest',
            phoneNo:"0788457865"

        },
        {
            no:5,
            orderName:"Kaffir Lime vodka lemongreass,Ginger,citrus",
            recipe:'Tommy yummy',
            qty:2,
            tableName:"Table 8",
            amount:5000,
            clientType:'Guest',
            phoneNo:"0788457865"

        },

    ]
    const ordertype=[
        {
            type:"Dessert",
            state:"NEW"
        },
        {
            type:"Main",
            state:"NEW"
        },
        {
            type:"Drink",
            state:"NEW"
        },
        {
            type:"Appetizer",
            state:"NEW"
        },
        {
            type:"Starter",
            state:"NEW"
        }
    ]
  return (
    <div className='order-main flex items-start justify-start  w-full'>
        <Sidebar/>
        <div className="orders fixed w-10/12">
              
              <Navbar/>
              <div className='order-tab ml-72'>
                  <div className='lfloaters'>
                      <div className='uppers'>
                          <div>
                          <h3>Orders</h3>
                          <p>as of 25 May 2022, 09:41 PM</p>

                          </div>
                          <div className='btns'>
                          <button>New</button>
                          <button>Delivered</button>
                          <button>Rejected</button>
                          <button>All</button>
                          </div>
                          
                      </div>
                      <div className="all-orders">
                          {order.map((item) =>(
                              <Order
                              no={item.no}
                              orderName={item.orderName}
                              recipe={item.recipe}
                              qty={item.qty}
                              tableNAme={item.tableName}
                              amount={item.amount}
                              clientType={item.clientType}
                              phoneNo={item.phoneNo}
                              key={item.no}
                              />

                          ))}
                      
                      </div>

                  </div>
                  <div className='rfloaters'>
                      {orderstats.map((item)=>(
                          <OrderStats
                           status={item.status}
                           number={item.number}
                           key={item.number}
                           />
                      ))

                      }
                      <div className='add-order'>
                          <h3>Add Order</h3>
                          <p>Manually</p>
                          <div className='field'>
                              <input type="text" value="Create new order"  />
                              <AiFillPlusCircle className='icon'/>

                          </div>
                          {ordertype.map((item) =>(
                              <OrderType
                                type={item.type}
                                state={item.state}
                                key={item.type}
                                />
                          ))}


                      </div>
                      

                  </div>

              </div>
        </div>
    </div>
  )
}

export default Orders