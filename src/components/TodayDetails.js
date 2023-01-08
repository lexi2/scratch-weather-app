import React from "react";

export default function TodayDetails(props) {
  return (
    <div className="col-6">
      <h1 id="city">{props.location}</h1>
      <ul>
        <li>
          <span></span>{" "}
          <span>
            {props.date} {props.time}, {props.description}
          </span>{" "}
        </li>
        <li>
          Humidity: <span>{props.humidity}</span>%
        </li>
        <li>
          Wind: <span>{props.wind}</span> km/h
        </li>
      </ul>
    </div>
  );
}
