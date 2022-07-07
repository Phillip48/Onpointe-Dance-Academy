import React, {useState} from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../nav/nav.css'
import {Link} from "react-router-dom";
import DanceLogo from '../../assets/11OPDALOGO.JPG'; 
import ReactModal from 'react-modal';
import MailchimpFormContainer from '../mailchimpForm/index';

const Nav = () => {
    
    const [modalIsOpen, SetModalIsOpen] = useState(false)
    return (
        <>
            <ReactModal
                isOpen={modalIsOpen}
                shouldCloseOnOverlayClick={false}
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

            <header className="hold-everything-navbar">
                <div className="holds-logo">
                    {/* needs OPDA LOGO */}
                    <a href='/'><img alt='logo' className="navbar-logo" src={DanceLogo}></img></a>
                </div>
                <div className="holds-page-options">
                    <Link to="/AboutUs" className="navbar-a-element"><h4 style={{textAlign: 'center'}}>About Us</h4></Link>
                    <div className="div-padding-1-nav"></div>
                    <Link to="/Classes" className="navbar-a-element"><h4 style={{textAlign: 'center'}}>Classes/Registration</h4></Link>
                    <div className="div-padding-1-nav"></div>
                    <h4 onClick={() => SetModalIsOpen(true)} className="navbar-a-element-modal-button" style={{ textAlign: 'center' }}>OPDA Newsletter</h4>
                    <div className="div-padding-1-nav"></div>
                    <Link to="/ContactMe" className="navbar-a-element"><h4 style={{textAlign: 'center'}}>Contact Me</h4></Link>
                </div>
            </header>
        </>
    )
}

export default Nav;