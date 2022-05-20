import React from 'react'
import { useState } from 'react'

function Section3() {
    const dietTypes=[
        {
            name:'Drinks',
            focus:false
        },
        {
         name:'Starter',
         focus:false
     },
     {
         name:'Appetizer',
         focus:false
     },
     {
         name:'Main',
         focus:false
     }
    ]
   
    // const focusHandler  = ()=>{
    //     //const [focus,setFocus]=useState(false)
    //     setFocus(true)
      
    // }
    
       
       function Diet({name,focus}){
        
           return(
               <div className={focus? 'bg-[#F53B57] text-white' :"div"}  >
                   <p>{name}</p>
               </div>
           )
       };
  return (
    <div>
        <div className='type'>
            {dietTypes.map((diet) =>(
                <Diet name={diet.name} focus={diet.focus} />
            ))}
            


        </div>
        <h3>Name</h3>
        <input onChange={()=>{}} type={'text'} placeholder='Menu name' id='menu'/>
        <h3>Price</h3>
        <input  onChange={()=>{}} type={'text'} placeholder='RWF' id='menu'/>

        <h3>Menu description</h3>
        <input  onChange={()=>{}} type={'text'} placeholder='Ingredients' id='menu'/>
        <h3>Image</h3>
        <input  onChange={()=>{}} type={'text'} placeholder='Upload image' id='menu'/>

       <div className='btn'><button>ADD MORE</button></div> 

    </div>
  )
}

export default Section3