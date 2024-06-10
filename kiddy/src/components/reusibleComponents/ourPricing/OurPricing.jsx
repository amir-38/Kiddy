import React from "react";
import Styles from "./ourPricing.module.scss";
import { FaCheck } from "react-icons/fa6";
import Button from "../button/Button";
const OurPricing = () => {
  return (
    <section className={Styles.OurPricing}>
      <div className={Styles.pricingTxt}>
        <h6>Pricing plan</h6>
        <h2>Our pricing</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Nemo
          quis cupiditate fugit, <br /> voluptatibus ullam, non laboriosam alias
          veniam, <br /> ex inventore iure sed?
        </p>
      </div>
      <div className={Styles.pricingFirst}>
        <div className={Styles.circlePrice}>
          <div>
            <p>$30</p>
          </div>
        </div>
        <h4>Silver pack</h4>
        <ul>
          <li>
            <FaCheck />
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li>
            <FaCheck />
            <span>Nemo quis cupiditate</span>
          </li>
          <li>
            <FaCheck />
            <span>Consectetur adipisicing elit</span>
          </li>
        </ul>
        <Button
          color={{ backgroundColor: "#16c3b0", textColor: "#fff" }}
          padding="14px 14px"
        >
          BUY NOW{" "}
        </Button>
      </div>
      <div className={Styles.pricing}>
        <div className={Styles.circlePrice}>
          <div>
            <p>$70</p>
          </div>
        </div>
        <h4>Golden pack</h4>
        <ul>
          <li>
            <FaCheck />
            <span>Lorem ipsum dolor sit amet</span>
          </li>
          <li>
            <FaCheck />
            <span>Nemo quis cupiditate</span>
          </li>
          <li>
            <FaCheck />
            <span>Consectetur adipisicing elit</span>
          </li>
        </ul>
        <Button
          color={{ backgroundColor: "#fd4d40", textColor: "#fff" }}
          padding="14px 14px"
        >
          BUY NOW
        </Button>
      </div>
    </section>
  );
};

export default OurPricing;
