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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.lopswe
            sdcas asddd
            <br /> Iure nesciunt nemo vel earum maxime!
          </p>
          <div className={Styles.teamCards}>
            <Card
              style={{
                borderColor: "red",
                borderWidth: "4px",
                borderStyle: "solid",
              }}
              imageUrl="../../src/assets/images/person1.webp"
              name="John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis eros."
            />
            <Card
              style={{
                borderColor: "blue",
                borderWidth: "4px",
                borderStyle: "solid",
              }}
              imageUrl="../../src/assets/images/person2.webp"
              name="John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis eros."
            />
            <Card
              style={{
                borderColor: "green",
                borderWidth: "4px",
                borderStyle: "solid",
              }}
              imageUrl="../../src/assets/images/person3.webp"
              name="John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis eros."
            />
            <Card
              style={{
                borderColor: "purple",
                borderWidth: "4px",
                borderStyle: "solid",
              }}
              imageUrl="../../src/assets/images/person4.webp"
              name="John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis eros."
            />
            <Card
              style={{
                borderColor: "orange",
                borderWidth: "4px",
                borderStyle: "solid",
              }}
              imageUrl="../../src/assets/images/person5.webp"
              name="John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis eros."
            />
            <Card
              style={{
                borderColor: "pink",
                borderWidth: "4px",
                borderStyle: "solid",
              }}
              imageUrl="../../src/assets/images/person1.webp"
              name="John Doe"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et mollis eros."
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
