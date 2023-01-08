import React from "react";
import "./TodaySummary.css";

export default function TodayTemp(props) {
  return (
    <div className="col-6 d-flex justify-content-end">
      <div className="d-inline-flex align-items-center">
        <div className="current-temperature">
          <img src={props.iconUrl} alt="" className="" />
        </div>
        <div className="current-temperature">
          <strong>{props.value}</strong>
          <span className="units"> °C</span>
        </div>
      </div>
    </div>
  );
}
