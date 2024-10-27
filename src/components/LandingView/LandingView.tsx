import React from "react";
import Carousel from "../Carousel/Carousel";
import "./LandingView.css";

export default function LandingView() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="content-container">
          <div className="content">
            <img className="logo" src="logo.png" alt="Logo" />
            <div className="title">
              <h1>Title</h1>
              <p>
                Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle
                Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle
                Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-container">
          <Carousel />
        </div>
      </div>
    </React.Fragment>
  );
}
