import React from "react";
import "../ServiceInnerPage.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import Testimonial from "../../../CommonComp/Testimonial";
import Banner from "../../../CommonComp/Banner";
import ContactForm from "../../../CommonComp/ContactForm";
import Map from "../../../CommonComp/Map";
import { LuArrowUpRight } from "react-icons/lu";
import { IoCheckmarkSharp } from "react-icons/io5";
import TaxesInnerBanner from "../../../../Assests/Img/Accounting-Services-banner.webp";
import WhyChooseUs from "../../../../Assests/Img/Accounting-Choose-Us.webp";
import headingbefore from "../../../../Assests/Img/before-heading.webp";
import beforeabouthead from "../../../../Assests/Img/boxesline.webp";
import ScheduleConsultation from "../../../../Assests/Img/Schedule a Consultation.webp";
import SubmitDocuments from "../../../../Assests/Img/Submit Your Documents.webp";
import ReviewsPreprations from "../../../../Assests/Img/Review & Preparation.webp";
import peaceOfMind from "../../../../Assests/Img/Peace of Mind.webp";

const AccountingServices = () => {
  return (
    <>
      <Helmet>
        <title>
          Innovative Small Business Accounting Services in Naperville
        </title>
        <meta
          name="description"
          content="Chawla & Associates CPAs offers bookkeeping, audit & assurance, payroll, financial statements and crypto accounting solutions for businesses like yours. Get personalized solutions today."
        />
      </Helmet>
      <div className="fraunces service-inner" id="taxes">
        {/* about-banner start */}
        <Banner
          bannerImage={TaxesInnerBanner}
          title="Reach Your Goals With Chawla & Associates"
          description={
            <>
              Your goals as an individual and for your business are unique. Your
              financial plans must be a reflection of this. Our{" "}
              <b>small business accounting services</b> are tailored around you.
              As an award-winning accountancy firm offering a variety of
              accounting and advisory services to individuals and businesses in
              the U.S., we start by understanding your business so that we can
              offer customized services that help you succeed and take on new
              opportunities with confidence.
            </>
          }
          buttonText="Talk to Your CPA"
        />
        {/* about-banner end */}
        {/* ------------------------- */}
        {/* taxes preparation start */}
        <section
          id="taxation"
          className="taxation mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-md-12 Professionals-text">
                <span className="text">
                  <h3 className="sub-head">/ Compliance</h3>
<<<<<<< HEAD
                  <h2 className="main-head">Accounting Services</h2>
=======
                  <h2 className="main-head">
                    Accounting Solutions to Drive Your Business
                  </h2>
>>>>>>> 2bf065d (content added)
                </span>
              </div>
              <div className="col-lg-7 col-md-12 Professionals-text-desc p-xs-0 padding-md-0">
                <p className="text-desc">
                  Chawla & Associates is a full-service accounting firm offering
                  a variety of services tailored to your needs. Our advisors and
                  accountants have a thorough understanding of the accounting
                  and tax challenges businesses face. That is why we offer
                  personalized accounting services to keep you ahead of the
                  curve.
                </p>
              </div>
            </div>
            <div className="container-fluid p-xs-0">
              <div className="row taxation-inner">
                <div className="col-lg-4 col-md-6 first-box  icon-box">
                  <span>
                    <img
                      src={beforeabouthead}
                      alt="beforeabouthead"
                      title="beforeabouthead"
                      loading="lazy"
                    ></img>
                    <Link to="/services/accounting-services/bookkeeping-services">
                      {" "}
                      <h1 className="main-head">Bookkeeping Services</h1>
                      <p class="text-desc">
                        Chawla & Associates comprehensive bookkeeping services
                        help you record transactions, analyze trends and track
                        progress. We will ensure your books are accurate and
                        up-to-date.
                      </p>
                    </Link>
                  </span>
                  <Link
                    to="/services/accounting-services/bookkeeping-services"
                    className="short-button"
                  >
                    <LuArrowUpRight />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 first-box icon-box">
                  <span>
                    <img
                      src={beforeabouthead}
                      alt="beforeabouthead"
                      title="beforeabouthead"
                      loading="lazy"
                    ></img>
                    <Link to="/services/accounting-services/financial-statements">
                      <h1 className="main-head">Financial Statements</h1>
                      <p class="text-desc">
                        We provide accurate, timely and detailed financial
                        reporting to support decision-making. From preparing
                        income statements and balance sheets to equity summaries
                        and cash flow statements, we present your data clearly
                        and with compliance with regulatory standards.
                      </p>
                    </Link>
                  </span>
                  <Link
                    to="/services/accounting-services/financial-statements"
                    className="short-button"
                  >
                    <LuArrowUpRight />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 first-box icon-box">
                  <span>
                    <img
                      src={beforeabouthead}
                      alt="beforeabouthead"
                      title="beforeabouthead"
                      loading="lazy"
                    ></img>
                    <Link to="/services/accounting-services/payroll">
                      <h1 className="main-head">Payroll</h1>
                      <p class="text-desc">
                        Outsourcing Payroll services to us guarantees your
                        employees always get paid on time and accurately. We
                        also keep you compliant with labor laws and tax
                        regulations. We handle all the details so you can focus
                        on running your business.
                      </p>
                    </Link>
                  </span>
                  <Link
                    to="/services/accounting-services/payroll"
                    className="short-button"
                  >
                    <LuArrowUpRight />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 first-box icon-box">
                  <span>
                    <img
                      src={beforeabouthead}
                      alt="beforeabouthead"
                      title="beforeabouthead"
                      loading="lazy"
                    ></img>
                    <Link to="/services/accounting-services/audit-assurance">
                      {" "}
                      <h1 className="main-head">Audit & Assurance</h1>
                      <p class="text-desc">
                        We will paint a clear and accurate picture of your
                        finances while ensuring compliance with applicable
                        regulations and standards. Our services include
                        independent reviews, audits, and a range of other
                        assurance engagements that build trust with stakeholders
                        and support decision-making.
                      </p>
                    </Link>
                  </span>
                  <Link
                    to="/services/accounting-services/audit-assurance"
                    className="short-button"
                  >
                    <LuArrowUpRight />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 first-box  icon-box">
                  <span>
                    <img
                      src={beforeabouthead}
                      alt="beforeabouthead"
                      title="beforeabouthead"
                      loading="lazy"
                    ></img>
                    <Link to="/services/accounting-services/crypto">
                      {" "}
                      <h1 className="main-head">Crypto</h1>
                      <p class="text-desc">
                        From crypto tac planning to financial reporting and
                        bookkeeping, we ensure all transactions are accurate and
                        compliant with the regulations. Our cryptocurrency
                        services help you navigate the complexities of digital
                        assets with confidence.
                      </p>
                    </Link>
                  </span>
                  <Link
                    to="/services/accounting-services/crypto"
                    className="short-button"
                  >
                    <LuArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* taxes preparation end */}
        {/* ---------------------------- */}
        {/* why choose us start */}
        <section
          id="why-choose-us"
          className="right-img-section mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12 left-text padding-md-0">
                <h3 className="sub-head">/ Why Choose Us</h3>
                <h2 className="main-head">General Business Support</h2>
                <p className="text-desc">
                  From administrative support to process optimization and
                  compliance management, we are happy to offer you the
                  foundational assistance that helps your business thrive. Allow
                  us to streamline operations and help you attain your goals
                  efficiently.
                </p>
                <ul className="check-list">
                  <li>
                    <IoCheckmarkSharp />
                    <span>Business Planning</span>
                    <p>
                      Strategic guidance to help you define goals, make smart
                      decisions, and build a roadmap for sustainable growth.
                    </p>
                  </li>
                  <li>
                    <IoCheckmarkSharp />
                    <span>Assistance with Bank Financing</span>
                    <p>
                      We help you prepare the right documents, strengthen your
                      proposal, and navigate the financing process to secure the
                      funding your business needs.
                    </p>
                  </li>
                  <li>
                    <IoCheckmarkSharp />
                    <span>Office Lease Negotiations</span>
                    <p>
                      We assist in reviewing terms, negotiating favorable
                      conditions, and securing lease agreements that align with
                      your business needs and budget.
                    </p>
                  </li>
                  <li>
                    <IoCheckmarkSharp />
                    <span>Business Insurance</span>
                    <p>
                      We guide you in selecting the right coverage to protect
                      your business from risk, ensuring peace of mind and
                      long-term security.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 img p-xs-0 padding-md-0">
                <img
                  src={WhyChooseUs}
                  alt="General Business Support"
                  title="General Business Support"
                  className="aboutusimg"
                  loading="lazy"
                ></img>
              </div>
            </div>
          </div>
        </section>
        {/* why choose us end */}
        {/* -------------------- */}
        {/* how it works start */}
        <section
          id="how-it-works"
          className="bgimg mobile-spacing tablet-spacing"
        >
          <div className="container-fluid padding-md-0">
            <div className="row">
              <div className="top-middle-head p-xs-0">
                <h3 className="sub-head">/ How It Works</h3>
                <h2 className="main-head">how chawla CPA firm works</h2>
              </div>
              <div className="row how-it-works-icons p-xs-0">
                <div className="col-lg-3 col-md-6 p-xs-0">
                  <div className="icon-box">
                    <div className="icon">
                      <img
                        src={ScheduleConsultation}
                        alt="Schedule a Consultation"
                        title="Schedule a Consultation"
                      ></img>
                    </div>
                    <h4>Schedule a Consultation</h4>
                    <p>
                      We value you and the relationship we build, not just the
                      transactions. That is why during our initial consultation,
                      we focus on helping you determine if we are a good fit for
                      your needs. We are an open book.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 p-xs-0">
                  <div className="icon-box">
                    <div className="icon">
                      <img
                        src={SubmitDocuments}
                        alt="Submit Your Documents"
                        title="Submit Your Documents"
                      ></img>
                    </div>
                    <h4>Submit Your Documents</h4>
                    <p>
                      When you hire us, you have the flexibility of bringing
                      your books in person or submitting them easily through our
                      secure portal. We guarantee complete confidentiality and
                      the highest level of professionalism.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 p-xs-0">
                  <div className="icon-box">
                    <div className="icon">
                      <img
                        src={ReviewsPreprations}
                        alt="Review and Recommendations"
                        title="Review and Recommendations"
                      ></img>
                    </div>
                    <h4>Review and Recommendations</h4>
                    <p>
                      Upon receiving your documents, we will guide you through
                      complex financial environments, helping you organize your
                      financial affairs while empowering you to achieve both
                      personal and business goals.
                    </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 p-xs-0">
                  <div className="icon-box">
                    <div className="icon">
                      <img
                        src={peaceOfMind}
                        alt="Peace of Mind"
                        title="Peace of Mind"
                      ></img>
                    </div>
                    <h4>Peace of Mind</h4>
                    <p>
                      Our team is highly experienced, qualified, and dedicated
                      to helping you save money. Our goal is to not only meet,
                      but exceed your expectations in all areas of tax,
                      accounting, advisory, and consulting services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* how it works end */}
        {/* ------------------------ */}
        {/* Testimonial start */}
        <Testimonial />
        {/* Testimonial end */}
        {/* ------------------------ */}
        {/* connect with us start */}
        <section
          id="connect-with-us"
          className="bgimg mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12 Connectwithusbgtext padding-md-0 p-xs-0">
                <h3 className="sub-head">/ Connect with us</h3>
                <h2 className="main-head">
                  Have an Accounting Question? Ask Us
                </h2>
                <p className="text-desc">
                  We are the <b>best CPA in Naperville</b> offering accounting,
                  audit, business advisory and tax services to clients across
                  several industries and in all 50 states. We are here to
                  position you for long-term growth. Connect with us today!
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
        {/* ------------------------- */}
        {/* ContactForm start */}
        <ContactForm />
        {/* ContactForm end */}
        {/* --------------------- */}
        {/* Map start */}
        <Map />
        {/* Map end */}
      </div>
    </>
  );
};

export default AccountingServices;
