import React from "react";
import Styles from "./footer.module.scss";
const Footer = () => {
  return (
    <>
      <div className={Styles.top}>
        <div className={Styles.left}>
          <h5 className={Styles.red}>About us</h5>
          <p>
            Far far away, behind the word mountains, far <br /> from the
            countries Vokalia and Consonantia, <br /> there live the blind
            texts.
          </p>
          <h6 className={Styles.red}>Newsletter</h6>
          <form action="">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className={Styles.email}
              name="email"
            />
            <input type="submit" className={Styles.submit} value="Send" />
          </form>
        </div>
        <div className={Styles.right}>
          <ul>
            <li className={Styles.red}>Navigation</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Tesrms of service</li>
            <li>Privacy</li>
            <li>Contact us</li>
          </ul>
          <ul>
            <li className={Styles.red}>Navigation</li>
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Tesrms of service</li>
            <li>Privacy</li>
            <li>Contact us</li>
          </ul>
        </div>
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
