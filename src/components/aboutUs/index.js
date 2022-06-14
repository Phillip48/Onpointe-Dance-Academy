import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../aboutUs/aboutUs.css'
import TempPic from '../../assets/placeholder img.webp';

const AboutUsComp = () => {

    return (
        <>
            <section className="aboutus-holds-everything">
                {/* Banner at the top for About us */}
                <div className="aboutus-top-banner">
                    <img alt='aboutus header' src={TempPic} className='header-for-aboutus-top'></img>
                </div>

                {/* subheader and text about the owner staff and company */}
                <div className="aboutus-subheader-text">
                    <h1>Testing header</h1>
                    <p>TESTING THIS</p>
                </div>

                {/* Staff photo and text */}
                {/* text can be under photo or next to the photo  */}
                <section className="aboutus-staff-holds-photo-div">
                    <div className="aboutus-staff-holds-photo">
                        <img alt='staff' src={TempPic} className='aboutus-staff-photo'></img>
                    </div>

                    <div className="aboutus-staff-holds-text">
                        <p>This is for text about the staff and what not</p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default AboutUsComp;