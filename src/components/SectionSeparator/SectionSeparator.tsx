import React from "react";
import "./SectionSeparator.css";

type color = "primary" | "secondary";
interface SectionSeparatorProps {
  start: color;
  end: color;
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
          <rect className={`start ${start}`} width="600" height="100" />
          <path className={`${end}`} d="M0 20L600 80H0V0Z" />
          <rect className={`${end}`} y="80" width="600" height="20" />
        </svg>
      </div>
    </React.Fragment>
  );
}
