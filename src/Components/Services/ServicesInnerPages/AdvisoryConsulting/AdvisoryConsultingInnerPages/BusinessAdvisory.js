import React from 'react';
import { Helmet } from "react-helmet";
import ContactForm from '../../../../CommonComp/ContactForm';
import Map from '../../../../CommonComp/Map';
import AdvisoryConsultingContent from './ChildComponents';
import DiscoveryInitialConsultation from "../../../../../Assests/Img/Discovery-Initial-Consultation.webp";
import ComprehensiveAnalysisBusinessAssessment from "../../../../../Assests/Img/Comprehensive-Analysis-Business-Assessment.webp";
import StrategicPlanningCustomizedSolutions from "../../../../../Assests/Img/Strategic-Planning-Customized-Solutions.webp";
import BusinessAdvisoryServices from "../../../../../Assests/Img/BusinessAdvisoryInner.webp";
const BusinessAdvisory = () => {
    const contentData = {
        mainid: "BusinessAndAdvisory",
        img: BusinessAdvisoryServices,
        banner: {
            title: "Business Advisory",
            subtitle: "Conventional public accounting services help businesses evaluate the past and present. With our business advisory services in Naperville, we think about your future and arm you with the tools you need to thrive. At Chawla & Associates, we believe that long-term growth is dependent on effective business planning and results tracking. We use your vision as the foundation of our services."
        },
        sidebar: {
            title: "Advisory & Consulting",
            AllBtn: [
                { className: "Business-Advisory", links: "Business Advisory", servicelink: "/services/advisory-consulting/business-advisory" },
                { className: "CFO", links: "CFO", servicelink: "/services/advisory-consulting/CFO" },
                { className: "Controllership-Services", links: "Controllership Services", servicelink: "/services/advisory-consulting/controllership-services" },
                { className: "Succession-Planning", links: "Succession Planning", servicelink: "/services/advisory-consulting/succession-planning" },
                { className: "Tax-Financial-Planning", links: "Tax & Financial Planning", servicelink: "/services/advisory-consulting/tax-financial-planning" },
                { className: "MA-Strategy", links: "M&A Strategy", servicelink: "/services/advisory-consulting/M&A-strategy" },
            ],
        },
        TexthreePoints: [
            {
                title: "Comprehensive Services",
                description: "We offer a full range of business advisory services so you never have to juggle multiple consultants to meet your goals.",
            },
            {
                title: "Decades of Experience",
                description: "Our firm has been in business for over 25 years. We have seen it all and will offer the best support to empower you.",
            },
            {
                title: "We Grow With You",
                description: "We are dedicated to your growth, treating your business as if it were our own. Your success is ours.",
            },
        ],
        Growth: {
            title: "A Partner in Your Business Growth",
            description: "Our business advisors in Naperville IL have the experience and resources to support your business in a variety of situations. Whether you are looking to optimize and grow or are experiencing underperformance, we’ve got you covered. We put ourselves in your shoes and guide you through financial complexities to drive meaningful change.",
        },
        faqData: [
            {
                id: "collapseOne",
                heading: "headingOne",
                number: "01",
                title: "Business Advisory for Struggling Firms",
                content:
                    (<>We offer business advisory services in Naperville for businesses that are facing financial pressure or underperforming. Our business advisors analyze the root cause of the issues while providing pragmatic, time-sensitive solutions and help with the implementation of long-term plans. <br></br><br></br>With years of experience in accounting and business advisory, our team can provide light-touch and more involved support. </>),
            },
            {
                id: "collapseTwo",
                heading: "headingTwo",
                number: "02",
                title: " Business Advisory to Support Business Growth",
                content:
                    (<>
                        Our business advisors in Naperville Il can recommend optimization, strategic delivery plans and operational efficiency improvements to help your business achieve bigger goals. At Chawla & Associates, we offer data analytics solutions, cutting-edge ideas and target operating models to grow your business. <br></br><br></br>With situational experience in both growth and transformation, we combine our sector knowledge to create solutions that maximize opportunities.</>),
            },
            {
                id: "collapseThree",
                heading: "headingThree",
                number: "03",
                title: "Business Advisory to Make a Business Sale Successful",
                content:
                    (<>Our advisory services are invaluable when getting ready to exit your business. Our advisors will work with you to ensure the right decisions are made and you receive maximum value for your business. Our exit-readiness process ensures you have everything you need to make your business enticing to prospective buyers.
                        <br></br><br></br>We also help you fill in possible gaps, rectify potential points of contentions and make the sale process as quick as possible.</>),
            },
            {
                id: "collapseFour",
                heading: "headingFour",
                number: "04",
                title: "Business Advisory for Tax Planning",
                content: (<>We are tax experts. We will go beyond tax minimization to offer a comprehensive strategy that reduces your taxes and helps you build wealth and boost your return on investment. Our business advisors will align your tax strategy with your short-term and long-term goals.<br></br><br></br>We proactively manage your tax strategy to support your vision and maximize growth.</>),
            },
        ],
        SolutionsContent: {
            Title: "Our Comprehensive Business Advisory Solutions",
            description: "In the face of new opportunities or unique circumstances, businesses often need advice and guidance. At Chawla & Associates, we take it upon ourselves to offer the resources, objectivity and experience needed to navigate critical and complex decisions. Our business advisors in Naperville IL are the outside advisors you need to understand your legal and business environment.",
        },
        Solutions: [
            { id: "01", title: "Ownership Succession Planning", description: "We offer tailored advisory services that are focused on ownership transition. Our goal here is to guarantee business continuity with new ownership or across generations." },
            { id: "02", title: "Management Succession Planning", description: "We help you develop short-term and long-term management succession plans as well as transition strategies. Our advisors will further help with the execution of these plans and strategies." },
            { id: "03", title: "Tactical Planning & Management", description: "We provide comprehensive planning and management services aimed at helping businesses develop clear, actionable strategies to achieve their long-term goals and improve their overall performance. " },
            { id: "04", title: "Business Restructuring", description: "Our business restructuring Service involves strategic initiatives to reorganize a business’s operations, assets and financial structure to enhance profitability, unlock value for the stakeholders and mitigate risks." },
            { id: "05", title: "Crisis and Conflict Management", description: "Our team offers internal and external mediation and conflict management services. Our focus is minimizing risks and preserving your business’ value." },
            { id: "06", title: "Strategic Communications", description: "We offer advisory and develop internal and external communication strategies during transitions and other non-recurring events." }
        ],
        ProcessContent: {
            title: "Our Business Advisory Approach",
            description: "As a firm that is committed to building lasting professional relationships with our clients, we sit at the intersection of legal, management consulting and general advisory. "
        },
        processSteps: [
            {
                imgSrc: DiscoveryInitialConsultation,
                alt: 'Initial Consultation',
                title: 'Initial Consultation',
                description: 'Our business advisors in Naperville Il start by assessing your business circumstances through thoughtful communication. '
            },
            {
                imgSrc: ComprehensiveAnalysisBusinessAssessment,
                alt: 'Expert Recommendations',
                title: 'Expert Recommendations',
                description: 'After a thorough consultation, we offer suggestions and provide outcomes that meet and exceed your expectations. '
            },
            {
                imgSrc: StrategicPlanningCustomizedSolutions,
                alt: 'Implementation ',
                title: 'Implementation ',
                description: 'Our expert team will work with you to help your business develop forward-thinking solutions that help you excel.'
            }
        ],
        askus: {
            id: "ask-us",
            title: "Have Business Advisory Questions? Ask Us",
            description:
                "From business turnaround to transformation and optimization, our business advisory services cover a broad spectrum. Contact us today and let us answer your questions.",

        },
    }
    return (
        <>
            <Helmet>
                <title>Reliable Business Advisory Services in Naperville  </title>
                <meta name="description" content="Our business advisors in Naperville help with the complete lifecycle of your business from inception to maintenance and growth to exit planning. " />
            </Helmet>
            <div className='fraunces'>
                {/* Tax-Preparation-page-start */}
                <AdvisoryConsultingContent contentData={contentData} />
                {/* Tax-Preparation-page-end */}
                <ContactForm />
                <Map />
            </div>

        </>
    )
}

export default BusinessAdvisory

