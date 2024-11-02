import React from "react";
import { Variant } from "../../shared/types/Variant";
import "./Footer.css";

interface FooterProps {
  background: Variant;
}
export default function Footer(props: FooterProps) {
  const { background } = props;

  return (
    <React.Fragment>
      <div className={`footer-container ${background}`}>
        <div className="footer boxed">
          <div className="footer-section">
            <img className="footer-logo" src="/logo.png" alt="Logo" />
          </div>
          <div className="footer-section access">
            <h6>Access</h6>
            <div className="footer-content">
              Adress, other informations
              <br />
              Bla, bla, bla...
              <br />
              Bla, bla, bla...
            </div>
          </div>
          <div className="footer-section map">
            <h6>Sitemap</h6>
            <div className="footer-content">
              <a href="#">Home</a>
              <a href="#">Concept</a>
              <a href="#">Access</a>
            </div>
          </div>
          <div className="footer-section socials">
            <h6>Socials</h6>
            <div className="footer-content">
              <a
                href="https://www.instagram.com/koryoriya_ozaki"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
