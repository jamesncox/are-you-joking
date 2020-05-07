import React from "react";
import "./stylesheets/App.css";
import "./stylesheets/responsive.css"
import JokeContainer from "./JokeContainer"

export default function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <h1>Are You Joking?</h1>
        <JokeContainer />
      </div>
    </div>
  );
}
