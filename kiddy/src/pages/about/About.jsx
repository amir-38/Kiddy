import React from "react";
import Styles from "./about.module.scss";
import AboutUs from "../../components/reusibleComponents/aboutUs/AboutUs";
import Card from "../../components/reusibleComponents/imgCardComponent/ImgCard";
const About = () => {
  return (
    <main>
      <AboutUs />
      <section className={Styles.team}>
        <h6> The Team </h6>
        <h3>Meet The Team</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
          nesciunt nemo vel earum maxime neque!
        </p>
        <Card
          imageUrl="../../src/assets/images/person1.webp"
          name="John Doe"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis eros. Duis vel arcu pretium, tempor justo in, rhoncus nisl."
        />
      </section>
    </main>
  );
};

export default About;
