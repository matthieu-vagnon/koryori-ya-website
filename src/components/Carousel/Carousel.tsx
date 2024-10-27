import React, { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel() {
  const images = ["japan.jpg", "paris.jpg", "new-york.jpg"];
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
    }, 5000);

    return () => {
      clearTimeout(slide);
    };
  }, [current]);

  return (
    <React.Fragment>
      <div className="carousel-wrapper">
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
