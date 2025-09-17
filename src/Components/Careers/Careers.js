import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "./Careers.scss";
import { jobListings } from "../Data";
import Testimonial from "../CommonComp/Testimonial";
import Banner from "../CommonComp/Banner";
import ContactForm from "../CommonComp/ContactForm";
import Map from "../CommonComp/Map";
import { MdArrowOutward } from "react-icons/md";
import WorkWithUsbanner from "../../Assests/Img/Work-With-us-banner.webp";
import professionalGrowth from "../../Assests/Img/professional-growth.webp";
import collabrativeCulture from "../../Assests/Img/collabrative-culture.webp";
import workLifeBalanec from "../../Assests/Img/work-life-balanec.webp";
import comprehnsiveBenofits from "../../Assests/Img/comprehnsive-benofits.webp";
const WorkWithUs = () => {
  return (
    <>
      <Helmet>
        <title>CPA Jobs, Employment in Naperville</title>
        <meta
          name="description"
          content="Looking to join the best CPA firm in Naperville? Learn about the available jobs at Chawla & Associates for a chance to shape the future of finance."
        />
      </Helmet>
      <div className="fraunces" id="Work-with-us">
        {/* about-banner start */}
        <Banner
          bannerImage={WorkWithUsbanner}
          title="Join Our Team and Shape the Future of Finance"
          description="At Chawla & Associates CPAs, we specialize in tax, accountancy and consulting. Led by Roger, our team is made up of trusted advisors who are involved in multifaceted projects and work with specialists from various fields. By joining our team, you will get the opportunity to continuously develop, and grow within a close-knit and professional team. We help individuals and businesses grow. And we grow ourselves. That is why we welcome enthusiastic new colleagues, from starter to senior, to join our team."
          buttonText="Talk to Your CPA"
        />
        {/* about-banner end */}
        {/* -------------------------- */}
        {/* Discover Your Potential Start */}
        <section
          id="discover-your-potential"
          className="discover-your-potential mobile-spacing tablet-spacing"
        >
          <div class="container-fluid">
            <div className="row Professionals-text">
              <div className="col-lg-5 col-md-12 p-xs-0 padding-md-0">
                <span className="text">
                  <h3 className="sub-head">/ Discover Your Potential</h3>
                  <h2 className="main-head">careers at chawla CPA firm</h2>
                </span>
              </div>
              <div className="col-lg-7 col-md-12 p-xs-0 padding-md-0">
                <p class="text-desc">
                  At Chawla & Associates CPAs, we ensure you feel valued for who
                  you are and for everything that you bring to the table. Here
                  are the top benefits that help us promote a workplace that
                  allows everyone to bring their best and truest selves to work.
                </p>
              </div>
            </div>
            <div className="container discover-your-potential-boxes">
              <div className="row">
                <div className="col-md-6 left-img">
                  <img
                    src={professionalGrowth}
                    alt="Collaborative Culture"
                    title="Collaborative Culture"
                  ></img>
                  <h4>Collaborative Culture</h4>
                  <p>
                    Chawla & Associates CPAs strives to create a unique culture
                    that enables you to feel more than just a cog in the
                    machine. Every employee feels valued, included, supported
                    and we respect work-life balance. We grow together as a
                    team, because that is how we remain trailblazers, leading
                    the industry with innovation and excellence.
                  </p>
                </div>
                <div className="col-md-6 right-img">
                  <img
                    src={collabrativeCulture}
                    alt="We’re Passionate About People"
                    title="We’re Passionate About People"
                  ></img>
                  <h4>We’re Passionate About People</h4>
                  <p>
                    At every level, the people are what drive Chawla &
                    Associates CPAs to greater heights. We are not just
                    passionate about numbers, we care a lot about our clients
                    and the community we serve. When you join us, you will not
                    only grow your career through industry certification and
                    career advancement programs but you also get to give back to
                    the community. Join us to explore our commitment to
                    philanthropy.
                  </p>
                </div>
                <div className="col-md-6 left-img">
                  <img
                    src={workLifeBalanec}
                    alt="Committed to Continuous Growth"
                    title="Committed to Continuous Growth"
                  ></img>
                  <h4>Committed to Continuous Growth</h4>
                  <p>
                    We are unapologetic about fighting stagnation. We do so for
                    our firm, our employees and our clients. Join a team that is
                    consistently ranked as one of the top accounting firms in
                    the nation. We have won numerous awards including the 2024:
                    Employer of the Year Award by the United Nations World Day
                    Against Trafficking of Persons.
                  </p>
                </div>
                <div className="col-md-6 right-img">
                  <img
                    src={comprehnsiveBenofits}
                    alt="Comprehensive Personal and Professional Support"
                    title="Comprehensive Personal and Professional Support"
                  ></img>
                  <h4>Comprehensive Personal and Professional Support</h4>
                  <p>
                    Our employee benefits range from medical benefits and plans,
                    dental and 401(k) plans to paid time off and holidays, CPA
                    license incentive, and profit-sharing plans. We want you to
                    feel valued. Be part of our family today to enjoy these and
                    more perks.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Discover Your Potential end */}
        {/* ---------------------------- */}
        {/* jobs-available start */}
        <section
          id="jobs-available"
          className="jobs-available mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div class="top-middle-head remove-spacing">
                <h3 className="sub-head">/ jobs available</h3>
                <h2 className="main-head">Open position</h2>
              </div>
              <div className="row why-us-boxes remove-spacing">
                {jobListings.map((job, index) => (
                  <div className="col-md-6 col-lg-3 p-xs-0" key={index}>
                    <div className="icon-box">
                      <h4>{job.title}</h4>
                      <p>{job.description}</p>
                      <Link className="bg-remove-btn-svg" to={job.link}>
                        know more
                        <span>
                          <MdArrowOutward />
                        </span>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* jobs-available end */}
        {/* -------------------- */}
        {/* support start */}
        <section id="support" className="support">
          <div class="container-fluid">
            <div className="row">
              <div className="col-md-7 text">
                <h2 className="main-head">
                  build a career you love with benefits that support you
                </h2>
                <p>
                  At Chawla & Associates CPAs, you will have the perfect
                  opportunity to launch or enhance your career working
                  side-by-side with the most talented CPA professionals in the
                  United States. Don’t miss out on this amazing opportunity.
                  Search and apply for a job today for a chance to take control
                  of your career; working with professionals who truly care
                  about you and the communities and clients we support.{" "}
                </p>
              </div>
              <div className="col-md-5 img bgimg"></div>
            </div>
          </div>
        </section>
        {/* support end */}
        {/* ----------------------- */}
        {/* community work start */}
        <section
          id="community-work"
          className="bgimg mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="top-middle-head">
                <h3 className="sub-head">/ Our Recruitment Process</h3>
                <h2 className="main-head">
<<<<<<< HEAD
                  We provide a wide range of financial management
                </h2>
                <p className="text-desc">
                  We do a lot of community work with non pofits and other
                  communities. Also they have helped a african american film
                  with the financiing.
=======
                  We believe hiring is a two-way journey
                </h2>
                <p className="text-desc">
                  Our recruitment process is designed to be transparent,
                  respectful, and efficient. From submitting your application to
                  meeting with our team, we keep communication open and ensure
                  every candidate has a fair opportunity to showcase their
                  skills and passion.
>>>>>>> 2bf065d (content added)
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-md-12 all-icon-box">
                <div className="icon-box">
                  <span className="text">
                    <h4>Explore Your Fit</h4>
                    <p>
                      Take some time to explore our website to learn about our
                      organization. Review our available jobs and read the
                      description keenly. If you believe you are a good fit,
                      send us an application.
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-lg-12 col-sm-12 col-md-12 all-icon-box">
                <div className="icon-box">
                  <span className="text">
                    <h4>Apply</h4>
                    <p>
                      When you find a role that speaks to you, send us your
<<<<<<< HEAD
                      resume. Our recruitment team will review your resume and
                      qualifications and contact you if you are selected for an
                      interview. Don’t be discouraged if you are not contacted
                      for an interview. Keep tabs on our open positions and
                      don’t hesitate to apply for other roles in the future.
=======
                      application to{" "}
                      <a href="mailto:info@chawlacpa.com">info@chawlacpa.com</a>
                      , and make sure to include the position title in the
                      subject line. Our recruitment team will review your resume
                      and qualifications and contact you if you are selected for
                      an interview. Don’t be discouraged if you are not
                      contacted for an interview. Keep tabs on our open
                      positions and don’t hesitate to apply for other roles in
                      the future.
>>>>>>> 2bf065d (content added)
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-lg-12 col-sm-12 col-md-12 all-icon-box">
                <div className="icon-box">
                  <span className="text">
                    <h4>Interview</h4>
                    <p>
                      If you are selected for an interview, our member will
                      contact you for an initial phone interview. The interview
                      gives us a chance to learn more about your background and
                      for you to learn about Chawla & Associates CPAs. If you
                      advance through the process, you will meet several of our
                      professionals who may take you through technical,
                      behavioral and case-based interviews. Don’t be nervous. We
                      just want to make sure you are a good fit.
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-lg-12 col-sm-12 col-md-12 all-icon-box">
                <div className="icon-box">
                  <span className="text">
                    <h4>Offer</h4>
                    <p>
                      After passing the interview stages, we will give you an
                      offer in writing. This is often within one week of your
                      final interview. We encourage you to carefully review the
                      offer and ask any questions you might have.
                    </p>
                  </span>
                </div>
              </div>
              <div className="col-lg-12 col-sm-12 col-md-12 all-icon-box">
                <div className="icon-box">
                  <span className="text">
                    <h4>Get Started</h4>
                    <p>
                      The final step is working with an onboarding coordinator
                      who will determine your start date and give you a training
                      schedule. Our orientation program will give you everything
                      you need to join and feel comfortable at Chawla &
                      Associates CPAs.
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* community work end */}
        {/* ------------------------- */}
        {/* Testimonial start */}
        <Testimonial />
        {/* Testimonial end */}
        {/* -------------------- */}
        {/* connect with us start */}
        <section
          id="connect-with-us"
          className="bgimg mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12 Connectwithusbgtext p-xs-0 padding-md-0">
                <h3 className="sub-head">/ Connect with us</h3>
                <h2 className="main-head">Have tax questions? Ask us</h2>
                <p className="text-desc">
                  The first step to hassle-free accounting, tax returns, and tax
                  planning is reaching out to one of our representatives.
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
        {/* ContactForm start */}
        <ContactForm />
        {/* ContactForm end */}
        {/* ------------------- */}
        {/* Map start */}
        <Map />
        {/* Map end */}
      </div>
    </>
  );
};

export default WorkWithUs;
