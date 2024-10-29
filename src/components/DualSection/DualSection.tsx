import React from "react";
import "./DualSection.css";

interface DualSectionProps {
  imgUrl: string;
  imageOnLeft?: boolean;
}
export default function DualSection(props: DualSectionProps) {
  const { imgUrl, imageOnLeft } = props;

  return (
    <React.Fragment>
      <div
        className="dual-section-container full-screen-container"
        style={{
          flexDirection: imageOnLeft ? "row-reverse" : "row",
        }}
      >
        <img
          className="dual-section-element image"
          src={imgUrl}
          alt="Japan image"
        />
        <div className="dual-section-element text-container boxed serif">
          <span>
            アヘャラヌアミ樹差樹擢ほも尾都津れし、やけうより、露等課夜、けてなくつやょ。
          </span>
        </div>
      </div>
    </React.Fragment>
  );
}
