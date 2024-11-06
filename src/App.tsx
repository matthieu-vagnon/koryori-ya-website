import { Map, Marker, ZoomControl } from "pigeon-maps";
import React, { useEffect } from "react";
import Package from "../package.json";
import "./App.css";
import japan from "./assets/images/japan.jpg";
import newYork from "./assets/images/new-york.jpg";
import paris from "./assets/images/paris.jpg";
import DualSection from "./components/DualSection/DualSection";
import Footer from "./components/Footer/Footer";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LandingView from "./components/LandingView/LandingView";
import LoadAnimation from "./components/LoadAnimation/LoadAnimation";
import SectionSeparator from "./components/SectionSeparator/SectionSeparator";
import { useTitle } from "./contexts/TitleContext";

function App() {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Home");
  }, []);

  return (
    <React.Fragment>
      <LoadAnimation>
        <LandingView
          mainTitle="アヘャラヌアミ樹差樹擢ほも尾都津れし"
          subTitle="アヘャラヌアミ樹差樹擢ほも尾都津れし、やけうより、露等課夜、けてなくつやょ。以尾ほくや氏無らこふのつちまゆヨトフオヒョテま素差はせこしね素名そロンエカルかむせえ「や課雲みほゃ」。ろニヌアナコリ氏瀬他名区、えなろうよな区根模擢。いく譜露。"
          carouselImages={[japan, paris, newYork]}
        />
        <SectionSeparator start="primary" end="secondary" />
        <DualSection
          title="Concept"
          description="体と心にやさしい創作料理を。"
          img={{ src: japan, alt: "Japan Image" }}
          background="secondary"
        />
        <SectionSeparator start="secondary" end="primary" />
        <ImageGallery
          images={[
            {
              src: japan,
              description: "Japan image",
            },
            {
              src: paris,
              description: "Paris image",
            },
            {
              src: newYork,
              description: "New-York image",
            },
          ]}
          background="primary"
        />
        <SectionSeparator start="primary" end="secondary" />
        <DualSection
          title="Access"
          description="世界遺産姫路城がそびえ立つ城下町にひっそりと。"
          img={{ src: paris, alt: "Paris Image" }}
          background="secondary"
          mirror
        >
          <p className="access-intro">
            〒670-0017 兵庫県姫路市福中町3番地小寺ビル１階
            <br />
            Tel.: <a href="tel:070-9055-5210">070-9055-5210</a>
          </p>
          <div className="access-map-container">
            <Map
              defaultCenter={[34.83258027024389, 134.68785965398067]}
              defaultZoom={18}
              minZoom={15}
              maxZoom={19}
              metaWheelZoom
            >
              <ZoomControl />
              <Marker
                width={50}
                anchor={[34.83258027024389, 134.68785965398067]}
              />
            </Map>
          </div>
        </DualSection>
        <SectionSeparator start="secondary" end="tertiary" />
        <Footer
          access={
            <span>
              〒670-0017
              <br />
              兵庫県姫路市福中町3番地小寺ビル１階
              <br />
              Tel.: <a href="tel:070-9055-5210">070-9055-5210</a>
            </span>
          }
          socials={[
            {
              title: "Instagram",
              url: "https://www.instagram.com/koryoriya_ozaki",
            },
          ]}
          about={
            <span>
              Made by{" "}
              <a
                href="https://www.mvagnon.dev"
                target="_blank"
                rel="noreferrer"
              >
                {Package.author}
              </a>
            </span>
          }
          background="tertiary"
        />
      </LoadAnimation>
    </React.Fragment>
  );
}

export default App;
