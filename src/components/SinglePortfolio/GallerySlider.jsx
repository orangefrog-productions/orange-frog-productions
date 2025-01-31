import React, { useState, useEffect, useRef } from "react";
import "lazysizes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallerySlider.scss";

const settings = {
  slidesToShow: 2,
  slidesToScroll: 1,
  fade: true,
  draggable: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 10000,
  centerMode: false,
  arrows: false,
  dots: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        centerPadding: "0px",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        centerPadding: "0px",
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const GallerySlider = ({ gallery }) => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  let sliderRef1 = useRef(null);
  let sliderRef2 = useRef(null);

  useEffect(() => {
    setNav1(sliderRef1);
    setNav2(sliderRef2);
  }, []);

  return (
    <div className="proj-gallery">
      <Slider
        className="proj-gallery-slider-display"
        {...settings}
        asNavFor={nav2}
        ref={(slider) => (sliderRef1 = slider)}
      >
        {gallery.map((item) => {
          return (
            <div>
              <img
                data-sizes="auto"
                data-src={item.sourceUrl}
                data-srcset={item.sourceUr}
                className="lazyload"
              />
            </div>
          );
        })}
      </Slider>

      <Slider
        className="proj-gallery-slider-nav"
        slidesToShow={6}
        swipeToSlide={true}
        focusOnSelect={true}
        asNavFor={nav1}
        ref={(slider) => (sliderRef2 = slider)}
      >
        {gallery.map((item) => {
          return (
            <div className="proj-gallery-slider-nav-image">
              <img
                data-sizes="auto"
                data-src={item.sourceUrl}
                data-srcset={item.sourceUr}
                className="lazyload"
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default GallerySlider;
