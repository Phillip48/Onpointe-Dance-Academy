import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/home.css'
import TempPic from '../../assets/placeholder img.webp';

const Home = () => {

    return (
        <>
            <main className="main-holds-home-page">
                {/* Header under Navbar */}
                <div className="home-banner-top-page">
                    <img alt='banner' className="home-top-banner" src={TempPic}></img>
                </div>

                {/* 2 part of figma home text and image right left */}
                <section className="home-text-and-image">
                    <div className="home-left-image">
                        <img alt='banner' className="" src={TempPic}></img>
                    </div>

                    {/* Text right left img */}
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
                    <img alt='banner' className="home-classes-options" src={TempPic}></img>
                    <div className="div-padding-verysmall"></div>
                    <img alt='banner' className="home-classes-options" src={TempPic}></img>
                    <div className="div-padding-verysmall"></div>
                    <img alt='banner' className="home-classes-options" src={TempPic}></img>
                    
                    <img alt='banner' className="home-classes-options" src={TempPic}></img>
                    <div className="div-padding-verysmall"></div>
                    <img alt='banner' className="home-classes-options" src={TempPic}></img>
                    <div className="div-padding-verysmall"></div>
                    <img alt='banner' className="home-classes-options" src={TempPic}></img>
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