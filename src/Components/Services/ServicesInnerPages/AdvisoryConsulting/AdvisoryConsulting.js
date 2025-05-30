import React from "react";
import { Helmet } from "react-helmet";
import "..//ServiceInnerPage.scss";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import Testimonial from "../../../CommonComp/Testimonial";
import Banner from "../../../CommonComp/Banner";
import ContactForm from "../../../CommonComp/ContactForm";
import Map from "../../../CommonComp/Map";
import { LuArrowUpRight } from "react-icons/lu";
import { IoCheckmarkSharp } from "react-icons/io5";
import TaxesInnerBanner from "../../../../Assests/Img/Advisory-Consulting-banner.webp";
import WhyChooseUs from "../../../../Assests/Img/advisory-consulting-choose-us.webp";
import headingbefore from "../../../../Assests/Img/before-heading.webp";
import beforeabouthead from "../../../../Assests/Img/boxesline.webp";
import ScheduleConsultation from "../../../../Assests/Img/Schedule a Consultation.webp";
import SubmitDocuments from "../../../../Assests/Img/Submit Your Documents.webp";
import ReviewsPreprations from "../../../../Assests/Img/Review & Preparation.webp";
import peaceOfMind from "../../../../Assests/Img/Peace of Mind.webp";

const AdvisoryConsulting = () => {
  return (
    <>
      <Helmet>
        <title>Naperville Business Advisory Services </title>
        <meta
          name="description"
          content="In financial advisory and consulting, we leverage our decades of experience in accounting, finance and management to offer valuable guidance when it matters most."
        />
      </Helmet>
      <div className="fraunces service-inner AdvisoryConsulting" id="taxes">
        {/* about-banner start */}
        <Banner
          bannerImage={TaxesInnerBanner}
          title="Expert Advisory for Smarter Business Decisions"
          description="Nobody knows your business better than you, but in the Chawla & Associates business advisory division, we understand that you could use someone to maximize your full financial potential. With our business advisory services, we want you to think of us as a trusted contact that handles all your complex financial products, research, mergers, acquisitions and more."
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
                  <h3 className="sub-head">/ Insight</h3>
                  <h2 className="main-head">Advisory & Consulting Services</h2>
                </span>
              </div>
              <div className="col-lg-7 col-md-12 Professionals-text-desc p-xs-0 padding-md-0">
                <p className="text-desc">
                  Our decades of experience across industries enable us to serve
                  you with tailored solutions. We focus on a structured,
                  business-driven approach that integrates proven practices and
                  best practices to deliver results that are both practical and
                  tangible.
                </p>
              </div>
            </div>
            <div className="container-fluid">
              <div className="row taxation-inner">
                <div className="col-lg-4 col-md-6 first-box  icon-box">
                  <span>
                    <img
                      src={beforeabouthead}
                      alt="beforeabouthead"
                      title="beforeabouthead"
                      loading="lazy"
                    ></img>
                    <Link to="/services/advisory-consulting/business-advisory">
                      <h1 className="main-head">Business Advisory</h1>
                      <p class="text-desc">
                        Our team of experienced professionals specializes in
                        offering advisory services tailored to the unique needs
                        of small businesses. Our objective is to help businesses
                        chart a course for long-term success. We work with you
                        to identify gaps, opportunities and action plans to
                        achieve your goals.
                      </p>
                    </Link>
                  </span>
                  <Link
                    to="/services/advisory-consulting/business-advisory"
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
                    <Link to="/services/advisory-consulting/CFO">
                      {" "}
                      <h1 className="main-head">CFO</h1>
                      <p class="text-desc">
                        Our fractional chief financial officer gives you the
                        knowledge and expertise of a full-time CFO. The added
                        benefit is the flexibility of accessing the services you
                        need only when you need it. Our CFOs add value to your
                        organization by offering advice on significant financial
                        and strategic business decisions.
                      </p>
                    </Link>
                  </span>
                  <Link
                    to="/services/advisory-consulting/CFO"
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
                    <Link to="/services/advisory-consulting/controllership-services">
                      {" "}
                      <h1 className="main-head">Controllership Services</h1>
                      <p class="text-desc">
                        We offer controllership services that will keep your
                        books up-to-date and provide timely financial
                        information for management. We will assign you a
                        dedicated part-time personal accountant to deliver
                        meaningful financial statements that support your CFO.
                      </p>
                    </Link>
                  </span>
                  <Link
                    to="/services/advisory-consulting/controllership-services"
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
                    <Link to="/services/advisory-consulting/succession-planning">
                      <h1 className="main-head">Succession Planning</h1>
                      <p class="text-desc">
                        Our succession planning process helps your organization
                        establish a clear path to continuity. We help you
                        identify key job skills, relationships, knowledge and
                        practices so that you get the right people in the right
                        roles to keep your business growing.
                      </p>
                    </Link>
                  </span>
                  <Link
                    to="/services/advisory-consulting/succession-planning"
                    className="short-button"
                  >
                    <LuArrowUpRight />
                  </Link>
                </div>
                <div className="col-lg-4 col-md-6 first-box icon-box remove-icon-box-spacing">
                  <span>
                    <img
                      src={beforeabouthead}
                      alt="beforeabouthead"
                      title="beforeabouthead"
                      loading="lazy"
                    ></img>
                    <Link to="/services/advisory-consulting/tax-financial-planning">
                      {" "}
                      <h1 className="main-head">Tax & Financial Planning</h1>
                      <p class="text-desc">
                        We offer the right guidance and strategies to help you
                        understand the tax implications of your financial
                        choices as well as those that come into play when making
                        major business and life decisions. We expand your
                        knowledge and expertise in tax and financial planning.
                      </p>
                    </Link>
                  </span>
                  <Link
                    to="/services/advisory-consulting/tax-financial-planning"
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
                    <Link to="/services/advisory-consulting/M&A-strategy">
                      {" "}
                      <h1 className="main-head">M&A Strategy</h1>
                      <p class="text-desc">
                        With experience and a deep knowledge of the M&A process,
                        our experts will assist you both on the sell-side and
                        buy-side transactions. We take the time to understand
                        your objectives so as to offer M&A strategies that match
                        your priorities.
                      </p>
                    </Link>
                  </span>
                  <Link
                    to="/services/advisory-consulting/M&A-strategy"
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
          className="mobile-spacing tablet-spacing right-img-section"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 left-text">
                <h3 className="sub-head">/ Why Choose Us</h3>
                <h2 className="main-head">The Chawla & Associates Advantage</h2>
                <p className="text-desc">
                  At Chawla & Associates, we leverage our experience in finance,
                  accounting and management to give your business valuable
                  guidance when it matters most. Our consulting solutions will
                  be tailored to you. We offer advisory and accounting services
                  for any stage of your business’ life cycle.
                </p>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12 all-check-list p-xs-0">
                <ul className="check-list">
                  <li>
                    <IoCheckmarkSharp />
                    <span>4,000+ Clients Served</span>
                    <p>
                      We have a proven track record of delivering results and
                      solutions for our clients. Our firm has served more than
                      1,000 businesses and 3,000+ individuals.
                    </p>
                  </li>
                  <li>
                    <IoCheckmarkSharp />
                    <span>National Reachs</span>
                    <p>
                      While our firm is headquartered in Naperville, Il, we
                      provide our services to all 50 states. We are here to grow
                      with you whether you are a startup or a business expanding
                      to cover continental USA.
                    </p>
                  </li>
                  <li>
                    <IoCheckmarkSharp />
                    <span>Decades of Experience</span>
                    <p>
                      While Chawla & Associates was incorporated in 1997, our
                      team has been offering accounting and consulting services
                      to both individuals and business for many years prior.
                    </p>
                  </li>
                  <li>
                    <IoCheckmarkSharp />
                    <span>Comprehensive Services</span>
                    <p>
                      From the technical tax planning details to the big-picture
                      strategy, our team does it all. We offer comprehensive
                      business advisory and consulting services and accounting
                      solutions that are rooted in experience and tailored to
                      exceed your expectations.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 img p-xs-0">
                <img
                  src={WhyChooseUs}
                  alt="The Chawla & Associates Advantage"
                  title="The Chawla & Associates Advantage"
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
          <div className="container-fluid">
            <div className="row">
              <div className="top-middle-head">
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
              <div className="col-lg-6 col-md-12 Connectwithusbgtext p-xs-0 padding-md-0">
                <h3 className="sub-head">/ Connect with us</h3>
                <h2 className="main-head">
                  Have Financial Advisory and Consulting Questions? Ask Us
                </h2>
                <p className="text-desc">
                  Our business advisory services have been refined over the
                  years to help you achieve your goals and meet all your
                  compliance needs.
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

export default AdvisoryConsulting;
