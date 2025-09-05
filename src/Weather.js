import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      coordinates: response.data.coordinates,
      date: new Date(response.data.time * 1000),
      temperature: response.data.temperature.current,
      icon_url: response.data.condition.icon_url,
      icon: response.data.condition.icon,
      description: response.data.condition.description,
      humidity: response.data.humidity,
      wind: response.data.wind.speed,
    });
  }

  const [weatherData, setWeatherData] = useState({ ready: false });

  if (weatherData.ready) {
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
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date.toLocaleString()}</li>
        </ul>
        <div className="row">
          <span className="col-6">
            <img src={weatherData.icon_url} alt={weatherData.icon} />
            <span className="temperature">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">ºC</span>
          </span>
          <div className="col-6 weather-details">
            <ul>
              <li>{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "c450930fa53b90f8c5ab74d6t08ao678";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
