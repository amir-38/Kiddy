import React from "react";
import Styles from "./footer.module.scss";
const Footer = () => {
  return (
    <>
      <div className={Styles.top}>
        <div className={Styles.left}>
          <h5>About us</h5>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <h5>Newsletter</h5>
          <form action="">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <input type="submit" value="Send" />
          </form>
        </div>
        <div className={Styles.right}></div>
      </div>
      <div className={Styles.bottom}>
        <hr />
        <p>
          Copyright ©2024 All rights reserved | This template is made with by
          Colorlib
        </p>
      </div>
    </>
  );
};

export default Footer;
