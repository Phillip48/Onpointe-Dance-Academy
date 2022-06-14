import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../differentClasses/classes.css'
import TempPic from '../../assets/placeholder img.webp';

const Classes = () => {

    return (
        <>
            {/* Different classes offered */}
            <section className="classes-holds-everything">
                 {/* class info */}
                <section className="classes-holds-class-info">

                    <div className="classes-text-info">  
                        <p>Holds info and what not</p>
                    </div>


                    {/* schedule */}
                    <div className="classes-text-schedule">
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
                    <a href='/Register'><button  className="contact-form-labels-submit">
                        Register Now!
                    </button></a>
                </div>
                <div className="class-holds-class-img">
                    <img alt='header-img' src={TempPic} className='class-image'></img>
                </div>
            </section>
        </>
    )
}

export default Classes;