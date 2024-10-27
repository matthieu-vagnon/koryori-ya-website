import React, { useEffect } from "react";
import "./App.css";
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
    </React.Fragment>
  );
}

export default App;
