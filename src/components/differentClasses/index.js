import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../differentClasses/classes.css'
import TempPic from '../../assets/placeholder img.webp';
import inclassphoto from '../../assets/OPDAimg/1inclassstretchesresize.JPG';
import toddlergallerypic from '../../assets/OPDAimg/toddlerteamdresspic.JPG';

const Classes = () => {

    return (
        <>
            {/* Different classes offered */}
            <section className="classes-holds-everything">
                {/* class info */}
                <section className="classes-holds-class-info">

                    <div className="classes-text-info">
                        <h2><b>Ballet Stars:  </b></h2>
                        <p className="indent-class-text"><b>Ages: </b>3 to 5 years old</p>
                        <p className="indent-class-text">This a class that combines ballet, and creative dance. Children will learn coordination, grace, beginning ballet steps, and other steps that can transform and be used in any other styles of Dance.</p>
                        <h2><b>Ballet:  </b></h2>
                        <p className="indent-class-text">Ages: 6 years and up</p>
                        <p className="indent-class-text">This class combines ballet, and contemporary movements. Children will acquire all the skills from Ballet bits.  In addition, children will learn basic to intermediate ballet steps, technique, and terminology.  They will be able to create art through the expression of dance and movement.</p>

                        <h2><b>Hip Hop:  </b></h2>
                        <p className="indent-class-text"><b>Ages: </b>5 yeas and up</p>
                        <p className="indent-class-text">This is a Dance class that involves the modern moves of Hip Hop. Our goal is to encourage young minds and bodies not only to dance, but to evolve around music, to feel music, and to be creative with music. In this program your child will grow self confidence, learn rhythm and beat, an learn different styles of Hip Hop.</p>

                        <h2><b>Tumbling Stars:  </b></h2>
                        <p className="indent-class-text"><b>Ages: </b>3 to 5 years old</p>
                        <p className="indent-class-text">Tumble Bits is an acrobatic class that includes physical movements that require the integration of strength, flexibility, balance, grace, and agility. Children will learn basic tumbling skills like forward rolls, cart wheels and hand stands.</p>
                        <h2><b>Tumbling:  </b></h2>
                        <p className="indent-class-text">Ages: 6 years and up</p>
                        <p className="indent-class-text">Children will acquire all the skills from tumble bits.  In addition, children will learn beginning skills like cart wheels and hand stands.   Based on individual progress, children can advance to skills like aerials and back handsprings.</p>

                        <h2><b>Little Stars:  </b></h2>
                        <p className="indent-class-text"><b>Ages: </b>18 to 36 months</p>
                        <p className="indent-class-text">Little Bits is a Dance class that teaches the youngest of student the love for movement and dance. This class will incorporate creative movement , and basic dance and tumbling skills.</p>
                    </div>



                    {/* schedule */}
                    <div className="classes-text-schedule">
                        <p>Monday- blah</p>
                        <p>Monday- blah</p>
                        <p>Monday- blah</p>
                        <p>Monday- blah</p>
                        <p>Monday- blah</p>
                        <p>Monday- blah</p>
                    </div>
                </section>

                {/* possibly make a slider or 
                add more photos like a gallery  */}
                <div className="holds-register-form-button-link">
                    <h3>Interested in becoming a dance student?</h3>
                    <a href='/Register'><button className="contact-form-labels-submit">
                        Register Now!
                    </button></a>

                    {/* <div className="class-holds-class-img">
                        <img alt='gallery' src={toddlergallerypic} className='class-image'></img>
                        <img alt='gallery' src={inclassphoto} className='class-image'></img>
                    </div> */}
                    
                </div>
            </section>
        </>
    )
}

export default Classes;