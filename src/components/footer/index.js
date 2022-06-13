import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlinePhone, AiOutlineMail, AiOutlineFacebook } from 'react-icons/ai';

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../footer/footer.css'
import DanceLogo from '../../assets/P-logos_black.png';

const Footer = () => {

    return(
        <>
            <section className="holds-everything-footer">
                <div className="holds-footer-img">
                    <img alt="footer-logo" src={DanceLogo} className='footer-logo'></img>
                    <p className="small-sub-text">@Onpointe Dance Academy</p>
                </div>
                <div className="footer-social-media">
                    <p>Check us out on...</p>
                    <div className="social-dicons-row">
                        <a href="/"><AiOutlineInstagram className="footer-social-icons"/></a>
                        <a href="/"><AiOutlineYoutube className="footer-social-icons"/></a>
                        <a href="/"><AiOutlineFacebook className="footer-social-icons"/></a>
                    </div>
                </div>
                <div className="small-contact-info">
                    <div className="phone-footer-contact">
                        <AiOutlinePhone className="footer-contact-icons"/>
                        <div className="div-padding-verysmall"></div>
                        <a href="tel:3333333333"><p>407-888-5687</p></a>
                    </div>
                    <div className="mail-footer-contact">
                        <AiOutlineMail className="footer-contact-icons"/>
                        <div className="div-padding-verysmall"></div>
                        <a href="mailto:something@gmail.com"><p>something@gmail.com</p></a>
                    </div>
                    
                    
                </div>
            </section>
        </>
    )
}

export default Footer;