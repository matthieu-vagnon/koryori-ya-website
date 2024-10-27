import React from "react";
import Carousel from "../ImgCarousel/ImgCarousel";
import "./LandingView.css";

export default function LandingView() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="content-container">
          <div className="content">
            <img className="logo" src="logo.png" alt="Logo" />
            <div className="title">
              <h1>アヘャラヌアミ樹差樹擢ほも尾都津れし</h1>
              <p>
                アヘャラヌアミ樹差樹擢ほも尾都津れし、やけうより、露等課夜、けてなくつやょ。以尾ほくや氏無らこふのつちまゆヨトフオヒョテま素差はせこしね素名そロンエカルかむせえ「や課雲みほゃ」。ろニヌアナコリ氏瀬他名区、えなろうよな区根模擢。いく譜露。
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-background">
          <Carousel
            images={["japan.png", "paris.png", "new-york.png"]}
            slideSpeed={5000}
            noiseOpacity={0.6}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
