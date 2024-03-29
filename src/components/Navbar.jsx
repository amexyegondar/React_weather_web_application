import React, { useEffect, useState } from 'react'
import '../styles/Navbar.css'
import axios from 'axios';
import { useData } from '../context/Todayweathercontext';
import { useHourlydata } from '../context/Hourlyforecastcontext';
function Navbar() {
  const[input,setInput]=useState('');
  const[todayweather,setTodayweather]=useState(
    {
      loading:false,
      data:{},
      error:false
    }
  )
  const {setData}=useData();
  const {setHourlydata}=useHourlydata();
  const search= async(event)=>{
    const url = 'https://api.openweathermap.org/data/2.5/weather';
    const hourlyforecast='https://pro.openweathermap.org/data/2.5/forecast/hourly'
    const apiKey = "03b790035ac602036a9593ab07c14fac";
    if(event.key==='Enter'){
      event.preventDefault()
      setTodayweather({...todayweather,loading:true})
     
    await axios.get(
      url,{
        params:{
          q:input,
          units:'metrics',
          appid:apiKey
        }
      }
    ).then((res)=>{
      console.log(res);
      setTodayweather({
        data:res.data,loading:false,error:false
      });

    }).catch((error)=>{
      setTodayweather({
        ...todayweather,data:{},error:true
      })
    })

    }
    await axios.get(
      hourlyforecast,{
      params:{
        q:input,
        units:'metrics',
        appid:apiKey
      }
    }
    ).then((res)=>{
      setHourlydata(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  }
  const searchNavbar= async(city)=>{
 
      setTodayweather({...todayweather,loading:true})
      const url = 'https://api.openweathermap.org/data/2.5/weather';
      const hourlyforecast='https://pro.openweathermap.org/data/2.5/forecast/hourly'
      const apiKey = "03b790035ac602036a9593ab07c14fac";
    await axios.get(
      url,{
        params:{
          q:city,
          units:'metrics',
          appid:apiKey
        }
      }
    ).then((res)=>{
      console.log(res);
      setTodayweather({
        data:res.data,loading:false,error:false
      });

    }).catch((error)=>{
      setTodayweather({
        ...todayweather,data:{},error:true
      })
    })
    await axios.get(
      hourlyforecast,{
      params:{
        q:input,
        units:'metrics',
        appid:apiKey
      }
    }
    ).then((res)=>{
      setHourlydata(res.data)
      console.log(res.data)
    }).catch((error)=>{
      console.log(error)
    })
    
  }
  useEffect(()=>{
 setData(todayweather)
  },[todayweather])
  return (
    <div className='navbar'>
    <input 
    type="search" 
    placeholder='What city you want to know?'
    value={input}
    onChange={(e)=>setInput(e.target.value)}
    onKeyDown={search}
    />
    <div className='city-container'>
      <h4 onClick={()=>searchNavbar('Addis Ababa')}>Addis Ababa</h4>
      <h4 onClick={()=>searchNavbar('Bahir dar')}>Bahirdar</h4>
      <h4 onClick={()=>searchNavbar('Adama')}>Adama</h4>
      <h4 onClick={()=>searchNavbar('Mekele')}>Mekele</h4>
      <h4 onClick={()=>searchNavbar('Hawassa')}>Hawasa</h4>
    </div>
    </div>
  )
}

export default Navbar
