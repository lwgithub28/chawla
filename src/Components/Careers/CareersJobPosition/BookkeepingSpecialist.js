import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdArrowOutward } from "react-icons/md";
import Checkbox from "../../../Assests/Img/check-box.webp";
import { jobListings } from "../../Data";
const BookkeepingSpecialist = () => {
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
            <div className="CareersJobPosition fraunces" id="BookkeepingSpecialist">
                {/* banner start */}
                <section id='inner-page-banner'>
                    <div className='container-fluid bgimg'>
                        <div className='row'>
                            <h1 className='main-head'>bookkeeping specialist</h1>
                        </div>
                    </div>
                </section>
                {/*banner end */}
                {/* ================== */}
                {/* Designation start */}
                <div id='designation'>
                    <div className="container-fluid">
                        <p className='text-desc'><span>Seniority:</span>Entry-Level to Experienced</p>
                        <p className='text-desc'><span>Location:</span>Naperville, IL (On-site)</p>
                        <p className='text-desc'><span>Hours:</span>Full-Time / Part-Time</p>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className='divider'></div>
                </div>
                {/* Designation end */}
                {/* =================== */}
                {/* job-overview start */}
                <section id='job-overview'>
                    <div className="container-fluid">
                        <h1 className='main-head'>About Chawla and Associates CPAs</h1>
                        <p className='text-desc'>Chawla and Associates CPAs is a premier accounting firm dedicated to providing high-quality financial services to businesses and individuals. With a strong commitment to accuracy, efficiency, and client satisfaction, we specialize in bookkeeping, tax preparation, financial consulting, and business advisory services.
                            <br></br><br></br>Our team fosters a collaborative and supportive work environment where innovation and professional growth are encouraged. We believe in equipping our employees with the best tools and training to excel in their roles and advance in their careers. Join us and be part of a firm that values expertise, integrity, and exceptional client service.
                        </p>
                    </div>
                </section>
                {/* job-overview end */}
                {/* ======================== */}
                {/* responsibilities-and-experience start */}
                <div id='responsibilities-and-experience' className="bgimg">
                    <div className='container-fluid inner'>
                        <div className='row'>
                            <div className='col-lg-12 col-md-12'>
                                <div className='responsibilities'>
                                    <h1 className='main-head'>Job Responsibilities</h1>
                                    <p className='text-desc'>As a bookkeeper at Chawla and Associates CPAs, you will play a key role in managing financial data with precision and compliance. Your key responsibilities include:</p>
                                    <div className='icon-list'>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'><b>Recording Financial Transactions:</b> Accurately document all income, expenses, and financial activities using industry-standard accounting software.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'><b>Maintaining General Ledger:</b> Ensure the accuracy of the general ledger by reconciling accounts and resolving discrepancies.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'><b>Preparing Financial Statements:</b> Generate monthly, quarterly, and annual financial reports for internal and client use.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'> <b>Payroll Processing:</b> Manage payroll operations, including wage calculations, tax withholdings, and payment issuance.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'><b>Accounts Payable and Receivable:</b> Track invoices, payments, and overdue accounts while maintaining strong client and vendor relationships.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'><b>Bank Reconciliation:</b> Reconcile bank statements with internal records to identify and correct inconsistencies.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'><b> Budget Monitoring:</b>  Assist in budget tracking, variance identification, and financial forecasting.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'><b>Compliance and Audits:</b> Ensure compliance with financial regulations and assist in internal or external audits.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'><b>Expense Management:</b> Monitor expenses and recommend cost-saving opportunities.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'><b>Tax Preparation Assistance:</b> Collaborate with accountants to prepare and file tax returns accurately and on time.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* responsibilities-and-experience end */}
                {/* ============================ */}
                {/* Required Skills, Experience, and Qualifications start */}
                <div id='Required-Skills'>
                    <h1 className='main-head'>Required Skills, Experience, and Qualifications</h1>
                    <div className='container-fluid inner'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-12 left p-xs-0'>
                                <div className='inner-boxes'>
                                    <h4>Must-have:</h4>
                                    <div class="icon-list">
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Bachelor's degree in accounting or finance required.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Proficiency in accounting software such as QuickBooks, Xero, or FreshBooks.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Strong knowledge of bookkeeping principles and best practices.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Exceptional attention to detail and strong organizational skills.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Analytical ability to identify financial discrepancies.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Excellent communication and interpersonal skills for client and vendor interactions.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 col-md-12 right p-xs-0'>
                                <div className='inner-boxes'>
                                    <h4>Nice-to-have:</h4>
                                    <div class="icon-list">
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Certification as a bookkeeper or accounting technician (e.g., CPB, AAT).</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Experience working in professional accounting or financial services.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Familiarity with cloud-based accounting solutions or enterprise resource planning (ERP) systems.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Advanced Microsoft Excel skills, including pivot tables and complex formulas.</p>
                                        </span>
                                        <span>
                                            <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                            <p className='text-desc'>Ability to manage multiple accounts and projects efficiently.</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Required Skills, Experience, and Qualifications end */}
                {/* =========================== */}
                {/* why-join start */}
                <div id='Success-Criteria'>
                    <div className="container-fluid">
                        <h1 className='main-head'>Success Criteria</h1>
                        <p className='text-desc'>To thrive in this role, you should:</p>
                        <div className='icon-list'>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Consistently produce accurate financial reports within set deadlines.</p>
                            </span>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Maintain a high accuracy rate in financial transactions and reconciliations.</p>
                            </span>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Proactively communicate and resolve financial discrepancies promptly.
                                </p>
                            </span>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Demonstrate reliability in meeting deadlines and responding to inquiries.
                                </p>
                            </span>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Build strong professional relationships with clients, vendors, and colleagues.
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
                        <h1 className='main-head'>Benefits  </h1>
                        <p className='text-desc'>At Chawla and Associates CPAs, we prioritize employee well-being and career development. Our benefits package includes:</p>
                        <div className='icon-list'>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Extremely flexible hours.</p>
                            </span>
                            <span>
                                <img src={Checkbox} alt='Checkbox' title='Checkbox'></img>
                                <p className='text-desc'>Professional development programs.</p>
                            </span>
                        </div>
                    </div>
                </div>
                {/* Benefits end */}
                {/* ========================= */}
                {/* cta start */}
                <div id="cta" className='bgimg'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-8'>
                                <h1 className='main-head'>Application Process</h1>
                                <p className='text-desc'>To apply, please submit your resume and a cover letter detailing your bookkeeping experience and qualifications. Qualified candidates will be contacted within two weeks for an initial phone interview, followed by an in-person or virtual meeting. Employment is contingent upon a successful background check. For inquiries, contact us at <a href="mailto:info@chawlacpa.com">info@chawlacpa.com</a> or call us at <a href="tel:630-922-8600">630-922-8600.</a></p>
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

