import React, { useEffect } from "react";
import "./App.css";
import DualSection from "./components/DualSection/DualSection";
import Footer from "./components/Footer/Footer";
import LandingView from "./components/LandingView/LandingView";
import SectionSeparator from "./components/SectionSeparator/SectionSeparator";
import { useTitle } from "./contexts/TitleContext";

function App() {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Home");
  }, []);

  return (
    <React.Fragment>
      <LandingView
        mainTitle="アヘャラヌアミ樹差樹擢ほも尾都津れし"
        subTitle="アヘャラヌアミ樹差樹擢ほも尾都津れし、やけうより、露等課夜、けてなくつやょ。以尾ほくや氏無らこふのつちまゆヨトフオヒョテま素差はせこしね素名そロンエカルかむせえ「や課雲みほゃ」。ろニヌアナコリ氏瀬他名区、えなろうよな区根模擢。いく譜露。"
        carouselImages={["/japan.png", "/paris.png", "/new-york.png"]}
      />
      <SectionSeparator start="primary" end="secondary" />
      <DualSection
        title="Concept"
        description="アヘャラヌアミ樹差樹擢ほも尾都津れし、やけうより、露等課夜、けてなくつやょ。"
        img={{ url: "/japan.png", alt: "Japan Image" }}
        background="secondary"
      />
      <SectionSeparator start="secondary" end="primary" />
      <DualSection
        title="Access"
        description="アヘャラヌアミ樹差樹擢ほも尾都津れし、やけうより、露等課夜、けてなくつやょ。"
        img={{ url: "/paris.png", alt: "Paris Image" }}
        background="primary"
        mirror
      >
        <div>Test</div>
      </DualSection>
      <SectionSeparator start="primary" end="tertiary" />
      <Footer
        access={`Adress, other informations\nBla, bla, bla...\nBla, bla, bla, bla...`}
        socials={[
          {
            title: "Instagram",
            url: "https://www.instagram.com/koryoriya_ozaki",
          },
        ]}
        about={
          <span>
            Made with ♥ by{" "}
            <a href="https://www.mvagnon.dev" target="_blank" rel="noreferrer">
              Matthieu Vagnon
            </a>
          </span>
        }
        background="tertiary"
      />
    </React.Fragment>
  );
}

export default App;
