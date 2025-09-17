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

const testimonialabout = [
  {
    id: 1,
    heading: "“Whole heartily recommended”",
    details:
      "“Our interaction with Roger and his team, especially with Hannah, has been excellent. The service and personal attention is greatly appreciated.”",
    name: "Amutha Narayanan",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 2,
    heading: "“Incredibly supportive”",
    details:
      "“ Beyond his accounting expertise, Roger has been incredibly supportive of my nonprofit community service efforts, demonstrating his commitment to giving back to the community.”",
    name: "Jasvir Singh",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 3,
    heading: "“Very satisfied and happy client”",
    details:
      "“His team also guided me through the sale of my business and now I am happily retired. I would highly recommend him and his team for all your tax needs.”",
    name: "Onkar Lall",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 4,
    heading: "“Very fruitful relationship”",
    details:
      "“Roger has provided me with tax planning, advisory services, which have really helped me in my financial planning and forward looking for my retirement.”",
    name: "T J",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 5,
    heading: "“Selfless contribution”",
    details:
      "“Roger is my personal advisor in all things taxes and accounting. I highly recommend him for any of your tax, accounting needs and advisory needs.”",
    name: "Kuldeep Sra",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 6,
    heading: "“ Thorough professionalism”",
    details:
      "“Roger’s expertise and thorough professionalism is second to none. I have introduced many of my friends to Chawla & Associates. I recommend Chawla & Associates to everyone without any reservations.”",
    name: "Subbarao Majety1",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 7,
    heading: "“Five-star experience”",
    details:
      "“The team was knowledgeable, professional, and always available to answer my questions. I highly recommend them to anyone looking for reliable and efficient CPA services.”",
    name: "Srinivasa Rahul Yeturi",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 8,
    heading: "“Truly exceptional experience”",
    details:
      "“We had a truly exceptional experience collaborating with Roger Chawla and his team at Chawla & Associates. Their unwavering assistance with my younger brother's foreign taxes was invaluable.”",
    name: " Najeeb Mohammed",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 9,
    heading: "“Highly recommended”",
    details:
      "“This firm has drastically reduced my stress level of filing tax returns and made me feel well taken care of. Highly recommended and would heartily recommend them to my friends and family.”",
    name: "Rajiv Kumar",
    designation: "Client",
    image: DeeDee,
  },
  {
    id: 10,
    heading: "“Friendly, Courteous and Knowledgeable staff ”",
    details:
      "“Roger has been doing my tax work for the past 15 years. One on one communication is the cornerstone of their business acumen! I highly recommend this firm”",
    name: "Pravin Gandhi",
    designation: "Client",
    image: DeeDee,
  }

];


const TestimonialAbout = () => {
  // const [expandedTestimonial, setExpandedTestimonial] = useState({});

  // const toggleReadMore = (id) => {
  //   setExpandedTestimonial((prevState) => ({
  //     ...prevState,
  //     [id]: !prevState[id],
  //   }));
  // };

  return (
    <section id="servicesSlider" className="mobile-spacing tablet-spacing">
      <div className="container-fluid">
        <div className="row servicesSliderRow">
          <div className="col-lg-6 col-md-9 col-sm-6 servicesSlider-haed p-xs-0 p-md-0">
            <h3 className="sub-head">/ Testimonials</h3>
            <h2 className="main-head">Learn What Our Happy Customers Are Saying
            </h2>
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
              {testimonialabout.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="slider-details">
                    <div className="description">
                      <div className="slider-head">{testimonial.heading}</div>
                      <p className="slider-detilas">
                       {testimonial.details}
                        {/* {expandedTestimonial[testimonial.id]
                          ? testimonial.details
                          : `${testimonial.details.substring(0, 250)}...`}
                          <a className="read-more-btn"  onClick={() => toggleReadMore(testimonial.id)}>
                          {expandedTestimonial[testimonial.id] ? "Read Less" : "Read More"}
                          </a> */}
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

export default TestimonialAbout;
