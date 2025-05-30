import React from 'react';
import { Link } from "react-router-dom";
import document from "../../Assests/Img/document.webp";
import Map from "../CommonComp/Map";
import "./OtherResources.scss";
const OtherResources = () => {
    return (
        <>
            <div className='fraunces'>
                <div id="other-resources">
                    {/* banner start */}
                    <section id='inner-page-banner'>
                        <div className='container-fluid bgimg mobile-spacing tablet-spacing'>
                            <div className='row'>
                                <h1 className='main-head'>Other Resources</h1>
                                <p className='text-desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </section>
                    {/* 4 Documents */}
                    <section id='four-documents' className='mobile-spacing tablet-spacing'>
                        <div className='container-fluid'>
                            <div className='row'>
                                <div className='col-lg-3 col-md-6 first'>
                                    <div className='document-box'>
                                        <Link to="/BusinessExpensesList.pdf" target="_blank">
                                            <img src={document} alt='document' title='document'></img>
                                        </Link>
                                        <Link to="/BusinessExpensesList.pdf" target="_blank">
                                            <h1 className='main-head'>Business Expenses List</h1>
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 second'>
                                    <div className='document-box'>
                                        <Link to="/CorporateDocumentChecklist.pdf" target="_blank">
                                            <img src={document} alt='document' title='document'></img>
                                        </Link>
                                        <Link to="/CorporateDocumentChecklist.pdf" target="_blank">
                                            <h1 className='main-head'>Corporate Document Checklist</h1>
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 third'>
                                    <div className='document-box'>
                                        <Link to="/ForeignTransactionsChecklist.pdf" target="_blank">
                                            <img src={document} alt='document' title='document'></img>
                                        </Link>
                                        <Link to="/ForeignTransactionsChecklist.pdf" target="_blank">
                                            <h1 className='main-head'>Foreign Transactions Checklist</h1>
                                        </Link>
                                    </div>
                                </div>
                                <div className='col-lg-3 col-md-6 fourth'>
                                    <div className='document-box'>
                                        <Link to="/PersonalTaxDocumentChecklist.pdf" target="_blank">
                                            <img src={document} alt='document' title='document'></img>
                                        </Link>
                                        <Link to="/PersonalTaxDocumentChecklist.pdf" target="_blank">
                                            <h1 className='main-head'>Personal Tax Document Checklist</h1>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* map start */}
                    <Map />
                    {/* map end */}
                </div>
            </div>
        </>
    )
}

export default OtherResources;




