import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Styles from "./corousel.module.scss";
const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };
  return (
    <div className={Styles.sliders}>
      <Slider {...settings}>
        <div className={Styles.slider}>
          <div className={Styles.img}>
            <img src="../../src/assets/images/person2.webp" alt="" />
          </div>
          <div className={Styles.text}>
            <h5>Name</h5>
            <h6>Partner</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              earum libero rem maxime magnam. Similique esse ab earum, autem
              consectetur.
            </p>
          </div>
        </div>
        <div className={Styles.slider}>
          <div className={Styles.img}>
            <img src="../../src/assets/images/person3.webp" alt="" />
          </div>
          <div className={Styles.text}>
            <h5>Name</h5>
            <h6>Partner</h6>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              earum libero rem maxime magnam. Similique esse ab earum, autem
              consectetur.
            </p>
          </div>{" "}
        </div>
        <div className={Styles.slider}>
          <div className={Styles.img}>
            <img src="../../src/assets/images/person4.webp" alt="" />
          </div>
          <div className={Styles.text}>
            <h5>Name</h5>
            <h6>Partner</h6>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
              earum libero rem maxime magnam. Similique esse ab earum, autem
              consectetur.
            </p>
          </div>{" "}
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
