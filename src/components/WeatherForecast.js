import React, {useState}from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
   let [loaded, setLoaded] = useState(false);
   let [forecast, setForecast] = useState(null);

  function handleResponse(response){
    setForecast(response.data.list);
    setLoaded(true)
   }

  if (loaded){
    console.log(forecast)
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-2 forecast-day">
            <WeatherForecastDay data={forecast[0]}/>
          </div>
        </div>
      </div>
    )
  } else {
    let longtitude = props.coordinates.lon
    let latitude = props.coordinates.lat
    let apiKey = "96fc9dbf0bd42fe281a341e984ec7160";
    let requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;

    axios.get(requestUrl).then(handleResponse);

    return null;
  }
}