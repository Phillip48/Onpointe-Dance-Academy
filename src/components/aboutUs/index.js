import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../aboutUs/aboutUs.css'
// import TempPic from '../../assets/placeholder img.webp';
import profilebrianna from '../../assets/OPDAimg/11OPDABrianna.JPG';
import profilecandice from '../../assets/OPDAimg/1candicedance.jpg';
import profiledanna from '../../assets/OPDANewimages629/DannaDance.jpg';
import profilekhaliyah from '../../assets/OPDANewimages629/profileKhaliyah.jpg';


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
                </div>

                {/* Staff photo and text */}
                {/* text can be under photo or next to the photo  */}
                <section className="aboutus-staff-holds-photo-div">
                    <div className="aboutus-staff-holds-photo">
                        <img alt='staff' src={profilebrianna} className='aboutus-staff-photo'></img>
                    </div>

                    <div className="aboutus-staff-holds-text">
                        <h1 style={{ color: '#fe0002', textAlign: 'center' }}>Brianna Roman</h1>
                        <p>Mrs. Brianna started dance at the age of 3. She was trained by teachers certified in England’s Royal Academy of Dance. She received training from Pre primary to Ballet 8 and Technical Foundation, as well as 6 years on Pointe. Brianna knew Dance was her passion at a young age and saw every class and dance style as an opportuniy to grow. Becoming homeschooled gave her the opportunity to dedicate full time to dance. Totaling up to 15 hours or more a week. Studying in all technical styles such as jazz, ballet, tap, and modern. This also included international styles such as Salsa, African, and Bollywood. As well as tumbling and gymnastic. Which led her to become a well rounded dancer and performer. With over 25 years in the performance industry, and over 15 years teaching. She is still enjoying learning and even more so teaching the love of dance to the generations to come.</p>
                    </div>
                </section>

                <section className="aboutus-staff-holds-photo-div margin-top">
                    <div className="aboutus-staff-holds-photo">
                        <img alt='staff' src={profilecandice} className='aboutus-staff-photo'></img>
                    </div>

                    <div className="aboutus-staff-holds-text">
                        <h1 style={{ color: '#fe0002', textAlign: 'center' }}>Candice</h1>
                        <p>Mrs. Candice began dancing when she was 6 years old.Her passion grew with her her whole life and has studied many styles from Ballet all the way to African dance.She attended Osceola County School for the Arts and majored in dance.She has completed the Royal Academy of Dance exams and awarded through Grade 8. She studied Modern Dance and Ballet as a minor from Florida Atlantic University.Choreographed for productions for the duration of her studies at FAU. Mrs. Candice has been teaching all levels and multiple styles since 2015 and loves every minute of it. She is U.S.A gymnastics safety certified and CPR certified. She is currently dancing professionally with RPD Dance Co. being booked for several performance opportunities. Dance is her world and she can’t wait to share that passion with the students of On Pointe Dance Academy.
                        </p>
                    </div>
                </section>

                <section className="aboutus-staff-holds-photo-div margin-top">
                    <div className="aboutus-staff-holds-photo">
                        <img alt='staff' src={profiledanna} className='aboutus-staff-photo'></img>
                    </div>

                    <div className="aboutus-staff-holds-text">
                        <h1 style={{ color: '#fe0002', textAlign: 'center' }}>Danna</h1>
                        <p>Mrs. Danna started dancing at the age of 13. She instantly fell in love with the art of dance. Which led her to dedicate countless hours, studies, and practice to her craft. Mrs. Danna has studied at a professional level in many styles of dance from Ballet to Latin dance. She studied Ballet and Modern dance at the Osceola County School for the Arts (OCSA) from grade 10 through graduation from high school. Countless time and passion have been dedicated to choreographing and performing for a large number of productions throughout her studies at OCSA. Mrs. Danna has professionally taught all levels and a variety of styles for 5+ years. Mrs. Danna is board certified teacher in the state of Florida. Which ensures her teaching styles are up to date with modern learning. She is very excited to share her experience and passion with the students of On Pointe Dance Academy.
                        </p>
                    </div>
                </section>

                <section className="aboutus-staff-holds-photo-div margin-top">
                    <div className="aboutus-staff-holds-photo">
                        <img alt='staff' src={profilekhaliyah} className='aboutus-staff-photo'></img>
                    </div>

                    <div className="aboutus-staff-holds-text">
                        <h1 style={{ color: '#fe0002', textAlign: 'center' }}>Khaliyah</h1>
                        <p>Ms.Khaliyah began dancing when she was 10 years old.She started with hip-hop but her love for dance continued to grow as she took other styles of dance.Ms.Khaliyah was homeschooled 6-12th grade, giving her a flexible schedule to be able to become a teacher assistant.The joy it brought younger ones made her fall more in love with it, whether it was teaching or being in the rush of helping for competitions and performances.She gives countless hours and is dedicated to her craft.Ms.Khaliyah has trained in a variety of styles of dance and performed for countless audiences including orlando magic.From assisting in class to assisting in teaching to the Orlando Predators she is ready to teach her own classes. Ms.Khaliyah is in college and will still continue her dance education and career at OPDA. She can't wait to keep learning and sharing her passion with the students of On Pointe Dance Academy.
                        </p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default AboutUsComp;