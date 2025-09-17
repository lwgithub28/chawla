import React from "react";
import "./Services.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Banner from "../CommonComp/Banner";
import ContactForm from "../CommonComp/ContactForm";
import Map from "../CommonComp/Map";
import { accountingSolutionsData, consultingServicesData } from "../../Components/Data";
import { LuArrowUpRight } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import beforeabouthead from "../../Assests/Img/boxesline.webp";
import SeviceBanner from "../../Assests/Img/SeviceBanner.webp";
import ServicesTaxesPreparation from "../../Assests/Img/Services-TaxesPreparation.webp";
// import
import boxesline from "../../Assests/Img/boxesline.webp";
const Services = () => {
  return (
    <>
      <Helmet>
        <title> Comprehensive Tax and Accounting Services in Naperville</title>
        <meta name="description" content="Chawla & Associates is a hub for accounting, tax advisory and consulting in Naperville. Get a stress-free experience with our personalized financial solutions." />
      </Helmet>
      <div className="fraunces" id="Services-page">
        {/* banner start */}
        <Banner
          bannerImage={SeviceBanner}
<<<<<<< HEAD
          title="Your One-Stop Solution for Tax, Accounting, and tax advisory Services"
=======
          title="Your One-Stop Solution for Tax Preparation, Accounting, and Consulting Services"
>>>>>>> 2bf065d (content added)
          description="At Chawla and Associates, our CPAs offer businesses and individuals holistic services, including expert accounting and tax advisory assistance. Get customized answers by contacting us today!"
          buttonText="Connect with your CPA"
        />
        {/*banner end */}
        {/* ---------------- */}
        {/* taxation start */}
        <section id="taxation" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-md-12 Professionals-text">
                <span className="text">
                  <h3 className="sub-head">/  Tax Services</h3>
                  <h2 className="main-head">Taxes Preparation</h2>
                </span>
              </div>
              <div className="col-lg-7 col-md-12 Professionals-text-desc remove-spacing">
                <p className="text-desc">
                  Our proficient <b>tax services in Naperville</b> make sure that people and companies file their taxes correctly and get the most out of their benefits. Our proven tax solutions will help you stay in line and stress-free.
                </p>
              </div>
            </div>
            <div className="row taxation-inner">
              <div className="col-lg-8 col-md-12 taxation-inner-boxes">
                <div className="row">
                  <div className="col-md-6 first-box  icon-box">
                    <span>
                      <Link to="/services/taxes/income-tax-preparation">
                        <img
                          src={beforeabouthead}
                          alt="beforeabouthead"
                          title="beforeabouthead"
                          loading="lazy"
                        ></img>
                      </Link>
                      <Link to="/services/taxes/income-tax-preparation"><h1 className="main-head">income tax preparation</h1></Link>
                      <p class="text-desc">
                        We ensure accurate and efficient tax filing, helping individuals and businesses maximize deductions while staying fully compliant with IRS regulations. Our team stays updated with the latest tax laws to optimize your refunds and minimize liabilities.
                      </p>
                    </span>
                    <Link to="/services/taxes/income-tax-preparation" className="short-button">
                      <LuArrowUpRight />
                    </Link>
                  </div>
                  <div className="col-md-6 taxation-inner-box icon-box">
                    <span>
                      <Link to="/services/taxes/business-tax-preparation">
                        <img
                          src={beforeabouthead}
                          alt="beforeabouthead"
                          title="beforeabouthead"
                          loading="lazy"
                        ></img>
                      </Link>
                      <Link to="/services/taxes/business-tax-preparation">  <h1 className="main-head">business tax preparation</h1></Link>
                      <p class="text-desc">
                        From small to large businesses, we provide tailored <b>tax services in Naperville</b> to optimize your financial health, reduce liabilities, and ensure compliance. Our proactive approach helps you stay ahead of tax deadlines, avoid penalties, and plan for future growth.
                      </p>
                    </span>
                    <Link to="/services/taxes/business-tax-preparation" className="short-button">
                      <LuArrowUpRight />
                    </Link>
                  </div>
                </div>
                <div className="row top-spacing">
                  <div className="col-md-6 first-box icon-box">
                    <span>
                      <Link to="/services/taxes/IRS-representation">
                        <img
                          src={beforeabouthead}
                          alt="beforeabouthead"
                          title="beforeabouthead"
                          loading="lazy"
                        ></img>
                      </Link>
                      <Link to="/services/taxes/IRS-representation"><h1 className="main-head">IRS representation</h1> </Link>
                      <p class="text-desc">
                        If you're facing an IRS audit, tax dispute, or unpaid tax liabilities, our experienced professionals advocate on your behalf. We provide negotiation support, tax resolution strategies, and <b>IRS delay solutions in Naperville</b>, ensuring the best outcome for your case.
                      </p>
                    </span>
                    <Link to="/services/taxes/IRS-representation" className="short-button">
                      <LuArrowUpRight />
                    </Link>
                  </div>
                  <div className="col-md-6 taxation-inner-box icon-box">
                    <span>
                      <Link to="/services/taxes/international-tax">
                      <img
                        src={beforeabouthead}
                        alt="beforeabouthead"
                        title="beforeabouthead"
                        loading="lazy"
                      ></img>
                      </Link>
                     <Link to="/services/taxes/international-tax"> <h1 className="main-head">international taxes</h1></Link>
                      <p class="text-desc">
                        Managing cross-border tax matters? We offer expert guidance on international taxation, ensuring compliance with U.S. and foreign tax regulations. Our team helps businesses and individuals minimize global tax burdens and avoid double taxation.
                      </p>
                    </span>
                    <Link to="/services/taxes/international-tax" className="short-button">
                      <LuArrowUpRight />
                    </Link>
                  </div>
                </div>
                <div className="row top-spacing">
                  <div className="col-md-6 first-box icon-box">
                    <span>
                      <Link to="/services/taxes/state-local-tax">
                      <img
                        src={beforeabouthead}
                        alt="beforeabouthead"
                        title="beforeabouthead"
                        loading="lazy"
                      ></img>
                      </Link>
                     <Link to="/services/taxes/state-local-tax"> <h1 className="main-head">state & local taxes</h1></Link>
                      <p class="text-desc">
                        Understanding state and local tax laws can be complex, but our experts help you avoid costly penalties, leverage deductions, and stay compliant with regulations. Whether it's sales tax, payroll tax, or franchise tax, we ensure smooth tax filings and audits.
                      </p>
                    </span>
                    <Link to="/services/taxes/state-local-tax" className="short-button">
                      <LuArrowUpRight />
                    </Link>
                  </div>
                  <div className="col-md-6 taxation-inner-box icon-box">
                    <span>
                          <Link to="/services/taxes/estate-trust-tax">
                      <img
                        src={beforeabouthead}
                        alt="beforeabouthead"
                        title="beforeabouthead"
                        loading="lazy"
                      ></img>
                      </Link>
                      <Link to="/services/taxes/estate-trust-tax"> <h1 className="main-head">estate & trust taxes</h1></Link>
                      <p class="text-desc">
                        We provide strategic estate and trust tax planning to protect your assets and ensure a smooth transfer of wealth to your beneficiaries. Our tax-efficient strategies help minimize estate taxes and maximize financial security for your loved ones.
                      </p>
                    </span>
                    <Link to="/services/taxes/estate-trust-tax" className="short-button">
                      <LuArrowUpRight />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-12 img remove-spacing">
                <img
                  src={ServicesTaxesPreparation}
                  alt="Services Taxes Preparation"
                  title="Services Taxes Preparation"
                ></img>
              </div>
            </div>
          </div>
        </section>
        {/* taxation end */}
        {/* ----------------*/}
        {/* accounting solution start */}
        <section id="accountion-solutions" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 col-md-12 remove-spacing">
                <h3 className="sub-head">/ Accounting Solutions</h3>
                <h2 className="main-head">
                  Trustworthy Accounting Services in Naperville for Financial Clarity & Growth
                </h2>
              </div>
            </div>
            <div className="row solutions-boxes">
              {accountingSolutionsData.map((solution, index) => (
                <div
                  key={index}
                  className={`col-lg-4 col-md-12 solutions-box-${index % 3 === 0
                    ? "first"
                    : index % 3 === 1
                      ? "second"
                      : "third"
                    } remove-spacing`}
                >
                  <div className="solutions-box">
                    <span>
                      <div className="icon-box-img">
                        <Link to={solution.buttonLink}>
                          <img
                            src={solution.imgSrc}
                            alt={solution.alt}
                            title={solution.alt}
                            loading="lazy"
                          />
                        </Link>
                      </div>
                      <Link to={solution.buttonLink}><h1 className="main-head">{solution.title}</h1></Link>
                      <p>{solution.description}</p>
                    </span>
                    <Link to={solution.buttonLink} className="short-button">
                      <LuArrowUpRight />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* accounting solution end */}
        {/* -------------------- */}
        {/* consulting start */}
        <section id="consulting" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 col-md-12 Professionals-text">
                <span className="text">
                  <h3 className="sub-head">/ Advisory & Consulting Services</h3>
                  <h2 className="main-head">
                   Expert Tax Advisory and Consulting in Naperville for Smarter Financial Decisions
                  </h2>
                </span>
              </div>
            </div>
            <div className="row all-services-box">
              {consultingServicesData.map((service, index) => (
                <div
                  key={index}
                  className="col-lg-6 col-md-12 remove-spacing"
                >
                  <div className="our-services-box">
                    <div className="image">
                      <Link to={service.buttonLink}>
                        <img
                          src={service.imgSrc}
                          alt={service.alt}
                          title={service.alt}
                          loading="lazy"
                        />
                      </Link>
                    </div>
                    <div className="text">
                      <img
                        src={boxesline} // Replace with actual import or path
                        alt="boxesline"
                        title="boxesline"
                      />
                      <Link to={service.buttonLink}> <h5>{service.title}</h5></Link>
                      <p>{service.description}</p>
                      <Link to={service.buttonLink} className="short-button">
                        <LuArrowUpRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* consulting end */}

        {/* -------------------- */}
        {/* connect with us start */}
        <section id="connect-with-us" className="bgimg mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12 Connectwithusbgtext padding-md-0 p-xs-0">
                <h3 className="sub-head">/ Connect with us</h3>
                <h2 className="main-head">Let's Build Your Successful Financial Future Together!</h2>
                <p className="text-desc">
                  Grab adept accounting, tax, and advisory services customized to your demands that will help you stay ahead of the market. Contact us right away to discuss how we can help you with your money!
                </p>
                <Link className="bg-remove-btn-svg" to="/contact">
                  Get a Quote
                  <span>
                    <MdArrowOutward />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* connect with us end */}
        {/* ------------------- */}
        {/* ContactForm start */}
        <ContactForm />
        {/* ContactForm end */}
        {/* ------------------- */}
        {/* map start */}
        <Map />
        {/* map end */}
      </div>
    </>
  );
};

export default Services;
