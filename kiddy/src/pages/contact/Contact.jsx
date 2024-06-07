import React from "react";
import Styles from "./contact.module.scss";
import Testimonial from "../../components/reusibleComponents/testimonial/Testimonial";
import Footer from "../../components/reusibleComponents/footer/Footer";
const Contact = () => {
  return (
    <>
      <main>
        <h3>Get In Touch Using The Contact Form</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
          assumenda, dolorum necessitatibus eius earum voluptates sed!
        </p>
        <div className={Styles.formCont}>
          <form action="">
            <label htmlFor="name">First name</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="lastname">Last name</label>
            <input type="text" id="lastname" name="lastname" />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>

            <input type="submit" value="Submit" />
          </form>

          <div className={Styles.info}>
            <h3>Contact Info</h3>
            <p>
              Address:{" "}
              <span> 34 Street Name, City Name Here, United States</span>
            </p>
            <p>
              Phone: <span>+1 242 4942 290</span>
            </p>
            <p>
              Email: <span>info@yourdomain.com</span>
            </p>
          </div>
        </div>
        <Testimonial />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
