import React from 'react';
import Modal from './Modal';

function ModalChildren({ openModal, closeModal }) {
    return (
        <>
            <Modal
                openModal={openModal}
                closeModal={closeModal}
            >
                <h4 className="mb-3">Login Form</h4>
                <form>
                    <div className="row g-3">
                        <div className="col-lg-6">
                            <label className="form-check-label" for="same-address">First Name</label>
                            <input type="text" className="form-control" id="same-address" placeholder='First Name' />
                        </div>
                        <div className="col-lg-6">
                            <label className="form-check-label" for="save-info">Last Name</label>
                            <input type="text" className="form-control" id="save-info" placeholder='Last Name' />
                        </div>
                    </div>
                    <button className="mt-3 btn btn-primary btn-lg" type="submit">Submit</button>
                </form>
            </Modal>
        </>
    )
}

export default ModalChildren