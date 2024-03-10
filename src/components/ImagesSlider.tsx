import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../img/slider1.jpg";
import slider2 from "../img/slider2.jpg";
import slider3 from "../img/slider3.jpg";

interface Images {
  imageUrl: string;
  text: string;
  alt: string;
}

function ImagesSlider() {
  const images: Images[] = [
    {
      imageUrl: slider1,
      text: "We have fully equipped gym ready to use",
      alt: "gym equipment",
    },
    {
      imageUrl: slider2,
      text: "Participate in our classes such as Active Morning, HIIT or Yoga",
      alt: "woman exercising on mat",
    },
    {
      imageUrl: slider3,
      text: "Our Personal Trainers will help you whenever you need",
      alt: "trainer helping with exercises",
    },
  ];

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <section>
      <div className="images-slider">
        <Slider {...settings}>
          {images.map((slide, index) => (
            <div className="images-slider__box" key={index}>
              <img
                className="images-slider__image"
                src={slide.imageUrl}
                alt={slide.alt}
              />
              <p className="images-slider__text">{slide.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default ImagesSlider;
