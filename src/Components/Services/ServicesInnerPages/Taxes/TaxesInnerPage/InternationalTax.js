import React from 'react';
import { Helmet } from "react-helmet";
import TaxPreparationContent from './ChildComponents';
import ContactForm from "../../../../CommonComp/ContactForm";
import Map from "../../../../CommonComp/Map"
import internationaltax from "../../../../../Assests/Img/International Taxes.webp";
import HappyClients from "../../../../../Assests/Img/HappyClients.webp";
import Experience from "../../../../../Assests/Img/Experience.webp";
import States from "../../../../../Assests/Img/States.webp";
const InternationalTax = () => {
    const contentData = {
        mainid: "InternationalTax",
        img: internationaltax,
        banner: {
            title: "International Taxes",
            subhead: "Your Trusted Partner in International Tax Compliance",
            subtitle:
                (
                    <>
                        Whether you unlock a world of opportunities or a world of hurt depends on how effectively you navigate the complex tax requirements of doing business across borders. Partnering with Chawla & Associates ensures your business can grow anywhere, supported by the most experienced <b>international tax accountants</b> in the industry.
                    </>
                ),

        },
        sidebar: {
            title: "Taxes Preparation",
            AllBtn: [
                { className: "Income-Tax-Preparation", links: "Income Tax Preparation", servicelink: "/services/taxes/income-tax-preparation" },
                { className: "Business-Tax-Preparation", links: "Business Tax Preparation", servicelink: "/services/taxes/business-tax-preparation" },
                { className: "State-Local-Taxes", links: "State & Local Taxes", servicelink: "/services/taxes/state-local-tax" },
                { className: "IRS-Representation", links: "IRS Representation", servicelink: "/services/taxes/IRS-representation" },
                { className: "International-Taxes", links: "International Taxes", servicelink: "/services/taxes/international-tax" },
                { className: "Estate-Trust-Taxes", links: "Estate & Trust Taxes", servicelink: "/services/taxes/estate-trust-tax" },
            ],
            contactTitle: "We're here to help!",
            contactDescription: "Smart tax solutions optimize compliance and savings quarterly."
        },
        mainContent: {
            funfactData: [
                {
                    img: [HappyClients],
                    funfacthead: "Cross-border transactions and structuring",
                    funfacttext: "Our international tax accountants assist businesses with cross-border tax strategies, ensuring compliance, optimizing savings, and supporting seamless business transitions."
                },
                {
                    img: [Experience],
                    funfacthead: "Enhance Your Global Tax Profile",
                    funfacttext: "With ever-evolving tax regulations and rising compliance demands, we combine expertise, advanced technology, and tailored processes to help you stay ahead. "
                },
                {
                    img: [States],
                    funfacthead: "Global Research",
                    funfacttext: "We identify and match relevant government programs—such as grants, tax credits, and subsidies—to your business, ensuring maximum benefits and streamlined execution."
                }
            ],
            // -------------------
            taxationTitle: "Focused on Building a Global Connection",
            taxationDescription:
                (
                    <>
                        Chawla & Associates understands how overwhelming it can be to navigate the ever-changing <b>international tax environment</b>. Our international tax services are designed to provide the guidance and professional expertise your business needs. Whether you are expanding your business to offshore markets or venturing into the U.S., we have the knowledge and experience to help you increase efficiency and achieve your business goals.
                    </>
                ),
            taxationDescriptionList: [
                {
                    title: "Errors in your tax return",
                },
                {
                    title: "Unreported income",
                },
                {
                    title: "Excessive donations",
                },
                {
                    title: "Reporting significant losses",
                },
                {
                    title: "Unusually consistent figures in your filing",
                },
                {
                    title: "Home office deductions",
                },
                {
                    title: "Large volumes of claimed work expenses",
                }
            ],
            // ------------------
            taxPrepTitle: "Where Do You Want to Go Next?",

            //     },
            // ],
            taxPrepDesc: (
                <>
                    Expanding to an international market opens doors to countless opportunities, but complying with the multiple layers of taxation can be a challenge. Chawla & Associates ensures that venturing across borders feels worthwhile. Our in-house team combines deep international tax proficiency with an understanding of what makes your business unique. This enables us to help you thrive.
                    <br></br><br></br>
                    Cross-border transactions don’t have to feel overwhelming. Let us translate the global economy into new opportunities. Whether your goal is to enter the U.S. market, expand your domestic business internationally, or manage foreign income, we will help you find the best tax solutions.
                </>
            ),
            serviceTitle: "International Tax Services – Feel at Home Wherever Your Business Takes You",
            // serviceTitleSubHead: "You can trust us for:",
            FinancialPartnerTitle: (
                <>
                    Chawla & Associates specializes in reducing tax liability for multinational businesses and American citizens working abroad. As experienced <b>international tax accountants</b>, our team is well-versed in current tax laws and their implications on cross-border business ventures.
                    <br></br><br></br>
                    Whatever services you need, our accountants will develop personalized tax plans tailored to your goals and explain them in a way you can easily understand..
                </>
            ),
            serviceTitleSmallHead: "Business International Tax Services ",

            services: [
                {
                    title: "Transfer Pricing",
                    description: "Enhance profitability and streamline accounting operations across your organization with tailored strategies designed for lasting success."
                },
                {
                    title: "International Business ",
                    description:
                        (
                            <>
                                Achieve optimal financial performance and efficiency at every level with our international tax consulting services.
                            </>
                        ),
                },
                {
                    title: "International Tax Compliance",
                    description:
                        (
                            <>
                                Focus on running your business while we handle all your compliance requirements at every stage.
                            </>
                        ),
                },
                {
                    title: "International Tax Risk Advisory",
                    description:
                        (
                            <>
                                Reduce exposure and minimize risks with our proactive, informed tax support.
                            </>
                        ),
                },
                {
                    title: "Back-Office Services",
                    description:
                        (
                            <>
                                Take advantage of a full range of back-office support when entering the U.S. market.
                            </>
                        ),
                },
                {
                    title: "IP Migration Services",
                    description:
                        (
                            <>
                                Reap the benefits of a strategically planned tax approach for your intangible property.
                            </>
                        ),
                },
            ],
            FinancialPartnerBoxesText: "We are Here to Help",
            FinancialPartnerBoxes: [
                {
                    description:
                        (
                            <>
                                From cross-border transaction guidance to tax reporting, withholding, and planning, our experts are ready to collaborate with you. We provide the insight, analysis, and support you need to develop an efficient strategy.
                                <br></br><br></br>Contact us today to learn more about our <b>international tax services</b>.
                            </>
                        ),
                }
            ]
        }
    };

    return (
        <>
            <Helmet>
                <title>Your Trusted International Tax Accountant </title>
                <meta name="description" content="Our international tax services help businesses and global families with tax planning strategies to minimize their worldwide tax obligations." />
            </Helmet>
            <div className='fraunces'>
                {/* Tax-Preparation-page-start */}
                <TaxPreparationContent contentData={contentData} />
                {/* Tax-Preparation-page-end */}
                <ContactForm />
                <Map />
            </div>
        </>
    );
};

export default InternationalTax;