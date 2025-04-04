import React from "react";
import { Variant } from "../../shared/types/Variant";
import "./SectionSeparator.css";

interface SectionSeparatorProps {
  start: Variant;
  end: Variant;
}
export default function SectionSeparator(props: SectionSeparatorProps) {
  const { start, end } = props;

  return (
    <React.Fragment>
      <div className="section-separator-container">
        <svg
          className="section-separator"
          width="100%"
          height="100%"
          viewBox="0 0 600 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            className={`section-separator-start ${start}`}
            width="600"
            height="100"
          />
          <path
            className={`section-separator-end ${end}`}
            d="M0 20L600 80H0V0Z"
          />
          <rect
            className={`section-separator-end ${end}`}
            y="80"
            width="600"
            height="20"
          />
        </svg>
      </div>
    </React.Fragment>
  );
}
