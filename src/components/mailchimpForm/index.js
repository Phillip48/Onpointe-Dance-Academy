import React, { useState, useEffect } from 'react';
import '../mailchimpForm/mcFormStyles.scss';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import InputField from "../../components/ui/InputField/InputField";

const CustomForm = ({ status, message, onValidated }) => {

    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            firstName &&
            lastName &&
            email.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email,
                MERGE1: firstName,
                MERGE2: lastName,
            });
    }

    useEffect(() => {
        if (status === "success") clearFields();
    }, [status])

    const clearFields = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="mc__form">
            <h3 className="mc__title">
                {status === "success"
                    ? "Success!"
                    : "Join our email list to stay up to date on when we have performances and on general OPDA topics. Plus it's free!."
                }
            </h3>
            {status === "sending" && (
                <div className="mc__alert mc__alert--sending">
                    sending...
                </div>
            )}
            {status === "error" && (
                <div
                    className="mc__alert mc__alert--error"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    className="mc__alert mc__alert--success"
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            <div className="mc__field-container">
                <InputField
                    label="First Name"
                    onChangeHandler={setFirstName}
                    type="text"
                    value={firstName}
                    placeholder="Jane"
                    isRequired
                />

                <InputField
                    label="Last Name"
                    onChangeHandler={setLastName}
                    type="text"
                    value={lastName}
                    placeholder="Doe"
                    isRequired
                />

                <InputField
                    label="Email"
                    onChangeHandler={setEmail}
                    type="email"
                    value={email}
                    placeholder="your@email.com"
                    isRequired
                />

            </div>
            <div className='holds-primaryBtm-form'>
                <InputField
                    label="subscribe"
                    type="submit"
                    formValues={[email, firstName, lastName]}
                />
            </div>

        </form>
    );
};

const MailchimpFormContainer = props => {

    const postUrl = `https://gmail.us18.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    return (
        <div className="mc__form-container">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

export default MailchimpFormContainer;