import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'
import Weather from './app_component/weather.component'

//api.openweathermap.org/data/2.5/weather?q=London,uk
const API_KEY = '31e8f250f0ceb61c9127a1bd9235a510'

class App extends React.Component{
  constructor(){
    super();
    this.state = {};
    this.getWeather()
  }

getWeather = async () =>{
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Campinas&appid=${API_KEY}`
  );

  const response = await api_call.json();
  console.log(response);
}

  render(){
    return(
      <div className="App">
      <Weather />
    </div>
    );
  }
}

export default App;
