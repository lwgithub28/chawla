import React, { useState } from "react";
import "./CommonComp.scss";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import rightarrow from "../../Assests/Img/rightarrow.webp";
import leftarrow from "../../Assests/Img/leftarrow.webp";
import sliderarrow from "../../Assests/Img/sliderarrow.webp";
import DeeDee from "../../Assests/Img/DeeDee.webp";

const testimonials = [
  {
    id: 1,
    heading: "“Amutha Narayanan”",
    details:
      "“We, my husband, and I, have been clients of Chawla and Associates CPAs for a little over four years. The team at Chawla and Associates is very good at what they do. Our interaction with Roger and his team, especially with Hannah, has been excellent. The service and personal attention is greatly appreciated. We are wholeheartedly recommending our CPA for all who are looking for a wonderful team of experts, who look after their clients’ needs for accounting, tax planning and advisory services.”",
    name: "Amutha Narayanan",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 2,
    heading: "“CPA guided us through the process”",
    details:
      "“I have known Roger Chawla, CPA, for a long time. I started using him as my personal accountant for the past three years after mine had retired. Roger and his team, especially Hannah, have provided exceptional support with tax planning and preparation, always ensuring everything is handled smoothly and professionally. Beyond his accounting expertise, Roger has been incredibly supportive of my nonprofit community service efforts, demonstrating his commitment to giving back to the community. If you’re seeking a CPA firm that is not only professional and knowledgeable but also personable and genuinely invested in your long-term success, I highly recommend Chawla and Associates CPAs. Their dedication and care truly set them apart. Thank you Roger!”",
    name: "Jasvir Singh",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 3,
    heading: "“Highly Recommended!”",
    details:
      "“I have been a very satisfied and happy client of Chawla and Associates CPAs for over 33 years, and Roger has been my CPA and a close confidant for all these years. Through good times and not so good times, Roger has been a rock steady and a wise advisor, providing excellent advice in all things tax and finance related. He has done my personal and business taxes and has been excellent in every interaction. His team also guided me through the sale of my business and now I am happily retired. I would highly recommend him and his team for all your tax needs.”",
    name: "Onkar Lall",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 4,
    heading: "“Highly Recommended!”",
    details:
      "“I have been a client of Chawla and Associates CPAs for the last 3 years, and this has been a very fruitful relationship. Roger has provided me with tax planning, advisory services, which have really helped me in my financial planning and forward looking for my retirement. The service and personal attention is greatly appreciated. If you are looking for a tax advisor/CPA, for a long-term fruitful relationship, I would highly recommend Chawla and Associates.”",
    name: "T J",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 5,
    heading: "“Highly Recommended!”",
    details:
      "“I have known Roger Chawla of Chawla and Associates CPAs for a long time. I have a non-profit that helps disadvantaged girls/women in India, and he and his team have been very helpful in my tax and accounting needs and reporting. His selfless contribution to the cause of the poor and disadvantaged is exemplary. He is also my personal advisor in all things taxes and accounting related and I highly recommend him for any of your tax, accounting needs and advisory needs.”",
    name: "Kuldeep Sra",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 6,
    heading: "“Highly Recommended!”",
    details:
      "“Chawla & Associates have been doing my taxes for more than 24 years. Roger Chawla has become a close friend from this association. Here they build friendships besides offering excellent professional service. With Chawla & Associates doing our taxes, I never have to worry about anything anymore. Roger’s expertise and thorough professionalism is second to none. I have introduced many of my friends to Chawla & Associates. I recommend Chawla & Associates to everyone without any reservations. Roger and his team, especially Miss Melody, provided wonderful service and personal attention, and I really appreciate the attention to detail. If you are looking for a tax advisor/CPA, for personal taxes, small business taxes, tax advisory needs, or for non-profits, like a few that I have been involved in, I would wholeheartedly recommend Chawla and Associates.”",
    name: "Subbarao Majety1",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 7,
    heading: "“Highly Recommended!”",
    details:
      "“I had a great experience with Chawla & Associates. They made the tax filing process seamless and stress-free. The team was knowledgeable, professional, and always available to answer my questions. I highly recommend them to anyone looking for reliable and efficient CPA services. Five-star experience!”",
    name: "Srinivasa Rahul Yeturi",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 8,
    heading: "“Highly Recommended!”",
    details:
      "“We had a truly exceptional experience collaborating with Roger Chawla and his team at Chawla & Associates. Their unwavering assistance with my younger brother's foreign taxes was invaluable. Despite the time-sensitive nature of the task, they ensured that everything was completed well before the deadline, demonstrating a remarkable level of promptness and professionalism. I am sincerely grateful for their dedication and efficiency in handling our tax affairs.I Highly recommend Chawla & Associates to anyone in need of expert tax services. I look forward to working with them again in the near future.”",
    name: "Najeeb Mohammed",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 9,
    heading: "“Highly Recommended!”",
    details:
      "“Having worked/lived in many countries and in the United States, the reporting and filing was a complex process. Chawla and Associates helped to file my return, and helped to gather the pertinent information, which I had missed previously. This firm has drastically reduced my stress level of filing the tax return and made me feel well taken care of. Highly recommended and would heartily recommend them to my friends and family.”",
    name: "Rajiv Kumar",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 10,
    heading: "“Highly Recommended!”",
    details:
      "“Expert Tax Planning. Friendly, Courteous and Knowledgeable staff with attention to detail. Roger has been doing my tax work for the past 15 years. One on one communication is the cornerstone of their business acumen! I highly recommend this firm!”",
    name: "Pravin Gandhi",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 11,
    heading: "“Highly Recommended!”",
    details:
      "“I've had the privilege of working with Roger Chawla and Chawla & Associates for over 15 years, and I couldn't be more satisfied with their outstanding service. Roger's expertise and proactive approach have been pivotal in managing my business's financial complexities. What sets them apart is their personalized support and attention—tailoring solutions to fit my unique needs, contributing significantly to strategic decision-making.The team's responsiveness and accessibility are unmatched, providing timely and thorough support. Their integrity and ethical standards add an extra layer of trust to our professional relationship. Chawla & Associates isn't just an accounting firm; they've been true partners in the success and growth of my business. I wholeheartedly recommend Roger and his team for anyone seeking top-notch, personalized accounting services. We look forward to many more years of collaboration.”",
    name: "Dwayne Douglas",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 12,
    heading: "“Highly Recommended!”",
    details:
      "“Chawla & Associates offers top-notch accounting and CPA services that go above and beyond. Their team's professionalism and attention to detail made managing my business's finances a breeze. I highly recommend them with five stars for expert guidance and exceptional support in handling financial matters.”",
    name: "KaVonte Carthron",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 13,
    heading: "“Highly Recommended!”",
    details:
      "“Roger has always been someone I can rely on for professional accounting advice and one-off scenarios on tax events coming up. He is level headed and easy to communicate with. Makes the tax world less stressful. I highly recommend giving Chawla and Associates a call for your personal and business needs.”",
    name: "Sarab Singh",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 14,
    heading: "“Highly Recommended!”",
    details:
      "“This was my first year working with Chawla & Associates. From the set up of my first appointment with Delia, to my initial meeting with Roger, they were professional and were in contact with me throughout the whole process of my business and personal tax return. They were able to answer all my questions and having my first child this year they made sure to get me my child deduction. I HIGHLY RECOMMEND Chawla & Associates for all your personal and business accounting needs. I've already given their names to a few of my business associates.”",
    name: "Barry Rosenberg",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 15,
    heading: "“Highly Recommended!”",
    details:
      "“Roger Chawla and Chawla and Associates helped me file for the last 5 years. They were very knowledgeable, patient and though their fees were not the cheapest, they were a great value for the money and time. Also, Mr. Pankaj has been exceptional in helping with my account, as well as Mr. Rajan and believe others in this practice are also the same. Mr. Chawla is very meticulous and always ready to help. Highly recommended for tax preparation and tax planning and peace of mind.”",
    name: "Wein Munwu",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 16,
    heading: "“Highly Recommended!”",
    details:
      "“Roger is a consummate CPA and leads a very dedicated team who will ensure that the tax return is processed expeditiously and in line with the best practices and stipulations. The team keeps themselves updated with the latest and greatest in the world of accounting and taxation which ensures that you are in safe hands. They will go in detail to collect all the relevant information to ensure that all deductions are taken care of to ensure accurate reporting. Add flexibility in accommodating your schedule, transparency and personalized service that is offered by Roger and his team to maximize client satisfaction. He has been processing my taxes for a decade now and I am very satisfied with his professionalism, expertise and commitment to stress-free tax season. I would highly recommend him to anyone looking for advice on taxes.”",
    name: "Anjan Sen",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 17,
    heading: "“Highly Recommended!”",
    details:
      "“I've been a client of Chawla & Associates, CPAs for several years. Roger and his team consistently demonstrate professionalism and an ability to explain intricate details in simple terms. They go the extra mile, always willing to address any questions I have regarding my taxes, both domestic and foreign, as well as other financial decisions. I'm confident in their capabilities for financial planning, tax preparation, and any other matters related to financial advice”",
    name: "Sanjukta Paul",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 18,
    heading: "“Highly Recommended!”",
    details:
      "“Roger and his team offer a breath of fresh air when it comes to service. With many years of experience helping people navigate the complexities of tax and business accounting, Chawla and associates partner with their clients for the long term and deliver white glove service. Roger is an expert in his field, helping develop tax planning strategies , not just punching in data as a tax filing preparer.”",
    name: "Donovan Baldridge",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 19,
    heading: "“Highly Recommended!”",
    details:
      "“I am totally amazed at the professionalism and dedication this company has provided. It is a relief to leave the pressure of filing taxes to a true professional. Roger and his team provided first class service for my tax needs, and I certainly recommend Chawla & Associates CPAs as a reputable tax firm for tax services.”",
    name: "Marge Hilson",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 20,
    heading: "“Highly Recommended!”",
    details:
      "“I have been using Roger and his firm since 2008. It's been over 15 years. They have always been a great help for my personal and business taxes.They are unique with their professionalism and the individual attention they give you. They have handled the accounting and taxes for my hair salon business, I recommend them to others for sure!!”",
    name: "Lourdes Aguirre",
    designation: "Client",
    image: DeeDee,
  },
];


