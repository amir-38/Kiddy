import { Link, useLocation } from "react-router-dom";
import Styles from "./navbar.module.scss";
import { MdAccessTime } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { useState, useEffect } from "react";
import Button from "../reusibleComponents/button/Button";

export function Navbar() {
  const [style, setStyle] = useState("home");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setStyle("home");
    } else {
      setStyle("default");
    }
  }, [location.pathname]);

  return (
    <header className={Styles[style]}>
      <div className={Styles.dispNone}>
        <img src="../../src/assets/images/kid.webp" alt="kid" />
      </div>
      <div className={Styles.topNav}>
        <div className={Styles.navLogo}>
          Kiddy<span>.</span>
        </div>
        <div className={Styles.navText}>
          <div className={Styles.navAdres}>
            <div className={Styles.navIcon}>
              <FaLocationDot className={Styles.icon} />
            </div>
            <p>34 Street Name, City Name Here, United States</p>
          </div>
          <div className={Styles.navAdres}>
            <div className={Styles.navIcon}>
              <MdAccessTime className={Styles.icon} />
            </div>
            <p>Sunday - Friday 8:00AM - 4:00PM Saturday CLOSED</p>
          </div>
        </div>
      </div>
      <div className={Styles.nav}>
        <ul className={Styles.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/packages">Packages</Link>
          </li>
          <li>
            <Link to="/gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <ul className={Styles.socialIcons}>
          <li>
            <TiSocialFacebook className={Styles.icon} />
          </li>
          <li>
            <TiSocialLinkedin className={Styles.icon} />
          </li>
          <li>
            <TiSocialTwitter className={Styles.icon} />
          </li>
        </ul>
      </div>
      <div className={Styles.hero}>
        <div className={Styles.heroTxt}>
          <span className={Styles.cursive}>Welcome To Our Website</span>
          <h1>Bring Fun Life To Your Kids</h1>
          <span>Amazing Playground for your kids</span>
        </div>
        <Button
          color={{ backgroundColor: "#007bff", textColor: "#fff" }}
          padding="20px 20px"
        >
          Primary Button
        </Button>
      </div>
    </header>
  );
}
