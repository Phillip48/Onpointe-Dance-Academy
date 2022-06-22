import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/home.css'
import TempPic from '../../assets/placeholder img.webp';
import HomepageBanner from '../../assets/OPDAimg/1OPDAperformanceingameresize.JPG';
import Homepagesmallerbanner from '../../assets/OPDAimg/1OPDAperformanceingameresize.JPG';
import Homesmalldancepic from '../../assets/OPDAimg/1adultperformancejumping.JPG';
import Homeclassballet from '../../assets/OPDAimg/1homeclassusekidsmaybetapdance.JPG';
import Homeclasshiphop from '../../assets/OPDAimg/1adultperformancejumping.JPG';
// import Homeclasstumbling from '../../assets/OPDAimg/1adultperformancejumping.JPG';
import Homeclasslittlestars from '../../assets/OPDAimg/toddlersperformance.JPG';

const Home = () => {

    return (
        <>
            <main className="main-holds-home-page">
                {/* Header under Navbar */}
                <div className="home-banner-top-page">
                    <img alt='banner' className="home-top-banner" src={HomepageBanner}></img>
                </div>

                <div className="home-mission-statement">
                    <div className="home-mission-statement-text">
                        <p>At OPDA we strive to provide the highest level of dance instruction through our
                            professional and highly experienced faculty. We are dedicated to opening doors to the
                            exciting world of dance. Serving dancers from Kissimmee, Orlando and Celebration.
                        </p>
                    </div>
                    <div className="home-mission-statement-tex2">
                        <p>We offer classes for dancers 3 years of age and up in ballet, jazz, tap, acrobatics, hip hop, modern, lyrical and jump and turn.
                        </p>
                    </div>
                </div>

                {/* 2 part of figma home text and image right left */}
                <section className="home-text-and-image">
                    <div className="home-left-image">
                        <img alt='banner' className="home-side-image" src={Homesmalldancepic}></img>
                    </div>
                    <div className="home-right-text">
                        <p>Some sample text here. Some sample text here. Some sample text here. Some sample text here.
                            Some sample text here. Some sample text here. Some sample text here. Some sample text here. </p>
                    </div>
                </section>

                {/* small height full width pic */}
                <div className="home-midpage-banner">
                    <img alt='banner' className="home-midpage-banner-img" src={TempPic}></img>
                </div>

                {/* make take out just an idea */}
                <div className="home-header-for-classes">
                    <h1>Classes</h1>
                </div>
                {/* Class options (Text with img) */}
                {/* Need to add text to images */}
                <div className="home-different-classes">
                    <div className="holdsdifferent-class-options-home-div"><img alt='banner' className="home-classes-options" src={TempPic}></img></div>
                    <div className="div-padding-verysmall"></div>
                    <div className="holdsdifferent-class-options-home-div"><img alt='banner' className="home-classes-options" src={TempPic}></img></div>
                    <div className="div-padding-verysmall"></div>
                    <div className="holdsdifferent-class-options-home-div"><img alt='banner' className="home-classes-options" src={TempPic}></img></div>

                    <div className="holdsdifferent-class-options-home-div"><img alt='banner' className="home-classes-options" src={TempPic}></img></div>
                    <div className="div-padding-verysmall"></div>
                    <div className="holdsdifferent-class-options-home-div"><img alt='banner' className="home-classes-options" src={TempPic}></img></div>
                    <div className="div-padding-verysmall"></div>
                    <div className="holdsdifferent-class-options-home-div"><img alt='banner' className="home-classes-options" src={TempPic}></img></div>
                </div>

                {/* Header for contact me. Contact me in rendered in the homepage */}
                <div className="home-contact-header">
                    <h1>Contact Me</h1>
                </div>

            </main>
        </>
    )
}

export default Home;