import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../aboutUs/aboutUs.css'
import TempPic from '../../assets/placeholder img.webp';
import profilebrianna from '../../assets/OPDAimg/11OPDABrianna.JPG';
import profilecandice from '../../assets/OPDAimg/1candicedance.jpg';

const AboutUsComp = () => {

    return (
        <>
            <section className="aboutus-holds-everything">
                {/* Banner at the top for About us */}
                <div className="aboutus-top-banner">
                    {/* <img alt='aboutus header' src={TempPic} className='header-for-aboutus-top'></img> */}
                </div>

                {/* subheader and text about the owner staff and company */}
                <div className="aboutus-subheader-text">
                    <h1>Learn More About Us...</h1>
                    <p>We strive blah blah blah...</p>
                </div>

                {/* Staff photo and text */}
                {/* text can be under photo or next to the photo  */}
                <section className="aboutus-staff-holds-photo-div">
                    <div className="aboutus-staff-holds-photo">
                        <img alt='staff' src={profilebrianna} className='aboutus-staff-photo'></img>
                    </div>

                    <div className="aboutus-staff-holds-text">
                        <p>Brianna Roman started in 2009 with only 7 students. Its purpose was to bring dance to the local schools, giving opportunities to all students to be able to dance, and continues to do so. It has since multiplied and has been teaching the love of dance in the areas of Kissimmee and Orlando. We teach all styles of dance from Ballet, tap, jazz, hip hop, tumbling, and contemporary, to ethnic dances like Latin, African, and Bollywood. All props and mats are part of the program,and are brought in by the instructor, making it easy for schools to use this program from year to year. Performances are an important key to our program and children await them
                            with confidence and enthusiasm. The goal of On pointe dance academy is being accomplished by opening opportunities for all children to explore the world of dance through expression and creativity. Dance is more than the word it is a sport and an art all in one.</p>
                        <p>Mrs. Roman started dance at the age of 3 at Leggz Dance Academy. She was introduced to dance by her grandmother who noticed that she needed to release some extra energy. She started off in a creative dance, and in the following years she began to love dance and decided to extend her knowledge into other styles of dance totaling up to 10 classes per week. At the age of 17 she was offered a job to teach dance and at the age of 19 decided to start her own business teaching dance at local schools. She continues with her business which has increased to various schools, and is also teaching at the same dance studio she started at when she was 3.</p>
                    </div>
                </section>

                <section className="aboutus-staff-holds-photo-div margin-top">
                    <div className="aboutus-staff-holds-photo">
                        <img alt='staff' src={profilecandice} className='aboutus-staff-photo'></img>
                    </div>

                    <div className="aboutus-staff-holds-text">
                        <p>Candice began dancing when she was 6 years old. Her passion grew with her her whole life and has studied many styles from Ballet all the way to African dance. She attended Osceola County School for the Arts and majored in dance. She has completed the Royal Academy of Dance exams and awarded through Grade 8. She studied Modern Dance and Ballet as a minor from Florida Atlantic University. Choreographed for productions for the duration of her studies at FAU. Candice has been teaching all levels and multiple styles since 2015 and loves every minute of it. She is U.S.A gymnastics safety certified and CPR certified. She is currently dancing professionally with RPD Dance Co. being booked for several performance opportunities. Dance is her world and she can’t wait to share that passion with the students of On Pointe Dance Academy.
                        </p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default AboutUsComp;