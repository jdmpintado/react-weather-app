import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Welcome to the Weather App!</h1>
        </header>
        <main>
          <Weather />
        </main>
        <footer>
          This project was coded by{" "}
          <a
            href="https://github.com/jdmpintado"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jessica Pintado
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/jdmpintado/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
