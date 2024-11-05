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
        <div className="landing-view-content boxed">
          <div className="landing-view-boxed-container">
            <div className="landing-view-title-container">
              <h1 className="landing-view-text">{mainTitle}</h1>
              <p className="landing-view-text landing-view-description">
                {subTitle}
              </p>
            </div>
            <a href="#access" className="landing-view-access-bt">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16px"
                viewBox="0 -960 960 960"
              >
                <path d="m574-129-214-75-186 72q-10 4-19.5 2.5T137-136q-8-5-12.5-13.5T120-169v-561q0-13 7.5-23t20.5-15l186-63q6-2 12.5-3t13.5-1q7 0 13.5 1t12.5 3l214 75 186-72q10-4 19.5-2.5T823-824q8 5 12.5 13.5T840-791v561q0 13-7.5 23T812-192l-186 63q-6 2-12.5 3t-13.5 1q-7 0-13.5-1t-12.5-3Zm-14-89v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z" />
              </svg>
              Access
            </a>
          </div>
        </div>
        <div className="landing-view-carousel">
          <ImgCarousel images={carouselImages} slideSpeed={5000} />
        </div>
      </div>
    </React.Fragment>
  );
}
