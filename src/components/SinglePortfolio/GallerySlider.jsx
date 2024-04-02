import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./gallerySlider.scss";

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

const GallerySlider = ({ gallery }) => {
  return (
    <div className="proj-gallery">
      <Slider {...settings}>
        {gallery.map((item) => {
          return (
            <div>
              <img src={item.sourceUrl} alt={item.altText} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default GallerySlider;
