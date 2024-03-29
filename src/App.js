import './App.css';
import Dailyforecast from './components/Dailyforecast';
import Hourlyforecast from './components/Hourlyforecast';
import Navbar from './components/Navbar';
import Todayweather from './components/Todayweather';

function App() {
  return (
    <div className='app'>
      <div className='navbar-container'>
      <Navbar/>
      </div>
     <div className='weather'>
    
      <Todayweather/>
   
     
    
     <div className='forecast'>
     <div>    
      <Hourlyforecast/>
      </div>
      <div>  
      <Dailyforecast/>
      </div> 
     </div>
     </div>
    </div>
  );
}

export default App;
