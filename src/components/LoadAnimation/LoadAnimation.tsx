import React, { ReactNode, useEffect, useState } from "react";
import logo from "../../assets/images/logo.jpg";
import "./LoadAnimation.css";

interface LoadAnimationProps {
  children: ReactNode;
}
export default function LoadAnimation(props: LoadAnimationProps) {
  const [loaded, setLoaded] = useState(false);
  const { children } = props;

  const onPageLoad = () => {
    setLoaded(true);
  };

  const editClassName = (element: HTMLElement, className: string) => {
    if (element) {
      element.className = className;
    }
  };

  useEffect(() => {
    if (loaded) {
      const loading = document.getElementById("loading");
      const loadingCenter = document.getElementById("loading-center");
      const block1 = document.getElementById("block-1");

      const loadingTimeout = setTimeout(
        editClassName,
        3800,
        loading,
        "slideDown"
      );
      const loadingCenterTimeout = setTimeout(
        editClassName,
        3200,
        loadingCenter,
        "zoomOut"
      );
      const block1Timeout = setTimeout(
        editClassName,
        3800,
        block1,
        "slideInUp"
      );

      return () => {
        clearTimeout(loadingTimeout);
        clearTimeout(loadingCenterTimeout);
        clearTimeout(block1Timeout);
      };
    }
  }, [loaded]);

  useEffect(() => {
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);

      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="res-container">
        <div className="res-row">
          <div id="block-1 b3">
            <div id="loader-wrap">
              <div id="loading">
                <div id="loading-center">
                  <div id="loading-center-absolute">
                    <div id="object">
                      <img className="loader-logo" src={logo} alt="Logo" />
                    </div>
                    <div id="loader"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="res-container">
        <div className="res-row">
          <div id="block-1">
            <div id="block-2"></div>
          </div>
        </div>
      </div>

      {children}
    </React.Fragment>
  );
}
