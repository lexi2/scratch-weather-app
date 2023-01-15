import React from "react";
import './TodaySummary.css'
import PrettyDate from "./PrettyDate";
import CurrentTemperature from "./CurrentTemperature";

export default function TodaySummary (props) {
  return (
    <div className="TodaySummary row">
       <div className="col-6">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <PrettyDate date={props.data.date}/>
          </li>
          <li>Conditions: {props.data.description}</li> 
          <li>
            Humidity: {props.data.humidity}%
          </li>
          <li>
            Wind:{props.data.wind} km/h
          </li>
        </ul>
    </div>
      <div className="col-6 d-flex justify-content-end">
        <div className="d-inline-flex align-items-center">
          <div className="current-temperature">
            <img src= {props.data.icon} alt={props.data.description} className="" />
          </div>
        <CurrentTemperature celsius={props.data.temperature}/>
        </div>
      </div>
    </div>
  );
}