import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'
import Weather from './app_component/weather.component'

//api.openweathermap.org/data/2.5/weather?q=London,uk
const API_KEY = '31e8f250f0ceb61c9127a1bd9235a510'

function App(){
  const [weather, setWeather] = useState([]);


useEffect(() =>{
async function getWeather(){
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Campinas&appid=${API_KEY}`
  );

  const response = await api_call.json();
  setWeather(response.data);
  console.log(response);
  
}
  getWeather();
  
}, [])
    return(
      <div className="App">
      <Weather />
    </div>
    );
}
export default App;
