import React from "react";
import "./Footer.css";

interface FooterProps {
  background: "primary" | "secondary";
}
export default function Footer(props: FooterProps) {
  const { background } = props;

  return (
    <React.Fragment>
      <div className={`footer-container ${background}`}>Footer...</div>
    </React.Fragment>
  );
}
