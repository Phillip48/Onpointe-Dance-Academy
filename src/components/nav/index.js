import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../nav/nav.css'
import DanceLogo from '../../assets/P-logos_black.png';

const Nav = () => {
    

    return (
        <>
            <section className="hold-everything-navbar">
                <div className="holds-logo">
                    <a href='/'><img alt='logo' className="navbar-logo" src={DanceLogo}></img></a>
                </div>
                <div className="holds-page-options">
                    <a href='/' className="navbar-a-element"><h4>About Us</h4></a>
                    <div className="div-padding-1"></div>
                    <a href='/' className="navbar-a-element"><h4>Classes/Registration</h4></a>
                    <div className="div-padding-1"></div>
                    <a href='/' className="navbar-a-element"><h4>Contact Me</h4></a>
                </div>
                <div className="holds-page-options-mobile">

                
                </div>
            </section>
        </>
    )
}

export default Nav;