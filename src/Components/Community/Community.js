import React, { useState } from "react";
import "./Community.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { tabContent, tabData } from "../../Components/Data";
import { LuArrowUpRight } from "react-icons/lu";
import Banner from "../CommonComp/Banner";
import Communitybanner from "../../Assests/Img/community.webp";
import CommunityAbout from "../../Assests/Img/community-about.webp";
import quote from "../../Assests/Img/quote.webp";
import Ourlegacyinitiative from "../../Assests/Img/Our-legacy-initiative.webp";
import PunjabAgriculturalRejuvenationInitiative from "../../Assests/Img/Punjab Agricultural Rejuvenation Initiative.webp";
import DheeanPukardian from "../../Assests/Img/Dheean-Pukardian.webp";
import TylermanFilmFestival from "../../Assests/Img/Tylerman-Film-festival.webp";
import UnityPartnership from "../../Assests/Img/Unity-Partnership.webp";
import bettereveryday from "../../Assests/Img/communityImg3.webp";
import QuadCountyAfricanAmericanChamberofCommerce from "../../Assests/Img/Quad-County-African-American-Chamber-of-Commerce.webp";
import MartinLuther from "../../Assests/Img/Dr. Martin Luther King Jr. Advisory Committee.webp";
import trueGrowth from "../../Assests/Img/true-growth.webp";
import logo1 from "../../Assests/Img/logo1.webp";
import logo2 from "../../Assests/Img/logo2.webp";
import logo3 from "../../Assests/Img/logo3.webp";
import logo4 from "../../Assests/Img/logo4.webp";
import logo5 from "../../Assests/Img/logo5.webp";
import logo6 from "../../Assests/Img/logo6.webp";
import together from "../../Assests/Img/together.webp";
import CitizensAppreciatePubliceSafety from "../../Assests/Img/Citizens-Appreciate-Publice-Safety.webp";
import ObamaLegacyInitiative from "../../Assests/Img/Obama-Legacy-Initiative.webp";
import ForBestCommunitywork from "../../Assests/Img/For-Best-Community-work.jpg";
<<<<<<< HEAD

