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
                    <img alt='header-for-aboutus-top' src={TempPic} className=''></img>
                </div>

                {/* subheader and text about the owner staff and company */}
                <div className="aboutus-subheader-text">
                    <p></p>
                </div>

                {/* Staff photo and text */}
                {/* text can be under photo or next to the photo  */}
                <section className="aboutus-staffphoto-stafftext">
                    <div className="">
                        <img alt='staff' src={TempPic} className=''></img>
                    </div>

                    <div className="">
                        <p></p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default AboutUsComp;