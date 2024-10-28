import React from "react";
import { createRoot } from "react-dom/client";
import Package from "../package.json";
import App from "./App.tsx";
import DemoOverlay from "./components/DemoOverlay/DemoOverlay.tsx";
import TitleProvider from "./contexts/TitleContext.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TitleProvider>
      <DemoOverlay title={Package.title} />
      <App />
    </TitleProvider>
  </React.StrictMode>
);
