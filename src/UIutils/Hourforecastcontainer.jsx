import React from 'react'
import '../styles/Hourlyforecast.css'

function Hourforecastcontainer({time,type,value}) {
  return (
  
    <div className='hourly-forecast'>
    <h4>{time}</h4>
      <h3>{type}</h3>
      <h3>{value}</h3>
    </div>
  
  )
}

export default Hourforecastcontainer
