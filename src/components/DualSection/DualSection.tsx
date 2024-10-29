import React, { ReactNode } from "react";
import "./DualSection.css";

interface DualSectionProps {
  title: string;
  content: ReactNode;
  imgUrl: string;
  imageOnLeft?: boolean;
  secondaryBackground?: boolean;
  callToAction?: {
    name: string;
    onClick: () => void;
  };
}
export default function DualSection(props: DualSectionProps) {
  const {
    title,
    content,
    imgUrl,
    imageOnLeft,
    secondaryBackground,
    callToAction,
  } = props;

  return (
    <React.Fragment>
      <div
        className={`dual-section-container full-screen-container ${
          secondaryBackground ? "secondary" : ""
        }`}
        style={{
          flexDirection: !imageOnLeft ? "row-reverse" : "row",
        }}
      >
        <img
          className="dual-section-element image"
          src={imgUrl}
          alt="Japan image"
        />
        <div className="dual-section-element text-container boxed serif">
          <div className="text-title">{title}</div>
          <div className="text-content">{content}</div>
          {callToAction && (
            <div className="call-to-action">
              <button className="button" onClick={callToAction?.onClick}>
                {callToAction.name}
              </button>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}