=======
import ThirdBanner from "../../Assests/Img/third-banner.webp";
>>>>>>> 2bf065d (content added)
const Community = () => {
  const funFacts = [
    "Honey never spoils.",
    "Bananas are berries, but strawberries aren’t.",
    "Octopuses have three hearts.",
    "A day on Venus is longer than a year on Venus.",
    "Water can boil and freeze at the same time.",
  ];
  const [factIndex, setFactIndex] = useState(0);
  const [count, setCount] = useState(0);

  const getNextFact = () => {
    setFactIndex((prevIndex) => (prevIndex + 1) % funFacts.length);
    setCount((prevCount) => prevCount + 1);
  };
  // Set default active tab to first item in tabData
  const [activeTab, setActiveTab] = React.useState(tabData[0].id);
  return (
    <>
      <Helmet>
        <title>Chawla & Associates Community Involvement</title>
        <meta
          name="description"
          content="As the best CPA in Naperville, we support our community through volunteer work, partnerships with non-profit organizations, and a commitment to social responsibility."
        />
      </Helmet>

      <div className="fraunces" id="community">
        {/* about-banner start */}
        <Banner
          bannerImage={Communitybanner}
          title="changing today for a better tomorrow"
          description="As the best CPA in Naperville, we proudly support our community through volunteer work, supporting non-profit organizations and upholding our commitment to social responsibility. We take great pride in making positive impacts in the communities we serve and beyond."
          buttonText="Talk to Your CPA"
        />
        {/* about-banner end */}
        {/* =================== */}
        {/* community-about start */}
        <section
          id="community-about"
          className="bgimg mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-5 col-md-12 Community-About-img p-xs-0">
                <img
                  src={CommunityAbout}
                  alt="Roger Chawla"
                  title="Roger Chawla"
                  loading="lazy"
                ></img>
              </div>
              <div className="col-lg-7 col-md-12 p-xs-0 padding-md-0 community-about-text-outer">
                <div className="community-about-text">
                  <img src={quote} alt="quote" title="quote"></img>
                  <div className="community-text">
                    <p className="text-desc">
                      We build a true sense of community when we work together.
                      Whether it is donating money to charitable organizations,
                      offering our time for the service of others or mentoring
                      the next generation of leaders, every action brings us
                      closer to making the world a better place to live in.
                      Let’s keep making a positive difference, one step at a
                      time.
                    </p>
                    <p className="text-desc">
                      The Chawla & Associates CPAs Community Foundation is
                      dedicated to nurturing an environment where everyone has
                      access to the opportunities and resources needed to
                      succeed. Our vision is to build a more inclusive and
                      impactful future for all.
                    </p>
                  </div>
                  <div className="communnity-about-name">
                    <div className="name-designation">
                      <h3>roger chawla</h3>
                      <p>CPA & Founder</p>
                    </div>
                    <div className="quote">
                      <img src={quote} alt="quote" title="quote"></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* community-about end */}
        {/* ========================= */}
        {/* Partnerships-with-Impact start */}
        <section
          id="Partnerships-with-Impact"
          className="mobile-spacing tablet-spacing"
        >
          <div className="container-fluid p-xs-0 padding-md-0">
            <h3 class="sub-head">/ Partnerships with Impact </h3>
            <h2 class="main-head">our strategy & partnerships</h2>
            <p className="text-desc">
              At Chawla & Associates, we believe in good corporate citizenship.
              This means being an active part of the community, showing support
              for community initiatives and bringing people together. Our job as
              a consulting firm may be taking care of the financial health of
              our clients but this is not the only health that is important to
              us. We believe in uplifting our community.
              <br></br>
              <br></br>
              Community health is the foundation of unity and growth. At Chawla
              & Associates, we deeply value the power of building each other up
              to nurture a thriving and healthy community. To date, our firm has
              proudly contributed over $500,000 to support charitable
              organizations both locally and globally. We have also given over
              3,500 hours to service organizations and not for profit. This
              furthers our commitment to creating a meaningful and lasting
              impact in the community.
            </p>
            <div className="row Partnerships-with-Impact-boxes">
              <div className="col-lg-4 col-md-6 icon-box icon-box-left">
                <img
                  src={Ourlegacyinitiative}
                  alt="Our Legacy Initiative"
                  title="Our Legacy Initiative"
                ></img>
                <div className="icon-box-content">
                  <h4>Our Legacy Initiative</h4>
                  <p>
                    We take immense pride in the Our Legacy Initiative, a
                    tribute to our fallen heroes and first responders. This
                    extraordinary project transcends all of us, serving as a
                    powerful way to honor their sacrifices. Through this
                    initiative, we not only pay homage to our heroes but also
                    feed our community and inspire our youth through education
                    and support.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box icon-box-middle">
                <img
                  src={PunjabAgriculturalRejuvenationInitiative}
                  alt="Pagri.org"
                  title="Pagri.org"
                ></img>
                <div className="icon-box-content">
                  <h4>Pagri.org</h4>
                  <p>
                    Pagri is dedicated to enhancing farmers' incomes through
                    education, facilitation, and marketing support in farming
                    and agricultural processing. We proudly support this
                    organization to ensure its continued success in promoting
                    better agricultural practices, integrated farming, organic
                    farming, and food processing. Together, we aim to empower
                    farmers and drive sustainable growth in the agricultural
                    sector.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box icon-box-right">
                <img
                  src={DheeanPukardian}
                  alt="Dheeanpukardian.org"
                  title="Dheeanpukardian.org"
                ></img>
                <div className="icon-box-content">
                  <h4>Dheeanpukardian.org</h4>
                  <p>
                    The dreams of women today lay the foundation for a brighter
                    tomorrow. We are honored to be part of the Dheean Pukardian.
                    Established in 2011, this remarkable organization is
                    committed to stopping feticide in India. It tackles the root
                    causes through education and empowers underprivileged girls
                    by sponsoring their education; giving them the head start
                    they deserve to build a promising future.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box icon-box-left">
                <img
                  src={TylermanFilmFestival}
                  alt="Tylerman Film Festival"
                  title="Tylerman Film Festival"
                ></img>
                <div className="icon-box-content">
                  <h4>Tylerman Film Festival</h4>
                  <p>
                    We are proud supporters of the Tylerman Film Festival, an
                    incredible platform for independent filmmakers who bring
                    attention to the challenges and triumphs of the African
                    American community. The festival fosters understanding,
                    inspires change as well as amplifies underrepresented voices
                    through creativity and storytelling. We are proud to be part
                    of this initiative.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box icon-box-left">
                <img
                  src={UnityPartnership}
                  alt="Unity Partnership"
                  title="Unity Partnership"
                ></img>
                <div className="icon-box-content">
                  <h4>Unity Partnership</h4>
                  <p>
                    We are proud supporters of Unity Partnership, an initiative
                    that is committed to bridging the gap between marginalized
                    communities and law enforcement. The initiative fosters
                    collaboration and understanding.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box icon-box-middle">
                <img
                  src={QuadCountyAfricanAmericanChamberofCommerce}
                  alt="Quad County African American Chamber of Commerce"
                  title="Quad County African American Chamber of Commerce"
                ></img>
                <div className="icon-box-content">
                  <h4>Quad County African American Chamber of Commerce</h4>
                  <p>
                    We support QCAACC. It’s a formidable organization that
                    empowers African American entrepreneurs and businesses
                    across Will, DuPage, Kendall and Kane counties. The chamber
                    promotes economic growth and strengthens the community
                    through education, advocacy and networking opportunities.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 icon-box icon-box-right">
                <img
                  src={MartinLuther}
                  alt="Dr. Martin Luther King Jr. Advisory Committee"
                  title="Dr. Martin Luther King Jr. Advisory Committee"
                ></img>
                <div className="icon-box-content">
                  <h4>Dr. Martin Luther King Jr. Advisory Committee</h4>
                  <p>
                    This organization is relentless in preserving Dr. King’s
                    legacy. It promotes equality, justice and unity within the
                    community through advocacy, outreach and education. We are
                    proud to be part of this organization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Partnerships-with-Impact end */}
        {/* ============================= */}
        {/* compaign start */}
        <section id="compaign" className="bgimg mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <h3 class="sub-head">/ Campaigns </h3>
              <h2 class="main-head">Our Collaborative Efforts</h2>
              <p className="text-desc">
                As one of the best CPA firms in Illinois, we recognize the
                opportunity we have to create positive change in our community.
                While we may not be able to impact the change we want directly,
                we can partner and support organizations that have the expertise
                and resources to do so. Here are some of the initiatives we are
                proud to be a part of :-
              </p>
              <div className="tabs">
                {/* Sidebar Tabs */}
                <div className="sidebar-tabs">
                  <div className="sidebar-tabs-inner">
