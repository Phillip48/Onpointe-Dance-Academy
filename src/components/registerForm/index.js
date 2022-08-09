import React, { useRef } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../registerForm/registerForm.css'
// import TempPic from '../../assets/placeholder img.webp';
import emailjs from '@emailjs/browser';
import {AiOutlinePhone, AiOutlineMail} from 'react-icons/ai';

const RegisterForm = () => {
    const form = useRef();

    let message = "Thanks for registering! I'll contact you soon!";

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_30g88yk', 'template_obyfpth', form.current, '3-bRDlrNfQF67KWz3')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert(message)
    };

    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Want to join our dance team? Regsiter now!</h1>
            <section className="register-form-with-info-2-sides">
                <section className="holds-registeration-form">
                    <h1>Registeration Form</h1>
                    <form name='contact' className='register-form' ref={form} onSubmit={sendEmail}>
                        <div className="register-form-labels">
                            <label htmlFor="studentsName" className='para-text-small-form'>
                                Students Name
                            </label>
                            <input type="text" id="studentsName" name="studentsName" className="register-input-field-form input-size" required/>
                        </div>
                        <div className="register-form-labels-2-inputs">
                            <div className="resgiter-side">
                                <label htmlFor="studentsAge" className='para-text-small-form'>
                                    Students Age
                                </label>
                                <input type="number" id="studentsAge" name="studentsAge" className="register-input-field-form input-size " required/>
                            </div>
                            <div className="div-padding-verysmall"></div>
                            <div className="resgiter-side">
                                <label htmlFor="studentsGrade" className='para-text-small-form'>
                                    Students Grade
                                </label>
                                <input type="text" id="studentsGrade" name="studentsGrade" className="register-input-field-form input-size"required />
                            </div>
                        </div>

                        <div className="register-form-labels">
                            <label htmlFor="studentsAllergies" className='para-text-small-form'>
                                Food Allergies
                            </label>
                            <textarea className="register-form-labels-textarea register-input-field-form input-size" name='studentsAllergies' required/>
                        </div>

                        <div className="register-form-labels">
                            <label htmlFor="studentsNumber" className='para-text-small-form'>
                                Students Phone Number If Applicable
                            </label>
                            <input type="tel" id="studentsNumber" name="studentsNumber" className="register-input-field-form input-size" />
                        </div>

                        <div className="register-form-labels">
                            <label htmlFor="studentsEmail" className='para-text-small-form'>
                                Students Email If Applicable
                            </label>
                            <input type="email" id="studentsEmail" name="studentsEmail" className="register-input-field-form input-size" />
                        </div>

                        <div className="register-form-labels">
                            <label htmlFor="danceClass" className='para-text-small-form'>
                                Dance Classes
                            </label>
                            <input type="text" id="danceClass" name="danceClass" className="register-input-field-form input-size" required/>
                        </div>

                        <div className="register-form-labels-2-inputs">
                            <div className="resgiter-side">
                                <label htmlFor="motherName" className='para-text-small-form'>
                                    Mother Name
                                </label>
                                <input type="text" id="motherName" name="motherName" className="register-input-field-form input-size" required/>
                            </div>
                            <div className="div-padding-verysmall"></div>
                            <div className="resgiter-side">
                                <label htmlFor="fatherName" className='para-text-small-form'>
                                    Father Name
                                </label>
                                <input type="text" id="fatherName" name="fatherName" className="register-input-field-form input-size" required/>
                            </div>
                        </div>

                        <div className="register-form-labels-2-inputs">
                            <div className="resgiter-side">
                                <label htmlFor="motherNumber" className='para-text-small-form'>
                                    Mother Phone Number
                                </label>
                                <input type="tel" id="motherNumber" name="motherNumber" className="register-input-field-form input-size" required/>
                            </div>
                            <div className="div-padding-verysmall"></div>
                            <div className="resgiter-side">
                                <label htmlFor="fatherNumber" className='para-text-small-form'>
                                    Father Phone Number
                                </label>
                                <input type="tel" id="fatherNumber" name="fatherNumber" className="register-input-field-form input-size" required />
                            </div>
                        </div>

                        <div className="register-form-labels">
                            <label htmlFor="parentsEmail" className='para-text-small-form'>
                                Parents Email
                            </label>
                            <input type="email" id="parentsEmail" name="parentsEmail" className="register-input-field-form input-size" required/>
                        </div>

                        <div className="register-form-labels">
                            <label htmlFor="homeAddress" className='para-text-small-form'>
                                Home address
                            </label>
                            <input type="text" id="homeAddress" name="homeAddress" className="register-input-field-form input-size" required/>
                        </div>
                        <div className="register-form-labels payment-section">
                            <p className="input-size" style={{ fontWeight: 'bold' }}>Form of Payment</p>
                            <div className="register-payment-select">
                                <input type="radio" id="paymentOption" name="paymentOption" value="Venmo" />
                                <label htmlFor="paymentOption">Venmo</label><br></br>
                            </div>
                            <div className="register-payment-select">
                                <input type="radio" id="paymentOption" name="paymentOption" value="Venmo" />
                                <label htmlFor="paymentOption">Zelle</label><br></br>
                            </div>
                            <div className="register-payment-select">
                                <input type="radio" id="paymentOption" name="paymentOption" value="Venmo" />
                                <label htmlFor="paymentOption">Cash</label><br></br>
                            </div>
                            <div className="register-payment-select">
                                <input type="radio" id="paymentOption" name="paymentOption" value="Venmo" />
                                <label htmlFor="paymentOption">Debit/Credit Card</label><br></br>
                            </div>
                            <div>
                                <input type="radio" id="paymentOption" name="paymentOption" value="Venmo" />
                                <label htmlFor="paymentOption">Check</label><br></br>
                            </div>

                        </div>
                        <div className="register-holds-button">
                            <button type="submit" className="register-form-submit">
                                Submit
                            </button>
                        </div>

                    </form>
                </section>

                <section className="holds-register-info">
                    <h1 style={{ color: '#fe0002' }}>Heres what you need to know</h1>
                    <p style={{ marginTop: '-.5rem' }}>Classes start the week of August 8th and end in May. 10 month season</p>
                    <p style={{ marginTop: '-.5rem' }}>1st semester August - December</p>
                    <p style={{ marginTop: '-.5rem' }}>2nd semester January - May (recital)</p>

                    <h1 style={{ color: '#fe0002' }}>Prices</h1>
                    <p style={{ marginTop: '-.5rem' }}>Payment is due by the 10th of every month to avoid a $10 late fee. If wanting to cancel classes director must be advised before the first of the month.</p>
                    <p style={{ marginTop: '-.5rem' }}>No refunds after payment is made. This is for tuition and attire. </p>
                    <p style={{ marginTop: '-.5rem' }}>Holidays and studio closures are already calculated in the price below. </p>
                    <table>
                        <tr>
                            <td>1 Class</td>
                            <td>Semester $225 no registration fee</td>
                            <td>Monthly $50 registration fee $25</td>
                        </tr>
                        <tr>
                            <td>2 Classes</td>
                            <td>Semester $420 no registration fee </td>
                            <td>Monthly $90 registration fee $25</td>
                        </tr>
                        <tr>
                            <td>3 Classes</td>
                            <td>Semester $555 no registration fee</td>
                            <td>Monthly $120 registration fee $25</td>
                        </tr>
                        <tr>
                            <td>4 Classes</td>
                            <td>Semester $640 no registration fee</td>
                            <td>Monthly $140 registration fee $25</td>
                        </tr>
                    </table>

                    <h1 style={{ color: '#fe0002' }}>Dance Attire</h1>
                    <p style={{ marginTop: '-.5rem' }}>Our academy sells class attire if needed.</p>
                    <p style={{ marginTop: '-.5rem' }}>Masks are at the discretion of the parent or guardian</p>
                    <table>
                        <tr>
                            <th>Class</th>
                            <th>Attire</th>
                            <th>Shoes</th>
                        </tr>
                        <tr>
                            <td>Ballet</td>
                            <td>Red or black leotard/ pink tights</td>
                            <td>Pink ballet shoes</td>
                        </tr>
                        <tr>
                            <td>Jazz</td>
                            <td>Red or black leotard/ tan, pink ,or black tights. Black or red dance shorts </td>
                            <td>Black or tan jazz shoes</td>
                        </tr>
                        <tr>
                            <td>Tap</td>
                            <td>Red or black leotard/ tan, pink ,or black tights. Black or red dance shorts</td>
                            <td>Black tap shoes</td>
                        </tr>
                        <tr>
                            <td>Tumbling</td>
                            <td>Red or black leotard/ tan, pink ,or black convertible tights. Black or red dance shorts</td>
                            <td>No shoes</td>
                        </tr>
                        <tr>
                            <td>Hip Hop</td>
                            <td>Comfortable red or black athletic clothing</td>
                            <td>Sneakers</td>
                        </tr>
                        <tr>
                            <td>Ballet Stars</td>
                            <td>Black ballet dress</td>
                            <td>Pink ballet shoes</td>
                        </tr>
                        <tr>
                            <td>All other styles of dance please follow jazz class guidelines</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                    <div className="div-padding-1"></div>
                    {/* <p>Attire if needed</p> */}
                    <table>
                        <tr>
                            <th>Attire</th>
                            <th>Price</th>
                        </tr>
                        <tr>
                            <td>Leotard </td>
                            <td>$18</td>
                        </tr>
                        <tr>
                            <td>Dance shorts</td>
                            <td>$16</td>
                        </tr>
                        <tr>
                            <td>Tights</td>
                            <td>$12</td>
                        </tr>
                        <tr>
                            <td>Jazz shoes</td>
                            <td>$32</td>
                        </tr>
                        <tr>
                            <td>Tap shoes</td>
                            <td>$32</td>
                        </tr>
                        <tr>
                            <td>Ballet shoes</td>
                            <td>$22</td>
                        </tr>
                    </table>
                    <p style={{textAlign: 'center'}}>For any question please contact the director <b>Brianna Roman</b></p>
                    <b><a href="tel:4073509371"><p style={{ marginTop: '-.5rem' }}><AiOutlinePhone /> 407-350-9371</p></a></b>
                    <b><a href="mailto:onpointedance.a@gmail.com"><p style={{ marginTop: '-.5rem' }}><AiOutlineMail /> onpointedance.a@gmail.com</p></a></b>
                </section>
            </section>
        </>
    )
}

export default RegisterForm;