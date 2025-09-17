import React from "react";
import "./Home.scss";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Helmet } from "react-helmet";
import {
  sectorsData,
  teamData,
  professionalsData,
  coreValuesData,
} from "../../Components/Data";
import ContactForm from "../CommonComp/ContactForm";
import Map from "../CommonComp/Map";
// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css/effect-fade"; // Import fade styles
import { LuArrowUpRight } from "react-icons/lu";
import { IoCheckmarkSharp } from "react-icons/io5";
import { MdArrowOutward } from "react-icons/md";
import SatisfiedClients from "../../Assests/Img/SatisfiedClients.webp";
import YearOfExperience from "../../Assests/Img/YearsofExperience.webp";
import line from "../../Assests/Img/line.webp";
import StatesTerritories from "../../Assests/Img/StatesTerritories.webp";
import SuccessfulProjects from "../../Assests/Img/SuccessfulProjects.webp";
import boxesline from "../../Assests/Img/boxesline.webp";
import aboutUs from "../../Assests/Img/aboutus.webp";
import communityImg1 from "../../Assests/Img/Quad-County-African-American-Chamber-of-Commerce.webp";
import communityImg2 from "../../Assests/Img/Punjab Agricultural Rejuvenation Initiative.webp";
import communityImg3 from "../../Assests/Img/Tylerman-Film-festival.webp";
import homeless from "../../Assests/Img/homeless.webp";
import collective from "../../Assests/Img/collective.webp";
import Enviroment from "../../Assests/Img/Enviroment.webp";
import allteam from "../../Assests/Img/all-team.png";
// import Connectwithusbgimg from "../../Assests/Img/Connectwithusbgimg.webp";
import firsthomebanner from "../../Assests/Img/first-home-banner.webp";
import secondhomebanner from "../../Assests/Img/second-home-banner.webp";
import thirdbannerhome from "../../Assests/Img/third-banner.webp";
// Import logos
import Logo1 from "../../Assests/Img/QuickBooks.webp";
import Logo2 from "../../Assests/Img/ShareFile-logo.webp";
import Logo3 from "../../Assests/Img/safesend-logo.webp";
import Logo4 from "../../Assests/Img/SurePrep-Logo.webp";
import Logo5 from "../../Assests/Img/thomsonreuters-logo.webp";

