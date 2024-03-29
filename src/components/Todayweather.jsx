import React from 'react'
import Container from '../UIutils/Container'
import '../styles/Todayweather.css'
import { useData } from '../context/Todayweathercontext'
function Todayweather() {
  const {data}=useData();
  const weather=data;
  
  return (
    <div className='today'>
     {weather  && weather.data && weather.data.main &&(
      <>
          <h1>{weather.data.name}, <span>{weather.data.sys.country }</span></h1>
          <div>
          <img src={`https://openweathermap.org/img/wn/${weather.data.weather[0].icon}@2x.png`} alt="" />
          <h5>{weather.data.weather[0].description}</h5>
          </div>
        
          <div className='t-container'>
          <Container type='Wind' value={weather.data.wind.speed +'m/s'}/>
          <Container type='Temp' value={weather.data.main.temp+'K'}/>
          <Container type='Humidity' value={weather.data.main.humidity}/>
          <Container type='Cloud' value={weather.data.clouds.all}/>
          <Container type='Pressure' value={weather.data.main.pressure}/>
          <Container type='Sea_level' value={weather.data.main.sea_level}/>
          </div>
          </>
     )}
  


    </div>
  )
}

export default Todayweather
