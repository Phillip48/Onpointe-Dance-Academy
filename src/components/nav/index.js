import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../nav/nav.css'
import DanceLogo from '../../assets/11OPDALOGO.JPG';

const Nav = () => {
    

    return (
        <>
            <header className="hold-everything-navbar">
                <div className="holds-logo">
                    {/* needs OPDA LOGO */}
                    <a href='/'><img alt='logo' className="navbar-logo" src={DanceLogo}></img></a>
                </div>
                <div className="holds-page-options">
                    <a href='/AboutUs' className="navbar-a-element"><h4>About Us</h4></a>
                    <div className="div-padding-1"></div>
                    <a href='/Classes' className="navbar-a-element"><h4>Classes/Registration</h4></a>
                    <div className="div-padding-1"></div>
                    <a href='/ContactMe' className="navbar-a-element"><h4>Contact Me</h4></a>
                </div>
            </header>
        </>
    )
}

export default Nav;