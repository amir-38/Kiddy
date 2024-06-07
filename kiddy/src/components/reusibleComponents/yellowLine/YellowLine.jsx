import React from "react";
import Styles from "./yellowLine.module.scss";
import Button from "../button/Button";
const YellowLine = () => {
  return (
    <section className={Styles.yellow}>
      <h3>Bring Fun Life To Your Kids</h3>
      <Button
        color={{ backgroundColor: "#007bff", textColor: "#fff" }}
        padding="20px 20px"
      >
        Primary Button
      </Button>
    </section>
  );
};

export default YellowLine;
