import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../newslettercomp/style.css'

const NewsletterFailComp = () => {

    return (
        <>
            <section className="holds-all-newsletter">
                    <h1 className="home-mission-statement-header">Newsletter Failed</h1>
                <div className="holds-comp-form-button-link margin-top">
                    <p>Something went wrong. Please contact director <b>Brianna Roman</b> or try again later.</p>
                    <b><a href="tel:4073509371"><p style={{ marginTop: '-.5rem' }}>407-350-9371</p></a></b>
                    <b><a href="mailto:onpointedance.a@gmail.com"><p style={{ marginTop: '-.5rem' }}>onpointedance.a@gmail.com</p></a></b>
                </div>
            </section>
        </>
    )
}

export default NewsletterFailComp;