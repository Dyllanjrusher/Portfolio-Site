import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import ContactModal from './ContactModal';

const ContactForm = () => {

    const formRef = useRef();
    const [isSuccess, setIsSuccess] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const sendEmail = async (event) => {
        event.preventDefault();

        try {
            await emailjs.sendForm('service_qlk2bmq', 'template_nn2seny', formRef.current, 'user_UJnq8c2dQkjzcYVSsn3Hn');
            setIsSuccess(true);
            setIsOpen(true);
        } catch (e) {
            setIsSuccess(false);
            setIsOpen(true);
            console.Error(e);
        }
    }

    return (
        <>
            <form ref={formRef} onSubmit={sendEmail}>
                <h1 className='form-header'> Let's Talk! </h1>

                <label>
                    Email
                    <input
                        name='email'
                        type='email'
                        required
                    />
                </label>
                <label>
                    Name
                    <input
                        name='name'
                        type='text'
                        required
                    />
                </label>
                <label>
                    Message
                    <textarea
                        name='message'
                        type='text'
                        required
                        rows={6}
                    />
                </label>
                <button>Submit</button>
            </form>
            <ContactModal  isSuccess={isSuccess} isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
};

export default ContactForm;