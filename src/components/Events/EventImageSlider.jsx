import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./eventImageSlider.scss";

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
  arrows: true,
  dots: false,
};

const EventImageSlider = ({ images }) => {
  return (
    <div className="event-images-slider">
      <Slider className="event-images-slider-wrap" {...settings}>
        {images.map((img, index) => {
          return (
            <div className="event-images-slider-slide" key={index}>
              <img src={img.image.sourceUrl} alt={img.image.altText} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default EventImageSlider;
