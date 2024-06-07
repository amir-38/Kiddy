import React from "react";
import Styles from "./gallery.module.scss";
import YellowLine from "../../components/reusibleComponents/yellowLine/YellowLine";
import Footer from "../../components/reusibleComponents/footer/Footer";

const Gallery = () => {
  return (
    <>
      <main>
        <section className={Styles.gallery}>
          <p>Our Gallery</p>
          <h2>Gallery Of The Kids</h2>
          <div className={Styles.images}>
            <img src="../../src/assets/images/kids.webp" alt="" />
            <img src="../../src/assets/images/kids.webp" alt="" />
            <img src="../../src/assets/images/kids.webp" alt="" />
            <img src="../../src/assets/images/kids.webp" alt="" />
            <img src="../../src/assets/images/kids.webp" alt="" />
            <img src="../../src/assets/images/kids.webp" alt="" />
            <img src="../../src/assets/images/kids.webp" alt="" />
            <img src="../../src/assets/images/kids.webp" alt="" />
          </div>
        </section>
        <YellowLine />
      </main>
      <Footer />
    </>
  );
};

export default Gallery;
