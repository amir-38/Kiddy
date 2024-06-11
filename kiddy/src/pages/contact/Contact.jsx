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
        </p>{" "}
        {/* <section className={Styles.contact}> */}
        <div className={Styles.formCont}>
          <form action="">
            <div>
              <label htmlFor="name">First name</label>
              <input type="text" id="name" name="name" />

              <label htmlFor="lastname">Last name</label>
              <input type="text" id="lastname" name="lastname" />
            </div>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message"></textarea>

            <input
              className={Styles.submit}
              type="submit"
              value="Send message"
            />
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
        {/* </section> */}
        <Testimonial />
      </main>
      <Footer />
    </>
  );
};

export default Contact;
