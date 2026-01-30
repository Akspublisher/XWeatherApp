import React from "react";
import "./WeathersCard.css";

export default function WeathersCard({temp, humidity, condition, windSpeed}) {



  return (
    <div className="weather-cards">  
          <div className="weather-card">
            <h4>Temperature</h4>
            <p>{temp} °C</p>
          </div>

          <div className="weather-card">
            <h4>Humidity</h4>
            <p>{humidity}%</p>
          </div>

          <div className="weather-card">
            <h4>Condition</h4>
            <p>{condition}</p>
          </div>

          <div className="weather-card">
            <h4>Wind Speed</h4>
            <p>{windSpeed} kph</p>
          </div>
        </div>
  );
}