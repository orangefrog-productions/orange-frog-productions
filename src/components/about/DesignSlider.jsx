import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./designSlider.scss";

const settings = {
  slidesToShow: 1,
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
};

const DesignSlider = ({ data }) => {
  return (
    <div className="design-slider">
      <Slider className="design-slider-wrap" {...settings}>
        {data.slideImages.map((slide, index) => {
          return (
            <div className="design-slider-slide" key={index}>
              <div className="design-slider-slide-inner">
                <img
                  src={slide.slideImage.sourceUrl}
                  alt={slide.slideImage.altText}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default DesignSlider;
