import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  return <div className="WeatherForecast">
    <div className="row">
        <div className="col">
            <div className="WeatherForecast-day">Mon</div>
            <WeatherIcon code="clear-sky-day" size={36} />
            <div className="WeatherForecast-temperatures">
                <span className="WeatherForecast-temperature-max">15º</span>
                <span className="WeatherForecast-temperature-min">10º</span>
            </div>
        </div>
    </div>
  </div>;
}
