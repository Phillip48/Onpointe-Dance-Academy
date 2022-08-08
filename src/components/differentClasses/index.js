import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../differentClasses/classes.css'
// import TempPic from '../../assets/placeholder img.webp';
// import inclassphoto from '../../assets/OPDAimg/1inclassstretchesresize.JPG';
import {Link} from "react-router-dom";
import toddlergallerypic from '../../assets/OPDAimg/toddlerteamdresspic.JPG';
import adultperformancephoto from '../../assets/OPDAimg/1adultperformancepic1.JPG';
import balletphoto from '../../assets/OPDAimg/kidsballet.JPG';
import performancephoto from '../../assets/OPDAimg/1adultperformancejumping.JPG';
import solokidper from '../../assets/OPDAimg/kidsoloperformance.JPG';
import adultholdingphoto from '../../assets/OPDAimg/adultsteamperformance.JPG';
import schedulepdf from '../../assets/On Pointe 2022 Schedule.pdf';

const Classes = () => {

    return (
        <>
            {/* Different classes offered */}
            <section className="classes-holds-everything">
                <div className="classes-banner-top-page">
                    <h1 className="classes-banner-text">Classes and Registeration</h1>
                </div>
                {/* class info */}
                <div className="holds-register-form-button-link">
                    <h2 style={{ color: '#fe0002', textAlign: 'center' }}><b> Interested in joining the performance or competition team? </b></h2>
                    <Link to="/Competition&PerforamceTeam"><button className="contact-form-labels-submit">
                        Lets Go!
                    </button></Link>
                </div>
                <section className="classes-holds-class-info">
                    <div className="classes-text-info">
                        <h2 style={{ textAlign: 'center', color: '#fe0002' }}>Class Options</h2>
                        <h2><b>Ballet:  </b></h2>
                        {/* <p className="indent-class-text">Ages: 6 years and up</p> */}
                        <p className="indent-class-text">Is the most important form of dance and is required by all performance and company students. Ballet is a classical style that will work on grace, precision and formalized technique. Classes include barre work, center work, and across the floor. Ages 5 and up </p>
                        <p className="indent-class-text">Pointe (ages 11 and up) Is offered to ballet students who have attained the necessary development and ballet technique. Students must take 2 other ballet classes to enter. Acceptance into this class is by teacher recommendation only. </p>
                        <p className="indent-class-text">Ballet stars ages 2-4. This class combines ballet and creative movement. Children will learn, coordination, grace, beginning ballet steps, and other steps that can be transformed and used in any other styles of dance. </p>

                        <h2><b>Tap:  </b></h2>
                        {/* <p className="indent-class-text">Ages: 6 years and up</p> */}
                        <p className="indent-class-text">Tap characterizes by using sounds of taps sticking the floor. Tap dance focuses on musicality and the development of rhythms through movement. Ages 6 and up </p>

                        <h2><b>Jazz:  </b></h2>
                        {/* <p className="indent-class-text">Ages: 6 years and up</p> */}
                        <p className="indent-class-text">Jazz class will teach your dancer body strength, coordination, flexibility, stamina, and technique, all while dancing to contemporary/popular music. Class typically consists of warm up, center work, across the floor, and combinations. Ages 5 and up </p>

                        <h2><b>Musical Theater:  </b></h2>
                        {/* <p className="indent-class-text">Ages: 6 years and up</p> */}
                        <p className="indent-class-text">Musical theater is a genre of drama that includes styles of broadway jazz and teaches various forms of stage presence. A theatrical performance that combines song, dance and acting. It is the style that graces stages all over the world in hit shows like “Wicked” and “Hairspray” on broadway. Ages 8 and above. Student must be registered in ballet or jazz to sign up. </p>


                        <h2><b>Hip Hop:  </b></h2>
                        {/* <p className="indent-class-text"><b>Ages: </b>5 yeas and up</p> */}
                        <p className="indent-class-text">This class involves the modern moves of Hip hop. In this class your child will grow self confidence, coordination, rhythm and beat. Ages 5 and up </p>

                        <h2><b>Tumbling:  </b></h2>
                        {/* <p className="indent-class-text">Ages: 6 years and up</p> */}
                        <p className="indent-class-text"> This class will develop strength and flexibility while mastering acrobatic skills. Each student is individually coached in class and safety is always the first consideration. This class concentrates on floor work. Teachers are safety certified. Ages 5 and up </p>

                        <h2><b>Leaps and turns:  </b></h2>
                        {/* <p className="indent-class-text">Ages: 6 years and up</p> */}
                        <p className="indent-class-text"> This class for the more intermediate to advance dancer that will focus on the techniques of jumps, turns, and flexibility. </p>

                        <h2><b>Stretch and conditioning:  </b></h2>
                        {/* <p className="indent-class-text">Ages: 6 years and up</p> */}
                        <p className="indent-class-text"> This class is designed to strengthen and stretch your muscles form head to toe. This class also consist of training for proper body alignment that can help student advance in other styles of dance. </p>

                        <h2><b>Contemporary:  </b></h2>
                        {/* <p className="indent-class-text">Ages: 6 years and up</p> */}
                        <p className="indent-class-text">Break free and indulge yourself in a style of interpretive dance that embraces innovation. Contemporary blends techniques from various genres that include ballet, jazz, modern dance, and lyrical. </p>

                        <h2><b>Latin:  </b></h2>
                        {/* <p className="indent-class-text">Ages: 6 years and up</p> */}
                        <p className="indent-class-text">Learn basic to advance movements of salsa, bachata, cha cha, and partnering. Students will immerse themselves into the technical steps and movements of each style. Ages 8 and up </p>

                    </div>
                    {/* schedule */}
                    <div className="classes-text-schedule">
                        <h2 style={{ textAlign: 'center', color: '#fe0002' }}>Class Schedule</h2>
                        <iframe
                            title="Performance-PDF"
                            className="classes-pdf-iframe" src={schedulepdf}>

                        </iframe>
                        <p style={{ textAlign: 'center' }}>If you would like to download the PDF version of the schedule <a href={schedulepdf} style={{ color: '#fe0002', fontWeight: '600'}} download>click here!</a></p>
                    </div>
                </section>

                {/* possibly make a slider or 
                add more photos like a gallery  */}
                <div className="holds-register-form-button-link">
                    <h3 style={{ textAlign: 'center', color: '#fe0002' }}><b>Interested in becoming a dance student?</b></h3>
                    <Link to="/Register"><button className="contact-form-labels-submit">
                        Register Now!
                    </button></Link>
                </div>
                <div>
                    <h1 style={{ color: '#fe0001', textAlign: 'center'}}>Gallery</h1>
                </div>  
                <div className="classes-images">
                    <div className="classes-images-div"><img alt='ballet' className="class-image" src={performancephoto}></img></div>
                    <div className="classes-images-div"><img alt='ballet' className="class-image" src={toddlergallerypic}></img></div>
                    <div className="classes-images-div"><img alt='ballet' className="class-image" src={balletphoto}></img></div>
                    <div className="classes-images-div"><img alt='ballet' className="class-image" src={adultperformancephoto}></img></div>
                    <div className="classes-images-div"><img alt='ballet' className="class-image" src={solokidper}></img></div>
                    <div className="classes-images-div"><img alt='ballet' className="class-image" src={adultholdingphoto}></img></div>
                </div>
            </section>
        </>
    )
}

export default Classes;