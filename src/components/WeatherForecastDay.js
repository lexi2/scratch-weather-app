import React from "react";

export default function WeatherForecastDay(props) {
  
    function maxTemperature() {
    let temperature = Math.round(props.data.main.temp_max);
    return `${temperature}`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.main.temp_min);
    return `${temperature}`;
  }

  function day() {
  let date = new Date(props.data.dt * 1000);
  let day = date.getDay();

  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[day];
}
  return (
    <div>
      <div className="forecast-date">
       {day()}
      </div>
      <div>
        {/* <img src="http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png" alt={props.data.weather[0].description} className="" /> */}
      </div>
      <div className="forecast-temps">
        <span className="forecast-min-temp">{minTemperature()}°</span>
        <span className="forecast-max-temp">{maxTemperature()}°</span>
      </div>
    </div>
  );
}