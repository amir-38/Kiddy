import React from "react";
import Styles from "./aboutUs.module.scss";
import Button from "../button/Button";
const AboutUs = () => {
  return (
    <section className={Styles.aboutUs}>
      <div className={Styles.cont}>
        <div className={Styles.img}>
          <img src="../../src/assets/images/kids.webp" alt="" />
        </div>
        <div className={Styles.texts}>
          <h5>About us</h5>
          <h3>Bring Fun Life To Your Kids</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam
            magni optio beatae ratione. Libero qui quas ipsa quis reiciendis
            ducimus praesentium! Eius perferendis laudantium esse.
          </p>
          <Button
            color={{ backgroundColor: "#ffc107", textColor: "#000" }}
            padding="24px 4px"
            width="180px"
          >
            MORE ABOUT US{" "}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