<<<<<<< HEAD
                    {tabData.map((tab, index) => (
=======
                    {tabData.map((tab) => (
>>>>>>> 2bf065d (content added)
                      <button
                        key={tab.id}
                        className={`tab-btn ${
                          activeTab === tab.id ? "active" : ""
                        }`}
                        onClick={() => setActiveTab(tab.id)}
                      >
                        <li>{tab.title}</li>
                        <Link to="" className="short-button">
                          <LuArrowUpRight />
                        </Link>
                      </button>
                    ))}
                  </div>
                </div>
                {/* Tab Content */}
                <div className="tab-content">
                  {tabContent[activeTab] && (
                    <>
                      <div className="tab-content-right">
                        <h2>
                          {tabData.find((tab) => tab.id === activeTab)?.title}
                        </h2>
                        <p className="text-desc">
                          {tabContent[activeTab].description}
                        </p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* compaign end */}
        {/* ========================= */}
        {/* Driving Change, Inspiring Growth start */}
        <section id="Driving" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <h3 class="sub-head">/ Driving Change, Inspiring Growth </h3>
              <h2 class="main-head">Transforming Lives</h2>
              <p className="text-desc">
                True growth happens when we uplift one another and create
                opportunities for all.
              </p>
            </div>
            <div className="row Driving-number">
              <div className="col-lg-4 col-md-6 p-xs-0">
                <div className="Driving-counter">
                  <h1 className="main-head">
                    3,500<span>+</span>
                  </h1>
                  <h4>Hours of Pro Bono Service</h4>
                  <p className="text-disc">
                    As the best CPA in Naperville, we have dedicated more than
                    3,500 hours to service organizations and nonprofits. We
                    proudly make a positive impact and give back to the
                    community.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 p-xs-0">
                <div className="Driving-counter">
                  <h1 className="main-head">
                    50<span>+</span>
                  </h1>
                  <h4> Interns Mentored</h4>
                  <p className="text-disc">
                    We mentor interns; helping them develop essential personal,
                    professional and career skills. This is a reflection of our
                    proud commitment to fostering growth and empowering the new
                    generation of leaders.
                  </p>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 p-xs-0">
                <div className="Driving-counter">
                  <h1 className="main-head">
                    $500,000<span>+</span>
                  </h1>
                  <h4>Donated</h4>
                  <p className="text-disc">
                    Chawla & Associates CPAs has proudly contributed over
                    $500,000 to local and global charitable organizations. We
                    are proud supporters of meaningful causes and make positive
                    impacts in communities worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Driving Change, Inspiring Growth end */}
        {/* =========================== */}
        {/* True Growth start */}
        <section id="true-growth" className="true-growth tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5 true-growth-outer-box p-xs-0">
                <div className="true-growth-box">
                  <p>
                    "True growth happens when we lift each other up and build
                    opportunities for all."
                  </p>
                </div>
              </div>
              <div className="col-md-7 p-xs-0">
                <img src={trueGrowth} alt="trueGrowth" title="trueGrowth"></img>
              </div>
            </div>
          </div>
        </section>
        {/* True Growth end */}
        {/* =================== */}
        {/* Awrads start */}
        <section id="awards" className="mobile-spacing tablet-spacing">
          <div className="container-fluid p-xs-0 padding-md-0">
            <div className="awards-inner">
              <h3 class="sub-head">/ Celebrating Excellence and Impact</h3>
              <h2 class="main-head">awards and recognition</h2>
              <p className="text-desc">
                Throughout the years, Chawla & Associates CPAs has been honored
                with many awards, showcasing our commitment to excellence and
                innovation. Each recognition stands as a testament to our team’s
                dedication, expertise and the trust placed in us by our valued
                clients and the communities we proudly serve.
              </p>
              <div className="all-awards-box">
                <Swiper
                  spaceBetween={50}
                  loop={true}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  modules={[Autoplay, Pagination]}
                  breakpoints={{
                    320: { slidesPerView: 1 }, // Mobile (small screens)
                    480: { slidesPerView: 1 }, // Slightly larger mobile
                    768: { slidesPerView: 2 }, // Tablet (show 2 slides)
                    1024: { slidesPerView: 3 }, // Desktop (show 3 slides)
                  }}
                >
                  <SwiperSlide>
                    <div className="awards-box">
                      <img
                        src={CitizensAppreciatePubliceSafety}
                        alt="Small Business of the Year award by Quad County
                        African American Chamber of Commerce"
                        title="Small Business of the Year award by Quad County
                        African American Chamber of Commerce"
                      ></img>
                      <h2>
                        2014: Small Business of the Year award by Quad County
                        African American Chamber of Commerce
                      </h2>
                      <p className="text-desc">
                        We were honored to be recognized for our outstanding
                        achievements by the African American-owned businesses in
                        Kane, Kendall, DuPage and Will counties (the Quad County
                        area). Our firm proudly demonstrates innovation,
                        resilience and significant contributions to the Quad
                        County area communities.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="awards-box">
                      <img
                        src={ObamaLegacyInitiative}
                        alt="Champion of Change presented by the Ajilla
                        Foundation"
                        title="Champion of Change presented by the Ajilla
                        Foundation"
                        className="ObamaChampion of Change presented by the Ajilla
                        FoundationLegacyInitiative"
                      />
                      <h2>
                        2020: Champion of Change presented by the Ajilla
                        Foundation
                      </h2>
                      <p className="text-desc">
                        We were honored with this award in 2020 for driving
                        meaningful change in communities. The Ajilla Foundation
                        recognizes organizations that inspire communities
                        through personal stories and create lasting impact. At
                        Chawla & Associates CPAs, empowering communities has
                        always been the essence of what we do.{" "}
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="awards-box">
                      <img
                        src={ForBestCommunitywork}
                        alt="Volunteer of the Year for Goldstar Gardens"
                        title="Volunteer of the Year for Goldstar Gardens"
                        className="Volunteer of the Year for Goldstar Gardens"
                      />
                      <h2>2021: Volunteer of the Year for Goldstar Gardens</h2>
                      <p className="text-desc">
                        Our commitment to community engagement earned us
                        recognition in 2021 for outstanding volunteer
                        contributions. We take great pride in this honor and
                        what it represents.
                      </p>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="awards-box">
                      <img
<<<<<<< HEAD
                        src={ObamaLegacyInitiative}
=======
                        src={ThirdBanner}
>>>>>>> 2bf065d (content added)
                        alt="Employer of the Year Award by the United Nations
                        World Day Against Trafficking of Persons"
                        title="Employer of the Year Award by the United Nations
                        World Day Against Trafficking of Persons"
                        className="ObamaLegacyInitiative"
                      />
                      <h2>
                        2024: Employer of the Year Award by the United Nations
                        World Day Against Trafficking of Persons
                      </h2>
                      <p className="text-desc">
                        Presented during the United Nations World Day Against
                        Trafficking of Persons, Chawla & Associates CPAs is
                        honored to be recognized for our unwavering commitment
                        to combating human trafficking
                      </p>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        {/* Awrads end */}
        {/* ======================= */}
        {/* Gallery start */}
        <section id="gallery" className="mobile-spacing tablet-spacing">
          <div className="container-fluid">
            <div className="row">
              <h3 class="sub-head p-xs-0">/ Gallery </h3>
              <h2 class="main-head p-xs-0">making lives better everyday</h2>
              <p className="text-desc">
                In our busy lives, it is easy to feel disconnected from the
                people around us. At Chawla & Associates CPAs, we remain deeply
                rooted in our community; recognizing the privilege we hold. We
                are consistently finding ways to give back with purpose and
                gratitude.{" "}
              </p>
            </div>
            <div className="row">
              <img
                src={bettereveryday}
                title="making lives better everyday"
                alt="making lives better everyday"
                className="p-xs-0"
              ></img>
            </div>
          </div>
        </section>
        {/* Gallery end */}
        {/* =========================== */}
        {/* Together start */}
        <section
          id="Together"
          className="true-growth mobile-spacing tablet-spacing"
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 p-xs-0 padding-md-0">
                <img src={together} alt="together" title="together"></img>
              </div>
              <div className="col-md-5 true-growth-outer-box p-xs-0 padding-md-0">
                <div className="true-growth-box">
                  <p>
                    "Together, we empower, uplift, and inspire a brighter future
                    for all."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Together end */}
        {/* partnership start */}
        <section id="partnership" className="mobile-spacing tablet-spacing">
          <div className="container-fluid p-xs-0 padding-md-0">
            <h3 className="sub-head">/ Partnerships </h3>
            <h2 className="main-head">our trusted partners</h2>
            <div className="row">
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="Partnerships-box">
                  <img src={logo1} alt="logo1" title="logo1" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="Partnerships-box">
                  <img src={logo2} alt="logo2" title="logo2" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="Partnerships-box">
                  <img src={logo3} alt="logo3" title="logo3" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="Partnerships-box">
                  <img src={logo4} alt="logo4" title="logo4" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="Partnerships-box">
                  <img src={logo5} alt="logo5" title="logo5" />
                </div>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-4 col-6">
                <div className="Partnerships-box">
                  <img src={logo6} alt="logo6" title="logo6" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* partnership end */}
      </div>
    </>
  );
};

export default Community;
