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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo quis
          cupiditate fugit, voluptatibus ullam, non laboriosam alias veniam, ex
          inventore iure sed?
        </p>
      </div>
      <div className={Styles.pricing}>
        <div className={Styles.circlePrice}>
          <div>
            <p>$30</p>
          </div>
        </div>
        <h4>Silver pack</h4>
        <ul>
          <li>
            <FaCheck />
            Lorem ipsum dolor sit amet
          </li>
          <li>
            <FaCheck />
            Nemo quis cupiditate
          </li>
          <li>
            <FaCheck />
            Consectetur adipisicing elit
          </li>
        </ul>
        <Button
          color={{ backgroundColor: "#007bff", textColor: "#fff" }}
          padding="20px 20px"
        >
          buy now{" "}
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
            Lorem ipsum dolor sit amet
          </li>
          <li>
            <FaCheck />
            Nemo quis cupiditate
          </li>
          <li>
            <FaCheck />
            Consectetur adipisicing elit
          </li>
        </ul>
        <Button
          color={{ backgroundColor: "#007bff", textColor: "#fff" }}
          padding="20px 20px"
        >
          buy now
        </Button>
      </div>
    </section>
  );
};

export default OurPricing;
