import React, { useEffect, useState } from "react";
import { Variant } from "../../shared/types/Variant";
import "./ImageGallery.css";

interface ImageGalleryProps {
  images: Array<{ src: string; description: string }>;
  background: Variant;
}
export default function ImageGallery(props: ImageGalleryProps) {
  const { images, background } = props;
  const [activeImg, setActiveImg] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);

  const updateImgsHeight = () => {
    const imgsHeight = document.querySelector(".img-gallery-imgs");

    if (imgsHeight) {
      setContentHeight(imgsHeight.clientHeight);
    }
  };

  useEffect(() => {
    updateImgsHeight();
  }, [expanded]);

  useEffect(() => {
    window.addEventListener("resize", updateImgsHeight);

    return () => {
      window.removeEventListener("resize", updateImgsHeight);
    };
  }, []);

  return (
    <React.Fragment>
      <div className={`img-gallery-container ${background}`}>
        <div className="img-gallery boxed">
          <div className="img-gallery-showcase">
            <h2>Gallery</h2>
            <div className="img-gallery-active-img-container">
              <img
                className="img-gallery-active-img"
                src={images[activeImg].src}
                alt={images[activeImg].description}
              />
            </div>
            <span className="img-gallery-active-desc">
              {images[activeImg].description}
            </span>
          </div>
          <div
            className="img-gallery-imgs-container"
            style={{
              height: contentHeight,
            }}
          >
            <div className="img-gallery-imgs">
              {images.slice(0, expanded ? -1 : 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImg(index)}
                  className={`img-gallery-img-bt ${
                    activeImg === index ? "active" : ""
                  }`}
                >
                  <img
                    key={index}
                    className="img-gallery-img"
                    src={image.src}
                    alt={image.description}
                  />
                </button>
              ))}
              {images.length > 4 && (
                <button
                  className="button img-gallery-more-switch-bt"
                  onClick={() => setExpanded((prevState) => !prevState)}
                >
                  {expanded ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
