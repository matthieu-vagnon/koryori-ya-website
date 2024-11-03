import React from "react";
import ImgCarousel from "../ImgCarousel/ImgCarousel";
import "./LandingView.css";

interface LandingViewProps {
  mainTitle: string;
  subTitle: string;
  carouselImages: Array<string>;
}
export default function LandingView(props: LandingViewProps) {
  const { mainTitle, subTitle, carouselImages } = props;

  return (
    <React.Fragment>
      <div className="landing-view full-screen-container">
        <div className="landing-view-content-container">
          <div className="landing-view-content boxed">
            <div className="landing-view-title-container">
              <h1 className="landing-view-text">{mainTitle}</h1>
              <p className="landing-view-text landing-view-description">
                {subTitle}
              </p>
            </div>
          </div>
        </div>
        <div className="landing-view-carousel">
          <ImgCarousel images={carouselImages} slideSpeed={5000} />
        </div>
      </div>
    </React.Fragment>
  );
}
