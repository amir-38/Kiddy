import React from "react";
import Styles from "./home.module.scss";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import AboutUs from "../../components/reusibleComponents/aboutUs/AboutUs";
import OurPackages from "../../components/reusibleComponents/ourPackages/OurPackages";
import OurPricing from "../../components/reusibleComponents/ourPricing/OurPricing";
const Home = () => {
  return (
    <main>
      <section className={Styles.colorCards}>
        <div className={Styles.first}>
          <div className={Styles.circleIcon}>
            <FaHome />
          </div>
          <div className={Styles.text}>
            <h5>Lorem, ipsum.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quidem odit rem. Voluptates, ipsum accusamus?
            </p>
          </div>
        </div>
        <div className={Styles.second}>
          <div className={Styles.circleIcon}>
            <IoPerson />{" "}
          </div>
          <div className={Styles.text}>
            <h5>Lorem, ipsum.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quidem odit rem. Voluptates, ipsum accusamus?
            </p>
          </div>
        </div>
        <div className={Styles.third}>
          <div className={Styles.circleIcon}>
            <IoSettings />{" "}
          </div>
          <div className={Styles.text}>
            <h5>Lorem, ipsum.</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              quidem odit rem. Voluptates, ipsum accusamus?
            </p>
          </div>
        </div>
      </section>
      <AboutUs />
      <OurPackages />
      <OurPricing />
    </main>
  );
};

export default Home;
