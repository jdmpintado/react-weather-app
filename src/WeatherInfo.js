import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <FormattedDate date={props.data.date} />
      <div className="row">
        <span className="col-6">
            <WeatherIcon code={props.data.icon} alt={props.data.description} size={56} />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">ºC</span>
        </span>
        <div className="col-6 weather-details">
          <ul>
            <li className="text-capitalize">{props.data.description}</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} m/s</li>
          </ul>
        </div>
      </div>

    </div>
  );
}
