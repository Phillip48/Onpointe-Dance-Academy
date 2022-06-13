import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../aboutUs/aboutUs.css'
import TempPic from '../../assets/placeholder img.webp';

const AboutUs = () => {

    return (
        <>
            <section className="">
                {/* Banner at the top for About us */}
                <div className="">
                    <img alt='header-img' src={TempPic} className=''></img>
                </div>

                {/* subheader and text about the owner staff and company */}
                <div className="">
                    <p></p>
                </div>

                {/* Staff photo and text */}
                <section className="">
                    <div className="">
                        <img alt='staff-photo' src={TempPic} className=''></img>
                    </div>

                    <div className="">
                        <p></p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default AboutUs;