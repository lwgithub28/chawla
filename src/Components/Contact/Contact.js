import React from "react";
import { Helmet } from "react-helmet";
import "./Contact.scss";
import { Link } from "react-router-dom";
import { LuArrowUpRight } from "react-icons/lu";
import ContactForm from "../CommonComp/ContactForm";
import ContactUsTeam from "../../Assests/Img/Contact Us Team.webp";
import contactMap from "../../Assests/Img/contact-map.webp";
const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact the Best CPA in Naperville</title>
        <meta
          name="description"
          content="Our accounting services in Naperville are designed to simplify your financial journey. You can contact us in a variety of ways. Including calling (630) 922-8600"
        />
      </Helmet>
      <div className="fraunces" id="contact-main-page">
        {/* banner start */}
        {/* <Banner
          bannerImage={contactbanner}
          title="get in touch with chawla's cpa - we're here to help"
          description="At Chawla's CPA, we understand that your financial success is paramount Whether you need expert advice, want to schedule a consultation, or have specific questions regarding our services, our team is ready to assist you. Use the options below to get in touch with us, and let's work together to maximize your financial potential"
          buttonText="Talk to Your CPA"
        /> */}
        {/* banner start */}
        <section id="contact-banner" className="mobile-spacing tablet-spacing">
          <div className="container-fluid p-xs-0 padding-md-0">
            <h1>Contact Us Today</h1>
            <p className="text-desc">
              Whether you are starting out or scaling up, our top-rated CPA in
              Naperville is here to guide you with confidence. Your path to
              expert financial guidance begins here. Get in touch with us today.
            </p>
          </div>
        </section>
        {/*banner end */}

        {/* --------------- */}
        {/* map conatct start */}
        <section id="contact-map" className="tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2978.2861865821565!2d-88.20724172410384!3d41.71434297126012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ef7a1c440944b%3A0x8a207400f13acfc9!2sChawla%20%26%20Associates%2C%20CPAs!5e0!3m2!1sen!2sin!4v1733299238875!5m2!1sen!2sin"
                  width="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe>
              </div>
              <div className="col-md-5 map-address">
                <img
                  src={contactMap}
                  alt="contact Map"
                  title="contact Map"
                ></img>
                <div className="address">
                  <div className="office">
                    <h4>OFFICE -</h4>
                    <p>
                      <a
                        href="https://maps.app.goo.gl/MwpMWEch5YviwQgg7"
                        target="_blank"
                      >
                        2752 Forgue Dr Suite 100-B, Naperville, IL 60564
                      </a>
                    </p>
                  </div>
                  <div className="conatct">
<<<<<<< HEAD
                    <h4>CONTACT-</h4>
=======
                    <h4>CONTACT -</h4>
>>>>>>> 2bf065d (content added)
                    <p>
                      <a href="tel:(630) 922-8600">(630) 922-8600</a>
                    </p>
                  </div>
<<<<<<< HEAD
=======
                  <div className="email">
                    <h4>Email -</h4>
                    <p>
                      <a href="mailto:info@chawlacpa.com">info@chawlacpa.com</a>
                    </p>
                  </div>
>>>>>>> 2bf065d (content added)
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* map conatct end */}
        {/* --------------- */}
        {/* contact form start */}
        <ContactForm />
        {/* contact form end */}
        {/* --------------- */}
        {/* meet the team start */}
        <section id="meet-the-team">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-9">
                <img
                  src={ContactUsTeam}
                  alt="Meet The Team"
                  title="Meet The Team"
                ></img>
              </div>
              <div className="col-md-3 meet-the-team-text">
                <h2>Meet The Team</h2>
                <Link to="/about" className="short-button">
                  <LuArrowUpRight />
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* meet the team end */}
      </div>
    </>
  );
};

export default Contact;
