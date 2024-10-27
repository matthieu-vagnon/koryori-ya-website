import React, { useEffect, useState } from "react";
import "./Carousel.css";

// #region Component configuration

// Sliding speed in ms
const slideSpeed = 5000;

// Images paths (minimum 2 images)
const images = ["japan.png", "paris.png", "new-york.png"];

// Noise opacity
const noiseOpacity = 0.6;

// #endregion

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [img0, setImg0] = useState(images.length - 1);
  const [img1, setImg1] = useState(0);
  const [img2, setImg2] = useState(1 % images.length);
  const setImgs = [setImg0, setImg1, setImg2];

  useEffect(() => {
    const imgElements = [
      document.querySelector(".carousel-img.img-left"),
      document.querySelector(".carousel-img.img-center"),
      document.querySelector(".carousel-img.img-right"),
    ];

    const slide = setTimeout(() => {
      imgElements[0]?.classList.replace("img-left", "img-right");
      imgElements[1]?.classList.replace("img-center", "img-left");
      imgElements[2]?.classList.replace("img-right", "img-center");
      setImgs[current % imgElements.length](
        (current + imgElements.length - 1) % images.length
      );
      setCurrent((prevState) => prevState + 1);
    }, slideSpeed);

    return () => {
      clearTimeout(slide);
    };
  }, [current]);

  return (
    <React.Fragment>
      <div className="carousel-container">
        <div
          className="noise"
          style={{
            opacity: noiseOpacity,
          }}
        >
          <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
            <filter id="noiseFilter">
              <feTurbulence
                baseFrequency="1"
                numOctaves="1"
                stitchTiles="stitch"
              />
            </filter>
            <rect width="100%" height="100%" filter="url(#noiseFilter)" />
          </svg>
        </div>
        <div
          className="carousel-img img-left"
          style={{
            backgroundImage: `url(${images[img0]})`,
          }}
        />
        <div
          className="carousel-img img-center"
          style={{
            backgroundImage: `url(${images[img1]})`,
          }}
        />
        <div
          className="carousel-img img-right"
          style={{
            backgroundImage: `url(${images[img2]})`,
          }}
        />
      </div>
    </React.Fragment>
  );
}
