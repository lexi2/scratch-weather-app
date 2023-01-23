import React from "react";
import "./WeatherForecast.css"


export default function WeatherForecast(props){
  return (
  <div className="WeatherForecast">
    <div className="row">
      <div className="col-2 forecast-date">
      Thu 
      <img src= {props.data.icon} alt={props.data.description} className="" />
      <div className="forecast-temps">
        <span className="forecast-min-temp">10 </span>
        <span className="forecast-max-temp">20</span>
      </div>
      </div>
    </div>
  </div>
  )
}