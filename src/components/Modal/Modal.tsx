import React from 'react'
import DetailedCard from './components/DetailCard';
import PreviewCard from './components/PreviewCard/PreviewCard';
import './styles.css';

function Modal() {
    
  return (
    <div className='overlay'>
        <DetailedCard>
            <PreviewCard />
        </DetailedCard>
    </div>
  )
}

export default Modal