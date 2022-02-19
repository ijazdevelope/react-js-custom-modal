import { useState } from 'react';
import './App.css';
import Modal from './custom-modal/Modal';
import ModalChildren from './custom-modal/ModalChildren';

function App() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <ModalChildren
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
      />
      <button onClick={() => setOpenModal(true)} className='m-3 rounded'>Open Modal</button>
    </div>
  );
}

export default App;
