import React, {useState, useEffect}from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
   let [loaded, setLoaded] = useState(false);
   let [forecast, setForecast] = useState(null);

    useEffect(() => {
    setLoaded(false);
    }, [props.data]);

  function handleResponse(response){
    setForecast(response.data.list);
    setLoaded(true)
   }

  if (loaded){
    return (
      <div className="WeatherForecast">
        <div className="row">
          
            {forecast.map(function (dailyForecast, index) {
              const currentDay = new Date(dailyForecast.dt * 1000).getDay();
              const today = new Date().getDay();
              if (currentDay !== today) {
                return (
                  <div className="col forecast-day" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                  </div>
                );
              }

              return null;
          })}
        </div>
      </div>
    )
  } else {
    let longtitude = props.data.coordinates.lon
    let latitude = props.data.coordinates.lat
    let apiKey = "96fc9dbf0bd42fe281a341e984ec7160";
    let requestUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${latitude}&lon=${longtitude}&appid=${apiKey}&units=metric`;

    axios.get(requestUrl).then(handleResponse);

    return null;
  }
}