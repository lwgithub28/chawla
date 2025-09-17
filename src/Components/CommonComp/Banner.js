import React from "react";
import { Link } from "react-router-dom";
import "./CommonComp.scss";

const Banner = ({ bannerImage, title, description }) => {
  return (
    <>
      <section id="about-banner" className="mobile-spacing tablet-spacing">
        <div className="container-fluid about-banner-common">
          <div className="row">
            <div className="col-sm-6 col-md-12 col-lg-6 slider-img">
              <img src={bannerImage} alt={title} title={title} loading="lazy" />
            </div>
            <div className="col-sm-6 col-md-12 col-lg-6 right-text remove-spacing">
              <h1>{title}</h1>
              <p>{description}</p>
              {/* <Link to="/contact"><button className="common-btn">Talk to Your CPA</button></Link> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
