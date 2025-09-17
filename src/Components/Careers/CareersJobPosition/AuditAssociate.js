import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdArrowOutward } from "react-icons/md";
import Checkbox from "../../../Assests/Img/check-box.webp";
import { jobListings } from "../../Data";
const AuditAssociate = () => {
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
            <div className="CareersJobPosition fraunces" id="AuditAssociate">
                {/* banner start */}
                <section id='inner-page-banner'>
                    <div className='container-fluid bgimg'>
                        <div className='row'>
                            <h1 className='main-head'>Audit Associate</h1>
                        </div>
                    </div>
                </section>
                {/*banner end */}
                {/* ================= */}
                {/* Designation start */}
                <div id='designation' className="mobile-spacing tablet-spacing">
                    <div className="container-fluid p-xs-0 padding-md-0">
                        <p className='text-desc'><span>Position:</span>Audit Associate</p>
                        <p className='text-desc'><span>Employment Type:</span>Permanent, Full-time or Part-time</p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className='divider'></div>
                </div>
                {/* Designation end */}
                {/* =================== */}
                {/* job-overview start */}
                <section id='job-overview' className="mobile-spacing tablet-spacing">
                    <div className="container-fluid p-xs-0 padding-md-0">
                        <h1 className='main-head'>Role Summary</h1>
                        <p className='text-desc'>At Chawla and Associates CPAs, our Audit Associates play a key role in delivering high-quality audit services while maintaining the highest standards of integrity, objectivity, and professional skepticism. This role involves executing audit procedures, preparing financial documentation, and collaborating with team members to ensure compliance with accounting and auditing standards.</p>
                    </div>
                </section>
                {/* job-overview end */}
                {/* ===================== */}
                {/* responsibilities-and-experience start */}
                <div id='responsibilities-and-experience' className="bgimg mobile-spacing tablet-spacing">
                    <div className='container-fluid inner'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 p-xs-0 padding-md-0'>
                                <div className='responsibilities'>
                                    <h1 className='main-head'>Responsibilities</h1>
                                    <div className='icon-list'>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Conduct audit procedures to obtain sufficient and appropriate audit evidence in accordance with applicable auditing standards.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Maintain professional skepticism and exercise sound judgment in assessing financial statements and internal controls.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Assist in preparing audit documentation, including financial reports, workpapers, and findings.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'> Identify and document audit misstatements, evaluating their impact on materiality.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Coordinate with internal and external specialists and assess the impact of findings on audit engagements.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Collaborate with senior auditors and partners to ensure timely completion of audit engagements.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Ensure compliance with GAAP, GAAS, and other relevant accounting and auditing frameworks.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Communicate effectively with clients, gathering necessary information and responding to queries.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Assist in the planning phase of engagements, including client communications, resource allocation, and audit execution planning.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Support team members by providing guidance, coaching, and training as needed.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Maintain confidentiality and uphold the ethical standards of the accounting profession.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 p-xs-0 padding-md-0'>
                                <div className='experience'>
                                    <h1 className='main-head'>Qualifications, Skills, and Knowledge</h1>
                                    <div className='icon-list'>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Bachelor’s degree in Accounting, Finance, or a related field (CPA or CPA candidate preferred).</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Proficiency in MS Office and accounting software.
                                            </p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'> Strong analytical and problem-solving skills.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Excellent communication skills, both written and verbal.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'> Detail-oriented with strong organizational skills.
                                            </p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Ability to work independently and collaboratively in a fast-paced environment.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'> Prior audit experience (2+ years preferred), especially in public accounting.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* responsibilities-and-experience end */}
                {/* ======================= */}
                {/* why-join start */}
                <div id='why-join' className="mobile-spacing tablet-spacing">
                    <div className="container-fluid p-xs-0 padding-md-0">
                        <h1 className='main-head'>Why Join Chawla and Associates CPAs?</h1>
                        <div className='icon-list'>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Collaborative and growth-oriented work environment.</p>
                            </span>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Opportunities for professional development and advancement.</p>
                            </span>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Competitive compensation and benefits package.
                                </p>
                            </span>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Exposure to diverse industries and clients.
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
                {/* why-join end */}
                {/* ===================== */}
                {/* cta start */}
                <div id="cta" className='bgimg mobile-spacing tablet-spacing'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-8 p-xs-0'>
                                <h1 className='main-head'>How to Apply</h1>
                                <p className='text-desc'>Interested candidates should send their resume to <a href='mailto:info@chawlacpas.com'>info@chawlacpas.com</a> with the subject line Audit Associate Application - [Your Name].</p>
                            </div>
                            <div className='col-md-4 btns p-xs-0'>
                                <a>
                                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" className="bg-remove-btn-svg">
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

export default AuditAssociate
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
      <div className="CareersJobPosition fraunces" id="AuditAssociate">
        {/* banner start */}
        <section id="inner-page-banner">
          <div className="container-fluid bgimg">
            <div className="row">
              <h1 className="main-head">Audit Associate</h1>
            </div>
          </div>
        </section>
        {/*banner end */}
        {/* ================= */}
        {/* Designation start */}
        <div id="designation" className="mobile-spacing tablet-spacing">
          <div className="container-fluid p-xs-0 padding-md-0">
            <p className="text-desc">
              <span>Position:</span>Audit Associate
            </p>
            <p className="text-desc">
              <span>Employment Type:</span>Permanent, Full-time or Part-time
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="divider"></div>
        </div>
        {/* Designation end */}
        {/* =================== */}
        {/* job-overview start */}
        <section id="job-overview" className="mobile-spacing tablet-spacing">
          <div className="container-fluid p-xs-0 padding-md-0">
            <h1 className="main-head">Role Summary</h1>
            <p className="text-desc">
              At Chawla and Associates CPAs, our Audit Associates play a key
              role in delivering high-quality audit services while maintaining
              the highest standards of integrity, objectivity, and professional
              skepticism. This role involves executing audit procedures,
              preparing financial documentation, and collaborating with team
              members to ensure compliance with accounting and auditing
              standards.
            </p>
          </div>
        </section>
        {/* job-overview end */}
        {/* ===================== */}
        {/* responsibilities-and-experience start */}
        <div
          id="responsibilities-and-experience"
          className="bgimg mobile-spacing tablet-spacing"
        >
          <div className="container-fluid inner">
            <div className="row">
              <div className="col-lg-6 col-md-12 p-xs-0 padding-md-0">
                <div className="responsibilities">
                  <h1 className="main-head">Responsibilities</h1>
                  <div className="icon-list">
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Conduct audit procedures to obtain sufficient and
                        appropriate audit evidence in accordance with applicable
                        auditing standards.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Maintain professional skepticism and exercise sound
                        judgment in assessing financial statements and internal
                        controls.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Assist in preparing audit documentation, including
                        financial reports, workpapers, and findings.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        {" "}
                        Identify and document audit misstatements, evaluating
                        their impact on materiality.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Coordinate with internal and external specialists and
                        assess the impact of findings on audit engagements.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Collaborate with senior auditors and partners to ensure
                        timely completion of audit engagements.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Ensure compliance with GAAP, GAAS, and other relevant
                        accounting and auditing frameworks.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Communicate effectively with clients, gathering
                        necessary information and responding to queries.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Assist in the planning phase of engagements, including
                        client communications, resource allocation, and audit
                        execution planning.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Support team members by providing guidance, coaching,
                        and training as needed.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Maintain confidentiality and uphold the ethical
                        standards of the accounting profession.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 p-xs-0 padding-md-0">
                <div className="experience">
                  <h1 className="main-head">
                    Qualifications, Skills, and Knowledge
                  </h1>
                  <div className="icon-list">
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Bachelor’s degree in Accounting, Finance, or a related
                        field (CPA or CPA candidate preferred).
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Proficiency in MS Office and accounting software.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        {" "}
                        Strong analytical and problem-solving skills.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Excellent communication skills, both written and verbal.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        {" "}
                        Detail-oriented with strong organizational skills.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Ability to work independently and collaboratively in a
                        fast-paced environment.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        {" "}
                        Prior audit experience (2+ years preferred), especially
                        in public accounting.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* responsibilities-and-experience end */}
        {/* ======================= */}
        {/* why-join start */}
        <div id="why-join" className="mobile-spacing tablet-spacing">
          <div className="container-fluid p-xs-0 padding-md-0">
            <h1 className="main-head">Why Join Chawla and Associates CPAs?</h1>
            <div className="icon-list">
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  Collaborative and growth-oriented work environment.
                </p>
              </span>
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  Opportunities for professional development and advancement.
                </p>
              </span>
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  Competitive compensation and benefits package.
                </p>
              </span>
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  Exposure to diverse industries and clients.
                </p>
              </span>
            </div>
          </div>
        </div>
        {/* why-join end */}
        {/* ===================== */}
        {/* cta start */}
        <div id="cta" className="bgimg mobile-spacing tablet-spacing">
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
              <div className="col-md-4 btns p-xs-0">
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

export default AuditAssociate;
>>>>>>> 2bf065d (content added)
