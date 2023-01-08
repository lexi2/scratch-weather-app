import React from "react";
import './TodaySummary.css'
import TodayDetails from "./TodayDetails";
import TodayTemp from "./TodayTemp";

export default function TodaySummary (props) {
  return (
<div className="TodaySummary row">
      <TodayDetails
        location="Sydney"
        date="Saturday"
        time="15.10"
        description="Sunny and clear"
        humidity={20}
        wind={15}
      />
      <TodayTemp
        iconUrl="http://openweathermap.org/img/wn/02d@2x.png"
        value={24}
      />
    </div>
  );
}