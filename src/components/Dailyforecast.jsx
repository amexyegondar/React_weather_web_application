import React from 'react'
import '../styles/DailyForecast.css'
import Hourforecastcontainer from '../UIutils/Hourforecastcontainer';
function Dailyforecast() {
  
  return (
    <>
    <h3 style={{color:'white'}}>Next Days</h3>
    <div className='daily'>
     
      <Hourforecastcontainer time='Tuesday' type='Temp' value='25 degree C'/>
      <Hourforecastcontainer time='Wensday' type='Temp' value='25 degree C'/>
      <Hourforecastcontainer time='Thursday' type='Temp' value='25 degree C'/>
      <Hourforecastcontainer time='Friday' type='Temp' value='25 degree C'/>
      <Hourforecastcontainer time='Tuesday' type='Temp' value='25 degree C'/>
      <Hourforecastcontainer time='Thursday' type='Temp' value='25 degree C'/>
     
     
      
      
    </div>
    </>
      
  )
}

export default Dailyforecast
