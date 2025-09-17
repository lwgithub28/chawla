import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from 'swiper/modules';
import "./Resaources.scss";
import { Link } from "react-router-dom";
import ContactForm from "../CommonComp/ContactForm";
import Map from "../CommonComp/Map";
import Banner from "../CommonComp/Banner";
import { LuArrowUpRight } from "react-icons/lu";
<<<<<<< HEAD
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";
import Documentsimg from "../../Assests/Img/Documents-img.webp";
import resourcesbanner from "../../Assests/Img/ResourcesBanner.webp";
import TaxGuide1 from "../../Assests/Img/Taxguide1.webp";
=======
import { MdArrowOutward } from "react-icons/md";
import Documentsimg from "../../Assests/Img/Documents-img.webp";
import resourcesbanner from "../../Assests/Img/ResourcesBanner.webp";
>>>>>>> 2bf065d (content added)
import ClientTaxOrganizer from "../../Assests/Img/ClientTaxOrganizer.webp";
import OtherResources from "../../Assests/Img/OtherResources.webp";
import boxesline from "../../Assests/Img/boxesline.webp";
import W4 from "../../Assests/Img/W4.webp";
import i9 from "../../Assests/Img/I9.webp";
// Import logos
import Logo1 from "../../Assests/Img/QuickBooks.webp";
import Logo2 from "../../Assests/Img/ShareFile-logo.webp";
import Logo3 from "../../Assests/Img/safesend-logo.webp";
import Logo4 from "../../Assests/Img/SurePrep-Logo.webp";
import Logo5 from "../../Assests/Img/thomsonreuters-logo.webp";
const logos = [
  { src: Logo1, className: "logo-style-1" },
  { src: Logo2, className: "logo-style-2" },
  { src: Logo3, className: "logo-style-3" },
  { src: Logo4, className: "logo-style-4" },
<<<<<<< HEAD
  { src: Logo5, className: "logo-style-5" },
  { src: Logo3, className: "logo-style-3" },
=======
  { src: Logo5, className: "logo-style-5" }
>>>>>>> 2bf065d (content added)
];
const Resaources = () => {
  const [activeId, setActiveId] = useState(1);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const calendarEvents = [
    {
      date: "2025-04-01",
      title: "1 April 2025",
      description:
        "Employers - Electronically file 2024 Form 1097, Form 1098, Form 1099 (other than those with an earlier deadline) and Form W-2G",
    },
    {
      date: "2025-04-10",
      title: "10 April 2025",
      description: "Individuals - Report March tip income of $20 or more to employers (Form 4070).",
    },
    {
      date: "2025-04-15",
      title: "15 April 2025",
      description: "Employers - Deposit nonpayroll withheld income tax for March if the monthly deposit rule applies.",
    },
    {
      date: "2025-04-15",
      title: "15 April 2025",
      description: "Employers - Deposit Social Security, Medicare and withheld income taxes for March if the monthly deposit rule applies.",
    },
    {
      date: "2025-04-15",
      title: "15 April 2025",
      description: "Calendar-year corporations - Pay the first installment of 2025 estimated income taxes, completing Form 1120-W for the corporation’s records.",
    },
    {
      date: "2025-04-15",
      title: "15 April 2025",
      description: "Calendar-year corporations - File a 2024 income tax return (Form 1120) or file for an automatic six-month extension (Form 7004). Pay any tax due.",
    },
    {
      date: "2025-04-15",
      title: "15 April 2025",
      description: "Calendar-year trusts and estates - File a 2024 income tax return (Form 1041) or file for an automatic five-and-a-half-month extension (Form 7004) (six-month extension for bankruptcy estates). Pay any income tax due.",
    },
    {
      date: "2025-04-15",
      title: "15 April 2025",
      description: "Household employers - File Schedule H, if wages paid equal $2,700 or more in 2024 and Form 1040 isn’t required to be filed. For those filing Form 1040, Schedule H is to be submitted with the return so is extended if the return is extended.",
    },
    {
      date: "2025-04-15",
      title: "15 April 2025",
      description: "Individuals - File a 2024 gift tax return (Form 709) or file for an automatic six-month extension (Form 8892). Pay any gift tax due. File for an automatic six-month extension (Form 4868) to extend both Form 1040 and Form 709 if no gift tax is due.",
    },
    {
      date: "2025-04-15",
      title: "15 April 2025",
      description: "Individuals - Make 2024 contributions to a SEP or certain other retirement plans (unless a 2024 income tax return extension is filed).",
    },
    {
      date: "2025-04-15",
      title: "15 April 2025",
      description: "Individuals - Make 2024 contributions to a traditional IRA or Roth IRA (even if a 2024 income tax return extension is filed).",
    },
    {
      date: "2025-04-15",
      title: "15 April 2025",
      description: "Individuals - File a 2024 income tax return (Form 1040 or Form 1040-SR) or file for an automatic six-month extension (Form 4868). (Taxpayers who live outside the United States and Puerto Rico or serve in the military outside these two locations are allowed an automatic two-month extension without requesting an extension.) Pay any tax due.",
    },
    {
      date: "2025-04-15",
      title: "15 April 2025",
      description: "Individuals - Pay the first installment of 2025 estimated taxes (Form 1040-ES) if not paying income tax through withholding or not paying sufficient income tax through withholding.",
    },
    {
      date: "2025-04-30",
      title: "30 April 2025",
      description: "Employers - Report Social Security and Medicare taxes and income tax withholding for first quarter 2025 (Form 941) and pay any tax due if all of the associated taxes due weren’t deposited on time and in full.",
    },
    {
      date: "2025-05-12",
      title: "12 May 2025",
      description: "Employers - Report Social Security and Medicare taxes and income tax withholding for first quarter 2025 (Form 941) if all associated taxes due were deposited on time and in full.",
    },
    {
      date: "2025-05-12",
      title: "12 May 2025",
      description: "Individuals - Report April tip income of $20 or more to employers (Form 4070).",
    },
    {
      date: "2025-05-15",
      title: "15 May 2025",
      description: "Calendar-year small exempt organizations (with gross receipts normally of $50,000 or less) - File a 2024 e-Postcard (Form 990-N) if not filing Form 990 or Form 990-EZ.",
    },
    {
      date: "2025-05-15",
      title: "15 May 2025",
      description: "Calendar-year exempt organizations - File a 2024 information return (Form 990, Form 990-EZ or Form 990-PF) or file for an automatic six-month extension (Form 8868). Pay any tax due.",
    },
    {
      date: "2025-05-15",
      title: "15 May 2025",
      description: "Calendar-year exempt organizations - File a 2024 information return (Form 990, Form 990-EZ or Form 990-PF) or file for an automatic six-month extension (Form 8868). Pay any tax due.",
    },
    {
      date: "2025-05-15",
      title: "15 May 2025",
      description: "Employers - Deposit nonpayroll withheld income tax for April if the monthly deposit rule applies.",
    },
    {
      date: "2025-05-15",
      title: "15 May 2025",
      description: "Employers - Deposit Social Security, Medicare and withheld income taxes for April if the monthly deposit rule applies.",
    },
    {
      date: "2025-06-10",
      title: "10 June 2025",
      description: "Individuals - Report May tip income of $20 or more to employers (Form 4070).",
    },
    {
      date: "2025-06-16",
      title: "16 June 2025",
      description: "Employers - Deposit nonpayroll withheld income tax for May if the monthly deposit rule applies.",
    },
    {
      date: "2025-06-16",
      title: "16 June 2025",
      description: "Employers - Deposit Social Security, Medicare and withheld income taxes for May if the monthly deposit rule applies.",
    },
    {
      date: "2025-06-16",
      title: "16 June 2025",
      description: "Calendar-year corporations - Pay the second installment of 2025 estimated income taxes, completing Form 1120-W for the corporation’s records.",
    },
    {
      date: "2025-06-16",
      title: "16 June 2025",
      description: "Individuals - Pay the second installment of 2025 estimated taxes (Form 1040-ES) if not paying income tax through withholding or not paying sufficient income tax through withholding.",
    },
    {
      date: "2025-06-16",
      title: "16 June 2025",
      description: "Individuals - File a 2024 individual income tax return (Form 1040 or Form 1040-SR) or file for a four-month extension (Form 4868) if you live outside the United States and Puerto Rico or you serve in the military outside those two locations. Pay any tax, interest and penalties due.",
    },
    {
      date: "2025-07-10",
      title: "10 July 2025",
      description: "Individuals - Report June tip income of $20 or more to employers (Form 4070).",
    },
    {
      date: "2025-07-15",
      title: "15 July 2025",
      description: "Employers - Deposit nonpayroll withheld income tax for June if the monthly deposit rule applies.",
    },
    {
      date: "2025-07-15",
      title: "15 July 2025",
      description: "Employers - Deposit Social Security, Medicare and withheld income taxes for June if the monthly deposit rule applies.",
    },
    {
      date: "2025-07-31",
      title: "31 July 2025",
      description: "Employers - File a 2024 calendar-year retirement plan report (Form 5500 or Form 5500-EZ) or request an extension.",
    },
    {
      date: "2025-07-31",
      title: "31 July 2025",
      description: "Employers - Report Social Security and Medicare taxes and income tax withholding for second quarter 2025 (Form 941) and pay any tax due if all of the associated taxes due weren’t deposited on time and in full.",
    },
    {
      date: "2025-08-11",
      title: "11 August 2025",
      description: "Individuals - Report July tip income of $20 or more to employers (Form 4070).",
    },
    {
      date: "2025-08-11",
      title: "11 August 2025",
      description: "Employers - Report Social Security and Medicare taxes and income tax withholding for second quarter 2025 (Form 941), if all associated taxes due were deposited on time and in full.",
    },
    {
      date: "2025-08-15",
      title: "15 August 2025",
      description: "Employers - Deposit nonpayroll withheld income tax for July if the monthly deposit rule applies.",
    },
    {
      date: "2025-08-15",
      title: "15 August 2025",
      description: "Employers - Deposit Social Security, Medicare and withheld income taxes for July if the monthly deposit rule applies.",
    },
    {
      date: "2025-09-10",
      title: "10 September 2025",
      description: "Individuals - Report August tip income of $20 or more to employers (Form 4070).",
    },
    {
      date: "2025-09-15",
      title: "15 September 2025",
      description: "Employers - Deposit nonpayroll withheld income tax for August if the monthly deposit rule applies.",
    },
    {
      date: "2025-09-15",
      title: "15 September 2025",
      description: "Employers - Deposit Social Security, Medicare and withheld income taxes for August if the monthly deposit rule applies.",
    },
    {
      date: "2025-09-15",
      title: "15 September 2025",
      description: "Calendar-year partnerships - File a 2024 income tax return (Form 1065 or Form 1065-B) and provide each partner with a copy of Schedule K1 (Form 1065) or a substitute Schedule K1 if an automatic six-month extension was filed.",
    },
    {
      date: "2025-09-15",
      title: "15 September 2025",
      description: "Calendar-year S corporations - Make contributions for 2024 to certain employer-sponsored retirement plans if an automatic six-month extension was filed.",
    },
    {
      date: "2025-09-15",
      title: "15 September 2025",
      description: "Calendar-year S corporations - File a 2024 income tax return (Form 1120-S) and provide each shareholder with a copy of Schedule K-1 (Form 1120S) or a substitute Schedule K-1 if an automatic six-month extension was filed. Pay any tax, interest and penalties due.",
    },
    {
      date: "2025-09-15",
      title: "15 September 2025",
      description: "Calendar-year corporations - Pay the third installment of 2025 estimated income taxes, completing Form 1120-W for the corporation’s records.",
    },
    {
      date: "2025-09-15",
      title: "15 September 2025",
      description: "Individuals - Pay the third installment of 2025 estimated taxes (Form 1040-ES), if not paying income tax through withholding or not paying sufficient income tax through withholding.",
    },
    {
      date: "2025-09-30",
      title: "30 September 2025",
      description: "Calendar-year trusts and estates - File a 2024 income tax return (Form 1041) if an automatic five-and-a-half-month extension was filed. Pay any tax, interest and penalties due.",
    },
    {
      date: "2025-10-10",
      title: "10 October 2025",
      description: "Individuals - Report September tip income of $20 or more to employers (Form 4070).",
    },
    {
      date: "2025-10-15",
      title: "15 October 2025",
      description: "Employers - Deposit nonpayroll withheld income tax for September if the monthly deposit rule applies.",
    },
    {
      date: "2025-10-15",
      title: "15 October 2025",
      description: "Employers - Deposit Social Security, Medicare and withheld income taxes for September if the monthly deposit rule applies.",
    },
    {
      date: "2025-10-15",
      title: "15 October 2025",
      description: "Calendar-year C corporations - Make contributions for 2024 to certain employer-sponsored retirement plans if an automatic six-month extension was filed.",
    },
    {
      date: "2025-10-15",
      title: "15 October 2025",
      description: "Calendar-year C corporations - File a 2024 income tax return (Form 1120) if an automatic six-month extension was filed. Pay any tax, interest and penalties due.",
    },
    {
      date: "2025-10-15",
      title: "15 October 2025",
      description: "Individuals - File a 2024 gift tax return (Form 709) and pay any tax, interest and penalties due if an automatic six-month extension was filed.",
    },
    {
      date: "2025-10-15",
      title: "15 October 2025",
      description: "Individuals - Make contributions for 2024 to certain existing retirement plans or establish and contribute to a SEP for 2024 if an automatic six-month extension was filed.",
    },
    {
      date: "2025-10-15",
      title: "15 October 2025",
      description: "Individuals - File a 2024 income tax return (Form 1040 or Form 1040-SR) if an automatic six-month extension was filed (or if an automatic four-month extension was filed by a taxpayer living outside the United States and Puerto Rico). Pay any tax, interest and penalties due.",
    },
    {
      date: "2025-10-15",
      title: "15 October 2025",
      description: "Calendar-year bankruptcy estates - File a 2024 income tax return (Form 1041) if an automatic six-month extension was filed. Pay any tax, interest and penalties due.",
    },
    {
      date: "2025-10-31",
      title: "31 October 2025",
      description: "Employers - Report Social Security and Medicare taxes and income tax withholding for third quarter 2025 (Form 941) and pay any tax due if all of the associated taxes due weren’t deposited on time and in full.",
    },
    {
      date: "2025-11-10",
      title: "10 November 2025",
      description: "Individuals - Report October tip income of $20 or more to employers (Form 4070).",
    },
    {
      date: "2025-11-10",
      title: "10 November 2025",
      description: "Employers - Report Social Security and Medicare taxes and income tax withholding for third quarter 2025 (Form 941) if all of the associated taxes due were deposited on time and in full.",
    },
    {
      date: "2025-11-17",
      title: "17 November 2025",
      description: "Calendar-year exempt organizations - File a 2024 information return (Form 990, Form 990-EZ or Form 990-PF) if a six-month extension was filed. Pay any tax, interest and penalties due.",
    },
    {
      date: "2025-11-17",
      title: "17 November 2025",
      description: "Employers - Deposit nonpayroll withheld income tax for October if the monthly deposit rule applies.",
    },
    {
      date: "2025-11-17",
      title: "17 November 2025",
      description: "Employers - Deposit Social Security, Medicare and withheld income taxes for October if the monthly deposit rule applies.",
    },
    {
      date: "2025-12-10",
      title: "10 December 2025",
      description: "Individuals - Report November tip income of $20 or more to employers (Form 4070).",
    },
    {
      date: "2025-12-15",
      title: "15 December 2025",
      description: "Employers - Deposit nonpayroll withheld income tax for November if the monthly deposit rule applies.",
    },
    {
      date: "2025-12-15",
      title: "15 December 2025",
      description: "Employers - Deposit Social Security, Medicare and withheld income taxes for November if the monthly deposit rule applies.",
    },
    {
      date: "2025-12-15",
      title: "15 December 2025",
      description: "Calendar-year corporations - Pay the fourth installment of 2025 estimated income taxes, completing Form 1120-W for the corporation’s records.",
    },
  ];
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const todayStr = formatDate(new Date());
  const handleMonthChange = (e) => {
    const newMonth = parseInt(e.target.value);
    const updatedDate = new Date(currentDate);
    updatedDate.setMonth(newMonth);
    setSelectedDate(null);
    setCurrentDate(updatedDate);
  };

  const changeMonth = (offset) => {
    const updatedDate = new Date(currentDate);
    updatedDate.setMonth(currentDate.getMonth() + offset);
    setSelectedDate(null);
    setCurrentDate(updatedDate);
  };
  const handleDayClick = (dateStr) => {
    const hasEvents = calendarEvents.some(event => event.date === dateStr);
    setSelectedDate(hasEvents ? dateStr : null);
  };

  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const eventDates = new Set(calendarEvents.map(event => event.date));
    const calendarDays = [];

    for (let i = 0; i < firstDay; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }
    for (let day = 1; day <= totalDays; day++) {
      const date = new Date(year, month, day);
      const formatted = formatDate(date);
      const isToday = formatted === todayStr;
      const hasEvent = eventDates.has(formatted);
      const isSelected = selectedDate === formatted;

      const classNames = ["calendar-day"];
      if (isToday) classNames.push("today");
      if (hasEvent) classNames.push("on-date");
      if (isSelected) classNames.push("selected");

      calendarDays.push(
        <div
          key={day}
          className={classNames.join(" ")}
          onClick={() => handleDayClick(formatted)}
        >
          {day}
        </div>
      );
    }

    return calendarDays;
  };
  const filteredEvents = selectedDate
    ? calendarEvents.filter(event => event.date === selectedDate)
    : calendarEvents.filter(event => {
      const eventDate = new Date(event.date);
      return (
        eventDate.getMonth() === currentDate.getMonth() &&
        eventDate.getFullYear() === currentDate.getFullYear()
      );
    });

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <>
      <Helmet>
        <title>Tax and Accounting Resources - CPA Naperville IL</title>
        <meta name="description" content="As a trusted tax accountant in Naperville IL, we want to keep you informed. Explore our CPA resources page for valuable insights on taxes, IRS changes, FAQs and more." />
      </Helmet>
      <div className="fraunces" id="Resaources-page">
        {/* about-banner start */}
        <Banner
          bannerImage={resourcesbanner}
          title="We are a hub for Tax, Accounting & Financial Insights"
          description="At Chawla & Associates, our CPA in Naperville provides more than just high-quality tax, accounting, and consulting services. We empower clients with knowledge and tools needed to succeed. Whether you are an individual, a small business or part of a growing brand, our resources will help you stay informed and prepared for the future."
          buttonText="Talk to Your CPA"
        />
        {/* about-banner end */}
        {/* ---------------- */}
        {/* logo slider start */}
        <section id="logo-slider" className="mobile-spacing tablet-spacing">
          <div className="container-fluid p-xs-0">
            <p className="trusted">
              Trusted by Business and Individuals around the world
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
                  <img src={logo.src}
                    alt={`Logo ${index + 1}`} className={`w-full  ${logo.className}`} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
        {/* logo slider end */}
        {/* --------------- */}
        {/* your appointment start */}
        <section id="your-appointment"
          className="mobile-spacing right-img-section tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-7 col-md-12 col-sm-12 left-text remove-spacing">
                <h3 className="sub-head">/ List of Documents</h3>
                <h2 className="main-head">
                  What To Bring For Your Appointment
                </h2>
                <p className="text-desc">Whether it’s your first time or just tax season prep, showing up with the right documents and questions can save time and money.
                  Use this quick checklist to get the most out of your meeting.</p>
                <ul className="check-list">
                  <li>
                    <span>Completed Tax Organizer</span>
                  </li>
                  <li>
                    <span>Previous Year’s Tax Return</span>
                  </li>
                  <li>
                    <span>W-2s and/or 1099s</span>
                  </li>
                  <li>
                    <span>Brokerage and Investment Statements</span>
                  </li>
                  <li>
                    <span>Form 1098 or Real Estate Documents</span>
                  </li>
                  <li>
                    <span>IRS or State Tax Notices</span>
                  </li>
                  <li>
                    <span>Schedule K-1 (For Business Owners or Partners)</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-12 col-sm-12 img remove-spacing">
                <img
                  src={Documentsimg}
                  alt="What To Bring For Your Appointment"
                  title="What To Bring For Your Appointment"
                  className="aboutusimg"
                ></img>
              </div>
            </div>
          </div>
        </section>
        {/* your appointment end */}
        {/* ----------------------- */}
        {/* our-services-resouces start */}
        <section id="our-services-resouces" className="mobile-spacing tablet-spacing">
          <div className="container-fluid remove-container-padding">
            <div className="top-heading-resources">
              <span class="text">
                <h3 class="sub-head">/ Our Services</h3>
                <h2 class="main-head">Come to the Tax Professionals</h2>
                <p className="text-desc remove-spacing">
                  Chawla & Associates is committed to helping our clients
                  achieve their business growth objectives. As strategic
                  business partners, we uniquely specialize in FBAR reporting,
                  use state-of-the-art cloud-based software and employ a
                  certified team as well as an IRS specialists.
                </p>
              </span>
            </div>
            <div className="container-fluid">
              <div className="row our-services-boxes">
                <div className="col-lg-6 col-md-12 col-xs-12 our-services-box-first remove-spacing">
                  <div className="our-services-box">
                    <div className="image">
                      <a href="/tax_organizer.pdf" target="_blank">
                        <img
                          src={ClientTaxOrganizer}
                          alt="Client Tax Organizer"
                          title="Client Tax Organizer"
                        ></img>
                      </a>
                    </div>
                    <div className="text">
                      <img
                        src={boxesline}
                        alt="boxesline"
                        title="boxesline"
                      ></img>
                      <a href="/tax_organizer.pdf" target="_blank"><h5>Client Tax Organizer</h5></a>
                      <p>
                        We can help create a hassle-free experience by ensuring
                        that your bookkeeping is accurate and your tax bill is
                        as low as possible.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-xs-12 our-services-box-second remove-spacing">
                  <div className="our-services-box">
                    <div className="image">
                      <Link to="/other-resources">
                        <img
                          src={OtherResources}
                          alt="Other Resources"
                          title="Other Resources"
                        ></img>
                      </Link>
                    </div>
                    <div className="text">
                      <img
                        src={boxesline}
                        alt="boxesline"
                        title="boxesline"
                      ></img>
                      <Link to="/other-resources"> <h5>Other Resources</h5></Link>
                      <p>
                        We can help create a hassle-free experience by ensuring
                        that your bookkeeping is accurate and your tax bill is
                        as low as possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section >
        {/* our-services-resouces end */}
        <section id="tax-calender" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <div className="top-middle-head">
                <h3 className="sub-head">/ Tax Calender</h3>
                <h2 className="main-head">Important dates</h2>
              </div>
            </div>
            <div className="row top-spacing tax-calender-outer">
              {/* Calendar */}
              <div className="col-lg-5 col-md-12 calender-outer remove-spacing">
                <div className="calender">
                  <div className="calendar-header">
                    <div className="top-header">
                      <span>
                        <h1>Calendar</h1>
                        <h2>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h2>
                      </span>
                      <span className="select-month">
                        <select
                          value={currentDate.getMonth()}
                          onChange={handleMonthChange}
                          className="month-selector"
                        >
                          {monthNames.map((name, idx) => (
                            <option key={idx} value={idx}>{name}</option>
                          ))}
                        </select>
                      </span>
                    </div>
                  </div>
                  <div className="calendar-grid">
                    {daysOfWeek.map((day) => (
                      <div key={day} className="calendar-day-name">{day}</div>
                    ))}
                    {generateCalendarDays()}
                  </div>
                </div>
              </div>

              {/* Event List */}
              <div className="event-list all-dates">
                {filteredEvents.length > 0 ? (
                  filteredEvents.map((event, idx) => (
                    <div key={idx} className="event-card dates">
                      <h4>{event.title}</h4>
                      <p>{event.description}</p>
                    </div>
                  ))
                ) : (
<<<<<<< HEAD
                  <p>No events found.</p>
=======
                  <p className="no-events">No events found.</p>
>>>>>>> 2bf065d (content added)
                )}
              </div>
            </div>
          </div>
        </section>
        {/* --------------- */}
        {/* faq start */}
        <section id="faq" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <div className="top-middle-head">
                <h3 className="sub-head">/ General FAQ</h3>
                <h2 className="main-head">Frequently Asked Questions</h2>
              </div>

              <div className="faq-accordion remove-spacing">
                <div className="row">
                  {/* First Column for the first half of the FAQ */}
                  <div className="col-lg-6 col-md-12">
                    <div className="accordion-container">
                      <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                              What happens after I complete my organizer?
                            </button>
                          </h2>
                          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <p>Once you’ve completed and submitted your organizer, you can expect an email from <a href="mailto:info@chawlacpa.com">info@chawlacpa.com</a> within 48 business hours. This email will include a link to schedule your tax appointment with one of our accountants.</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                              When can I expect my tax refund?
                            </button>
                          </h2>
                          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <p>The typical wait time for refund on a standard return is 1-2 weeks after IRS processes your tax return. However, refund may be delayed in some cases: 1. Your return is under review. 2. Your tax return is an amended tax return. 3. IRS is experiencing high volume of filings. For detailed status checking, please visit https://www.irs.gov/wheres-my-refund</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
