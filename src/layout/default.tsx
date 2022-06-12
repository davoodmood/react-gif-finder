import React from "react";
import Navbar from '../components/Navbar/Navbar';
import Modal from "../components/Modal";
import { useModal } from "../context/ModalContext";

function Default({children}: {children: React.ReactNode}) {
  const {modal} = useModal();
  return (
    <div style={{position: 'relative'}}>
        <Navbar />
        <main className="mainContainer">
            {children}
        </main>
        {modal && <Modal />}
    </div>
  )
}

export default Default;