import React, {useState} from "react";
import axios from "axios";
import './Search.css';
import TodaySummary from "./TodaySummary";
import WeatherOverview from "./WeatherOverview";

export default function Search (props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      name: response.data.name,
    });
  }

  function getWeatherData ({city}) {
    let apiKey = "96fc9dbf0bd42fe281a341e984ec7160";
    let requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(requestUrl).then(handleResponse);
  }

  function updateCity(event) {
  setCity(event.target.value);
  console.log(city)
  }

  function handleSubmit(event) {
    getWeatherData({city})
    event.preventDefault();
  }


  return (
    <div className="Search">
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              className="form-control form-control-override"
              type="search"
              placeholder="Type a city.."
              aria-label="Search"
              autoComplete="off"
              autoFocus="on"
              onChange={updateCity}
            />
          </div>
          <div className="col-3">
            <button
              className="btn btn-primary w-100 button-override"
              type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
     <TodaySummary data={weatherData} />
     <ul>
      <li>{props.defaultCity}</li>
      <li>things will show there</li>
      </ul>
    </div>
  );
}