import React from "react";
import '../compperteamcomponent/compandper.css'
import pdf from '../../assets/Dance contract 2021-2022.pdf';
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai';

const CompandPerfteamcomp = () => {

    return (
        <>
            <section className="comp-holds-everything">
                <div className="comp-banner-top-page">
                    <h1 className="comp-banner-text">Competition and Performance Team</h1>
                    {/* <img alt='banner' className="home-top-banner" src={HomepageBanner}></img> */}
                </div>

                <div className="comp-holds-team-info">
                    <h2 style={{ color: '#fe0002' }}><b>Performance Teams</b></h2>
                    <p><b>On Pointe Dance teams are non competitive. </b>
                        These teams are for children who are serious about dance, and love to perform.
                        We are looking for students who want to grow their love for dance and take their technique to a new level.
                        Dance teams will perform at a minimal of once a month at local events</p>
                    <p><i><b>Requirements: </b></i>Children and family must be dedicated to the team.
                        A signed contract is needed before starting (see below). All children will need to be evaluated by owner to determine entry on team. We do not have auditions.
                        Summer intensives or private lessons are mandatory for entry. </p>
                </div>

                <div className="comp-iframe-div">
                    <iframe 
                    title="Performance-PDF"
                    width={'1500px'}
                    height={'700px'}
                    className="pdf-iframe" src={pdf}>

                    </iframe>
                </div>

                <div className="holds-comp-form-button-link margin-top">
                    <h3 style={{ color: '#fe0002', textAlign: 'center' }}><b>Interested in becoming a dance student?</b></h3>
                    <p>Please contact director <b>Brianna Roman</b> to register for the Perforamce or Competition Team</p>
                    <b><a href="tel:4073509371"><p style={{ marginTop: '-.5rem' }}><AiOutlinePhone /> 407-350-9371</p></a></b>
                    <b><a href="mailto:onpointedance.a@gmail.com"><p style={{ marginTop: '-.5rem' }}><AiOutlineMail /> onpointedance.a@gmail.com</p></a></b>
                    {/* <a href='/Register'><button className="contact-form-labels-submit">
                        Register Now!
                    </button></a> */}

                    {/* <div className="class-holds-class-img">
                        <img alt='gallery' src={toddlergallerypic} className='class-image'></img>
                        <img alt='gallery' src={inclassphoto} className='class-image'></img>
                    </div> */}

                </div>
            </section>
        </>
    )
}

export default CompandPerfteamcomp;