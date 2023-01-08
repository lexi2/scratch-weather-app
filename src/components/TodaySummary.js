import React from "react";
import './TodaySummary.css'
import TodayDetails from "./TodayDetails";
import TodayTemp from "./TodayTemp";

export default function TodaySummary (props) {
  return (
<div className="TodaySummary row">
      <TodayDetails
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
        value={24}
      />
    </div>
  );
}