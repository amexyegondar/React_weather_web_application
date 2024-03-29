import React from 'react'
import '../styles/Container.css'
function Container({type,value}) {
  return (
    <div className='container'>
      <h2>{type}</h2>
      
      <h3>{value}</h3>
    </div>
  )
}

export default Container
