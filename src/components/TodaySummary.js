import React from "react";
import './TodaySummary.css'
import PrettyDate from "./PrettyDate";

export default function TodaySummary (props) {
  return (
    <div className="TodaySummary row">
       <div className="col-6">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <PrettyDate date={props.data.date}/>
          </li>
          <li>{props.data.description}</li>
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
            <img src="http://openweathermap.org/img/wn/02d@2x.png" alt="" className="" />
          </div>
          <div className="current-temperature">
            <strong>{props.data.temperature}</strong>
            <span className="units"> °C</span>
          </div>
        </div>
      </div>
    
      {/* <TodayDetails
        data={props.temperature}
        location={props.data.city}
        date="Saturday"
        time="15.10"
        description={props.data.description}
        humidity={props.data.humidity}
        wind={props.data.wind}
      />
      <TodayTemp
        iconUrl="http://openweathermap.org/img/wn/02d@2x.png"
        value={10}
      />  
   */}
    </div>
  );
}