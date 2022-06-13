import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/home.css'
import TempPic from '../../assets/placeholder img.webp';

const Home = () => {

    return (
        <>
            <main className="">
                {/* Header under Navbar */}
                <div className="">
                    <img alt='banner' className="" src={TempPic}></img>
                </div>

                {/* 2 part of figma home text and image right left */}
                <section className="">
                    <div className="">
                        {/* <img alt='banner' className="" src={TempPic}></img> */}
                    </div>

                    {/* Text right left img */}
                    <div className="">
                        <p></p>
                    </div>
                </section>

                {/* small height full width pic */}
                <div className="">
                    {/* <img alt='banner' className="" src={TempPic}></img> */}
                </div>

                {/* Class options (Text with img) */}
                <div className="">
                    {/* <img alt='banner' className="" src={TempPic}></img>
                    <img alt='banner' className="" src={TempPic}></img>
                    <img alt='banner' className="" src={TempPic}></img>
                    <img alt='banner' className="" src={TempPic}></img>
                    <img alt='banner' className="" src={TempPic}></img>
                    <img alt='banner' className="" src={TempPic}></img> */}
                </div>

                {/* Header for contact me. Contact me in rendered in the homepage */}
                <h1></h1>
            </main>
        </>
    )
}

export default Home;