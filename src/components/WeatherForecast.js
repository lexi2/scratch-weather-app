import React, {useState, useEffect}from "react";
import "./WeatherForecast.css"
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props){
   let [loaded, setLoaded] = useState(false);
   let [forecast, setForecast] = useState(null);

    useEffect(() => {
    setLoaded(false);
    }, [props.coordinates]);

  function handleResponse(response){
    setForecast(response.data.list);
    setLoaded(true)
   }

  if (loaded){
    return (
      <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div className="col-2 forecast-day" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
            {/* <WeatherForecastDay data={forecast[0]}/> */}
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