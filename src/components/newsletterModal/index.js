import React, { useState } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/home.css'
import ReactModal from 'react-modal';

const Modal = () => {
    const [modalIsOpen, SetModalIsOpen] = useState(false)
    return (
        <ReactModal
            isOpen={modalIsOpen}
            // shouldCloseOnOverlayClick={false}
            onRequestClose={() => SetModalIsOpen(false)}
        >
            <section className="modal-header">
                <div>
                    <h1 className="home-mission-statement-header">OPDA Newsletter</h1>
                </div>
                <div>
                    <button onClick={() => SetModalIsOpen(false)} className="modal-close-button">
                        Close
                    </button>
                </div>

            </section>
            <section className="modal-body-content">
                <p>Signup for the OPDA Newsletter and stay up to date on everything OPDA!</p>
                <a href=''><button className="modal-close-button">
                    Newsletter
                </button></a>
            </section>
        </ReactModal>
    );
}

export default Modal;