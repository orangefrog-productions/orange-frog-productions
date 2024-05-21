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
  autoplay: false,
  autoplaySpeed: 10000,
  centerMode: false,
  arrows: false,
  dots: true,
  pauseOnHover: true,
};

const CapabilitiesSlider = ({ data }) => {
  return (
    <div className="cap-slider">
      <Slider className="cap-slider-wrap" {...settings}>
        {data.slideImages.map((slide, index) => {
          if (slide.imageOrVideo === "image") {
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
          } else {
            return (
              <div className="cap-slider-slide" key={index}>
                <div className="cap-slider-slide-video">
                  <video
                    controls
                    autoPlay
                    loop
                    muted
                    src={slide.slideVideo.mediaItemUrl}
                  ></video>
                  {/* <div dangerouslySetInnerHTML={{ __html: slide.slideVideo }} /> */}
                </div>
              </div>
            );
          }
        })}
      </Slider>
    </div>
  );
};

export default CapabilitiesSlider;
