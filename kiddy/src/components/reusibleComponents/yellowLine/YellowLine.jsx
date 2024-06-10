import React from "react";
import Styles from "./yellowLine.module.scss";
import Button from "../button/Button";
const YellowLine = () => {
  return (
    <section className={Styles.yellow}>
      <h3>Bring Fun Life To Your Kids</h3>
      <Button
        color={{ backgroundColor: "#dc3545", textColor: "#fff" }}
        padding="20px 20px"
        width="200px"
      >
        GET STARTED
      </Button>
    </section>
  );
};

export default YellowLine;
