import React from "react";
import { Link } from "react-router-dom";
import "../../ServiceInnerPage.scss";
import { LuArrowUpRight } from "react-icons/lu";
<<<<<<< HEAD
import { MdArrowOutward } from "react-icons/md";
=======
import { MdArrowOutward, MdOutlineArrowUpward } from "react-icons/md";
import { FiArrowDown } from "react-icons/fi";
>>>>>>> 2bf065d (content added)
import boxesline from "../../../../../Assests/Img/boxesline.webp";
import collabrativeculture from "../../../../../Assests/Img/collabrative-culture.webp";

const AdvisoryConsultingContent = ({ contentData }) => {
  return (
    <>
      <div className="TaxInnerPage" id={contentData.mainid}>
        {/* banner start */}
        <section id="inner-page-banner">
          <div className="container-fluid bgimg">
            <div className="row">
              <h1 className="main-head">{contentData.banner.title}</h1>
              <p className="text-desc">{contentData.banner.subtitle}</p>
            </div>
          </div>
        </section>
        {/*banner end */}
        {/* -------------------- */}
        {/* nav start */}
        <section
          id="BusinessAdvisory"
          className="mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 col-lg-4 p-xs-0">
                <div className="Business-Advisory-inner-right-outer">
                  <div class="Business-Advisory-inner-right">
                    <h2>{contentData.sidebar.title}</h2>
                    {contentData.sidebar.AllBtn.map((item, index) => (
                      <div className={item.className}>
                        <Link
                          to={item.servicelink}
                          key={index}
                          className="Business-Advisory-inner-links"
                        >
                          <p>{item.links}</p>
                          <Link to={item.servicelink} className="short-button">
                            <button>
                              <LuArrowUpRight />
                            </button>
                          </Link>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="col-md-7 col-lg-8 p-xs-0">
                <div class="Business-Advisory-inner-left">
                  <img
                    src={contentData.img}
                    alt={contentData.banner.title}
                    title={contentData.banner.title}
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* nav end */}
        {/* -------------------- */}
        {/* TexthreePoints start */}
        <section
          id="Business-Advisory-services"
          className="mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row Business-Advisory-services-content">
              {contentData.TexthreePoints.map((point, index) => (
                <div className="col-lg-4 col-md-6 p-xs-0" id={index}>
                  <div class="Business-Advisory-box">
                    <h2 class="main-head">{point.title}</h2>
                    <p class="text-desc">{point.description}</p>
                    <img
                      src={boxesline}
                      alt="boxesline"
                      title="boxesline"
                    ></img>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* TexthreePoints end */}
        {/* ---------------------------- */}
        {/* Growth start */}
        <section
          id="comprehensive-business-advisory-solutions"
          className="bgimg mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-9 col-md-12 p-xs-0 padding-md-0 comprehensive-business-advisory-solutions-left">
                <h3 class="sub-head">/ Growth </h3>
                <h2 class="main-head">{contentData.Growth.title}</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-12 p-xs-0 padding-md-0 comprehensive-business-advisory-solutions-left">
                <p class="text-desc">{contentData.Growth.description}</p>
                <img
                  src={collabrativeculture}
                  alt={contentData.Growth.title}
                  title={contentData.Growth.title}
                ></img>
              </div>
              <div className="col-lg-6 col-md-12 p-xs-0 padding-md-0">
                <div class="accordion" id="accordionExample">
                  {contentData.faqData.map((item, index) => (
                    <div key={index}>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id={item.heading}>
                          <button
                            className={`accordion-button ${
                              index !== 0 ? "collapsed" : ""
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${item.id}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={item.id}
                          >
<<<<<<< HEAD
                            <span>{item.number}</span> <p>{item.title}</p>
                          </button>
                        </h2>
=======
                            <div className="question">
                              <span>{item.number}</span>
                              <p className="mb-0 flex-1">{item.title}</p>
                            </div>
                            {/* 👇 Icon toggle */}

                            <div className="faq-icon"><FiArrowDown /></div>
                          </button>
                        </h2>

>>>>>>> 2bf065d (content added)
                        <div
                          id={item.id}
                          className={`accordion-collapse collapse ${
                            index === 0 ? "show" : ""
                          }`}
                          aria-labelledby={item.heading}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">{item.content}</div>
                        </div>
                      </div>
                      <div className="line"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Growth end */}
        {/* --------------------------- */}
        {/*  Solutions start */}
        <section
          id="Business-Advisory-Solutions"
          className="Business-Advisory-Solutions mobile-spacing tablet-spacing"
        >
          <div className="container-fluid p-xs-0">
            <div className="top-head padding-md-0 p-xs-0">
              {/* <div className='col-md-9'> */}
              <h3 class="sub-head">/ Solutions </h3>
              <h2 class="main-head">{contentData.SolutionsContent.Title}</h2>
              <p class="text-desc">
                {contentData.SolutionsContent.description}
              </p>
              {/* </div> */}
            </div>
            <div className="row top-spacing">
              {contentData.Solutions.map((solution, index) => (
                <div className="col-md-6 col-sm-4" key={index}>
                  <div className="box">
                    <h2>{solution.id}</h2>
                    <h3>{solution.title}</h3>
                    <p className="text-desc">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/*  Solutions end */}
        {/*  ---------------------------  */}
        {/* our process start */}
        <section
          id="sectors"
          className="mobile-spacing Business-Advisory-process tablet-spacing"
        >
          <div className="container-fluid Business-Advisory-process-inner">
            <div className="row">
              <h3 className="sub-head">/ Our Process</h3>
              <h2 className="main-head p-xs-0">
                {contentData.ProcessContent.title}
              </h2>
              <p className="text-desc p-xs-0">
                {contentData.ProcessContent.description}
              </p>
              <div className="row sectors-box">
                {contentData.processSteps.map((step, index) => (
                  <div
                    key={index}
                    className="col-lg-4 col-md-6 col-sm-6 icon-box"
                  >
                    <img
                      src={step.imgSrc}
                      alt={step.alt}
                      title={step.title}
                      loading="lazy"
                    />
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* our process end */}
        {/* ------------------------ */}
        {/* ask-us start */}
        <section
          id="ask-us"
          class="outsouced-bookeeping-inner bgimg mobile-spacing tablet-spacing"
        >
          <div class="container-fluid">
            <div class="row">
              <h2 class="main-head p-xs-0">{contentData.askus.title}</h2>
              <p class="text-desc p-xs-0">{contentData.askus.description} </p>
              <a class="bg-remove-btn-svg" href="/contact" data-discover="true">
                get in touch
                <span>
                  {" "}
                  <MdArrowOutward />
                </span>
              </a>
            </div>
          </div>
        </section>
        {/* ask-us end */}
      </div>
    </>
  );
};

export default AdvisoryConsultingContent;
