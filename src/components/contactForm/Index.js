import React, { useRef } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../contactForm/contactForm.css'
import { AiOutlineUser, AiOutlineMail, AiOutlineMessage, AiOutlinePhone } from 'react-icons/ai';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    let message = "We'll talk soon!";

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_30g88yk', 'template_hocpn0h', form.current, '3-bRDlrNfQF67KWz3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert(message)
    };

    return (
        <>
            <section className='holds-contact-section'>
                <h1 className='intro-big' id='contact' style={{textAlign: 'center'}}>Have Any Questions? Lets talk!</h1>
                <section className='holds-contact-section-row'>
                    <div className="map-wrap margin-side">
                        <div id='map'>
                            <iframe
                                width="100%"
                                height="100%"
                                title="map"
                                className="absolute inset-0"
                                frameBorder={0}
                                marginHeight={0}
                                marginWidth={0}
                                style={{ filter: "opacity(0.7)" }}
                                src="https://www.google.com/maps/embed/v1/place?q=11184+S+Apopka-Vineland+Rd+orlando+florida&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            />
                        </div>
                    </div>
                    <div className='div-padding'></div>
                    <div className='contact-form-right'>
                        <h3 className='sub-intro-med subheader-contact-form'>Contact me</h3>
                        {/* <p className='para-text-small'>Form here...</p> */}
                        <form name='contact' className='contact-form-input' ref={form} onSubmit={sendEmail}>
                            <div className="contact-form-labels">
                                <label htmlFor="name" className='para-text-small-form'>
                                    <AiOutlineUser /> Full Name
                                </label>
                                <input type="text" id="name" name="name" className="input-field-form" style={{ fontSize: '18px' }} />
                            </div>
                            <div className='div-padding-contact'></div>
                            <div className="contact-form-labels-2-inputs">
                                <div className="email-side-phone">
                                    <label htmlFor="email" className='para-text-small-form'>
                                        <AiOutlineMail /> Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="input-field-form input-field-form-some"
                                        style={{ fontSize: '18px' }} />
                                </div>
                                <div className="div-padding-verysmall"></div>
                                <div className="email-side-phone">
                                    <label htmlFor="phone" className='para-text-small-form'>
                                        <AiOutlinePhone /> Phone
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="input-field-form input-field-form-some"
                                        style={{ fontSize: '18px' }} />
                                </div>
                            </div>
                            <div className='div-padding-contact'></div>
                            <div className="contact-form-labels">
                                <label htmlFor="message" className='para-text-small-form' name="Message">
                                    <AiOutlineMessage /> Message
                                </label>
                                <textarea className="contact-form-labels-textarea input-field-form" name='message' style={{ fontSize: '18px' }} />
                            </div>
                            <button type="submit" className="contact-form-labels-submit">
                                Submit
                            </button>
                        </form>
                    </div>
                </section>
            </section>
        </>
    )
}

export default ContactForm;