import React from "react";
import '../compperteamcomponent/compandper.css'
import Perpdf from '../../assets/Dance contract 2021-2022.pdf';
import Comppdf from '../../assets/OPCC.pdf';
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
                    <h2 style={{ color: '#fe0002' }}><b>Competition Teams</b></h2>
                    <p>On Pointe Dance Academy has a Competition Company. This company competes at local competitions from January till April. Approximately 1 competition per month. This company is open for solos, duets, trios, and quads. Students must be on the performance team to sign up. Requirements and details below.</p>
                </div>

                <div className="comp-iframe-div">
                    <iframe 
                    title="Comp-PDF"
                    className="pdf-iframe" src={Comppdf}>

                    </iframe>
                </div>
                {/* <div className="holds-comp-form-button-link margin-top">
                    <h3 style={{ color: '#fe0002', textAlign: 'center' }}><b>Interested in joining the Competition or Performance Team?</b></h3>
                    <p>Please contact director <b>Brianna Roman</b> to register for the Competition or Performance Team</p>
                    <b><a href="tel:4073509371"><p style={{ marginTop: '-.5rem' }}><AiOutlinePhone /> 407-350-9371</p></a></b>
                    <b><a href="mailto:onpointedance.a@gmail.com"><p style={{ marginTop: '-.5rem' }}><AiOutlineMail /> onpointedance.a@gmail.com</p></a></b>
                </div> */}

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
                    className="pdf-iframe" src={Perpdf}>

                    </iframe>
                </div>

                <div className="holds-comp-form-button-link margin-top">
                    <h3 style={{ color: '#fe0002', textAlign: 'center' }}><b>Interested in joining the Competition or Performance Team?</b></h3>
                    <p>Please contact director <b>Brianna Roman</b> to register for the Competition or Performance Team</p>
                    <b><a href="tel:4073509371"><p style={{ marginTop: '-.5rem' }}><AiOutlinePhone /> 407-350-9371</p></a></b>
                    <b><a href="mailto:onpointedance.a@gmail.com"><p style={{ marginTop: '-.5rem' }}><AiOutlineMail /> onpointedance.a@gmail.com</p></a></b>
                </div>
            </section>
        </>
    )
}

export default CompandPerfteamcomp;