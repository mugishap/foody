import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Sidenav from '../components/Sidenav'
import Section3 from '../components/Section3'

function RestProfile() {
  const [section,setSection]=useState(1)
  console.log(section);
  return (
    <div>
        <Navbar/>
        <div className='main '>
          <Sidenav setSection={setSection} section={section}/>
          
          <div className='subdiv2'>
            
            {section===1 && <Section1/>}
            {section===2 && <Section2/>}
            {section===3 && <Section3/>} 
            
          </div>

        </div>
    </div>
  )
}

export default RestProfile