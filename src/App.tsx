import React, { useEffect } from "react";
import "./App.css";
import DualSection from "./components/DualSection/DualSection";
import LandingView from "./components/LandingView/LandingView";
import { useTitle } from "./contexts/TitleContext";

function App() {
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle("Home");
  }, []);

  return (
    <React.Fragment>
      <LandingView />
      <DualSection imgUrl="japan.png" />
    </React.Fragment>
  );
}

export default App;
