import React, { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel() {
  const images = [
    {
      title: "Sushiro 1",
      src: "sushiro-1.jpg",
    },
    {
      title: "Sushiro 2",
      src: "sushiro-2.jpg",
    },
  ];
  const [current, setCurrent] = useState(images.length - 1);

  const getPrev = (image: number) => {
    return image > 0 ? image - 1 : images.length - 1;
  };
  const getNext = (image: number) => {
    return image < images.length - 1 ? image + 1 : 0;
  };

  useEffect(() => {
    const imgElements = [
      document.querySelector(".carousel-img.img0"),
      document.querySelector(".carousel-img.img1"),
      document.querySelector(".carousel-img.img2"),
    ];

    const slide = setTimeout(() => {
      imgElements[0]?.classList.replace("img0", "img2");
      imgElements[1]?.classList.replace("img1", "img0");
      imgElements[2]?.classList.replace("img2", "img1");
    }, 500);

    return () => {
      clearTimeout(slide);
    };
  }, [current]);

  return (
    <React.Fragment>
      <div className="carousel-wrapper">
        <div
          className="carousel-img img0"
          style={{
            backgroundImage: `url(${images[images.length - 1].src})`,
          }}
        />
        <div
          className="carousel-img img1"
          style={{
            backgroundImage: `url(${images[0].src})`,
          }}
        />
        <div
          className="carousel-img img2"
          style={{
            backgroundImage: `url(${images[1].src})`,
          }}
        />
      </div>
    </React.Fragment>
  );
}
