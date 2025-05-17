import React from 'react';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import "./NoPage.scss";
const NoPage = () => {
    return (
        <>
            <div className='fraunces'>
                <div class="nopage">
                    <section id="container">
                        <h1 class="heading"> 404 </h1>
                        <h3 class="sub-heading">oops! page not found</h3>
                        <article>Sorry, the page you're looking for doesn't exits. If you think something is broken, report a problem.</article>
                        <Link to="/" className="bg-remove-btn">
                            back to home <MdArrowOutward />
                        </Link>
                    </section>
                </div>
            </div>
        </>
    )
}

export default NoPage
