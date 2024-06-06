import React from "react";
import Styles from "./ourPackages.module.scss";
import Button from "../button/Button";
const OurPackages = () => {
  return (
    <section className={Styles.ourPackages}>
      <div className={Styles.packCard}>
        <div className={Styles.img}>
          <img src="../../src/assets/images/001.svg" alt="" />
        </div>
        <div className={Styles.texts}>
          <h4>indoor game</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi sit,
            dolorum aspernatur similique eos quia!
          </p>
        </div>
        <Button
          color={{ backgroundColor: "#007bff", textColor: "#fff" }}
          padding="20px 20px"
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
          <h4>indoor game</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi sit,
            dolorum aspernatur similique eos quia!
          </p>
        </div>
        <Button
          color={{ backgroundColor: "#007bff", textColor: "#fff" }}
          padding="20px 20px"
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
          <h4>indoor game</h4>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi sit,
            dolorum aspernatur similique eos quia!
          </p>
        </div>
        <Button
          color={{ backgroundColor: "#007bff", textColor: "#fff" }}
          padding="20px 20px"
        >
          Primary Button
        </Button>
      </div>
    </section>
  );
};

export default OurPackages;
