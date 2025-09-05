import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a city..."
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <button type="submit" className="btn btn-primary w-100">
              Search
            </button>
          </div>
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Monday, 12:10</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://www.gstatic.com/weather/conditions2023/2023.2/svg/partly_cloudy_light.svg"
            alt="Partly Cloudy"
          />
          <span className="temperature">6</span>
          <span className="unit">ºC</span>
        </div>
        <div className="col-6 weather-details">
          <ul>
            <li>Sunny</li>
            <li>Humidity: 60%</li>
            <li>Wind: 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
