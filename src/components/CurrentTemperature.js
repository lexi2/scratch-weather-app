import React from "react";

export default function CurrentTemperature(props) {
  return (
    <div className="current-temperature">
      <strong>{Math.round(props.celsius)}</strong>
      <span className="units"> °C</span>
    </div>
  );
}