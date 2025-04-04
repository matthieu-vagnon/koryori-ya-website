import React, { ReactNode } from "react";
import logo from "../../assets/images/logo.jpg";
import { Variant } from "../../shared/types/Variant";
import "./Footer.css";

interface FooterProps {
  access: ReactNode;
  socials: Array<{ title: string; url: string }>;
  about: ReactNode;
  background: Variant;
}
export default function Footer(props: FooterProps) {
  const { access, socials, about, background } = props;

  return (
    <React.Fragment>
      <div className={`footer-container ${background}`}>
        <div className="footer boxed">
          <div className="footer-section">
            <img className="footer-logo" src={logo} alt="Logo" />
          </div>
          <div className="footer-section footer-section-access">
            <h6>Access</h6>
            <div className="footer-content">{access}</div>
          </div>
          <div className="footer-section">
            <h6>Socials</h6>
            <div className="footer-content">
              {socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social.title}
                </a>
              ))}
            </div>
          </div>
          <div className="footer-section">
            <h6>About</h6>
            <div className="footer-content">{about}</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
