import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../registerForm/registerForm.css'
// import TempPic from '../../assets/placeholder img.webp';
import emailjs from '@emailjs/browser';

const RegisterForm = () => {
    const form = useRef();

    let message = "Thanks for registering! I'll contact you soon!";

    const sendEmail = (e) => {
        e.preventDefault();
        // Make a new template for the registeration form
        emailjs.sendForm('service_30g88yk', 'template_hocpn0h', form.current, '3-bRDlrNfQF67KWz3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert(message)
    };

    return (
        <>
            <section className="holds-registeration-form">
                <form  name='contact' className='register-form' ref={form} onSubmit={sendEmail}>

                </form>
            </section>
        </>
    )
}

export default RegisterForm;