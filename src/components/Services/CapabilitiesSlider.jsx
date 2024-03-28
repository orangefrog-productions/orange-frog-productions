import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./capabilitiesSlider.scss";

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

const CapabilitiesSlider = ({ data }) => {
  return (
    <div className="cap-slider">
      <Slider className="cap-slider-wrap" {...settings}>
        {data.slideImages.map((slide, index) => {
          return (
            <div className="cap-slider-slide" key={index}>
              <div className="cap-slider-slide-inner">
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

export default CapabilitiesSlider;
