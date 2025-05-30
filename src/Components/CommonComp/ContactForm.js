import React, { useRef } from "react";
import "./CommonComp.scss";
import { IoCheckmarkSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_562xl22",
        "template_9b8c1p5",
        form.current,
        "pvZWHrp1z3lcVergQ"
      )
      .then(
        (result) => {
          console.log("Message sent successfully!");
        },
        (error) => {
          console.log("Failed to send message. Please try again.");
        }
      );

    e.target.reset();
  };

  return (
    <>
      {/* get in touch start */}
      <section id="getintouch" className="mobile-spacing tablet-spacing">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 getintouch-left-text">
              <span className="Professionals-text">
                <span className="text">
                  <h3 className="sub-head">/ Connect Now</h3>
                  <h2 className="main-head">Get a Free Quote</h2>
                </span>
              </span>
              <div className="get-in-touch-inner">
                <ul className="check-list">
                  <li>
                    <IoCheckmarkSharp />
                    <span>Personalized Services</span>
                  </li>
                  <li>
                    <IoCheckmarkSharp />
                    <span>Certified Team</span>
                  </li>
                  <li>
                    <IoCheckmarkSharp />
                    <span>Proven Track Record</span>
                  </li>
                  <li>
                    <IoCheckmarkSharp />
                    <span>Local Expertise</span>
                  </li>
                  <li>
                    <IoCheckmarkSharp />
                    <span>Community Focused</span>
                  </li>
                </ul>
                <p className="experts">
                  Want to talk to an expert?
                </p>
                <span className="number">
                  <a href="tel:(630) 922-8600">
                    <span>
                      <FaPhone />
                    </span>
                    (630) 922-8600
                  </a>
                </span>
                <p className="socialize">Let's Socialize</p>
                <ul className="socialize-icon">
                  <a href="https://www.facebook.com/ChawlaCPA/" target="_blank">
                    <li>
                      <FaFacebookF />
                    </li>
                  </a>
                  <a href="https://www.linkedin.com/company/chawla-associates-inc/" target="_blank">
                    <li>
                      <FaLinkedinIn />
                    </li>
                  </a>
                  <a href="https://x.com/chawlacpas" target="_blank">
                    <li>
                      <FaXTwitter />
                    </li>
                  </a>
                </ul>
              </div>
            </div>
            <div className="col-md-6 getintouch-form p-xs-0">
              <div className="contact-form">
                <form ref={form} onSubmit={sendEmail}>
                  <span>
                    <label>Full Name*</label>
                    <input type="text" name="first_name" required />
                  </span>
                  <span>
                    <label>Phone Number*</label>
                    <input type="number" name="phone_number" required />
                  </span>
                  <span>
                    <label>Email Address*</label>
                    <input type="email" name="email_address" required />
                  </span>
                  <span>
                    <label>Message*</label>
                    <textarea name="message" required></textarea>
                  </span>
                  <button type="submit" className="common-btn">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* get in touch end */}
    </>
  );
};

export default ContactForm;




