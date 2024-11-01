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
      <LandingView />
      <SectionSeparator start="primary" end="secondary" />
      <DualSection
        title="- Concept -"
        imgUrl="/japan.png"
        background="secondary"
        callToAction={{
          name: "Read more",
          onClick: () => {},
        }}
      >
        <span>
          アヘャラヌアミ樹差樹擢ほも尾都津れし、
          <br />
          やけうより、露等課夜、けてなくつやょ。
        </span>
      </DualSection>
      <SectionSeparator start="secondary" end="primary" />
      <DualSection
        title="- Access -"
        imgUrl="/paris.png"
        background="primary"
        mirror
        callToAction={{
          name: "Read more",
          onClick: () => {},
        }}
      >
        <span>
          アヘャラヌアミ樹差樹擢ほも尾都津れし、
          <br />
          やけうより、露等課夜、けてなくつやょ。
        </span>
      </DualSection>
      <SectionSeparator start="primary" end="secondary" />
      <Footer background="primary" />
    </React.Fragment>
  );
}

export default App;
