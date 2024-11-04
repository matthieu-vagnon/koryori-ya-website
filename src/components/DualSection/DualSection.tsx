import React, { ReactNode, useState } from "react";
import { Variant } from "../../shared/types/Variant";
import "./DualSection.css";

interface DualSectionProps {
  title: string;
  description: string;
  img: { src: string; alt: string };
  background: Variant;
  mirror?: boolean;
  children?: ReactNode;
}
export default function DualSection(props: DualSectionProps) {
  const { title, description, img, background, mirror, children } = props;
  const [open, setOpen] = useState(false);

  const handleExpand = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <div className={`dual-section-children-container ${background}`}>
        <div className="dual-section-container full-screen-container">
          <div
            className="dual-section boxed"
            style={{
              flexDirection: mirror ? "row-reverse" : "row",
            }}
          >
            <img
              className="dual-section-element dual-section-image"
              src={img.src}
              alt={img.alt}
            />
            <div className="dual-section-element dual-section-content">
              <h2 className="dual-section-title">{title}</h2>
              <div className="dual-section-description pp">{description}</div>
              {children && (
                <button
                  className="button dual-section-button"
                  onClick={handleExpand}
                >
                  {open ? "Close" : "Read More"}
                </button>
              )}
            </div>
          </div>
        </div>
        {children && open && (
          <div className="dual-section-children boxed">
            <h3>Content</h3>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
