import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { MdArrowOutward } from "react-icons/md";
import logo from "../../../Assests/Img/Chwla-logo.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12 footer-logo">
              <Link to="/">
                <img src={logo} alt="logo" title="logo" loading="lazy"></img>
              </Link>
              <a href="https://maps.app.goo.gl/EEmaF67MyCAkoT2V7" target="_blank">
                <p>2752 Forgue Dr, Suite 100-B, Naperville, IL 60564</p>
              </a>
              <a href="tel:(630) 922- 8600">(630) 922- 8600</a>
            </div>
            <div className="col-lg-9 col-md-12 col-sm-12 footer-links">
              <div className="first-col">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/industries">Industries</Link>
                  </li>
                </ul>
              </div>
              <div className="first-col">
                <ul>
                  <li>
                    <Link to="/services/taxes">Taxes</Link>
                  </li>
                  <li>
                    <Link to="/services/accounting-services">
                      Accounting Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/advisory-consulting">Advisory & Consulting</Link>
                  </li>
                </ul>
              </div>
              <div className="first-col">
                <ul>
                  <li>
                    <Link to="/resources">Resources</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/careers">Careers</Link>
                  </li>
                </ul>
              </div>
              <div className="first-col">
                <ul>
                  <li>
                    <Link to="/community">Community</Link>
                  </li>
                  <li>
                    <Link to="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link to="/terms-and-conditions">Terms & Conditions</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-btns">
                <Link to="https://onvio.us/clientcenter/en/us/" target="_blank">
                <button className="common-btn">Client Portal</button></Link>
                <Link className="bg-remove-btn" to="/contact">
                    get in touch <MdArrowOutward />
                </Link>
              </div>
            </div>
            <div className="footer-btns tablet">
              <Link to="https://onvio.us/clientcenter/en/us/" target="_blank">
                <button className="common-btn">Client Portal</button></Link>
              <Link className="bg-remove-btn" to="/contact">
                  get in touch <MdArrowOutward />
              </Link>
            </div>
            <p className="copyright">© Copyright Chawla & Associates</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
