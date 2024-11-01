import React, { ReactNode } from "react";
import "./DualSection.css";

interface DualSectionProps {
  title: string;
  imgUrl: string;
  background: "primary" | "secondary";
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
        style={{
          flexDirection: mirror ? "row-reverse" : "row",
        }}
      >
        <img
          className="dual-section-element image"
          src={imgUrl}
          alt="Japan image"
        />
        <div className="dual-section-element text-container boxed serif">
          <div className="text-title">{title}</div>
          <div className="text-content">{children}</div>
          {callToAction && (
            <div className="call-to-action">
              <button
                className={`button ${background}`}
                onClick={callToAction?.onClick}
              >
                {callToAction.name}
              </button>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
