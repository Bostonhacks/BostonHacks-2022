import React from 'react';
import { FaTimes } from "react-icons/fa";

import "./Modal.css";

const Modal = ({showModal, onHideModal}) => {
    if (showModal) {
        return (
            <div className="modal-overlay">
                <div className="modal">
                    <div className="modal-header">
                        <h2>Modal Popup</h2>
                        <FaTimes className="modal-close" onClick={() => onHideModal()}/>
                    </div>

                    <p>According to all known laws of aviation, there is no way a be should be able to fly.
                        Its wings are too small to get
                        its fat little body off the ground.
                        The bee, of course, flies anyway
                        because bees don't care
                        what humans think is impossible.</p>
                </div>
            </div>
        )
    }
}

export default Modal;