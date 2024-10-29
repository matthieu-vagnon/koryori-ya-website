import React from "react";
import "./SectionSeparator.css";

interface SectionSeparatorProps {
  mirror?: boolean;
}
export default function SectionSeparator(props: SectionSeparatorProps) {
  const { mirror } = props;

  return (
    <React.Fragment>
      <div
        className={`section-separator-element ${mirror ? "mirror" : "default"}`}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 600 100"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect className="background" width="600" height="100" />
          <path className="element" d="M0 20L600 80H0V0Z" />
          <rect className="element" y="80" width="600" height="20" />
        </svg>
      </div>
    </React.Fragment>
  );
}
