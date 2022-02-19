import { useState } from 'react';
import './App.css';
import Modal from './custom-modal/Modal';

function App() {

  const [openModal, setOpenModal] = useState(true);

  return (
    <div>
      <Modal
        openModal={openModal}
        closeModal={() => setOpenModal(false)}
      />
      <button onClick={() => setOpenModal(true)} className='m-3 rounded'>Open Modal</button>
    </div>
  );
}

export default App;