<<<<<<< HEAD
                          <h2 class="accordion-header" id="headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              What should I do if I haven't received an appointment link?
                            </button>
                          </h2>
                          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <p>Please allow up to 48 business hours after submitting your organizer, as it may take some time to process. If you still haven’t received a scheduling link after that period, don’t hesitate to reach out to us at <a href="mailto:info@chawlacpa.com">info@chawlacpa.com</a>, and we’ll assist you right away.</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
=======
>>>>>>> 2bf065d (content added)
                          <h2 class="accordion-header" id="headingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                              What should I do if I haven't received an appointment link?
                            </button>
                          </h2>
                          <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <p>Please allow up to 48 business hours after submitting your organizer, as it may take some time to process. If you still haven’t received a scheduling link after that period, don’t hesitate to reach out to us at <a href="mailto:info@chawlacpa.com">info@chawlacpa.com</a>, and we’ll assist you right away.</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                              Why was an extension filed for my return?
                            </button>
                          </h2>
                          <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <p>At <a href="chawlacpa.com">chawlacpa.com</a>, we proactively file extensions as a precautionary measure to ensure our clients' tax returns are submitted on time. This is a standard practice in the accounting industry. Filing an extension does not mean you're required to use our services for tax filing. It simply gives you up to six additional months to file your return, while still giving you the option to file by the original deadline if you're ready. There is no penalty or downside—it’s simply a safeguard to give you more time and peace of mind.</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingSix">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                              Can I make changes to the organizer after I've submitted it?
                            </button>
                          </h2>
                          <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <p>Once your organizer has been submitted, the system does not allow any further edits due to technical restrictions. However, if you need to update any information, you can upload a Word document through the portal with the necessary corrections or additional details. Our team will review and incorporate the updates accordingly.</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingSeven">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                              How long will it take to complete my tax return after I submit my documents?
                            </button>
                          </h2>
                          <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <p>Typically, we complete tax returns within two to three weeks after receiving all required documents. Please note that this timeline may be extended if you upload additional documents later, as the review process would need to be restarted to include the new information.</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="headingEight">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                              Can I file my return in person?
                            </button>
                          </h2>
                          <div id="collapseEight" class="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                              <p>Yes, you absolutely can. When scheduling your appointment through our calendar, just make sure to select the option for an in-person meeting. We’ll be happy to assist you face-to-face.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second Column for the second half of the FAQ */}
                  <div className="col-lg-6 col-md-12">
                    <div className="accordion-container">
                      <div class="accordion" id="accordionFAQ">
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="faqHeadingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseOne" aria-expanded="true" aria-controls="faqCollapseOne">
                              How can I get a copy of my completed tax return?
                            </button>
                          </h2>
                          <div id="faqCollapseOne" class="accordion-collapse collapse" aria-labelledby="faqHeadingOne" data-bs-parent="#accordionFAQ">
                            <div class="accordion-body">
                              <p>You’ll receive a copy of your return via email once it's finalized. If you have access to the Onvio portal, your tax returns will also be available there for download anytime after logging in.</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="faqHeadingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseTwo" aria-expanded="false" aria-controls="faqCollapseTwo">
                              Why was my accountant changed this year?
                            </button>
                          </h2>
                          <div id="faqCollapseTwo" class="accordion-collapse collapse" aria-labelledby="faqHeadingTwo" data-bs-parent="#accordionFAQ">
                            <div class="accordion-body">
                              <p>At <a href="chawlacpa.com">chawlacpa.com</a>, we occasionally reassign accountants as part of our internal management and workload balancing process to ensure timely and efficient service. If you would prefer to continue working with your previous accountant, feel free to let your current accountant know, and we will do our best to accommodate your request.</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="faqHeadingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseThree" aria-expanded="false" aria-controls="faqCollapseThree">
                              I’m unable to e-sign because it says my SSN is incorrect. What should I do?
                            </button>
                          </h2>
                          <div id="faqCollapseThree" class="accordion-collapse collapse" aria-labelledby="faqHeadingThree" data-bs-parent="#accordionFAQ">
                            <div class="accordion-body">
                              <p>Sometimes the identity verification system may encounter technical issues. If you’re unable to complete your e-signature, please email us at <a href="mailto:info@chawlacpa.com">info@chawlacpa.com</a> . We’ll promptly send you a PDF version of your tax return so you can sign it manually.</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="faqHeadingFour">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseFour" aria-expanded="false" aria-controls="faqCollapseFour">
                              When is the tax filing deadline?
                            </button>
                          </h2>
                          <div id="faqCollapseFour" class="accordion-collapse collapse" aria-labelledby="faqHeadingFour" data-bs-parent="#accordionFAQ">
                            <div class="accordion-body">
                              <p>The standard tax filing deadline is April 15 for individual and corporate taxpayers, and March 15 for partnership and S-Corporation filers, as long as those dates fall on business days. If needed, an extension can be filed, which grants an additional six months to complete and file your return.</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="faqHeadingFive">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseFive" aria-expanded="false" aria-controls="faqCollapseFive">
                              What documents do I need to submit for my tax return?
                            </button>
                          </h2>
                          <div id="faqCollapseFive" class="accordion-collapse collapse" aria-labelledby="faqHeadingFive" data-bs-parent="#accordionFAQ">
                            <div class="accordion-body">
                              <p>Please refer to the tax organizer provided by <a href="mailto:info@chawlacpa.com">info@chawlacpa.com</a> for guidance. Generally, you'll need to upload tax forms such as Form W-2, Form 1099, and documentation related to business income and expenses (like a profit and loss statement), among others.</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="faqHeadingSix">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseSix" aria-expanded="false" aria-controls="faqCollapseSix">
                              What happens if I miss the tax filing deadline?
                            </button>
                          </h2>
                          <div id="faqCollapseSix" class="accordion-collapse collapse" aria-labelledby="faqHeadingSix" data-bs-parent="#accordionFAQ">
                            <div class="accordion-body">
                              <p>If you’ve missed the deadline, contact your accountant at <a href="chawlacpa.com">chawlacpa.com</a> immediately. The IRS may assess penalties and interest for late filing, but timely communication with your accountant can help minimize potential issues.</p>
                            </div>
                          </div>
                        </div>
                        <div class="accordion-item">
                          <h2 class="accordion-header" id="faqHeadingSeven">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqCollapseSeven" aria-expanded="false" aria-controls="faqCollapseSeven">
                              What should I do if I receive a letter from the IRS?
                            </button>
                          </h2>
                          <div id="faqCollapseSeven" class="accordion-collapse collapse" aria-labelledby="faqHeadingSeven" data-bs-parent="#accordionFAQ">
                            <div class="accordion-body">
                              <p>If you receive a notice from the IRS, please send it to your accountant. They will review the letter and advise you on the appropriate next steps.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ end */}
        {/* ----------------------- */}
        {/* New Employee Forms start */}
        <section id="our-services-resouces" className="New-Employee-Forms mobile-spacing tablet-spacing">
          <div className="container-fluid remove-container-padding">
            <div className="top-heading-resources">
              <span class="text">
                <h3 class="sub-head">/ Employee Forms</h3>
                <h2 class="main-head">New Employee Forms</h2>
                <p className="text-desc remove-spacing">
                  The New Employment Form in the USA is a standardized document used by employers to collect essential information from newly hired employees. This form typically includes personal details, tax withholding preferences (such as the IRS W-4 form), employment eligibility verification (I-9 form), direct deposit information, and other necessary data required to initiate payroll and ensure compliance with federal and state labor laws. Proper completion of this form is crucial to a smooth onboarding process and legal employment documentation.
                </p>
              </span>
            </div>
            <div className="container-fluid">
              <div className="row our-services-boxes tablet-spacing">
                <div className="col-lg-6 col-md-12 col-xs-12 our-services-box-first remove-spacing">
                  <div className="our-services-box">
                    <div className="image">
                      <a href="/fw4.pdf" data-discover="true" target="_blank">
                        <img
                          src={W4}
                          alt="W4"
                          title="W4"
                        ></img>
                      </a>
                    </div>
                    <div className="text">
                      <img
                        src={boxesline}
                        alt="boxesline"
                        title="boxesline"
                      ></img>
                      <a href="/fw4.pdf" data-discover="true" target="_blank"> <h5>W4</h5></a>
                      <p>
                        The IRS W-4 Form lets employees tell their employer how much federal income tax to withhold from their paycheck. It helps ensure the right amount is taken out based on personal tax situations.
                      </p>

                      <a class="short-button" href="/fw4.pdf" data-discover="true" target="_blank">
                        <LuArrowUpRight />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-xs-12 our-services-box-second remove-spacing">
                  {" "}
                  <div className="our-services-box">
                    <div className="image">
                      <a href="/i9.pdf" data-discover="true" target="_blank">
                        <img
                          src={i9}
                          alt="i9"
                          title="i9"
                        ></img>
                      </a>
                    </div>
                    <div className="text">
                      <img
                        src={boxesline}
                        alt="boxesline"
                        title="boxesline"
                      ></img>
                      <a href="/i9.pdf" data-discover="true" target="_blank"><h5>I9</h5></a>
                      <p>
                        The I-9 Form is used to verify an employee’s identity and legal authorization to work in the United States. Both the employee and employer must complete it.
                      </p>
                      <a class="short-button" href="/i9.pdf" data-discover="true" target="_blank">
                        <LuArrowUpRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* New Employee Forms end */}
        {/* ------------ */}
        {/* connect with us start */}
        <section id="connect-with-us" className="bgimg mobile-spacing tablet-spacing">
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
        {/* ------------------ */}
        {/* get in touch start */}
        <ContactForm />
        {/* get in touch end */}
        {/* ------------------ */}
        {/* map start */}
        <Map />
        {/* map end */}
      </div >
    </>
  );
};

export default Resaources;
