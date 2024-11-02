import React, { ReactNode } from "react";
import { Variant } from "../../shared/types/Variant";
import "./DualSection.css";

interface DualSectionProps {
  title: string;
  imgUrl: string;
  background: Variant;
  mirror?: boolean;
  secondaryBackground?: boolean;
  callToAction?: {
    name: string;
    onClick: () => void;
  };
  children: ReactNode;
}
export default function DualSection(props: DualSectionProps) {
  const { title, imgUrl, background, mirror, callToAction, children } = props;

  return (
    <React.Fragment>
      <div
        className={`dual-section-container full-screen-container ${background}`}
      >
        <div
          className="dual-section boxed"
          style={{
            flexDirection: mirror ? "row-reverse" : "row",
          }}
        >
          <img
            className="dual-section-element dual-section-image"
            src={imgUrl}
            alt="Japan Image"
          />
          <div className="dual-section-element dual-section-content">
            <h2 className="dual-section-title">{title}</h2>
            <div className="dual-section-children">{children}</div>
            {callToAction && (
              <div className="dual-section-button-container">
                <button
                  className="button dual-section-button"
                  onClick={callToAction?.onClick}
                >
                  {callToAction.name}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
