import React from 'react';
import './styles.css';
import { useModal } from '../../../../context/ModalContext';

function DetailedCard({children}: {children: React.ReactNode}) {
  const {toggleModal} = useModal();
  const handleClose = () => {
    toggleModal();
  }
  return (
    <div className='dialogContainer'>
        <div className='close-btn' onClick={handleClose}></div>
        {children}
    </div>
  )
}

export default DetailedCard;