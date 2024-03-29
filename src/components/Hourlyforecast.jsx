import React from 'react'
import '../styles/Hourlyforecast.css'
import Hourforecastcontainer from '../UIutils/Hourforecastcontainer'
function Hourlyforecast() {
  return (
    <>
    <h3 style={{color:'white'}}>Next Hours</h3>
    <div className='hourly'>
   
     <Hourforecastcontainer time='08:00AM' type='Temp' value='30 degree C'/>
     <Hourforecastcontainer time='09:00AM' type='Temp' value='30 degree C'/>
     <Hourforecastcontainer time='10:00AM' type='Temp' value='30 degree C'/>
     <Hourforecastcontainer time='11:00AM' type='Temp' value='30 degree C'/>
     <Hourforecastcontainer time='12:00AM' type='Temp' value='30 degree C'/>
     <Hourforecastcontainer time='01:00PM' type='Temp' value='30 degree C'/>

    </div>
    </>
  )
}

export default Hourlyforecast
