import React from 'react'
import "./TermsAndConditions.scss";
const TermsAndConditions = () => {
    return (
        <>
            <div className='terms-page fraunces' id='terms-and-conditions'>
                {/* banner */}
                <div className='banner'>
                    <div className='container-fluid bgimg'>
                        <h1>Terms and Conditions</h1>
                    </div>

                </div>
                {/* last updated  */}
                <div id='Last-updated' className='side-spacing'>
                    <div className='container-fluid'>
                        <h4>Last updated: 04/15/2025</h4>
                        <p className='text-desc'>Welcome to Chawla & Associates, CPAs, a certified public accounting firm based in Naperville, Illinois. By accessing or using our website (the “Site”), you agree to comply with and be bound by the following terms and conditions. If you do not agree with these terms, please do not use this Site.</p>
                    </div>
                </div>
                {/* Use of Site */}
                <div id='Use-of-Site' className='side-spacing'>
                    <div className='container-fluid'>
                        <h1 className='main-head'>Use of Site
                        </h1>
                        <p className='text-desc'>
                            This Site is intended to provide general information about our firm, our services, and accounting-related topics. It does not constitute financial, tax, legal, or professional advice. Use of the Site does not create a CPA-client relationship.
                            <br></br><br></br>
                            You agree to use this Site lawfully and only for its intended purpose. You may not use it in any way that could harm, disable, or overburden the Site or interfere with others’ use.

                        </p>
                    </div>
                </div>
                {/* Intellectual Property */}
                <div id='Intellectual-Property' className='side-spacing'>
                    <div className='container-fluid'>
                        <h1 className='main-head'>Intellectual Property
                        </h1>
                        <p className='text-desc'>
                            All content on this Site—text, graphics, logos, images, and software—is the property of  Chawla & Associates, CPAs or its licensors and is protected by U.S. and international copyright and trademark laws. You may view, download, or print materials for personal, non-commercial use only. Any other use requires prior written consent.
                        </p>
                    </div>
                </div>
                {/* Disclaimer of Warranties */}
                <div id='Disclaimer-of-Warranties' className='side-spacing'>
                    <div className='container-fluid'>
                        <h1 className='main-head'>Disclaimer of Warranties
                        </h1>
                        <p className='text-desc'>
                            This Site and its content are provided “as is” and “as available.” We make no warranties, express or implied, about the Site’s accuracy, reliability, or availability. We are not responsible for any errors or omissions, or for any damages resulting from your use of the Site.
                        </p>
                    </div>
                </div>
                {/* Limitation of Liability */}
                <div id='Limitation-of-Liability' className='side-spacing'>
                    <div className='container-fluid'>
                        <h1 className='main-head'>Limitation of Liability
                        </h1>
                        <p className='text-desc'>
                            To the fullest extent permitted by law, Chawla & Associates, CPAs and its partners, employees, or agents will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of or relating to your use of the Site.
                        </p>
                    </div>
                </div>
                {/* Third-Party Links */}
                <div id='Third-Party-Links' className='side-spacing'>
                    <div className='container-fluid'>
                        <h1 className='main-head'>Third-Party Links
                        </h1>
                        <p className='text-desc'>
                            This Site may contain links to third-party websites. These links are provided for your convenience only. We do not endorse or assume responsibility for the content, privacy policies, or practices of any third-party site.
                        </p>
                    </div>
                </div>
                {/* Privacy */}
                <div id='Privacy' className='side-spacing'>
                    <div className='container-fluid'>
                        <h1 className='main-head'>Privacy </h1>
                        <p className='text-desc'>
                            Your use of the Site is also governed by our Privacy Policy, which explains how we collect, use, and protect your information.
                        </p>
                    </div>
                </div>
                {/* Changes to Terms */}
                <div id='Changes-to-Terms' className='side-spacing'>
                    <div className='container-fluid'>
                        <h1 className='main-head'>Changes to Terms </h1>
                        <p className='text-desc'>
                            We may update these Terms and Conditions at any time without notice. It is your responsibility to check this page periodically. Your continued use of the Site after changes are posted constitutes your acceptance of the revised terms.
                        </p>
                    </div>
                </div>
                {/* Governing Law */}
                <div id='Governing-Law' className='side-spacing'>
                    <div className='container-fluid'>
                        <h1 className='main-head'>Governing Law </h1>
                        <p className='text-desc'>
                            These Terms and your use of the Site are governed by the laws of the State of Illinois, without regard to its conflict of law principles. Any legal action must be filed in the appropriate courts located in DuPage County, Illinois.
                        </p>
                    </div>
                </div>
                {/* Contact Us */}
                <div id='Contact-Us' className='side-spacing'>
                    <div className='container-fluid'>
                        <h1 className='main-head'>Contact Us</h1>
                        <p className='text-desc'>
                            If you have any questions about these Terms, please contact us:
                            <span className='strong'>Chawla & Associates, CPAs</span>
                            <span><a href='https://maps.app.goo.gl/WkdzCASCZKaSpNo67' target='_blank'>2752 Forgue Dr Suite 100-B,<br></br>
                                Naperville, IL 60564</a>
                            </span>
                            <span>Phone: <a href='tel:+1 630-922-8600'>+1 630-922-8600</a></span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TermsAndConditions
