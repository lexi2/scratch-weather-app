import React from "react";
import "./WeatherOverview.css"
import Search from './Search'
import TodaySummary from "./TodaySummary";


export default function WeatherOverview () {
  return (
    <div className="WeatherOverview row">
      <Search />
      <TodaySummary />
    </div>
    
  );
}