import React from "react";
import OurPackages from "../../components/reusibleComponents/ourPackages/OurPackages";
import Testimonial from "../../components/reusibleComponents/testimonial/Testimonial";
import YellowLine from "../../components/reusibleComponents/yellowLine/YellowLine";
import Footer from "../../components/reusibleComponents/footer/Footer";

const Packages = () => {
  return (
    <>
      <main>
        <OurPackages />
        <Testimonial />
        <YellowLine />
      </main>
      <Footer />
    </>
  );
};

export default Packages;
