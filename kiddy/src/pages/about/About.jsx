import React from "react";
import Styles from "./about.module.scss";
import AboutUs from "../../components/reusibleComponents/aboutUs/AboutUs";
import Card from "../../components/reusibleComponents/imgCardComponent/ImgCard";
import OurPackages from "../../components/reusibleComponents/ourPackages/OurPackages";
import Footer from "../../components/reusibleComponents/footer/Footer";
const About = () => {
  return (
    <>
      <main>
        <AboutUs />
        <section className={Styles.team}>
          <h6> The Team </h6>
          <h3>Meet The Team</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
            nesciunt nemo vel earum maxime neque!
          </p>
          <div className={Styles.teamCards}>
            <Card
              imageUrl="../../src/assets/images/person1.webp"
              name="John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis eros. Duis vel arcu pretium, tempor justo in, rhoncus nisl."
            />
            <Card
              imageUrl="../../src/assets/images/person2.webp"
              name="John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis eros. Duis vel arcu pretium, tempor justo in, rhoncus nisl."
            />
            <Card
              imageUrl="../../src/assets/images/person3.webp"
              name="John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis eros. Duis vel arcu pretium, tempor justo in, rhoncus nisl."
            />
            <Card
              imageUrl="../../src/assets/images/person4.webp"
              name="John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis eros. Duis vel arcu pretium, tempor justo in, rhoncus nisl."
            />
            <Card
              imageUrl="../../src/assets/images/person5.webp"
              name="John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis eros. Duis vel arcu pretium, tempor justo in, rhoncus nisl."
            />
            <Card
              imageUrl="../../src/assets/images/person1.webp"
              name="John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis eros. Duis vel arcu pretium, tempor justo in, rhoncus nisl."
            />
          </div>
        </section>
        <OurPackages />
      </main>
      <Footer />
    </>
  );
};

export default About;
