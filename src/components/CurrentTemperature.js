import React, {useState} from "react";

export default function CurrentTemperature(props) {
  const[units, setUnits] = useState("metric");
  
  function displayImperial(event){
    event.preventDefault();
    setUnits("imperial");
  }

  function displayMetric(event){
    event.preventDefault();
    setUnits("metric");
    }

  function fahrenheit(){
    return(props.celsius * 9) / 5 + 32;
  }
  
  if (units === "metric"){
    return (
      <div className="current-temperature">
        <strong>{Math.round(props.celsius)}</strong>
        <span className="units"> °C | <a href="/" onClick={displayImperial}>°F</a></span>
      </div>
    );
    } else {
      return (
        <div className="current-temperature">
          <strong>{Math.round(fahrenheit())}</strong>
          <span className="units">  <a href="/" onClick={displayMetric}>°C</a>° | °F</span>
        </div>
    );
    }
}