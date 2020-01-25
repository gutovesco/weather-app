import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'weather-icons/css/weather-icons.css'
import Form from './app_component/form.component'
import Weather from './app_component/weather.component'

//api.openweathermap.org/data/2.5/weather?q=London,uk
const API_KEY = '31e8f250f0ceb61c9127a1bd9235a510'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      city: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      celsius: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error:false,
    };
    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-dunny",
      Clouds: "wi-day-fog"
    };
  }

  calCelsius(temp){
    let cell = Math.floor(temp - 273.15)
    return cell;
  }

get_WeatherIcon(icons, rangeId){
  switch(true){
    case rangeId >= 200 && rangeId <= 232:
      this.setState({icon:this.weatherIcon.Thunderstorm})
      break;
    case rangeId >= 300 && rangeId <= 321:
      this.setState({icon:this.weatherIcon.Drizzle})
      break;
    case rangeId >= 500 && rangeId <= 531:
      this.setState({icon:this.weatherIcon.Rain})
      break;
    case rangeId >= 600 && rangeId <= 622:
      this.setState({icon:this.weatherIcon.Snow})
      break;
     case rangeId >= 700 && rangeId <= 781:
      this.setState({icon:this.weatherIcon.Atmosphere})
      break;
    case rangeId === 800:
      this.setState({icon:this.weatherIcon.Clear})
      break;
    case rangeId >= 801 && rangeId <= 804:
      this.setState({icon:this.weatherIcon.Clouds})
      break;   
    case rangeId >= 805:
      this.setState("?")
      break;
      default:
        this.setState({icon:this.weatherIcon.Clouds})
  }
}

getWeather = async (e) =>{
  e.preventDefault();
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=${API_KEY}`
  );

  const response = await api_call.json();
  console.log(response);

  this.setState({
    city: response.name,
    country: response.sys.country,
    celsius: this.calCelsius(response.main.temp),
    temp_max: this.calCelsius(response.main.temp_max),
    temp_min: this.calCelsius(response.main.temp_min),
    description: response.weather[0].description,
  });
  this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)
};

  render(){
    return(
      <div className="App">
      <Form loadweather={this.getWeather}/>
      <Weather 
      city={this.state.city} 
      country={this.state.country} 
      temp_celsius={this.state.celsius}
      temp_max={this.state.temp_max}
      temp_min={this.state.temp_min}
      description={this.state.description}
      weatherIcon={this.state.icon}
      />
    </div>
    );
  }
}

export default App;
