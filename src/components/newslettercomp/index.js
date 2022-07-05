import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../newslettercomp/style.css'


const NewsletterComp = () => {
    
    
    return (
        <>
            <section className="holds-all-newsletter">
                <div className="holds-newsletter-form">
                    <h1 className="home-mission-statement-header">Newsletter Signup</h1>
                    <p>Enter your information and get up to date on everything OPDA!</p>
                    {/* <form name='contact' className='newsletter-form-input'>
                        <div className="newsletter-form-labels">
                            <label htmlFor="name" className='para-text-small-form'>
                                Full Name
                            </label>
                            <input type="text" id="name" name="name" className="input-field-form" style={{ fontSize: '18px' }} />
                        </div>
                        <div className="newsletter-form-labels">
                            <label htmlFor="newsletterEmail" className='para-text-small-form'>
                                Email
                            </label>
                            <input type="email" id="newsletterEmail" name="newsletterEmail" className="input-field-form" style={{ fontSize: '18px' }} />
                        </div>
                        <button type="submit" className="newsletter-form-labels-submit">
                            Submit
                        </button> 
                    </form> */}
                </div>
            </section>
        </>
    )
}

export default NewsletterComp;