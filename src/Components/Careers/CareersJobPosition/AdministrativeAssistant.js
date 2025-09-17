import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdArrowOutward } from "react-icons/md";
import Checkbox from "../../../Assests/Img/check-box.webp";
import { jobListings } from "../../Data";
const AdministrativeAssistant = () => {
<<<<<<< HEAD
    const form = useRef();

    const sendApplyEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_562xl22",
                "template_7wdwnwr",
                form.current,
                "pvZWHrp1z3lcVergQ"
            )
            .then((result) => {
                alert("Application submitted successfully!");
                form.current.reset(); // Reset form after successful submission
            })
            .catch((error) => {
                alert("Failed to send application. Please try again.");
            });
    };
    return (
        <>
            <div className="CareersJobPosition fraunces" id="AdministrativeAssistant">
                {/* banner start */}
                <section id='inner-page-banner'>
                    <div className='container-fluid bgimg'>
                        <div className='row'>
                            <h1 className='main-head'>administrative assistant</h1>
                        </div>
                    </div>
                </section>
                {/*banner end */}
                {/* ================== */}
                {/* job-overview start */}
                <section id='position-description'>
                    <div className="container-fluid">
                        <h1 className='main-head'>Position Description</h1>
                        <h4>Summary</h4>
                        <p className='text-desc'>Chawla and Associates CPAs is seeking an Administrative Assistant to join our team. As a full-service CPA firm, we specialize in tax, accounting, and consulting services for individuals and businesses. Our focus is on providing high-quality, personalized service to our clients while maintaining an efficient and organized office environment. We are looking for a highly motivated and detail-oriented individual to support our growing firm.</p>
                    </div>
                </section>
                <div className="container-fluid">
                    <div className='divider'></div>
                </div>
                {/* job-overview end */}
                {/* ======================== */}
                {/* Objective start */}
                <section id='objective'>
                    <div className="container-fluid">
                        <h4>Position Description</h4>
                        <p className='text-desc'> The Administrative Assistant will handle key office functions including answering phones, document intake, scanning, renaming files, organizing client records, and providing general administrative support. This individual will play a crucial role in ensuring smooth office operations and enhancing client experience through excellent customer service and efficiency.</p>
                    </div>
                </section>
                {/* Objective end */}
                {/* ========================= */}
                {/* responsibilities-and-experience start */}
                <div id='responsibilities-and-experience'>
                    <div className='container-fluid inner'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12'>
                                <div className='responsibilities'>
                                    <h1 className='main-head'>Specific Responsibilities</h1>
                                    <div className='icon-list'>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Answer and direct incoming phone calls in a professional manner</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Greet clients and visitors, ensuring a welcoming experience</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Manage document intake, scanning, renaming, and filing electronic and physical documents</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Organize and maintain client files, ensuring accuracy and confidentiality</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Assist with client scheduling and follow-ups</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Provide administrative support to team members, including calendar management and correspondence</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Prepare client meeting materials, reports, and presentations</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Handle client communications, including bulk mailings and outreach</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Track and manage key deadlines, including client tax filing deadlines and renewals</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Ensure compliance with firm policies and industry regulations </p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Assist with office management tasks, such as ordering supplies and coordinating maintenance needs </p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Maintain confidentiality of sensitive client and firm information </p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12'>
                                <div className='experience'>
                                    <h1 className='main-head'>Qualifications and Competencies</h1>
                                    <div className='icon-list'>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Associate’s or Bachelor’s degree preferred</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Minimum of two years of administrative or office experience, preferably in a professional services or accounting firm</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'> Strong organizational and multitasking skills</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'> Excellent verbal and written communication skills</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'> Proficiency with Microsoft Office Suite (Word, Excel, Outlook) and document management software</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'> Familiarity with workflow management and CRM systems (Financial Cents or similar) is a plus</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'> Ability to work independently and collaboratively in a fast-paced environment</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>High level of professionalism and client service orientation</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* responsibilities-and-experience end */}
                {/* ================================== */}
                {/* why-join start */}
                <div id='Success-Criteria'>
                    <div className="container-fluid">
                        <h1 className='main-head'>Preferred Qualifications</h1>
                        <div className='icon-list'>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Experience in a CPA or financial services firm</p>
                            </span>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Knowledge of accounting and tax-related terminology</p>
                            </span>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Proficiency in document management systems and workflow tools
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                {/* why-join end */}
                {/* =========================== */}
                {/* Benefits start */}
                <div id='BookkeepingSpecialist-benefits'>
                    <div className="container-fluid">
                        <h1 className='main-head'>Compensation and Benefits </h1>
                        <div className='icon-list'>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Competitive salary based on experience</p>
                            </span>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Paid time off and holidays</p>
                            </span>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Opportunities for professional growth and training</p>
                            </span>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>A supportive and team-oriented work environment</p>
                            </span>
                        </div>
                    </div>
                </div>
                {/* Benefits end */}
                {/* ========================== */}
                {/* cta start */}
                <div id="cta" className='bgimg'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-8 p-xs-0'>
                                <h1 className='main-head'>To Apply</h1>
                                <p className='text-desc'> Interested candidates should send their resume and cover letter to <a href="mailto:info@chawlacpas.com">info@chawlacpas.com</a>. </p>
                            </div>
                            <div className='col-md-4 btns'>
                                <a className="bg-remove-btn-svg">
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
                                        Apply Now
                                        <span>
                                            <MdArrowOutward />
                                        </span>
                                    </button>
                                </a>
                                {/* Modal */}
                                <div className="modal fade" id="myModal">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-body">
                                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                                <div className='modal-body-content'>
                                                    <h1 className='main-head'> We're Hiring </h1>
                                                    <form ref={form} onSubmit={sendApplyEmail}>
                                                        <input type="text" name="first_name" placeholder="Enter Name" required />
                                                        <input type="email" name="email_address" placeholder="Enter Email" required />
                                                        <input type="tel" name="phone_number" placeholder="Enter Phone No." required />
                                                        <select name="position_name" id="position" required>
                                                            {jobListings.map((job, idx) => (
                                                                <option key={idx} value={job.title}>{job.title}</option>
                                                            ))}
                                                        </select>
                                                        <input type="file" name="file_name" accept="image/*,application/pdf" />
                                                        <button type="submit" className="common-btn">Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* cta end */}
            </div>
        </>
    )
}

