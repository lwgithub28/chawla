import React from 'react';
import "../../ServiceInnerPage.scss";
import { IoCheckmarkSharp } from "react-icons/io5";
import { LuArrowUpRight } from "react-icons/lu";
import { MdArrowOutward } from "react-icons/md";

import { Link } from 'react-router-dom';

const TaxPreparationContent = ({ contentData }) => (
    <>
        <div className="TaxInnerPage" id={contentData.mainid}>
            {/* banner start */}
            <section id='inner-page-banner'>
                <div className='container-fluid bgimg'>
                    <div className='row'>
                        <h1 className='main-head'>{contentData.banner.title}</h1>
                        <h3 className='sub-head'>{contentData.banner.subhead}</h3>
                        <p className='text-desc'>{contentData.banner.subtitle}</p>
                    </div>
                </div>
            </section>
            {/*banner end */}
            {/* -------------------- */}
            {/* tax-preparation start */}
            <section id='tax-preparation-inner' className='mobile-spacing tablet-spacing'>
                <div className='container-fluid'>
                    <div className='row tax-preparation-inner-row'>
                        <div className='col-md-5 col-lg-4 p-xs-0'>
                            <div className='tax-preparation-inner-left-outer'>
                                <div className='tax-preparation-inner-left'>
                                    <h2>{contentData.sidebar.title}</h2>
                                    {contentData.sidebar.AllBtn.map((item, index) => (
                                        <div className={item.className}>
                                            <Link to={item.servicelink} key={index} className='tax-preparation-inner-links'>
                                                <p>{item.links}</p>
                                                <Link to={item.servicelink} className="short-button">
                                                    <button><LuArrowUpRight /></button>
                                                </Link>
                                            </Link>
                                        </div>
                                    ))}
                                </div>
                                <div className='connect-with-us-card bgimg'>
                                    <h3 class="sub-head">/ Connect with us</h3>
                                    <h2 class="main-head">{contentData.sidebar.contactTitle}</h2>
                                    <p class="text-desc">{contentData.sidebar.contactDescription}</p>
                                    <Link to="/contact" className="bg-remove-btn-svg">
                                            get in touch
                                            <span>
                                                <MdArrowOutward />
                                            </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-7 col-lg-8 p-xs-0'>
                            <div className='tax-preparation-inner-right'>
                                <img src={contentData.img} alt={contentData.banner.title} title={contentData.banner.title}></img>
                                <div className='tax-preparation-inner-right-text'>
                                    <div className='row funfact-box-outer'>
                                        {contentData.mainContent.funfactData.map((Data, index) => (
                                            <>
                                                <div className='col-lg-4 col-md-12 funfact-box' id={index}>
                                                    <img src={Data.img} alt={Data.funfacthead} title={Data.funfacthead}></img>
                                                    <h3>{Data.funfacthead}</h3>
                                                    <p className='text-desc'>{Data.funfacttext}</p>
                                                </div>
                                            </>
                                        ))}
                                    </div>
                                </div>
                                <div className='tax-preparation-inner-right-text'>
                                    {/* <h3 class="sub-head">/ Taxation</h3> */}
                                    <h2 class="main-head">{contentData.mainContent.taxationTitle}</h2>
                                    <p class="text-desc">{contentData.mainContent.taxationDescription}</p>
                                    <ul className="check-list short-icon-list" id={contentData.mainContent.IRSRepresentationClassName}>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Errors in your tax return</span>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Unreported income</span>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Excessive donations</span>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Reporting significant losses</span>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Unusually consistent figures in your filing</span>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Home office deductions</span>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Large volumes of claimed work expenses</span>
                                        </li>
                                    </ul>
                                    <p class="text-desc">{contentData.mainContent.taxationTitle2}</p>
                                </div>
                                <div className='tax-preparation-inner-right-text'>
                                    <h2 class="main-head">{contentData.mainContent.taxPrepTitle}</h2>
                                    <p class="text-desc">{contentData.mainContent.taxPrepDesc}</p>
                                    <ul className="check-list internationaltax-inner">
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>U.S. Business with Foreign Operations</span>
                                            <p>Ready to conquer the global stage? Our <b>international tax accountants</b> strengthen your global tax position with tailored insights and strategic planning to address your evolving needs.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Foreign Businesses</span>
                                            <p>Expanding into the U.S. provides access to the world's most lucrative market. With more than 25 years of experience operating in the U.S., we are uniquely equipped to provide expert guidance through its complex tax and regulatory landscape.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Foreign Income</span>
                                            <p>As a high-net-worth individual with foreign income,
                                                we help you avoid overpaying taxes or facing noncompliance risks. Our <b>international tax services</b> provide a proactive, comprehensive approach to optimize tax efficiency and safeguard your foreign income and assets.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Foreign Individuals with U.S. Business Activities</span>
                                            <p>Navigating the complex and ever-changing U.S. tax code can be challenging for resident aliens and international citizens with U.S. business activities. Rely on our expertise for insights and support to minimize tax liability and maintain full compliance with U.S. regulations.</p>
                                        </li>
                                    </ul>
                                    <ul className="check-list EstateAndTrustTax-inner">
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Estate Tax Planning </span>
                                            <p>We help you develop a robust strategy that minimizes your estate tax liabilities. This includes offering guidance on charitable giving.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Estate Tax Return </span>
                                            <p>Our team offers expertise in the preparation of estate tax returns. We will also help you navigate the requirements associated with estate tax filings.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Estate and Trust Income Tax Preparation </span>
                                            <p>You never again have to worry about the preparation and filing of your fiduciary income tax returns. We will take care of everything for you.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Trust Tax Return </span>
                                            <p>We prepare accurate tax returns for trusts. With us, you can count on compliance with all applicable tax laws. We also maximize deductions and credits.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Estate and Trust Accounting </span>
                                            <p>To protect your wealth, you need proper estate and trust accounting. Our accounting services will ensure you have proper recordkeeping to promote accurate financial reporting.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Estate and Trust Distribution </span>
                                            <p>We provide guidance on the optimal distribution of assets from both estates and trusts to beneficiaries. Our planning approach considers both the tax implications and the grantor's intentions.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Gift Tax Returns </span>
                                            <p>We report all transfers of assets to trusts or individuals using IRS Form 709.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Planning for Closely Held Businesses </span>
                                            <p>When you need tailored solutions for closely held businesses, we will help you minimize your tax liabilities and guarantee a smooth business succession.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className='tax-preparation-inner-right-text internationaltax-inner'>
                                    <h2 class="main-head">Have Your Own Personal Advisor</h2>
                                    <p class="text-desc">International tax requires tailored solutions, as a one-size-fits-all approach simply doesn’t work. That is why at Chawla & Associates, we pride ourselves on being your dedicated advisors in navigating international tax matters. You can choose from our team of experienced tax accountants to have a personal consultant by your side. That way, you will have an experienced <b>international tax accountants</b> on call to craft personalized strategies that are as unique as you.
                                        <br></br><br></br>Contact us today to learn more about having your own personal advisor from Chawla & Associates.
                                    </p>
                                </div>
                                <div className='tax-preparation-inner-right-text'>
                                    <h2 class="main-head">{contentData.mainContent.serviceTitle}</h2>
                                    <h4 className='sub-head internationaltaxprepration-inner'>Your success hasn’t come prepackaged, and neither should your tax strategies. </h4>
                                    <p class="text-desc">{contentData.mainContent.FinancialPartnerTitle}</p>

                                    <h4 class="sub-head internationaltax-inner">Business International Tax Services </h4>
                                    <p class="text-desc internationaltax-inner">Don’t let tax concerns hold back your business from expanding globally. Our <b>international tax services</b> provide the international tax insights, strategies, and techniques you need to succeed in international markets while remaining fully compliant.</p>
                                    <h4 class="sub-head EstateAndTrustTax-inner">You can come to us when you need:</h4>
                                    <h4 className='sub-head State-And-Local-Tax-inner'>You can trust us for:</h4>
                                    <ul className="check-list EstateAndTrustTax-list">
                                        {contentData.mainContent.services.map((service, index) => (
                                            <li key={index}>
                                                <IoCheckmarkSharp />
                                                <span>{service.title}</span>
                                                <p>{service.description}</p>
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-desc">{contentData.mainContent.servicesBottomText}</p>
                                </div>
                                <div className='tax-preparation-inner-right-text EstateAndTrustTax-inner'>
                                    <h2 class="main-head">Benefits of Estate and Trust Tax Planning </h2>
                                    <p class="text-desc">Proper <b>estate & trust tax</b> planning is the key to protecting your wealth. Chawla & Associates helps minimize your tax liabilities and ensure a lasting legacy for all your beneficiaries. Our team is dedicated to helping you realize these key benefits:</p>
                                    <ul className='check-list'>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Minimized Tax Liabilities </span>
                                            <p>Using innovative strategies, we will help reduce your tax liabilities. We achieve this by meticulously structuring your trust and implementing techniques that are tax-efficient. We help you preserve your wealth.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Preserve Trust Assets </span>
                                            <p>Through careful planning and preemptive management, we help preserve your trust assets and guarantee growth. Our team will identify and mitigate tax pitfalls. This allows your trust to maintain its value.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Compliance with Regulations and Tax Laws</span>
                                            <p>Our experience enables us to guarantee that your trust remains compliant with all tax laws and regulations. We will handle all the filings, documentation, and reporting to protect you from potential financial and legal consequences.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Maximize the Transfer of Wealth to Beneficiaries </span>
                                            <p>Through the implementation of effective strategies in trust taxation planning, we minimize tax liabilities, which allows more wealth to be distributed to loved ones.</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className='tax-preparation-inner-right-text internationaltax-inner'>
                                    <h2 class="main-head">Individual International Tax Services </h2>
                                    <p class="text-desc">Are you familiar with the process of reporting and paying taxes on foreign-held assets? Are you aware of all your tax obligations as a foreign national living in the U.S. or as an American residing abroad? Trust our <b>international tax accountant</b> to provide guidance and ensure you meet all your responsibilities.
                                    </p>
                                    <ul className="check-list internationaltax-inner">
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Pre-Immigration Planning </span>
                                            <p>Understand the tax implications of your planned migration to prevent unexpected expenses and ensure a smooth transition.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Expat Tax Compliance </span>
                                            <p>Holistic tax solutions designed for Americans living and working abroad. We simplify your international tax challenges with expert support.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>International Estate Planning </span>
                                            <p>Protect your legacy globally with borderless estate planning solutions that ensure tax efficiency and seamless compliance across jurisdictions.</p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Coordination with Service Firms</span>
                                            <p>Seamless coordination with professional service firms keeps your entire team aligned, regardless of your journey. We support your cross-border success.
                                            </p>
                                        </li>
                                        <li>
                                            <IoCheckmarkSharp />
                                            <span>Individual Taxpayer Identification Number (ITIN) </span>
                                            <p>Let us guide you through the documentation and application process for an ITIN, ensuring a smooth and accurate outcome tailored to your needs.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                                <div className='tax-preparation-inner-right-text internationaltax-inner'>
                                    <h2 class="main-head">International Tax Advisory – Chart Your Path to Global Success! </h2>
                                    <p class="text-desc">When your business moves to the global stage, you might have more tax questions than answers. Chawla & Associates will guide you through complex regulations and reporting requirements. We provide solutions, even for challenges you didn’t know existed.<br></br><br></br>
                                        Whether you are conducting business across borders or are an expatriate, trust us with your tax planning. We will demystify complicated tax laws and ensure you remain compliant with federal and state regulations. Our <b>international tax accountants</b> will help you avoid penalties and overpayments.
                                    </p>
                                </div>
                                <div className='tax-preparation-inner-right-text'>
                                    {/* <h3 class="sub-head">/ Financial Partner</h3> */}
                                    <h2 class="main-head">{contentData.mainContent.FinancialPartnerBoxesText}</h2>
                                    <div className='container p-0'>
                                        <div className='row'>
                                            {contentData.mainContent.FinancialPartnerBoxes.map((service, index) => (
                                                <div className='col-lg-12 col-md-12'>
                                                    <div className='FinancialPartnerboxes bgimg'>
                                                        <h3>{service.title}</h3>
                                                        <p>{service.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* tax-preparation end */}
        </div>
    </>
);

export default TaxPreparationContent;
