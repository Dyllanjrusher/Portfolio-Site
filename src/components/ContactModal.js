import React, { useRef, useEffect } from 'react';

const ContactModal = (props) => {

    const { isSuccess, isOpen, setIsOpen } = props;
    const modalRef = useRef(null);
    useOutsideCloser(modalRef, setIsOpen);


    return (
        <>
            {isOpen &&
                <div className="contact-modal">
                    {isSuccess ?
                        <div className="modal-wrapper">

                            <div className="modal-success" ref={modalRef}>
                                <h1 className="modal-header">Thank you for your time!</h1>
                                <p className="modal-body">I will get back to you immediately. I'm really excited to learn more about your company.</p>
                            </div>
                        </div>
                        :
                        <div className="modal-wrapper">

                            <div className="modal-failure" ref={modalRef}>
                                <h1 className="modal-header">I'm sorry, something went wrong.</h1>
                                <p className="modal-body">Check out my resume in the meantime!</p>
                            </div>
                        </div>
                    }
                </div >
            }
        </>
    )
};

//hook to change isOpen to false if you click outside of the modal.
const useOutsideCloser = (ref, setIsOpen) => {
    useEffect(() => {
        /**
         * Close modal if click outside element
         */
        const handleClickOutside = (event) => {
            setIsOpen(false);
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default ContactModal;