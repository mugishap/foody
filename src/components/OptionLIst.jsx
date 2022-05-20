import React,{useState} from 'react'

function OptionLIst({index,number,title,details,section,sidenav, item, navLists, setSection, setNavLists}) {
    const [focus,setFocus]=useState(item.focus)

    const focusHandler  = ()=>{
      setSection(number)
     // console.log(section, number);
    }
    
  return (
    
    <div className={number==section? " option border-l-4 border-l-[#F53B57]":"option"} 
       onClick={focusHandler}
         >
            <div className={number==section? "identif bg-[#F53B57]":"identif" }>{number}</div>
            <div className='details'>
                <h4>{title}</h4>
                <p>{details}</p>

            </div>

    </div>

  )
}

export default OptionLIst