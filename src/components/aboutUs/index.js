import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../aboutUs/aboutUs.css'
// import TempPic from '../../assets/placeholder img.webp';
import profilebrianna from '../../assets/OPDAimg/11OPDABrianna.JPG';
import profilecandice from '../../assets/OPDAimg/1candicedance.jpg';
import profiledanna from '../../assets/OPDANewimages629/DannaDance.jpg';


const AboutUsComp = () => {

    return (
        <>
            <section className="aboutus-holds-everything">
                <div className="aboutus-banner-top-page">
                    <h1 className="aboutus-banner-text">About Us</h1>
                    <p className="home-banner-subtext">We are OnPointe Dance Academy</p>
                </div>
                {/* Banner at the top for About us */}

                {/* subheader and text about the owner staff and company */}
                <div className="aboutus-subheader-text">
                    <h1 style={{ color: '#fe0002' }}>Learn More About Us...</h1>
                    <p>Brianna Roman started in 2009 with only 7 students. Its purpose was to bring dance to the local schools, giving opportunities to all students to be able to dance, and continues to do so. It has since multiplied and she has been teaching the love of dance in the Orlando area. We teach all styles of dance from Ballet, tap, jazz, hip hop, tumbling, and contemporary, to ethnic dances like Latin, African, and Bollywood. We continue to teach dance at local schools, but has since found a place to call home at 11184 South Apopka Vineland Rd. This location has allowed the academy to grow and open more opportunities. The academy now has 4 performance teams starting at age 5. These teams perform at local events including Disney and Orlando Magic. The academy as well has a competition company that competes at competitions around the central florida area. Whether on our teams or recreational classes performances here at On Pointe are an important key to our program. Children await them with confidence and enthusiasm. The goal of On pointe dance academy is being accomplished by opening opportunities for all children to explore the world of dance through expression, and creativity. Dance is more than the word it is a sport and an art all in one.</p>
                </div>

                {/* Staff photo and text */}
                {/* text can be under photo or next to the photo  */}
                <section className="aboutus-staff-holds-photo-div">
                    <div className="aboutus-staff-holds-photo">
                        <img alt='staff' src={profilebrianna} className='aboutus-staff-photo'></img>
                    </div>

                    <div className="aboutus-staff-holds-text">
                        <h1 style={{ color: '#fe0002', textAlign: 'center' }}>Brianna Roman</h1>
                        <p>Mrs. Brianna started dance at the age of 3 at Leggz Dance Academy. She was introduced to dance by her grandmother who noticed that she needed to release some extra energy. She started off in a creative dance, and in the following years she began to love dance and decided to extend her knowledge into other styles of dance totaling up to 10 classes per week. At the age of 17 she was offered a job to teach dance and at the age of 19 decided to start her own business teaching dance at local schools. Mrs. Brianna ballet training is in The Royal Academy of Dance finishing grade 8. She is U.S.A gymnastics safety certified and CPR certified. With over 20 years of training and 15 years in the industry her passion continues to grow through the students she teaches. </p>
                    </div>
                </section>

                <section className="aboutus-staff-holds-photo-div margin-top">
                    <div className="aboutus-staff-holds-photo">
                        <img alt='staff' src={profilecandice} className='aboutus-staff-photo'></img>
                    </div>

                    <div className="aboutus-staff-holds-text">
                        <h1 style={{ color: '#fe0002', textAlign: 'center' }}>Candice</h1>
                        <p>Candice began dancing when she was 6 years old. Her passion grew with her her whole life and has studied many styles from Ballet all the way to African dance. She attended Osceola County School for the Arts and majored in dance. She has completed the Royal Academy of Dance exams and awarded through Grade 8. She studied Modern Dance and Ballet as a minor from Florida Atlantic University. Choreographed for productions for the duration of her studies at FAU. Candice has been teaching all levels and multiple styles since 2015 and loves every minute of it. She is U.S.A gymnastics safety certified and CPR certified. She is currently dancing professionally with RPD Dance Co. being booked for several performance opportunities. Dance is her world and she can’t wait to share that passion with the students of On Pointe Dance Academy.
                        </p>
                    </div>
                </section>

                <section className="aboutus-staff-holds-photo-div margin-top">
                    <div className="aboutus-staff-holds-photo">
                        <img alt='staff' src={profiledanna} className='aboutus-staff-photo'></img>
                    </div>

                    <div className="aboutus-staff-holds-text">
                        <h1 style={{ color: '#fe0002', textAlign: 'center' }}>Danna</h1>
                        <p>Danna started dancing at the age of 13. She instantly fell in love with the art of dance which has lead her to dedicate countless hours,studies and, practice to her craft. Danna has studied at a professional level with many styles of dance from Ballet all the way to Latin dance. She studied Ballet and Modern dance at the Osceola County School for the Arts  (OSCA) from grades 10 all the way through graduation of high school. Countless time and passion has been dedicated to choreographing and performing for a large number of productions throughout her studies at OSCA. Danna has been professionally teaching all levels and a variety of styles for 5+ years. Danna is board certified teacher with the state of Florida. Which ensures her teaching styles are up to date with modern learning. She is very excited to share her experience and passion with the students of On Pointe Dance Academy.
                        </p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default AboutUsComp;