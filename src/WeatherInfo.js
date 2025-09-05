import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="WeatherInfo row mb-5">
        <div className="col-6">
          <h1>{props.data.city}</h1>
          <p>
            <FormattedDate date={props.data.date} />
          </p>
          <p className="text-capitalize"><em>{props.data.description}</em></p>
          <p>
            Humidity:{""}
            <em> {props.data.humidity}%</em>, Wind:{" "}
            <em> {Math.round(props.data.wind * 36)/10} km/h</em>
          </p>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8">
          <div className="temperature-container d-flex justify-content-end">
            <WeatherIcon
              code={props.data.icon}
              alt={props.data.description}
              color={"#342F51"}
              size={94}
            />
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="unit">ºC</span>
          </div>
        </div>
      </div>
    </div>
  );
}
