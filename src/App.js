import { useState } from 'react';
import './App.css';
import Employees from './custom-modal/Employees';
import ModalChildren from './custom-modal/ModalChildren';

function App() {

  const [openModal, setOpenModal] = useState(false);
  const [employeesModal, setEmployeesModal] = useState(false);

  return (
    <div>
      {openModal &&
        <ModalChildren
          openModal={openModal}
          closeModal={() => setOpenModal(false)}
        />
      }
      {employeesModal &&
        <Employees
          openModal={employeesModal}
          closeModal={() => setEmployeesModal(false)}
        />
      }
      <button onClick={() => setOpenModal(true)} className='m-3 rounded'>Open Modal</button>
      <button onClick={() => setEmployeesModal(true)} className='m-3 rounded'>Sign Up</button>
    </div>
  );
}

export default App;