const logos = [
  { src: Logo1, className: "logo-style-1", alt: "QuickBooks" },
  { src: Logo2, className: "logo-style-2", alt: "ShareFile" },
  { src: Logo3, className: "logo-style-3", alt: "safesend" },
  { src: Logo4, className: "logo-style-4", alt: "SurePrep" },
  { src: Logo5, className: "logo-style-5", alt: "thomsonreuters" },
  { src: Logo3, className: "logo-style-3", alt: "safesend" },
];
const Home = () => {
  return (
    <>
      <Helmet>
        <title> Trusted CPA Firm in Naperville</title>
        <meta
          name="description"
          content="Chawla & Associates is the best CPA in Naperville offering tailored tax preparation, accounting and strategic consulting services to individuals and businesses."
        />
      </Helmet>
      <div className="fraunces" id="home">
        {/* homebanner start */}
        <section id="homebanner" className="mobile-spacing tablet-spacing">
          <Swiper
            spaceBetween={30}
            loop={true}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={1000} // Controls smoothness duration in ms
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, EffectFade]}
            className="mySwiper"
          >
            {/* Slide 1 */}
            <SwiperSlide>
              <div className="container-fluid banner">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xs-6 right-text p-xs-0 padding-md-0">
                    <h1>
                      Maximize Profits & Minimize Taxes with Expert CPA in
                      Naperville, IL
                    </h1>
                    <p>We Don’t Just Balance Books—We Build Trust!</p>
                    <Link
                      className="bg-remove-btn-svg"
                      to="/contact"
                      data-discover="true"
                    >
                      Connect with your CPA{" "}
                      <span>
                        <MdArrowOutward />
                      </span>
                    </Link>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xs-6 slider-img p-xs-0 padding-md-0">
                    <div className="slider-img-img">
                      <img
                        src={firsthomebanner}
                        alt="Maximize Profits & Minimize Taxes with Expert CPA in Naperville, IL"
                        title="Maximize Profits & Minimize Taxes with Expert CPA in Naperville, IL"
                        loading="lazy"
                        className="homebanner1"
                      />
                    </div>
                    <div className="team-section">
                      <img src={allteam} alt="allteam" title="allteam" />
                      <h2>10,000+</h2>
                      <p>tax returns processed</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
              <div className="container-fluid banner">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xs-6 right-text p-xs-0 padding-md-0">
                    <h1>
                      Stress-Free Tax & Accounting Solutions—Backed by Expertise
                    </h1>
                    <p>
                      From IRS Notices to Tax Planning, We’ve Got You Covered!
                    </p>
                    <Link
                      className="bg-remove-btn-svg"
                      to="/contact"
                      data-discover="true"
                    >
                      Talk to a CPA Today!
                      <span>
                        <MdArrowOutward />
                      </span>
                    </Link>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xs-6 slider-img p-xs-0 padding-md-0">
                    <div className="slider-img-img">
                      <img
                        src={secondhomebanner}
                        alt="Stress-Free Tax & Accounting Solutions—Backed by Expertise"
                        title="Stress-Free Tax & Accounting Solutions—Backed by Expertise"
                        loading="lazy"
                        className="homebanner1"
                      />
                    </div>
                    <div className="team-section">
                      <img src={allteam} alt="allteam" title="allteam" />
                      <h2>4,000+</h2>
                      <p> clients serviced</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
              <div className="container-fluid banner">
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xs-6 right-text p-xs-0 padding-md-0">
                    <h1>
                      Make Every Dollar Count With Expert Tax Advisory &
                      Consulting
                    </h1>
                    <p>We Help You Make Smarter Financial Decisions!</p>
                    <Link
                      className="bg-remove-btn-svg"
                      to="/contact"
                      data-discover="true"
                    >
                      Talk to Your CPA !
                      <span>
                        <MdArrowOutward />
                      </span>
                    </Link>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-6 col-xs-6 slider-img p-xs-0 padding-md-0">
                    <div className="slider-img-img">
                      <img
                        src={thirdbannerhome}
                        alt="Make Every Dollar Count With Expert Tax Advisory & Consulting"
                        title="Make Every Dollar Count With Expert Tax Advisory & Consulting"
                        loading="lazy"
                        className="homebanner1"
                      />
                    </div>
                    <div className="team-section">
                      <img src={allteam} alt="allteam" title="allteam" />
                      <h2>50</h2>
                      <p> Service to all states</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
        {/* homebanner end */}
        {/* logo slider start */}
        <section id="logo-slider" className="mobile-spacing tablet-spacing">
          <div className="container-fluid p-xs-0 padding-md-0">
            <p className="trusted">
              Powered by Industry-Leading Solutions for Maximum Accuracy and
              Efficiency
            </p>
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              loop={true}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              modules={[Autoplay]}
              breakpoints={{
                320: { slidesPerView: 2 },
                768: { slidesPerView: 4 },
                1024: { slidesPerView: 5 },
              }}
            >
              {logos.map((logo, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`w-full  ${logo.className}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {/* logo slider end */}
        {/* ------------------ */}
        {/* satisfied-client start */}
        <section
          id="satisfied-client"
          className="mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-md-12 col-sm-6 p-xs-0">
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
                      Get fast and effective <b>IRS notice solutions </b> with
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
              <div className="col-lg-5 col-md-12 col-sm-6 p-xs-0">
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
              <div className="col-lg-5 col-md-12 col-sm-6 p-xs-0">
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
              <div className="col-lg-5 col-md-12 col-sm-6 p-xs-0">
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
                      Our <b>CPA firm </b> helps businesses make smarter
                      financial decisions for sustained growth.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* satisfied-client end */}
        {/* ------------------ */}
        {/* Professionals start */}
        <section
          id="Professionals"
          className="bgimg mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-md-12 Professionals-text">
                <span className="text">
                  <h3 className="sub-head">/ Our Services</h3>
                  <h2 className="main-head">
                    Your One-Stop CPA Firm in Naperville, IL
                  </h2>
                </span>
              </div>
              <div className="col-lg-7 col-md-12 Professionals-text-desc">
                <p className="text-desc">
                  Chawla & Associates renders comprehensive financial services
                  tailored to individuals and their businesses. As a{" "}
                  <b>top-rated CPA firm in Naperville, IL</b>, we specialize in
                  tax preparation, accounting, and strategic tax advisory to
                  help you stay compliant, maximize savings, and expand with
                  supreme assurance.
                </p>
              </div>
            </div>
            <div className="row Professionals-boxes">
              {professionalsData.map((box, index) => (
                <div
                  key={index}
                  className={`col-sm-4 col-md-4 col-lg-4 Professionals-box ${
                    index === 0
                      ? "Professionals-first-box"
                      : index === 1
                      ? "Professionals-second-box"
                      : "Professionals-third-box"
                  }`}
                >
                  <div className="image-box">
                    <Link to={box.link}>
                      <img
                        src={box.imgSrc}
                        title={box.title}
                        alt={box.title}
                        loading="lazy"
                      />
                      <img
                        src={boxesline}
                        alt="boxesline"
                        title="boxesline"
                        className="boxesline"
                        loading="lazy"
                      />
                    </Link>
                    <Link
                      to={box.link}
                      className="Professionals-boxes-link professional-link short-button"
                    >
                      <LuArrowUpRight />
                    </Link>
                    <Link to={box.link}>
                      {" "}
                      <h3>{box.title}</h3>
                    </Link>
                    <p>{box.description}</p>
                    {/* <p dangerouslySetInnerHTML={{ __html: box.description }}></p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Professionals end */}
        {/* ------------------ */}
        {/* about-us start */}
        <section
          id="about-us"
          className="mobile-spacing tablet-spacing right-img-section"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12 left-text p-xs-0 padding-md-0">
                <h3 className="sub-head">/ About Us</h3>
                <h2 className="main-head">
                  Chawla & Associates– A Legacy of Trust and Expertise
                </h2>
                <p className="text-desc">
                  For more than 25 years, we have been one of the top-rated CPA
                  firms in Naperville and surrounding suburbs, offering both
                  individuals and businesses professional tax advisory. With
                  proactive advice and solutions, we take pride in partnering
                  with growth-oriented clients. We aim to positively influence
                  your financial journey by adhering to our core principles of
                  ethics, inclusivity, and meaningful partnerships.
                </p>
                <ul className="check-list">
                  <li>
                    <IoCheckmarkSharp />
                    <span>Client-First Approach</span>
                  </li>
                  <li>
                    <IoCheckmarkSharp />
                    <span>Quality That Speaks for Itself</span>
                  </li>
                  <li>
                    <IoCheckmarkSharp />
                    <span>Personalized & Proactive Service</span>
                  </li>
                  <li>
                    <IoCheckmarkSharp />
                    <span>Transparent & Competitive Pricing</span>
                  </li>
                </ul>
                <Link to="/about" className="bg-remove-btn">
                  Read More <MdArrowOutward />
                </Link>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 img p-xs-0 padding-md-0">
                <img
                  src={aboutUs}
                  alt="Chawla & Associates– A Legacy of Trust and Expertise"
                  title="Chawla & Associates– A Legacy of Trust and Expertise"
                  className="aboutusimg"
                  loading="lazy"
                ></img>
              </div>
            </div>
          </div>
        </section>
        {/* about-us end */}
        {/* ------------------------ */}
        {/* sectors start */}
        <section id="sectors" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <h3 className="sub-head p-xs-0 padding-md-0">/ Sectors</h3>
              <h2 className="main-head p-xs-0 padding-md-0">
                Your Industry’s All-in-One Financial Partner
              </h2>
              <div className="row sectors-box">
                {sectorsData.map((sector) => (
                  <div
                    key={sector.id}
                    className="col-lg-3 col-md-6 col-sm-6 icon-box"
                  >
                    <img
                      src={sector.imgSrc}
                      alt={sector.title}
                      title={sector.title}
                      loading="lazy"
                    />
                    <h3>{sector.title}</h3>
                    <p>{sector.description}</p>
                  </div>
                ))}
              </div>
              <Link to="/industries" className="bg-remove-btn">
                All Industries <MdArrowOutward />
              </Link>
            </div>
          </div>
        </section>
        {/* sectors end */}
        {/* ------------------------ */}
        {/* community work start */}
        <section
          id="community-work"
          className="bgimg mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="top-middle-head">
                <h3 className="sub-head">/ Community Work</h3>
                <h2 className="main-head">
                  Numbers Drive Us, Giving Back Defines Us
                </h2>
                <p className="text-desc">
                  Giving back to the community is a fundamental part of our
                  values. We at Chawla & Associates think that making a
                  difference is more important than merely increasing profits.
                  Our CPA firm is dedicated to making a significant difference
                  through volunteer work, charitable contributions, and pro bono
                  work. We support farmers of Punjab, non profits, and
                  sustainable initiatives to create a better and more inclusive
                  future for all.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-2 col-sm-5 col-md-5 community-img">
                <img
                  src={communityImg1}
                  alt="communityImg1"
                  title="communityImg1"
                  className="communityImg1"
                  loading="lazy"
                ></img>
                <img
                  src={communityImg2}
                  alt="communityImg2"
                  title="communityImg2"
                  className="communityImg2"
                  loading="lazy"
                ></img>
              </div>
              <div className="col-lg-5 col-sm-7 col-md-7 community-img-single p-xs-0">
                {" "}
                <img
                  src={communityImg3}
                  alt="communityImg3"
                  title="communityImg3"
                  className="communityImg3"
                  loading="lazy"
                ></img>
              </div>
              <div className="col-lg-5 col-sm-12 col-md-12 all-icon-box p-xs-0 padding-md-0">
                <div className="icon-box">
                  <a href="https://pagri.org/" target="_blank">
                    <span className="icon">
                      <img
                        src={homeless}
                        alt="homeless"
                        title="homeless"
                        loading="lazy"
                      ></img>
                    </span>
                  </a>
                  <span className="text">
                    <a href="https://pagri.org/" target="_blank">
                      <h4>Pagri: Transforming Punjab’s Agriculture</h4>
                    </a>
                    <p>
                      Pagri is transforming Punjab’s agriculture, and we proudly
                      support its mission for rural growth!
                    </p>
                  </span>
                </div>
                <div className="icon-box">
                  <a href="https://dheeanpukardian.org/" target="_blank">
                    <span className="icon">
                      <img
                        src={collective}
                        alt="collective"
                        title="collective"
                        loading="lazy"
                      ></img>
                    </span>
                  </a>
                  <span className="text">
                    <a href="https://dheeanpukardian.org/" target="_blank">
                      {" "}
                      <h4>
                        Dheean Pukardian: Educate Girls, Stop Female Feticide!
                      </h4>
                    </a>
                    <p>
                      Dheean Pukardian empowers underprivileged girls in India
                      to fight female feticide and build a just society!
                    </p>
                  </span>
                </div>
                <div className="icon-box">
                  <a>
                    <span className="icon">
                      <img
                        src={Enviroment}
                        alt="Enviroment"
                        title="Enviroment"
                        className="Enviroment"
                        loading="lazy"
                      ></img>
                    </span>
                  </a>
                  <span className="text">
                    <h4>The Oli Gardens: Sustainable Farming, Food for All!</h4>
                    <p>
                      The Oli Gardens promotes sustainable farming to fight food
                      insecurity and nourish those in need!
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* community work end */}
        {/* ------------------------ */}
        {/* meet our team start */}
        <section id="meetourteam" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-4 col-md-12 col-lg-4 sidebar p-xs-0 padding-md-0">
                <h3 className="sub-head">/ Our Team</h3>
                <h2 className="main-head">
                  The Financial Minds Driving Your Success
                </h2>
                <Link to="/about/#members" className="bg-remove-btn">
                  Know Your Team <MdArrowOutward />
                </Link>
              </div>
              <div className="col-sm-4 col-md-12 col-lg-8 main p-xs-0 padding-md-0">
                <p>
                  We are more than just accountants—we are strategic partners in
                  your tax planning and growth. At Chawla & Associates, we are
                  strategic partners in your tax planning and growth. We are
                  among the best CPA firms in Naperville, IL, providing
                  unmatched experience, creative solutions, and personalized
                  attention to help you deal with any tax dilemma easily.
                </p>
                <div className="row team-member-all-img">
                  <div className="row team-member">
                    {teamData.map((member) => (
                      <div
                        key={member.id}
                        className="col-md-4 team-members-img  p-xs-0"
                      >
                        <img
                          src={member.imgSrc}
                          alt={member.name}
                          title={member.name}
                          className="team-member-imges"
                          loading="lazy"
                        />
                        <img
                          src={boxesline} // Adjust the path if needed
                          alt="boxesline"
                          title="boxesline"
                          className="boxesline"
                          loading="lazy"
                        />
                        <span className="team-details">
                          <h3>{member.name}</h3>
                          <h4>{member.position}</h4>
                          <p>{member.description}</p>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* meet our team end */}
        {/* --------------------- */}
        {/* connect with us start */}
        <section
          id="connect-with-us"
          className="bgimg mobile-spacing tablet-spacing"
        >
          <div className="container-fluid p-xs-0">
            <div className="row">
              <div className="col-lg-6 col-md-9 Connectwithusbgtext padding-md-0">
                <h3 className="sub-head">/ Connect with us</h3>
                <h2 className="main-head">
                  Take Control of Your Finances with Naperville’s Trusted CPA
                </h2>
                <p className="text-desc">
                  Stop stressing over taxes, accounting, and financial
                  complexities—let the experts handle it. Keep your finances on
                  track. Get ahead this tax season!
                </p>
                <Link to="/contact" className="bg-remove-btn-svg">
                  Book a Consultation
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
                  loading="lazy"
                ></img>
              </div> */}
            </div>
          </div>
        </section>
        {/* connect with us end */}
        {/* ----------------------- */}
        {/* Testimonial start */}
        {/* <Testimonial /> */}
        <div className="google-reviews" id="google-reviews">
          <div className="container-fluid p-xs-0">
            <div className="row">
              <h2 className="main-head">We sell peace of mind</h2>
              <div
                class="elfsight-app-eb105fe7-7e78-455f-96cf-3e96d491489b"
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>
        </div>
        {/* Testimonial end */}
        {/* -------------------- */}
        <section id="CoreValues" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row CoreValues-inner">
              <div className="top-middle-head">
                <h3 className="sub-head">/ Core Values</h3>
                <h2 className="main-head">The Pillars of Our CPA Firm</h2>
              </div>
              <div className="row CoreValues-boxes p-xs-0">
                {coreValuesData.map((value, index) => (
                  <div
                    key={index}
                    className={`col-lg-4 col-md-12 col-sm-12 p-xs-0 padding-md-0 ${value.boxClass}`}
                  >
                    <div className="corevalueboxes bgimg">
                      <div className="icon-box">
                        <span className="icon-box-img">
                          <img
                            src={value.imgSrc}
                            alt={value.alt}
                            title={value.alt}
                            loading="lazy"
                          />
                        </span>
                        <span className="icon-box-text">
                          <h4>{value.title}</h4>
                          <p>{value.description}</p>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ----------------------- */}
        {/* get in touch start */}
        <ContactForm />
        {/* get in touch end */}
        {/* --------------------- */}
        {/* map start */}

        <Map />
        {/* map end */}
        {/* --------------------- */}
      </div>
    </>
  );
};
export default Home;
