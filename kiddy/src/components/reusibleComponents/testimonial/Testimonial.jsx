import React from "react";
import Styles from "./testimonial.module.scss";
import Carousel from "./carousel/Caruosel";
const Testimonial = () => {
  return (
    <section className={Styles.testimonial}>
      <div className={Styles.header}>
        <h5>Testimonial</h5>
        <h3>What Our Client Says About Us</h3>
      </div>
      <div className={Styles.slider}>
        <Carousel />
      </div>
      <div className={Styles.numbers}>
        <p>
          <span>3423</span>Happy client
        </p>
        <p>
          <span>4398</span>Members
        </p>
        <p>
          <span>50+</span>Staffs
        </p>
        <p>
          <span>2000+</span>Our followers
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
