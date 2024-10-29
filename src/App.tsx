import React, { useEffect } from "react";
import "./App.css";
import DualSection from "./components/DualSection/DualSection";
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
      <SectionSeparator />
      <DualSection
        title="- Concept -"
        content={
          <span>
            アヘャラヌアミ樹差樹擢ほも尾都津れし、
            <br />
            やけうより、露等課夜、けてなくつやょ。
          </span>
        }
        imageOnLeft
        imgUrl="japan.png"
        secondaryBackground
        callToAction={{
          name: "Read more",
          onClick: () => {},
        }}
      />
      <SectionSeparator mirror />
      <DualSection
        title="- Access -"
        content={
          <span>
            アヘャラヌアミ樹差樹擢ほも尾都津れし、
            <br />
            やけうより、露等課夜、けてなくつやょ。
          </span>
        }
        imgUrl="paris.png"
        callToAction={{
          name: "Read more",
          onClick: () => {},
        }}
      />
    </React.Fragment>
  );
}

export default App;