export default BookkeepingSpecialist
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
      <div className="CareersJobPosition fraunces" id="BookkeepingSpecialist">
        {/* banner start */}
        <section id="inner-page-banner">
          <div className="container-fluid bgimg">
            <div className="row">
              <h1 className="main-head">bookkeeping specialist</h1>
            </div>
          </div>
        </section>
        {/*banner end */}
        {/* ================== */}
        {/* Designation start */}
        <div id="designation">
          <div className="container-fluid">
            <p className="text-desc">
              <span>Seniority:</span>Entry-Level to Experienced
            </p>
            <p className="text-desc">
              <span>Location:</span>Naperville, IL (On-site)
            </p>
            <p className="text-desc">
              <span>Hours:</span>Full-Time / Part-Time
            </p>
          </div>
        </div>
        <div className="container-fluid">
          <div className="divider"></div>
        </div>
        {/* Designation end */}
        {/* =================== */}
        {/* job-overview start */}
        <section id="job-overview">
          <div className="container-fluid">
            <h1 className="main-head">About Chawla and Associates CPAs</h1>
            <p className="text-desc">
              Chawla and Associates CPAs is a premier accounting firm dedicated
              to providing high-quality financial services to businesses and
              individuals. With a strong commitment to accuracy, efficiency, and
              client satisfaction, we specialize in bookkeeping, tax
              preparation, financial consulting, and business advisory services.
              <br></br>
              <br></br>Our team fosters a collaborative and supportive work
              environment where innovation and professional growth are
              encouraged. We believe in equipping our employees with the best
              tools and training to excel in their roles and advance in their
              careers. Join us and be part of a firm that values expertise,
              integrity, and exceptional client service.
            </p>
          </div>
        </section>
        {/* job-overview end */}
        {/* ======================== */}
        {/* responsibilities-and-experience start */}
        <div id="responsibilities-and-experience" className="bgimg">
          <div className="container-fluid inner">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <div className="responsibilities">
                  <h1 className="main-head">Job Responsibilities</h1>
                  <p className="text-desc">
                    As a bookkeeper at Chawla and Associates CPAs, you will play
                    a key role in managing financial data with precision and
                    compliance. Your key responsibilities include:
                  </p>
                  <div className="icon-list">
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        <b>Recording Financial Transactions:</b> Accurately
                        document all income, expenses, and financial activities
                        using industry-standard accounting software.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        <b>Maintaining General Ledger:</b> Ensure the accuracy
                        of the general ledger by reconciling accounts and
                        resolving discrepancies.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        <b>Preparing Financial Statements:</b> Generate monthly,
                        quarterly, and annual financial reports for internal and
                        client use.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        {" "}
                        <b>Payroll Processing:</b> Manage payroll operations,
                        including wage calculations, tax withholdings, and
                        payment issuance.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        <b>Accounts Payable and Receivable:</b> Track invoices,
                        payments, and overdue accounts while maintaining strong
                        client and vendor relationships.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        <b>Bank Reconciliation:</b> Reconcile bank statements
                        with internal records to identify and correct
                        inconsistencies.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        <b> Budget Monitoring:</b> Assist in budget tracking,
                        variance identification, and financial forecasting.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        <b>Compliance and Audits:</b> Ensure compliance with
                        financial regulations and assist in internal or external
                        audits.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        <b>Expense Management:</b> Monitor expenses and
                        recommend cost-saving opportunities.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        <b>Tax Preparation Assistance:</b> Collaborate with
                        accountants to prepare and file tax returns accurately
                        and on time.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* responsibilities-and-experience end */}
        {/* ============================ */}
        {/* Required Skills, Experience, and Qualifications start */}
        <div id="Required-Skills">
          <h1 className="main-head">
            Required Skills, Experience, and Qualifications
          </h1>
          <div className="container-fluid inner">
            <div className="row">
              <div className="col-lg-6 col-md-12 left p-xs-0">
                <div className="inner-boxes">
                  <h4>Must-have:</h4>
                  <div class="icon-list">
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Bachelor's degree in accounting or finance required.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Proficiency in accounting software such as QuickBooks,
                        Xero, or FreshBooks.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Strong knowledge of bookkeeping principles and best
                        practices.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Exceptional attention to detail and strong
                        organizational skills.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Analytical ability to identify financial discrepancies.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Excellent communication and interpersonal skills for
                        client and vendor interactions.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 right p-xs-0">
                <div className="inner-boxes">
                  <h4>Nice-to-have:</h4>
                  <div class="icon-list">
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Certification as a bookkeeper or accounting technician
                        (e.g., CPB, AAT).
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Experience working in professional accounting or
                        financial services.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Familiarity with cloud-based accounting solutions or
                        enterprise resource planning (ERP) systems.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Advanced Microsoft Excel skills, including pivot tables
                        and complex formulas.
                      </p>
                    </span>
                    <span>
                      <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                      <p className="text-desc">
                        Ability to manage multiple accounts and projects
                        efficiently.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Required Skills, Experience, and Qualifications end */}
        {/* =========================== */}
        {/* why-join start */}
        <div id="Success-Criteria">
          <div className="container-fluid">
            <h1 className="main-head">Success Criteria</h1>
            <p className="text-desc">To thrive in this role, you should:</p>
            <div className="icon-list">
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  Consistently produce accurate financial reports within set
                  deadlines.
                </p>
              </span>
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  Maintain a high accuracy rate in financial transactions and
                  reconciliations.
                </p>
              </span>
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  Proactively communicate and resolve financial discrepancies
                  promptly.
                </p>
              </span>
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  Demonstrate reliability in meeting deadlines and responding to
                  inquiries.
                </p>
              </span>
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">
                  Build strong professional relationships with clients, vendors,
                  and colleagues.
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
            <h1 className="main-head">Benefits </h1>
            <p className="text-desc">
              At Chawla and Associates CPAs, we prioritize employee well-being
              and career development. Our benefits package includes:
            </p>
            <div className="icon-list">
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">Extremely flexible hours.</p>
              </span>
              <span>
                <img src={Checkbox} alt="Checkbox" title="Checkbox"></img>
                <p className="text-desc">Professional development programs.</p>
              </span>
            </div>
          </div>
        </div>
        {/* Benefits end */}
        {/* ========================= */}
        {/* cta start */}
        <div id="cta" className="bgimg">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8">
                <h1 className="main-head">How to Apply</h1>
                <p className="text-desc">
                  We’d love to hear from you. Please send your application to{" "}
                  <a href="mailto:info@chawlacpa.com">info@chawlacpa.com</a> and
                  make sure to include the position title in the subject line so
                  we can review it quickly and connect you with the right
                  person..
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

export default BookkeepingSpecialist;
>>>>>>> 2bf065d (content added)
