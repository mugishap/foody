import React, { useState } from 'react'
import OptionLIst from './OptionLIst'

const sidenav=[
  {
    number:1,
    title: "Restaurant infrormation",
    details: "Restaurant name, adress, details restaurant details",
    focus: false,
  },
  {
    number:2,
    title: "Restaurant timings",
    details: "Establishment & cuisine type opening hours.",
    focus: false,
  },
  {
    number:3,
    title: "Create your menu",
    details: "Menu, reastaurant, food images.",
    focus: false,
  }
]

function Sidenav({setSection, section}) {
    const [navLists, setNavLists] = useState(sidenav)
    
  return (
    <div className='subdiv1'>
        <h3>1.Create your Restaurant profile</h3>
        {navLists.map((item,i) =>(
            <OptionLIst
            section={section}
            navLists={navLists}
            sidenav={Sidenav}
            index={i}
            item={item}
            setNavLists={setNavLists}
            setSection={setSection}
            number={item.number}
            title={item.title}
            details={item.details}
            />
          ))

          }

    </div>
  )
}

export default Sidenav
