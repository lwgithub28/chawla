import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./About.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { aboutInfoData, aboutcoreValuesData } from "../../Components/Data";
import { MdArrowOutward } from "react-icons/md";
import ContactForm from "../CommonComp/ContactForm";
import Map from "../CommonComp/Map";
import TestimonialAbout from "../CommonComp/TestimonialAbout";
import Banner from "../CommonComp/Banner";
import SatisfiedClients from "../../Assests/Img/SatisfiedClients.webp";
import YearOfExperience from "../../Assests/Img/YearsofExperience.webp";
import line from "../../Assests/Img/line.webp";
import StatesTerritories from "../../Assests/Img/StatesTerritories.webp";
import SuccessfulProjects from "../../Assests/Img/SuccessfulProjects.webp";
import RogerChawla from "../../Assests/Img/RogerChawla.webp";
import Anil from "../../Assests/Img/Anil.webp";
import Emma from "../../Assests/Img/Emma.webp";
import Greg from "../../Assests/Img/Greg.webp";
import Henna from "../../Assests/Img/Hanna.webp";
import JenniferJung from "../../Assests/Img/Jennifer Jung.webp";
import Melody from "../../Assests/Img/Melody.webp";
import Pankaj from "../../Assests/Img/Pankaj.webp";
import aboutbanner from "../../Assests/Img/About-Team.webp";
const About = () => {
  const timelineData = [
    {
      year: "Started in 1997",
      title: "Started in 1997: Incorporation",
      description:
        "Chawla & Associates was founded with a vision to provide trusted, high-quality CPA services in Naperville, IL. We have lived up to that promise.",
    },
    {
      year: "2000",
      title: "2000: A Milestone of Trust",
      description:
        "By the turn of the millennium, Chawla & Associates reached a significant milestone—100 clients served.",
    },
    {
      year: "2007",
      title: "2007: Strength in Numbers",
      description:
        "Our reputation as a leading CPA firm in Naperville, IL continued to grow, marking another milestone with 250+ clients.",
    },
    {
      year: "2014",
      title: "2014: Recognition for Business Excellence",
      description:
        "Chawla & Associates was honored as Small Business of the Year by the Quad County African American Chamber of Commerce.",
    },
    {
      year: "2015-2018",
      title: "2015-2018: Strengthening Community Ties",
      description:
        "Recognizing the importance of collaboration and growth, we became an active member of the Naperville, Oswego, and Bolingbrook Chambers of Commerce.",
    },
    {
      year: "2020",
      title: "2020: A Champion of Change",
      description:
        "Chawla & Associates was recognized as a Champion of Change by the Ajilla Foundation, honoring our commitment to financial education, empowerment, and ethical business practices.",
    },
    {
      year: "2021",
      title: "2021: Giving Back to the Community",
      description:
        "Our dedication to social responsibility was acknowledged with the Volunteer of the Year Award from Goldstar Gardens.",
    },
    {
      year: "2024-2025",
      title: "2024-2025: A Workplace Built on Integrity & Trust",
      description:
        "In a moment of great pride, Chawla & Associates was named Employer of the Year by the United Nations World Day Against Trafficking of Persons.",
    },
  ];
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <Helmet>
        <title> Expert CPA Services for Small Businesses</title>
        <meta
          name="description"
          content="As a top-rated tax accountant in Naperville, we help individuals and businesses minimize tax liabilities while maximizing their savings. We tailor our services to you."
        />
      </Helmet>
      <div className="fraunces" id="about-page">
        {/* about-banner start */}
        <Banner
          bannerImage={aboutbanner}
          title="Rooted in Trust and Excellence—Your Go-To Tax Accountant in Naperville, IL"
          description={
            <>
              Chawla & Associates offers expert CPA services for small
              businesses and individuals, providing custom strategies that
              maximize returns and minimize liabilities. Trust our expertise and
              precision to handle your taxes.
            </>
          }
          buttonText="Hire Your CPA"
        />
        {/* about-banner end */}
        {/* --------------------- */}
        {/* about-info start */}
        <section id="about-info" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            {aboutInfoData.map((item, index) => (
              <div
                className={`row about-info-box ${
                  index > 0 ? "top-spacing" : ""
                }`}
                key={index}
              >
                <div className="col-md-12 col-lg-5 remove-spacing">
                  <h2>{item.title}</h2>
                </div>
                <div className="col-md-12 col-lg-7 remove-spacing">
                  <p className="text-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* about-info end */}
        {/* ---------------- */}
        {/* our-story start */}
        <section id="our-story" className="bgimg mobile-spacing tablet-spacing">
          <div class="container-fluid p-xs-0 padding-md-0">
            <span className="our-story-interst-line">
<<<<<<< HEAD
              <h2>Our Foundation</h2>
              <p>
                At Chawla & Associates, we believe that core values are the
                cornerstone of both lasting success and the enduring
                relationships our CPA in Naperville, IL cultivates with clients.
                We are passionate about providing excellent accounting, and tax
=======
              <h2>Our Journey</h2>
              <h4>Setting New Milestones Since 1997</h4>
              <p>
                At Chawla & Associates, we believe that core values are the
                cornerstone of both lasting success and enduring relationships.
                We are passionate about providing excellent accounting and tax
>>>>>>> 2bf065d (content added)
                advisory services. The value we place on trust is immeasurable,
                and we strive to earn it through our unwavering commitment to
                quality and the development of enduring partnerships.
              </p>
            </span>
            <div className="timeline-container">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                slidesPerView={3}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5500, // 3 seconds
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  0: { slidesPerView: 1 },
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                }}
              >
                {timelineData.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="year">{item.year}</div>
                    <div className="circle-outer">
                      <div className="circle"></div>
                    </div>
                    <div className="slide-title">{item.title}</div>
                    <div className="slide-description">{item.description}</div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        {/* our-story end */}
        {/* --------------- */}
        {/* core-values start */}
        <section
          id="core-values"
          className="bgimg mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-lg-4 Professionals-text">
                <span className="text">
                  <h3 className="sub-head">/ Core Values</h3>
                  <h2 className="main-head"> Our Foundation </h2>
                </span>
              </div>
              <div className="col-md-12 col-lg-8 Professionals-text-desc remove-spacing">
                <p className="text-desc">
                  At Chawla & Associates, we think that values make up the very
                  foundation of success and the continuation of an endless
                  relationship with clients. We are passionate about rendering
                  excellent accounting, tax planning, and advisory services. The
                  value placed on trust is immeasurable, and we intend to earn
                  it by an unwavering focus on quality and the development of
                  enduring partnerships.
                </p>
              </div>
            </div>
            <div className="row core-values-inner">
              {aboutcoreValuesData.map((value, index) => (
                <div
                  className={`col-md-4 p-xs-0 ${value.className}`}
                  key={index}
                >
                  <img
                    src={value.imgSrc}
                    alt={value.alt}
                    title={value.alt}
                    loading="lazy"
                  />
                  <div className="core-values-box-text remove-spacing">
                    <h4>{value.subtitle}</h4>
                    <h2>{value.title}</h2>
                    <p className="text-desc">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* core-values end */}
        {/* -------------- */}
        <section
          id="satisfied-client"
          className="mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-6 p-xs-0 padding-md-0">
                <div className="first-box experience-box">
                  <span className="left-img">
                    <img
                      src={SatisfiedClients}
                      alt="IRS Issue Resolution Success Rate"
                      title="IRS Issue Resolution Success Rate"
                      loading="lazy"
                    ></img>
                    <p className="experience-heading">
                      IRS Issue Resolution Success Rate
                    </p>
                    <p className="number">98%</p>
                  </span>
                  <span className="right-text">
                    <p>
                      Get fast and effective <b>IRS notice solutions</b> with
                      our proven expertise in tax resolution.
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-md-2 line-outer">
                <img
                  src={line}
                  alt="line"
                  title="line"
                  className="line"
                  loading="lazy"
                ></img>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-6 p-xs-0 padding-md-0">
                <div className="first-box experience-box">
                  <span className="left-img">
                    <img
                      src={YearOfExperience}
                      alt="Tax Savings for Our Clients"
                      title="Tax Savings for Our Clients"
                      loading="lazy"
                    ></img>
                    <p className="experience-heading">
                      Tax Savings for Our Clients
                    </p>
                    <p className="number">$100M+</p>
                  </span>
                  <span className="right-text">
                    <p>
                      As a <b>top-rated CPA firm in Naperville, IL</b>, we help
                      businesses and individuals minimize tax liabilities while
                      maximizing savings.
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <div className="row top-spacing">
              <div className="col-lg-5 col-md-12 col-sm-6 p-xs-0 padding-md-0">
                <div className="first-box experience-box">
                  <span className="left-img">
                    <img
                      src={StatesTerritories}
                      alt="Client Retention & Satisfaction Rate"
                      title="Client Retention & Satisfaction Rate"
                      loading="lazy"
                    ></img>
                    <p className="experience-heading">
                      Client Retention & Satisfaction Rate
                    </p>
                    <p className="number">99%</p>
                  </span>
                  <span className="right-text">
                    <p>
                      Our <b>accounting firm in Naperville</b> delivers
                      personalized tax and financial solutions with unmatched
                      client satisfaction.
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-md-2 line-outer">
                <img
                  src={line}
                  alt="line"
                  title="line"
                  className="line"
                  loading="lazy"
                ></img>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-6 p-xs-0 padding-md-0">
                <div className="first-box experience-box">
                  <span className="left-img">
                    <img
                      src={SuccessfulProjects}
                      alt="Businesses Rely on Us for Advisory Services"
                      title="Businesses Rely on Us for Advisory Services"
                      loading="lazy"
                    ></img>
                    <p className="experience-heading">
                      Businesses Rely on Us for Advisory Services
                    </p>
                    <p className="number">200+</p>
                  </span>
                  <span className="right-text">
                    <p>
                      Our <b>CPA firm</b> helps businesses make smarter
                      financial decisions for sustained growth.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* ---------------- */}
        {/* members start */}
        <section id="members" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <div className="whyus-text">
                <h3 className="sub-head">/ Our Team</h3>
                <h2 className="main-head">Meet the Visionaries</h2>
              </div>
              <div class="row all-memebers p-xs-0 padding-md-0 top-spacing">
                <div className="col-md-5 col-lg-3">
                  <img
                    src={RogerChawla}
                    alt="RogerChawla"
                    title="RogerChawla"
                    loading="lazy"
                  ></img>
                </div>
                <div className="col-md-12 col-lg-9 all-memebers-details">
                  <h2 class="main-head">Roger Chawla</h2>
                  <h4>CPA & Founder</h4>
                  <p class="text-desc">
                    Roger is the heart and soul of Chawla & Associates. He is
                    passionate about success for each of his clients and has the
                    vigor to work toward it in every hand's length within the
                    firm. Also, as an Illinois bred and a part of his community,
                    Roger spends most of his time on tax preparation and
                    business advising for clients in the local boards. With a
                    passion for accessible advisory services, he is committed to
                    making CFO and financial consulting solutions more
                    affordable for growing businesses. As a person, he is a
                    devoted husband, father, and community leader and balances
                    his professional rigor with a love for nature.
                  </p>
                </div>
              </div>
              <div class="row all-memebers p-xs-0 padding-md-0 top-spacing">
                <div className="col-md-5 col-lg-3 p-xs-0 ">
                  <img
                    src={Anil}
                    alt="Anil Jha"
                    title="Anil Jha"
                    loading="lazy"
                  ></img>
                </div>
                <div className="col-md-12 col-lg-9 p-xs-0 all-memebers-details">
                  <h2 class="main-head">Anil</h2>
                  <h4>Technology Leader</h4>
                  <p class="text-desc">
                    Anil has great experience as a technology leader in staff
                    development and complex program management. He has worked in
                    various industries like telecom, software, and public
                    safety. He used to lead analytics, IT, operations, and R&D
                    teams. Anil's forte is in building performance-oriented
                    teams and maintaining good relations with clients. Having
                    such expertise, he is a great consultant with the best bits
                    of advice possible for his clients.
                  </p>
                </div>
                <div className="col-md-3"></div>
              </div>
              <div class="row all-memebers p-xs-0 padding-md-0 top-spacing">
                <div className="col-md-5 col-lg-3 p-xs-0">
                  <img src={Emma} alt="Emma" title="Emma" loading="lazy"></img>
                </div>
                <div className="col-md-12 col-lg-9 p-xs-0 all-memebers-details">
                  <h2 class="main-head">Emma</h2>
                  <h4>Chartered Accountant (ACA)</h4>
                  <p class="text-desc">
                    Emma, a Chartered Accountant (ACA) from Ireland, brings a
                    wealth of expertise in accounting, finance, and audit to
                    Chawla & Associates. With experience in both investment
                    finance and audit practices in Dublin, she offers a
                    well-rounded perspective on financial strategy and
                    compliance. Since joining in 2024, Emma has been dedicated
                    to helping businesses get through complex financial spaces
                    with precision.
                  </p>
                </div>
              </div>
              <div class="row all-memebers top-spacing p-xs-0 padding-md-0">
                <div className="col-md-5 col-lg-3 p-xs-0">
                  <img src={Greg} alt="Greg" title="Greg" loading="lazy"></img>
                </div>
                <div className="col-md-12 col-lg-9 p-xs-0 all-memebers-details">
                  <h2 class="main-head">Greg</h2>
                  <h4>CPA</h4>
                  <p class="text-desc">
                    Greg carries with him audit and accounting experience from
                    PriceWaterhouseCoopers and international financial
                    reporting. His additional expertise in cost-reduction
                    techniques and supplier negotiation makes him an asset. He
                    holds a bachelor's degree in accounting from the University
                    of Cincinnati. Outside of work, he enjoys traveling with his
                    family to warmer destinations, Aruba being their favorite
                    getaway.
                  </p>
                </div>
              </div>
              <div class="row all-memebers top-spacing p-xs-0 padding-md-0">
                <div className="col-md-5 col-lg-3 p-xs-0">
                  <img
                    src={Henna}
                    alt="Hannah"
                    title="Hannah"
                    loading="lazy"
                  ></img>
                </div>
                <div className="col-md-12 col-lg-9 p-xs-0 all-memebers-details">
                  <h2 class="main-head">Hannah</h2>
                  <h4>Administration and Tax</h4>
                  <p class="text-desc">
                    At Chawla & Associates, Hanna is mostly involved in
                    administration, tax preparation, and automation projects.
                    She is a graduate from the University of Illinois at Chicago
                    and is currently on the road to earning her Enrolled Agent
                    (EA) status. Additionally, Hanna is involved in her family's
                    local honey business. Apart from this, for her love of
                    adventure, she enjoys traveling, volunteering, and hiking in
                    her spare time.
                  </p>
                </div>
              </div>
              <div class="row all-memebers top-spacing p-xs-0 padding-md-0">
                <div className="col-md-5 col-lg-3 p-xs-0">
                  <img
                    src={JenniferJung}
                    alt="JenniferJung"
                    title="JenniferJung"
                    loading="lazy"
                  ></img>
                </div>
                <div className="col-md-12 col-lg-9 p-xs-0 all-memebers-details">
                  <h2 class="main-head">Jennifer</h2>
                  <h4>Office Manager</h4>
                  <p class="text-desc">
                    Jennifer Jung brings nearly a decade of experience in the
                    financial sector, along with a deep passion for helping
                    others succeed. With a background in licensing, contracting,
                    and financial services, she ensures seamless operations
                    while fostering a client-focused approach. A Chicagoland
                    native, she balances her professional expertise with a love
                    for family, travel, and lifelong learning, always striving
                    to make a positive impact.
                  </p>
                </div>
              </div>
              <div class="row all-memebers top-spacing p-xs-0 padding-md-0">
                <div className="col-md-5 col-lg-3 p-xs-0">
                  <img
                    src={Melody}
                    alt="Melody"
                    title="Melody"
                    loading="lazy"
                  ></img>
                </div>
                <div className="col-md-12 col-lg-9 p-xs-0 all-memebers-details">
                  <h2 class="main-head">Melody</h2>
                  <h4>Accountant and Tax Preparer</h4>
                  <p class="text-desc">
                    Melody holds over six years of experience in accounting and
                    financial management. With an MBA in Accounting, she
                    specializes in tax preparation, financial reporting,
                    budgeting, and forecasting. Dedicated to helping her clients
                    in tax and financial matters, she is passionate about
                    delivering personalized solutions. Outside of work, she
                    enjoys family time, outdoor adventures, and community
                    involvement.
                  </p>
                </div>
              </div>
              <div class="row all-memebers top-spacing p-xs-0 padding-md-0">
                <div className="col-md-5 col-lg-3 p-xs-0">
                  <img
                    src={Pankaj}
                    alt="Pankaj"
                    title="Pankaj"
                    loading="lazy"
                  ></img>
                </div>
                <div className="col-md-12 col-lg-9 p-xs-0 all-memebers-details">
                  <h2 class="main-head">Pankaj</h2>
                  <h4>Accounting and Finance Professional</h4>
                  <p class="text-desc">
                    Pankaj Vagadia, a seasoned accounting and finance
                    professional with over 40 years of experience, has worked
                    across accounting firms, financial institutions, and the
                    hospitality industry. His expertise spans payroll
                    management, financial reporting, bank reconciliations, and
                    profitability analysis, ensuring businesses maintain
                    financial accuracy and efficiency. Apart from work, he
                    enjoys yoga and long walks, embracing a balanced lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* members end */}
        {/* ----------------- */}
        {/* Testimonial start */}
        <TestimonialAbout />
        {/* Testimonial end */}
        {/* --------------------- */}
        {/* connect with us start */}
        <section
          id="connect-with-us"
          className="bgimg mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12 Connectwithusbgtext p-xs-0 padding-md-0">
                <h3 className="sub-head">/ Connect Now</h3>
                <h2 className="main-head">
                  Grab the Tax Solutions Tailored for You!{" "}
                </h2>
                <p className="text-desc">
                  Want to Discuss Your Concerns? Connect with an expert.
                </p>
                <Link to="tel:(630) 922-8600" className="bg-remove-btn-svg">
                  Call Now
                  <span>
                    <MdArrowOutward />
                  </span>
                </Link>
              </div>
              {/* <div className="col-md-6 Connectwithusbgimg">
                <img
                  src={Connectwithusbgimg}
                  alt="Connectwithusbgimg"
                  title="Connectwithusbgimg"
                ></img>
              </div> */}
            </div>
          </div>
        </section>
        {/* connect with us end */}
        {/* ------------------- */}
        {/* get in touch start */}
        <ContactForm />
        {/* get in touch end */}
        {/* ------------------- */}
        {/* Map start */}
        <Map />
        {/* Map end */}
      </div>
    </>
  );
};

export default About;
