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
  const [current, setCurrent] = useState(0);

  const getPrev = (image: number) => {
    return image > 0 ? image - 1 : images.length - 1;
  };
  const getNext = (image: number) => {
    return image < images.length - 1 ? image + 1 : 0;
  };

  useEffect(() => {
    const prevImg = document.querySelector(".carousel-img.prev");
    const currentImg = document.querySelector(".carousel-img.current");
    const nextImg = document.querySelector(".carousel-img.next");
    const slide = setTimeout(() => {
      nextImg?.classList.replace("next", "current");
      currentImg?.classList.replace("current", "prev");
      prevImg?.classList.replace("prev", "next");
    }, 100);

    return () => {
      clearTimeout(slide);
    };
  }, [current]);

  return (
    <React.Fragment>
      <div className="carousel-wrapper">
        <div className="carousel-img prev">
          <img
            src={images[getPrev(current)].src}
            alt={images[getPrev(current)].title}
          />
        </div>
        <div className="carousel-img current">
          <img src={images[current].src} alt={images[current].title} />
        </div>
        <div className="carousel-img next">
          <img
            src={images[getNext(current)].src}
            alt={images[getNext(current)].title}
          />
        </div>
      </div>
    </React.Fragment>
  );
}
