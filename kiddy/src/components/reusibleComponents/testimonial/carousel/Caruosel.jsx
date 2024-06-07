import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./corousel.module.scss";
const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className={Styles.sliders}>
      <Slider {...settings}>
        <div className={Styles.slider}>
          <div className={Styles.img}>
            <img src="../../src/assets/images/person2.webp" alt="" />
          </div>
          <div className={Styles.text}>
            <p>Name</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              reiciendis!
            </p>
          </div>
        </div>
        <div className={Styles.slider}>
          <div className={Styles.img}>
            <img src="../../src/assets/images/person3.webp" alt="" />
          </div>
          <div className={Styles.text}>
            <p>Name</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              reiciendis!
            </p>
          </div>{" "}
        </div>
        <div className={Styles.slider}>
          <div className={Styles.img}>
            <img src="../../src/assets/images/person4.webp" alt="" />
          </div>
          <div className={Styles.text}>
            <p>Name</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex,
              reiciendis!
            </p>
          </div>{" "}
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