const Testimonial = () => {
  const [expandedTestimonial, setExpandedTestimonial] = useState({});

  const toggleReadMore = (id) => {
    setExpandedTestimonial((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <section id="servicesSlider" className="mobile-spacing tablet-spacing">
      <div className="container-fluid">
        <div className="row servicesSliderRow">
          <div className="col-lg-6 col-md-8 col-sm-6 p-xs-0 p-md-0 servicesSlider-haed">
            <h3 className="sub-head">/ Testimonials</h3>
            <h2 className="main-head">Hear It From Those Who’ve Thrived With Us</h2>
          </div>
          <div className="swiper-outer-slider p-xs-0 p-md-0">
            <div className="swiper-arrow">
              <div className="swiper-button-prev">
                <img src={leftarrow} alt="leftarrow" loading="lazy" />
              </div>
              <div className="swiper-button-next">
                <img src={rightarrow} alt="rightarrow" loading="lazy" />
              </div>
            </div>
            <Swiper
              modules={[Navigation]}
              slidesPerView={3}
              spaceBetween={20}
              autoplay={true}
              allowTouchMove={false}
              loop={true}
              breakpoints={{
                1920: { slidesPerView: 2.3 },
                992: { slidesPerView: 2.3 },
                768: { slidesPerView: 1.3 },
                320: { slidesPerView: 1 },
              }}
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="slider-details">
                    <div className="description">
                      <p className="slider-detilas">
                        {/* {testimonial.details} */}
                        {expandedTestimonial[testimonial.id]
                          ? testimonial.details
                          : `${testimonial.details.substring(0, 250)}...`}
                          <a className="read-more-btn"  onClick={() => toggleReadMore(testimonial.id)}>
                          {expandedTestimonial[testimonial.id] ? "Read Less" : "Read More"}
                          </a>
                      </p>
                    </div>
                    <div className="client-details">
                      <span>
                        <span className="client-name">{testimonial.name}</span>
                        <p className="client-designation">{testimonial.designation}</p>
                      </span>
                    </div>
                  </div>
                  <div className="slider-image">
                    <img src={sliderarrow} alt="sliderarrow" loading="lazy" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
