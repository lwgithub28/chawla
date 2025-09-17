import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";
import boxesline from "../../../../../Assests/Img/boxesline.webp";
import "../../ServiceInnerPage.scss";

const AccountingServicesContent = ({ contentData }) => {
  return (
    <>
      <div className="AccountingInnerPage" id={contentData.mainid}>
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
        {/* Bookkeeping Accounting Services start*/}
        <section
          id="Bookkeeping-Accounting-Services"
          className="mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 col-lg-8 p-xs-0">
                <div class="Accounting-Services-inner-left">
                  <img
                    src={contentData.img}
                    alt={contentData.banner.title}
                    title={contentData.banner.title}
                  ></img>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 p-xs-0 padding-md-0">
                <div className="Accounting-Services-inner-right-outer">
                  <div class="Accounting-Services-inner-right">
                    <h2>{contentData.sidebar.title}</h2>
                    {contentData.sidebar.AllBtn.map((item, index) => (
                      <div className={item.className}>
                        <Link
                          to={item.servicelink}
                          key={index}
                          className="tax-preparation-inner-links"
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
            </div>
          </div>
        </section>
        {/* Bookkeeping Accounting Services end*/}
        {/* ------------------------------- */}
        {/* fun-fact start */}
        <div id="fun-fact" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row funfact-box-outer">
              {contentData.funfactData.map((Data, index) => (
                <>
                  <div className="col-md-4 funfact-box" id={index}>
                    <img
                      src={Data.img}
                      alt={Data.funfacthead}
                      title={Data.funfacthead}
                    ></img>
                    <h3>{Data.funfacthead}</h3>
                    <p className="text-desc">{Data.funfacttext}</p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        {/* fun-fact end */}
        {/* ----------------------- */}
        {/* why choose us start */}
        <section
          id="outsouced-bookeeping"
          className="mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <h3 class="sub-head p-xs-0 padding-md-0">/ Why Choose Us</h3>
              <h2 class="main-head p-xs-0 padding-md-0">
                {contentData.WhyChooseUs.mainHead}
              </h2>
              <p class="text-desc p-xs-0 padding-md-0">
                {contentData.WhyChooseUs.textDesc}
              </p>
            </div>
            <h4 className="Payroll-inner">Our Payroll Processing Services</h4>
            <h4 className="crypto-inner">What We Do for You</h4>
            <ul className="check-list crypto-inner">
              <div className="row">
                <div className="col-md-6 p-xs-0">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Prepare cryptocurrency tax returns</p>
                  </li>
                </div>
                <div className="col-md-6 p-xs-0">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Offer cryptocurrency advisory and consultation</p>
                  </li>
                </div>
                <div className="col-md-6 p-xs-0">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Help with the valuation of digital currencies</p>
                  </li>
                </div>
                <div className="col-md-6 p-xs-0">
                  <li>
                    <IoCheckmarkSharp />
                    <p>
                      Amend prior-year tax returns to reflect cryptocurrency
                      transactions
                    </p>
                  </li>
                </div>
                <div className="col-md-6 p-xs-0">
                  <li>
                    <IoCheckmarkSharp />
                    <p>
                      Ensure compliance with federal, state and local tax
                      regulations
                    </p>
                  </li>
                </div>
                <div className="col-md-6 p-xs-0">
                  <li>
                    <IoCheckmarkSharp />
                    <p>
                      Ensure compliance with international regulations such as
                      IRS Form 8938 and FBAR
                    </p>
                  </li>
                </div>
                <div className="col-md-6 p-xs-0">
                  <li>
                    <IoCheckmarkSharp />
                    <p>
                      Offer accounting and reporting services for businesses
                      that use digital currency
                    </p>
                  </li>
                </div>
              </div>
            </ul>
            <ul className="check-list Payroll-inner">
              <div className="row">
                <div className="col-md-6 p-xs-0">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Weekly, bi-weekly or monthly payroll processing</p>
                  </li>
                </div>
                <div className="col-md-6 col-md-6 p-xs-0">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Comprehensive payroll reporting</p>
                  </li>
                </div>
                <div className="col-md-6 col-md-6 p-xs-0">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Direct deposits</p>
                  </li>
                </div>
                <div className="col-md-6 col-md-6 p-xs-0">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Customized payroll reports</p>
                  </li>
                </div>
                <div className="col-md-6 col-md-6 p-xs-0">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Weekly or monthly accounting summaries</p>
                  </li>
                </div>
                <div className="col-md-6 col-md-6 p-xs-0">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Online business payroll services solution</p>
                  </li>
                </div>
                <div className="col-md-6 col-md-6 p-xs-0">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Tax compliance</p>
                  </li>
                </div>
                <div className="col-md-4">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Workers’ compensation</p>
                  </li>
                </div>
                <div className="col-md-6">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Employee health and welfare benefits administration</p>
                  </li>
                </div>
                <div className="col-md-6">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Workers’ compensation claims management</p>
                  </li>
                </div>
                <div className="col-md-6">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Unemployment claims management</p>
                  </li>
                </div>
                <div className="col-md-6">
                  <li>
                    <IoCheckmarkSharp />
                    <p>Pre-tax deductions</p>
                  </li>
                </div>
              </div>
            </ul>
            <h4 className="outsouced-bookeeping-inner">Why Choose Us</h4>
            <ul className="check-list">
              <div className="row outsouced-bookeeping-list">
                <div className="row p-xs-0">
                  {contentData.WhyChooseUs.benefits.map((benefit, index) => (
                    <div className="col-md-6 p-xs-0" key={index}>
                      <li>
                        <IoCheckmarkSharp />
                        <span>{benefit.title}</span>
                        <p>{benefit.description}</p>
                      </li>
                    </div>
                  ))}
                </div>
              </div>
            </ul>
          </div>
        </section>
        {/* why choose us end */}
        {/* ---------------------- */}
        {/* Financial Audits start */}
        <section
          id="Financial-Audits"
          className="mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <h2 class="main-head">
                Comprehensive Financial Audits, Reviews, and Preparations for
                Businesses
              </h2>
              <p class="text-desc">
                Successful businesses are built on the trust and assurance that
                their financial operations, internal controls and cash flows are
                sound and adhere to relevant laws and regulations. This is what
                makes accounting & auditing services in Naperville IL critical.
                When you come to us, our audit, compilation and review team will
                partner with you to uncover issues, help prevent fraud, avoid
                misappropriation of assets, as well as recommend best practices
                to improve profits and productivity.
                <br></br>
                <br></br>
                At Chawla & Associates, we bring decades of experience in
                conducting audits, compilations, and reviews for businesses. As
                a trusted partner who takes pride in your success, we guarantee
                that all your audited financial statements adhere to GAAP
                (Generally Accepted Accounting Principles).
                <br></br>
                <br></br>
                Trusting our team with audit and assurance services will boost
                the value, credibility as well as the consistency of your
                financial statements and internal controls. We offer great
                insight into your business’ processes to allow you to make more
                informed decisions, reduce cost of capital and enhance investor
                confidence.
              </p>
              <h4 className="audit-assurance-inner">
                Our Expert Audit and Assurance Services
              </h4>
              <ul className="check-list audit-assurance-inner">
                <div className="row">
                  <div className="col-md-6">
                    <li>
                      <IoCheckmarkSharp />
                      <p>
                        Complete audits, reviews, compilations and preparations
                      </p>
                    </li>
                  </div>
                  <div className="col-md-6">
                    <li>
                      <IoCheckmarkSharp />
                      <p>Review and corroboration of assets</p>
                    </li>
                  </div>
                  <div className="col-md-6">
                    <li>
                      <IoCheckmarkSharp />
                      <p>Review and analysis of internal accounting controls</p>
                    </li>
                  </div>
                  <div className="col-md-6">
                    <li>
                      <IoCheckmarkSharp />
                      <p>Audits for non-profit organizations</p>
                    </li>
                  </div>
                  <div className="col-md-6">
                    <li>
                      <IoCheckmarkSharp />
                      <p>
                        Forensic accounting and embezzlement/fraud investigation
                      </p>
                    </li>
                  </div>
                  <div className="col-md-6">
                    <li>
                      <IoCheckmarkSharp />
                      <p>Attestation agreements</p>
                    </li>
                  </div>
                  <div className="col-md-6">
                    <li>
                      <IoCheckmarkSharp />
                      <p>Mergers and Acquisitions</p>
                    </li>
                  </div>
                  <div className="col-md-6">
                    <li>
                      <IoCheckmarkSharp />
                      <p>Preparation of detailed financial statements</p>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </section>
        {/* Financial Audits end */}
        {/* ---------------------------- */}
        {/* how it works start */}
        <section
          id="bookkeeping-services"
          className="mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 bookkeeping-services-content p-xs-0 padding-md-0">
                <h3 class="sub-head">/ How It Works</h3>
                <h2 class="main-head">{contentData.HowItWorks.mainHead}</h2>
                <p class="text-desc">{contentData.HowItWorks.textDesc}</p>
                <h4 className="outsouced-bookeeping-inner">
                  You can trust us with:
                </h4>
                <div className="row">
                  {contentData.HowItWorks.services.map((service, index) => (
                    <div
                      className={`col-md-6 ${service.className}`}
                      key={index}
                    >
                      <div className="how-it-works-box">
                        <h2 className="main-head">{service.title}</h2>
                        <p className="text-desc">{service.description}</p>
                        <img
                          src={boxesline}
                          alt="boxesline"
                          title="boxesline"
                        ></img>
                      </div>
                    </div>
                  ))}
                  <p className="text-desc bookkeeping-services-inner">
                    Whether you need monthly bookkeeping services or a
                    bookkeeper that serves as your own personal assistant,
                    Chawla & Associates got you covered. For more than 25 years,
                    our company has always been relationship-focused. We take
                    pride in growing with you. Contact us today for the best{" "}
                    <b>bookkeeping services for small businesses</b> in the
                    country.{" "}
                  </p>
                </div>
              </div>
              {/* <div className='col-sm-3 col-md-12 col-lg-3 img bgimg p-xs-0'> </div> */}
            </div>
          </div>
        </section>
        {/* how it works end */}
        {/* -------------------------- */}
        {/* Cryptocurrency start */}
        <section id="Cryptocurrency" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <h2 class="main-head p-xs-0">
                A Cryptocurrency CPA You Can Trust
              </h2>
              <p class="text-desc p-xs-0">
                Cryptocurrency has very complex rules when it comes to reporting
                and taxation. Lucky for you, Chawla & Associates is here to
                help.
                <br></br>
                <br></br> Our CPAs in Naperville IL have been keeping up with
                cryptocurrencies ever since Bitcoin came to life back in 2008.
                With experience working with cryptocurrency investors in
                Illinois, we know what it takes to avoid having the IRS knocking
                at your door. We can advise on tax strategies including
                maximizing deductions and lowering your tax rate.
                <br></br>
                <br></br>We are your go-to firm when you need to understand
                cryptocurrency tax and accounting. As the best CPAs in
                Naperville, we review your finances and organize them in a way
                that makes sense so that you have complete transparency and
                maximize your earnings. In addition to tax services, we offer a
                full-service accounting support to help you with the financial
                aspect of your investments.
              </p>
            </div>
          </div>
        </section>
        {/* Cryptocurrency end */}
        {/* ------------------------ */}
        {/* Ask Us start */}
        <section
          id="ask-us"
          className="outsouced-bookeeping-inner bgimg mobile-spacing tablet-spacing"
        >
          <div className="container-fluid p-xs-0">
            <div className="row">
              <h2 class="main-head">{contentData.AskUsmainHead}</h2>
              <p class="text-desc">{contentData.AskUstextDesc}</p>
              <Link to="/contact" className="bg-remove-btn-svg">
                get in touch
                <span>
                  <MdArrowOutward />
                </span>
              </Link>
            </div>
          </div>
        </section>
        {/* Ask Us end */}
      </div>
    </>
  );
};

export default AccountingServicesContent;
