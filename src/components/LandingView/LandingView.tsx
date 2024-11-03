import React from "react";
import ImgCarousel from "../ImgCarousel/ImgCarousel";
import "./LandingView.css";

export default function LandingView() {
  return (
    <React.Fragment>
      <div className="landing-view full-screen-container">
        <div className="landing-view-content-container">
          <div className="landing-view-content boxed">
            <img className="landing-view-logo" src="/logo.png" alt="Logo" />
            <div className="landing-view-title-container">
              <h1 className="landing-view-title">
                アヘャラヌアミ樹差樹擢ほも尾都津れし
              </h1>
              <p className="landing-view-description">
                アヘャラヌアミ樹差樹擢ほも尾都津れし、やけうより、露等課夜、けてなくつやょ。以尾ほくや氏無らこふのつちまゆヨトフオヒョテま素差はせこしね素名そロンエカルかむせえ「や課雲みほゃ」。ろニヌアナコリ氏瀬他名区、えなろうよな区根模擢。いく譜露。
              </p>
            </div>
          </div>
        </div>
        <div className="landing-view-carousel">
          <ImgCarousel
            images={["/japan.png", "/paris.png", "/new-york.png"]}
            slideSpeed={5000}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
