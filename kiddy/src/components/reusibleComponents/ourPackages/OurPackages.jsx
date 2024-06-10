import React from "react";
import Styles from "./ourPackages.module.scss";
import Button from "../button/Button";
const OurPackages = () => {
  return (
    <section className={Styles.ourPackages}>
      <div className={Styles.header}>
        <h4>Packages You Like</h4>
        <h2>Our Packages</h2>
      </div>
      <div className={Styles.cards}>
        <div className={Styles.packCard}>
          <div className={Styles.img}>
            <img src="../../src/assets/images/001.svg" alt="" />
          </div>
          <div className={Styles.texts}>
            <h4>Indoor Games</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              sit, dolorum aspernatur similique eos quia!
            </p>
          </div>
          <Button
            color={{
              backgroundColor: "#dc3545",
              textColor: "#fff",
            }}
            padding="10px 10px"
          >
            Primary Button
          </Button>
        </div>
        <div className={Styles.packCard}>
          <div className={Styles.img}>
            {" "}
            <img src="../../src/assets/images/002.svg" alt="" />
          </div>
          <div className={Styles.texts}>
            <h4>Outdoor Game and Event</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              sit, dolorum aspernatur similique eos quia!
            </p>
          </div>
          <Button
            color={{ backgroundColor: "#ffc107", textColor: "#fff" }}
            padding="10px 10px"
          >
            Primary Button
          </Button>
        </div>
        <div className={Styles.packCard}>
          <div className={Styles.img}>
            {" "}
            <img src="../../src/assets/images/003.svg" alt="" />
          </div>
          <div className={Styles.texts}>
            <h4>Camping for Kids</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
              sit, dolorum aspernatur similique eos quia!
            </p>
          </div>
          <Button
            color={{ backgroundColor: "#71bc42", textColor: "#fff" }}
            padding="10px 10px"
          >
            Primary Button
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OurPackages;
