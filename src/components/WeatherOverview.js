import React from "react";
import "./WeatherOverview.css"
import Search from './Search'



export default function WeatherOverview () {
  return (
    <div className="WeatherOverview row">
      <Search defaultCity="New York"/>
    </div>
    
  );
}