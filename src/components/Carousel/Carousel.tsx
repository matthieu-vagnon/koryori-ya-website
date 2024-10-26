import React, { useEffect, useState } from "react";
import "./Carousel.css";

export default function Carousel() {
  const [active, setActive] = useState(0);
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

  useEffect(() => {
    const autoSlide = setTimeout(() => {
      setActive((prevState) =>
        prevState < images.length - 1 ? prevState + 1 : 0
      );
    }, 5000);

    return () => {
      clearTimeout(autoSlide);
    };
  }, [active]);

  return (
    <React.Fragment>
      <div className="carousel-wrapper">
        <img
          className="carousel-img"
          src={images[active].src}
          alt={images[active].title}
        />
      </div>
    </React.Fragment>
  );
}
