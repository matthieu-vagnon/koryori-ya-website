import React from "react";
import "./Footer.css";

interface FooterProps {
  background: "primary" | "secondary";
}
export default function Footer(props: FooterProps) {
  const { background } = props;

  return (
    <React.Fragment>
      <div className={`footer-container boxed ${background}`}>
        <div className="footer-section">
          <img className="footer-logo" src="/logo.png" alt="Logo" />
        </div>
        <div className="footer-section access">
          <h3>Access</h3>
          Adress, other informations
          <br />
          Bla, bla, bla...
          <br />
          Bla, bla, bla...
        </div>
        <div className="footer-section map">
          <h3 className="footer-section-title">Sitemap</h3>
          <a href="#" className="footer-link">
            Home
          </a>
          <a href="#" className="footer-link">
            Concept
          </a>
          <a href="#" className="footer-link">
            Access
          </a>
        </div>
        <div className="footer-section socials">
          <h3 className="footer-section-title">Socials</h3>
          <a
            href="https://www.instagram.com/koryoriya_ozaki"
            className="footer-link"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
