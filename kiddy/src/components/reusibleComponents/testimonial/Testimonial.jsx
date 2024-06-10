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
          <div>3423</div>Happy client
        </p>
        <p>
          <div>4398</div>Members
        </p>
        <p>
          <div>50+</div>Staffs
        </p>
        <p>
          <div>2000+</div>Our followers
        </p>
      </div>
    </section>
  );
};

export default Testimonial;
