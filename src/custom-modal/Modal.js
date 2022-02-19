import React from 'react';
import './Modal.css';

const Modal = ({ openModal, children, closeModal }) => {
    return (
        <>
            {openModal && (
                <div className='model_overlay' onClick={closeModal}>
                    <div className='model_content position-relative ' onClick={(e) => e.stopPropagation()}>
                        {children}
                        <button className='position-absolute close_btn bg-transparent fs-3' onClick={closeModal}>x</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal