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
                <div className="class-holds-class-img">
                    <img alt='header-img' src={TempPic} className='class-image'></img>
                </div>
            </section>
        </>
    )
}

export default Classes;