import React from "react";
import Carousel from "../Carousel/Carousel";
import "./LandingView.css";

export default function LandingView() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="logo-container">
          <img className="logo" src="logo.png" alt="Logo" />
        </div>
        <div className="content">
          <h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <Carousel />
      </div>
    </React.Fragment>
  );
}
