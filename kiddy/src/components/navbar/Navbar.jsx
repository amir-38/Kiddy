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
  const [headerText, setHeaderText] = useState("Bring Fun Life To Your Kids");
  const [backLinks, setBackLinks] = useState([]);
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setStyle("home");
        setHeaderText("Bring Fun Life To Your Kids");
        setBackLinks([
          <Link key="home" to="/">
            Home
          </Link>,
        ]);
        break;
      case "/about":
        setStyle("default");
        setHeaderText("About Us");
        setBackLinks([
          <Link key="home" to="/">
            Home
          </Link>,
          <span key="separator"> / </span>,
          <Link key="about" to="/about">
            About
          </Link>,
        ]);
        break;
      case "/packages":
        setStyle("default");
        setHeaderText("Our Packages");
        setBackLinks([
          <Link key="home" to="/">
            Home
          </Link>,
          <span key="separator"> / </span>,
          <Link key="packages" to="/packages">
            Packages
          </Link>,
        ]);
        break;
      case "/gallery":
        setStyle("default");
        setHeaderText("Gallery");
        setBackLinks([
          <Link key="home" to="/">
            Home
          </Link>,
          <span key="separator"> / </span>,
          <Link key="gallery" to="/gallery">
            Gallery
          </Link>,
        ]);
        break;
      case "/pricing":
        setStyle("default");
        setHeaderText("Pricing Plans");
        setBackLinks([
          <Link key="home" to="/">
            Home
          </Link>,
          <span key="separator"> / </span>,
          <Link key="pricing" to="/pricing">
            Pricing
          </Link>,
        ]);
        break;
      case "/contact":
        setStyle("default");
        setHeaderText("Contact Us");
        setBackLinks([
          <Link key="home" to="/">
            Home
          </Link>,
          <span key="separator"> / </span>,
          <Link key="contact" to="/contact">
            Contact
          </Link>,
        ]);
        break;
      default:
        setStyle("default");
        setHeaderText("Welcome");
        setBackLinks([
          <Link key="home" to="/">
            Home
          </Link>,
        ]);
        break;
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
              <FaLocationDot className={Styles.icon1} />
            </div>
            <p>34 Street Name, City Name Here, United States</p>
          </div>
          <div className={Styles.navAdres}>
            <div className={Styles.navIcon}>
              <MdAccessTime className={Styles.icon2} />
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
            <TiSocialFacebook className={Styles.iconF} />
          </li>
          <li>
            <TiSocialLinkedin className={Styles.iconIn} />
          </li>
          <li>
            <TiSocialTwitter className={Styles.iconT} />
          </li>
        </ul>
      </div>
      <div className={Styles.hero}>
        <div className={Styles.heroTxt}>
          <span className={Styles.cursive}>Welcome To Our Website</span>
          <h1>{headerText}</h1>
          <span>{backLinks}</span>
        </div>
        <div className={Styles.btn}>
          <Button
            color={{ backgroundColor: "#dc3545", textColor: "#fff" }}
            padding="26px 10px"
          >
            LEARN MORE
          </Button>
        </div>
      </div>
    </header>
  );
}
