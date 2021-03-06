import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/home.css'
import ReactModal from 'react-modal';
import MailchimpFormContainer from '../mailchimpForm/index';
import { Link } from "react-router-dom";

const Home = () => {
    const [modalIsOpen, SetModalIsOpen] = useState(false)
    return (
        <>
            <ReactModal
                style={{
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}
                isOpen={modalIsOpen}
                // shouldCloseOnOverlayClick={false}
                onRequestClose={() => SetModalIsOpen(false)}
            >
                <section className="modal-header">
                    <div>
                        <h1 className="home-mission-statement-header">OPDA Newsletter</h1>
                    </div>
                    <div>
                        <button onClick={() => SetModalIsOpen(false)} className="modal-close-button">
                            Close
                        </button>
                    </div>

                </section>
                <section className="modal-body-content">

                    <MailchimpFormContainer />
                    {/* <a href='https://www.google.com/'><button className="modal-close-button">
                        Newsletter
                    </button></a> */}
                </section>
            </ReactModal>

            <main className="main-holds-home-page">
                {/* Header under Navbar */}
                <div className="home-banner-top-page">
                    <h1 className="home-banner-text">Onpointe Dance Academy</h1>
                    <p className="home-banner-subtext">Dedicated to teaching the love of dance to children of all ages</p>
                    {/* <img alt='banner' className="home-top-banner" src={HomepageBanner}></img> */}
                </div>

                <div className="home-mission-statement">
                    <div className="home-mission-statement-text">
                        <h2 className="home-mission-statement-header">Years Of Love And Experience For The Art We Call Dance</h2>
                        <p>At OPDA we strive to provide the highest level of dance instruction through our
                            professional and highly experienced staff. We are dedicated to opening doors to the
                            exciting world of dance and to teaching the love of dance to children of all ages. Serving dancers from Kissimmee, Orlando and Celebration.
                        </p>
                    </div>
                    <div className="home-mission-statement-text">
                        <p>We offer classes for dancers 3 years of age and up in ballet, jazz, tap, acrobatics, hip hop, modern, lyrical and jump and turn.
                        </p>
                    </div>
                </div>

                <div className="home-mission-statement">
                    <div className="home-mission-statement-text">
                        <h2 className="home-mission-statement-header">Want to stay up to date?</h2>
                        <p>Signup for our newsletter and receive the latest information about classes and performances!</p>
                        <button onClick={() => SetModalIsOpen(true)} className="contact-form-labels-submit">
                            Newsletter!
                        </button>

                    </div>
                </div>

                {/* 2 part of figma home text and image right left */}
                {/* <section className="home-text-and-image">
                    <div className="home-left-image">
                        <img alt='banner' className="home-side-image" src={Homesmalldancepic}></img>
                    </div>
                    <div className="home-right-text">
                        <p>At OPDA we strive to provide the highest level of dance instruction through our
                            professional and highly experienced staff. We are dedicated to opening doors to the
                            exciting world of dance and to teaching the love of dance to children of all ages. Serving dancers from Kissimmee, Orlando and Celebration.
                        </p>
                    </div>
                </section> */}

                {/* small height full width pic */}
                {/* <div className="home-midpage-banner">
                     <img alt='banner' className="home-midpage-banner-img" src={TempPic}></img> 
                </div> */}

                {/* make take out just an idea */}
                <div className="home-header-for-classes">
                    <h1 className="home-class-header">Classes</h1>
                </div>
                {/* Class options (Text with img) */}
                {/* Need to add text to images */}
                <div className="home-different-classes">

                    <div className="holdsdifferent-class-options-home-div holdsdifferent-class-options-home-div-1">
                        {/* <img alt='banner' className="home-classes-options" src={TempPic}></img> */}
                        <Link to="/Classes"><p className="home-banner-classtext">Tumbling</p></Link>
                    </div>

                    {/* <div className="div-padding-1"></div> */}

                    <div className="holdsdifferent-class-options-home-div holdsdifferent-class-options-home-div-2">
                        {/* <img alt='banner' className="home-classes-options" src={TempPic}></img> */}
                        <Link to="/Classes"><p className="home-banner-classtext">Ballet</p></Link>
                    </div>
                    {/* <div className="div-padding-1"></div> */}

                    <div className="holdsdifferent-class-options-home-div holdsdifferent-class-options-home-div-3">
                        {/* <img alt='banner' className="home-classes-options" src={TempPic}></img> */}
                        <Link to="/Classes"><p className="home-banner-classtext">Contemporary</p></Link>
                    </div>

                    <div className="holdsdifferent-class-options-home-div holdsdifferent-class-options-home-div-4">
                        {/* <img alt='banner' className="home-classes-options" src={TempPic}></img> */}
                        <Link to="/Classes"><p className="home-banner-classtext">Hip Hop</p></Link>
                    </div>
                    {/* <div className="div-padding-1"></div> */}

                    <div className="holdsdifferent-class-options-home-div holdsdifferent-class-options-home-div-5">
                        {/* <img alt='banner' className="home-classes-options" src={TempPic}></img> */}
                        <Link to="/Classes"><p className="home-banner-classtext">Tap Dance</p></Link>
                    </div>
                    {/* <div className="div-padding-1"></div> */}

                    <div className="holdsdifferent-class-options-home-div holdsdifferent-class-options-home-div-6">
                        {/* <img alt='banner' className="home-classes-options" src={TempPic}></img> */}
                        <Link to="/Classes"><p className="home-banner-classtext">Latin</p></Link>
                    </div>

                    <div className="holdsdifferent-class-options-home-div holdsdifferent-class-options-home-div-7">
                        {/* <img alt='banner' className="home-classes-options" src={TempPic}></img> */}
                        <Link to="/Classes"><p className="home-banner-classtext">Jazz</p></Link>
                    </div>

                    <div className="holdsdifferent-class-options-home-div holdsdifferent-class-options-home-div-8">
                        {/* <img alt='banner' className="home-classes-options" src={TempPic}></img> */}
                        <Link to="/Competition&PerforamceTeam"><p className="home-banner-classtext">Performance Team</p></Link>
                    </div>

                    <div className="holdsdifferent-class-options-home-div holdsdifferent-class-options-home-div-9">
                        {/* <img alt='banner' className="home-classes-options" src={TempPic}></img> */}
                        <Link to="/Classes"><p className="home-banner-classtext">Musical Theater</p></Link>
                    </div>
                </div>
                <div className="holds-register-form-button-link margin-top">
                    <h2 style={{ textAlign: 'center' }}>Interested in becoming a dance student?</h2>
                    <Link to="/Register"><button className="contact-form-labels-submit">
                        Register Now!
                    </button></Link>

                    {/* <div className="class-holds-class-img">
                        <img alt='gallery' src={toddlergallerypic} className='class-image'></img>
                        <img alt='gallery' src={inclassphoto} className='class-image'></img>
                    </div> */}

                </div>

                {/* Header for contact me. Contact me in rendered in the homepage */}
                <div className="home-contact-header">
                    <h1 className="home-contactme-header">Contact Me</h1>
                </div>

            </main>
        </>
    )
}

export default Home;