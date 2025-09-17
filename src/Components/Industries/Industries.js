import React from "react";
import { Helmet } from "react-helmet";
import "./Industries.scss";
import Testimonial from "../CommonComp/Testimonial";
import Map from "../CommonComp/Map";
import { Link } from "react-router-dom";
import { IndustriessectorsData } from "../../Components/Data";
import { MdArrowOutward } from "react-icons/md";
import Banner from "../CommonComp/Banner";
import industrybanner from "../../Assests/Img/Industry-banner.webp";
import ProvenTrackRecord from "../../Assests/Img/Proven-Track-Record.webp";
import IndustrySpecificExpertise from "../../Assests/Img/Industry-Specific-Expertise.webp";
import ScalableServices from "../../Assests/Img/Scalable-Services.webp";
import PersonalizedAttention from "../../Assests/Img/Personalized-Attention.webp";
import GlobalStandards from "../../Assests/Img/Global-Standards.webp";
const Industries = () => {
  return (
    <>
      <Helmet>
        <title>CPA Services for Your Industry in Naperville</title>
        <meta
          name="description"
          content="We offer industry-specific accounting, tax planning and financial advisory services for healthcare, real estate, retail, eCommerce, nonprofit organizations and more. "
        />
      </Helmet>
      <div className="fraunces" id="industries-page">
        {/* banner start */}
        <Banner
          bannerImage={industrybanner}
          title="Trusted CPA Services for Your Industry in Naperville, IL"
          description="Every industry has unique financial challenges; our expert CPAs help you navigate them with precision. At Chawla & Associates, we deliver industry-specific services for accounting, tax planning, and tax advisory to help your business thrive. Whether you are in healthcare, real estate, crypto, or any other sector, we ensure accuracy, efficiency, and strategic financial growth."
          buttonText="Talk to Your CPA"
        />
        {/*banner end */}
        {/* --------------------- */}
        {/* sectors start */}
        <section id="sectors" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <h3 className="sub-head">/ Industries</h3>
              <h2 className="main-head">We Understand Your Business Needs</h2>
              <div className="row sectors-box p-xs-0">
                {IndustriessectorsData.map((sector) => (
                  <div
                    key={sector.id}
                    className="col-lg-6 col-md-12 col-sm-6 p-xs-0"
                  >
                    <div className="icon-box">
                      <img
                        src={sector.imgSrc}
                        alt={sector.title}
                        title={sector.title}
                        loading="lazy"
                      />
                      <h3>{sector.title}</h3>
                      <p>{sector.description} </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* sectors end */}
        {/* --------------------- */}
        {/* whyus start */}
        <div className="whyus mobile-spacing tablet-spacing" id="whyus">
          <div className="container-fluid">
            <div className="row">
              <div class="top-middle-head remove-spacing">
                <h3 className="sub-head">/ Choose Us</h3>
                <h2 className="main-head">
                  Why Consider Our{" "}
                  <b>CPA Services for Your Industry in Naperville?</b>
                </h2>
              </div>
              <div className="row why-us-boxes">
                <div className="col">
                  <div className="icon-box">
                    <div className="icon-box-img">
                      <img
                        src={ProvenTrackRecord}
                        alt="Proven Track Record"
                        title="Proven Track Record"
                        loading="lazy"
                      ></img>
                    </div>
                    <h3>Proven Track Record</h3>
                    <p>
                      With years of experience and a history of satisfied
                      clients, we are trusted by businesses in Naperville to
                      deliver exceptional results and peace of mind.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="icon-box">
                    <div className="icon-box-img">
                      <img
                        src={IndustrySpecificExpertise}
                        alt="Industry Specific Expertise"
                        title="Industry Specific Expertise"
                        loading="lazy"
                      ></img>
                    </div>
                    <h3>Industry Specific Expertise</h3>
                    <p>
                      We understand the financial difficulties of real estate,
                      healthcare, construction, retail, technology, and more.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="icon-box">
                    <div className="icon-box-img">
                      <img
                        src={ScalableServices}
                        alt="Scalable Services"
                        title="Scalable Services"
                        loading="lazy"
                      ></img>
                    </div>
                    <h3>Scalable Services</h3>
                    <p>
                      Whether you’re a startup, SMB, or enterprise, our CPA
                      solutions grow with your business.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="icon-box">
                    <div className="icon-box-img">
                      <img
                        src={PersonalizedAttention}
                        alt="Personalized Attention"
                        title="Personalized Attention"
                        loading="lazy"
                      ></img>
                    </div>
                    <h3>Personalized Attention</h3>
                    <p>
                      We prioritize building long-term relationships, offering
                      dedicated support and customized advice to help your
                      business thrive.
                    </p>
                  </div>
                </div>
                <div className="col">
                  <div className="icon-box">
                    <div className="icon-box-img">
                      <img
                        src={GlobalStandards}
                        alt="Global Standards"
                        title="Global Standards"
                        loading="lazy"
                      ></img>
                    </div>
                    <h3>Global Standards</h3>
                    <p>
                      As a Naperville-based firm, we understand the local
                      business needs while adhering to global accounting
                      standards for accuracy and compliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* whyus end */}
        {/* --------------------- */}
        {/* Testimonial start */}
        <Testimonial />
        {/* Testimonial end */}
        {/* -------------------- */}
        {/* connect with us start */}
        <section id="connect-with-us" className="bgimg mobile-spacing">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12 Connectwithusbgtext p-xs-0 padding-md-0">
                <h3 className="sub-head">/ Connect with us</h3>
                <h2 className="main-head">
                  Your Industry Deserves Specialized CPA Services!
                </h2>
                <p className="text-desc">
                  Partner with our reliable <b>CPA firm in Naperville</b> and
                  get proactive financial solutions tailored to your industry.
                  Let’s create a smarter financial strategy!
                </p>
                <Link className="bg-remove-btn-svg" to="/contact">
                  get in touch
                  <span>
                    <MdArrowOutward />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* connect with us end */}
        {/* -------------------- */}
        {/* map start */}
        <Map />
        {/* map end */}
      </div>
    </>
  );
};

export default Industries;
