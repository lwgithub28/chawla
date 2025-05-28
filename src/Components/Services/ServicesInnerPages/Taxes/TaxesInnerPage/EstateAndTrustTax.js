import React from 'react';
import { Helmet } from "react-helmet";
import TaxPreparationContent from './ChildComponents';
import ContactForm from "../../../../CommonComp/ContactForm";
import Map from "../../../../CommonComp/Map"
import estateandtrusttax from "../../../../../Assests/Img/Estate And Trust Tax.webp";
import HappyClients from "../../../../../Assests/Img/HappyClients.webp";
import Experience from "../../../../../Assests/Img/Experience.webp";
import States from "../../../../../Assests/Img/States.webp";
const EstateAndTrustTax = () => {
    const contentData = {
        mainid: "EstateAndTrustTax",
        img: estateandtrusttax,
        banner: {
            title: "Estate & Trust Tax",
            subhead: "We enhance, protect, and preserve your financial legacy for years to come.",
            subtitle: (
                <>
                    Our Illinois-based firm is committed to offering the best <b>estate & trust tax</b> services to individuals and businesses nationwide. Our in-house team is made up of experts in estate, fiduciary, and trust tax laws. We have the expertise you need to create an estate plan that is effective in securing a long-term financial future.
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
                    alt: "Personalized Touch",
                    title: "Personalized Touch",
                    funfacthead: "Personalized Touch",
                    funfacttext: "Chawla & Associates is committed to forming lasting relationships with clients to better serve them with personalized solutions."
                },
                {
                    img: [Experience],
                    alt: "Decades of Experience ",
                    title: "Decades of Experience ",
                    funfacthead: "Decades of Experience ",
                    funfacttext: "With more than 25 years in the business, we have handled virtually any kind of estate and trust tax in the United States."
                },
                {
                    img: [States],
                    alt: "Protect Your Wealth ",
                    title: "Protect Your Wealth ",
                    funfacthead: "Protect Your Wealth ",
                    funfacttext: "Our estate and trust taxation planning will minimize tax liabilities, ensure a lasting legacy, and provide a smooth transition."
                }
            ],
            taxationTitle: "We Understand Fiduciary Tax Laws ",
            taxationDescription:
                (
                    <>
                        <b>Estate & trust tax</b> is not just for the one percent; it is important for everyone, especially if you have children, a spouse, or a business. With a strong grasp of estate and trust tax, we will help you develop an estate and trust plan that protects your wealth and minimizes the tax burden for you and the people you love.
                        <br></br><br></br>
                        Our firm has been helping clients like you for more than 25 years. We collaborate with attorneys, investment advisors, and other financial experts to develop long-term estate plans tailored to you. We also keep up with tax law changes that affect estate and trust tax preparation.
                        <br></br><br></br>
                        The beauty of working with Chawla & Associates is that you don’t deal with a different <b>tax accountant in Naperville</b> everytime you contact us. We focus on building lasting and beneficial professional relationships with you. One way of doing that is by assigning you one CPA to answer your calls and craft solutions that are unique to you.

                    </>
                ),
            taxPrepTitle: "Our Estate and Trust Services ",
            taxPrepDesc: (
                <>
                    To help you preserve your wealth, we use our experience and profound knowledge of estate and gift tax to develop a foolproof plan. We further offer a wide range of services to meet all your needs in <b>taxation of estate & trusts in Naperville</b>.
                </>
            ),
            serviceTitle: "A Trusted Partner in Estate & Tax Preparation ",
            // serviceTitleSubHead: "Your success hasn’t come prepackaged, and neither should your tax strategies.",
            FinancialPartnerTitle: (
                <>
                    Are you getting ready to transfer newly acquired or inherited wealth to beneficiaries? We’ve got your back. For decades, Chawla & Associates has been fine-tuning <b>estate & trust tax</b> planning to offer unmatched services that keep you and your loved ones safe.
                </>
            ),

            services: [
                {
                    title: "To allocate assets to children, spouses, charities, and trusts.",
                },
                {
                    title: "To review estate plans and trust tax situations to make sure you meet your financial goals.",
                },
                {
                    title: "To plan for business succession",
                },
                {
                    title: "Gift tax returns and strategies.",
                },
                {
                    title: "Estate tax returns.",
                },
                {
                    title: "Trust income tax returns.",
                },
                {
                    title: "Trust administration.",
                },
            ],
            FinancialPartnerBoxesText: "Estate & Trust Tax Experts",
            FinancialPartnerBoxes: [
                {
                    description:
                        (
                            <>
                                <b>When You Need Estate & Trust Tax Preparation, We’ve Got Your Back!</b>
                                <br></br><br></br>
                                If you don’t have an estate plan yet, it is not too late. Chawla & Associates is here to help. Contact us today and you will be glad you did.
                            </>
                        ),
                }
            ]
        }
    };

    return (
        <>
            <Helmet>
                <title>Advisors on Taxation of Estates & Trusts in Naperville</title>
                <meta name="description" content="As your trusted estate trust tax advisor, we will help you develop an estate and trust plan that protects your wealth and minimizes the tax burden." />
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

export default EstateAndTrustTax;