export default AdministrativeAssistant
=======
  const form = useRef();

  const sendApplyEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_562xl22",
        "template_7wdwnwr",
        form.current,
        "pvZWHrp1z3lcVergQ"
      )
      .then((result) => {
        alert("Application submitted successfully!");
        form.current.reset(); // Reset form after successful submission
      })
      .catch((error) => {
        alert("Failed to send application. Please try again.");
      });
  };
  return (
    <>
      <div className="CareersJobPosition fraunces" id="AdministrativeAssistant">
        {/* banner start */}
        <section id="inner-page-banner">
          <div className="container-fluid bgimg">
            <div className="row">
              <h1 className="main-head">administrative assistant</h1>
            </div>
          </div>
        </section>
        {/*banner end */}
        {/* ================== */}
        {/* job-overview start */}
        <section id="position-description">
          <div className="container-fluid">
            <h1 className="main-head">Position Description</h1>
            <h4>Summary</h4>
            <p className="text-desc">
              Chawla and Associates CPAs is seeking an Administrative Assistant
              to join our team. As a full-service CPA firm, we specialize in
              tax, accounting, and consulting services for individuals and
              businesses. Our focus is on providing high-quality, personalized
              service to our clients while maintaining an efficient and
              organized office environment. We are looking for a highly
              motivated and detail-oriented individual to support our growing
              firm.
            </p>
          </div>
        </section>
        <div className="container-fluid">
          <div className="divider"></div>
        </div>
        {/* job-overview end */}
        {/* ======================== */}
        {/* Objective start */}
        <section id="objective">
          <div className="container-fluid">
            <h4>Position Description</h4>
            <p className="text-desc">
              {" "}
              The Administrative Assistant will handle key office functions
              including answering phones, document intake, scanning, renaming
              files, organizing client records, and providing general
              administrative support. This individual will play a crucial role
              in ensuring smooth office operations and enhancing client
              experience through excellent customer service and efficiency.
            </p>
          </div>
        </section>
        {/* Objective end */}
        {/* ========================= */}
        {/* responsibilities-and-experience start */}
        <div id="responsibilities-and-experience">
          <div className="container-fluid inner">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <div className="responsibilities">
                  <h1 className="main-head">Specific Responsibilities</h1>
                  <div className="icon-list">
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Answer and direct incoming phone calls in a professional
                        manner
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Greet clients and visitors, ensuring a welcoming
                        experience
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Manage document intake, scanning, renaming, and filing
                        electronic and physical documents
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Organize and maintain client files, ensuring accuracy
                        and confidentiality
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Assist with client scheduling and follow-ups
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Provide administrative support to team members,
                        including calendar management and correspondence
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Prepare client meeting materials, reports, and
                        presentations
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Handle client communications, including bulk mailings
                        and outreach
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Track and manage key deadlines, including client tax
                        filing deadlines and renewals
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Ensure compliance with firm policies and industry
                        regulations{" "}
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Assist with office management tasks, such as ordering
                        supplies and coordinating maintenance needs{" "}
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Maintain confidentiality of sensitive client and firm
                        information{" "}
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="experience">
                  <h1 className="main-head">Qualifications and Competencies</h1>
                  <div className="icon-list">
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Associate’s or Bachelor’s degree preferred
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Minimum of two years of administrative or office
                        experience, preferably in a professional services or
                        accounting firm
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        {" "}
                        Strong organizational and multitasking skills
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        {" "}
                        Excellent verbal and written communication skills
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        {" "}
                        Proficiency with Microsoft Office Suite (Word, Excel,
                        Outlook) and document management software
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        {" "}
                        Familiarity with workflow management and CRM systems
                        (Financial Cents or similar) is a plus
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        {" "}
                        Ability to work independently and collaboratively in a
                        fast-paced environment
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        High level of professionalism and client service
                        orientation
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* responsibilities-and-experience end */}
        {/* ================================== */}
        {/* why-join start */}
        <div id="Success-Criteria">
          <div className="container-fluid">
            <h1 className="main-head">Preferred Qualifications</h1>
            <div className="icon-list">
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  Experience in a CPA or financial services firm
                </p>
              </span>
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  Knowledge of accounting and tax-related terminology
                </p>
              </span>
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  Proficiency in document management systems and workflow tools
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* why-join end */}
        {/* =========================== */}
        {/* Benefits start */}
        <div id="BookkeepingSpecialist-benefits">
          <div className="container-fluid">
            <h1 className="main-head">Compensation and Benefits </h1>
            <div className="icon-list">
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  Competitive salary based on experience
                </p>
              </span>
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">Paid time off and holidays</p>
              </span>
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  Opportunities for professional growth and training
                </p>
              </span>
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  A supportive and team-oriented work environment
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* Benefits end */}
        {/* ========================== */}
        {/* cta start */}
        <div id="cta" className="bgimg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 p-xs-0">
                <h1 className="main-head">How to Apply</h1>
                <p className="text-desc">
                  We’d love to hear from you. Please send your application to{" "}
                  <a href="mailto:info@chawlacpa.com">info@chawlacpa.com</a>,
                  and make sure to include the position title in the subject
                  line so we can review it quickly and connect you with the
                  right person.
                </p>
              </div>
              <div className="col-md-4 btns">
                <a>
                  <button
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                    className="bg-remove-btn-svg"
                  >
                    Apply Now
                    <span>
                      <MdArrowOutward />
                    </span>
                  </button>
                </a>
                {/* Modal */}
                <div className="modal fade" id="myModal">
                  <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-body">
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                        ></button>
                        <div className="modal-body-content">
                          <h1 className="main-head"> We're Hiring </h1>
                          <form ref={form} onSubmit={sendApplyEmail}>
                            <input
                              type="text"
                              name="first_name"
                              placeholder="Enter Name"
                              required
                            />
                            <input
                              type="email"
                              name="email_address"
                              placeholder="Enter Email"
                              required
                            />
                            <input
                              type="tel"
                              name="phone_number"
                              placeholder="Enter Phone No."
                              required
                            />
                            <select name="position_name" id="position" required>
                              {jobListings.map((job, idx) => (
                                <option key={idx} value={job.title}>
                                  {job.title}
                                </option>
                              ))}
                            </select>
                            <input
                              type="file"
                              name="file_name"
                              accept="image/*,application/pdf"
                            />
                            <button type="submit" className="common-btn">
                              Submit
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* cta end */}
      </div>
    </>
  );
};

export default AdministrativeAssistant;
>>>>>>> 2bf065d (content added)
