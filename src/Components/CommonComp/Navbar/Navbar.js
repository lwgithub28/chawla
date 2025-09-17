import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../../../Assests/Img/Chwla-logo.png";
import { FaPhone } from "react-icons/fa6";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import "./Navbar.scss";

const Navbar = () => {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);
  const [isMobileServicesDropdownOpen, setIsMobileServicesDropdownOpen] = useState(false);
  const [isMobileContactDropdownOpen, setIsMobileContactDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
    setIsMobileServicesDropdownOpen(false);
    setIsMobileContactDropdownOpen(false);
  };

  return (
    <>
      <div className="navbar-top">
        <nav className="navbar">
          <div className="logo">
            <Link to="/"><img src={logo} alt="logo" title="logo" /></Link>
          </div>
          <div className="nav-all-links">
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li className="dropdown-click">
                <span className="dropdown-toggle"><Link to="/services">Services</Link></span>
                <ul className="dropdown-menu">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-12">
                        <h5><Link to="/services/taxes">Taxes</Link></h5>
                        <ul>
                          <li><Link to="/services/taxes/income-tax-preparation">Income Tax Preparation</Link></li>
                          <li><Link to="/services/taxes/business-tax-preparation">Business Tax Preparation</Link></li>
                          <li><Link to="/services/taxes/state-local-tax">State & Local Tax</Link></li>
                          <li><Link to="/services/taxes/IRS-representation">IRS Representation</Link></li>
                          <li><Link to="/services/taxes/international-tax">International Tax</Link></li>
                          <li><Link to="/services/taxes/estate-trust-tax">Estate & Trust Tax</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <h5><Link to="/services/accounting-services">Accounting Services</Link></h5>
                        <ul>
                          <li><Link to="/services/accounting-services/bookkeeping-services">Bookkeeping Services</Link></li>
                          <li><Link to="/services/accounting-services/financial-statements">Financial Statements</Link></li>
                          <li><Link to="/services/accounting-services/payroll">Payroll</Link></li>
                          <li><Link to="/services/accounting-services/audit-assurance">Audit & Assurance</Link></li>
                          <li><Link to="/services/accounting-services/crypto">Crypto</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <h5><Link to="/services/advisory-consulting">Advisory & Consulting</Link></h5>
                        <ul>
                          <li><Link to="/services/advisory-consulting/business-advisory">Business Advisory</Link></li>
                          <li><Link to="/services/advisory-consulting/CFO">CFO</Link></li>
                          <li><Link to="/services/advisory-consulting/controllership-services">Controllership Services</Link></li>
                          <li><Link to="/services/advisory-consulting/succession-planning">Succession Planning</Link></li>
                          <li><Link to="/services/advisory-consulting/tax-financial-planning">Tax & Financial Planning</Link></li>
                          <li><Link to="/services/advisory-consulting/M&A-strategy">M&A Strategy</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ul>
              </li>
              <li><Link to="/industries">Industries</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li className="dropdown-click single-column">
                <span className="dropdown-toggle"><Link to="/contact">Contact</Link></span>
                <ul className="dropdown-menu single-column">
<<<<<<< HEAD
                  <li><Link to="/careers">Career</Link></li>
=======
                  <li><Link to="/careers">Careers</Link></li>
>>>>>>> 2bf065d (content added)
                </ul>
              </li>
              <li><Link to="/community">Community</Link></li>
            </ul>
          </div>
          <div className="common-btns">
            <span className="number">
              <a href="tel:(630) 922-8600">
                <span><FaPhone /></span>
                (630) 922-8600
              </a>
            </span>
            <a href="https://onvio.us/clientcenter/en/us/" target="_blank" rel="noreferrer">
              <button className="common-btn">Client Portal</button>
            </a>
          </div>
          <div className="menu-icon" onClick={toggleMobileMenu}>
            <label htmlFor="menu_checkbox" id="menu_checkbox">
              <div></div>
              <div></div>
              <div></div>
            </label>
          </div>
        </nav>

        <div className={`mobile-menu ${isMobileMenuActive ? 'active' : ''}`}>
          <div className="close-icon" onClick={toggleMobileMenu}>&times;</div>
          <ul>
            <li><Link to="/" onClick={toggleMobileMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMobileMenu}>About</Link></li>

            <li>
              <div className="mobile-dropdown-toggle" onClick={() => setIsMobileServicesDropdownOpen(prev => !prev)}>
                <Link to="/services" onClick={toggleMobileMenu}>Services</Link>
                {isMobileServicesDropdownOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
              </div>
              {isMobileServicesDropdownOpen && (
                <ul className="mobile-submenu">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-4 col-md-12">
                        <h5><Link to="/services/taxes" onClick={toggleMobileMenu}>Taxes</Link></h5>
                        <ul>
                          <li><Link to="/services/taxes/income-tax-preparation" onClick={toggleMobileMenu}>Income Tax Preparation</Link></li>
                          <li><Link to="/services/taxes/business-tax-preparation" onClick={toggleMobileMenu}>Business Tax Preparation</Link></li>
                          <li><Link to="/services/taxes/state-local-tax" onClick={toggleMobileMenu}>State & Local Tax</Link></li>
                          <li><Link to="/services/taxes/IRS-representation" onClick={toggleMobileMenu}>IRS Representation</Link></li>
                          <li><Link to="/services/taxes/international-tax" onClick={toggleMobileMenu}>International Tax</Link></li>
                          <li><Link to="/services/taxes/estate-trust-tax" onClick={toggleMobileMenu}>Estate & Trust Tax</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <h5><Link to="/services/accounting-services" onClick={toggleMobileMenu}>Accounting Services</Link></h5>
                        <ul>
                          <li><Link to="/services/accounting-services/bookkeeping-services" onClick={toggleMobileMenu}>Bookkeeping Services</Link></li>
                          <li><Link to="/services/accounting-services/financial-statements" onClick={toggleMobileMenu}>Financial Statements</Link></li>
                          <li><Link to="/services/accounting-services/payroll" onClick={toggleMobileMenu}>Payroll</Link></li>
                          <li><Link to="/services/accounting-services/audit-assurance" onClick={toggleMobileMenu}>Audit & Assurance</Link></li>
                          <li><Link to="/services/accounting-services/crypto" onClick={toggleMobileMenu}>Crypto</Link></li>
                        </ul>
                      </div>
                      <div className="col-lg-4 col-md-12">
                        <h5><Link to="/services/advisory-consulting" onClick={toggleMobileMenu}>Advisory & Consulting</Link></h5>
                        <ul>
                          <li><Link to="/services/advisory-consulting/business-advisory" onClick={toggleMobileMenu}>Business Advisory</Link></li>
                          <li><Link to="/services/advisory-consulting/CFO" onClick={toggleMobileMenu}>CFO</Link></li>
                          <li><Link to="/services/advisory-consulting/controllership-services" onClick={toggleMobileMenu}>Controllership Services</Link></li>
                          <li><Link to="/services/advisory-consulting/succession-planning" onClick={toggleMobileMenu}>Succession Planning</Link></li>
                          <li><Link to="/services/advisory-consulting/tax-financial-planning" onClick={toggleMobileMenu}>Tax & Financial Planning</Link></li>
                          <li><Link to="/services/advisory-consulting/M&A-strategy" onClick={toggleMobileMenu}>M&A Strategy</Link></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </ul>
              )}
            </li>

            <li><Link to="/industries" onClick={toggleMobileMenu}>Industries</Link></li>
            <li><Link to="/resources" onClick={toggleMobileMenu}>Resources</Link></li>

            <li>
              <div className="mobile-dropdown-toggle" onClick={() => setIsMobileContactDropdownOpen(prev => !prev)}>
                <Link to="/contact" onClick={toggleMobileMenu}>Contact</Link>
                {isMobileContactDropdownOpen ? <MdArrowDropUp /> : <MdArrowDropDown />}
              </div>
              {isMobileContactDropdownOpen && (
                <ul className="mobile-submenu contact-submenu">
                  <li><Link to="/careers" onClick={toggleMobileMenu}>Career</Link></li>
                </ul>
              )}
            </li>

            <li><Link to="/community" onClick={toggleMobileMenu}>Community</Link></li>
          </ul>

          <div className="common-btns">
            <span className="number">
              <a href="tel:(630) 922-8600">
                <span><FaPhone /></span>
                (630) 922-8600
              </a>
            </span>
            <a href="https://onvio.us/clientcenter/en/us/" target="_blank" rel="noreferrer">
              <button className="common-btn">Client Portal</button>
            </a>
          </div>
        </div>

        {isMobileMenuActive && (
          <div className="overlay active" onClick={toggleMobileMenu}></div>
        )}
      </div>

      <Outlet />
    </>
  );
};

export default Navbar;
