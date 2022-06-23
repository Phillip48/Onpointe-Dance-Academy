import React from "react";
import { AiOutlineInstagram, AiOutlineYoutube, AiOutlinePhone, AiOutlineMail, AiOutlineFacebook } from 'react-icons/ai';

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../footer/footer.css'
import DanceLogo from '../../assets/11OPDALOGO.JPG';

const Footer = () => {

    return(
        <>
            <section className="holds-everything-footer">
                <div className="holds-footer-img">
                    {/* needs OPDA LOGO */}
                    <img alt="footer-logo" src={DanceLogo} className='footer-logo'></img>
                    {/* <p className="small-sub-text">@Onpointe Dance Academy</p> */}
                </div>
                <div className="footer-social-media">
                    <p>Check us out on...</p>
                    <div className="social-dicons-row">
                        {/* needs to link to OPDA social media */}
                        <a href="https://www.instagram.com/onpointe_dance/"><AiOutlineInstagram className="footer-social-icons"/></a>
                        <a href="https://www.youtube.com/channel/UCjMTMftU-ecm0JV3EWRSYgw"><AiOutlineYoutube className="footer-social-icons"/></a>
                        <a href="https://www.facebook.com/opdarules/"><AiOutlineFacebook className="footer-social-icons"/></a>
                    </div>
                </div>
                <div className="small-contact-info">
                    <div className="phone-footer-contact">
                        <AiOutlinePhone className="footer-contact-icons"/>
                        <div className="div-padding-verysmall"></div>
                        <a href="tel:4073509371"><p>407-350-9371</p></a>
                    </div>
                    <div className="mail-footer-contact">
                        <AiOutlineMail className="footer-contact-icons"/>
                        <div className="div-padding-verysmall"></div>
                        <a href="mailto:onpointedance.a@gmail.com"><p>onpointedance.a@gmail.com</p></a>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;