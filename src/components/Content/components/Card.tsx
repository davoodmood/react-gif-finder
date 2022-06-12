import React from 'react';
import './styles.css';
import { useModal } from '../../../context/ModalContext';
import { useGif } from '../../../context/GifContext';

export interface CardProps {
    id: string;
    imageUri : string;
}

function Card( {id , imageUri}: CardProps) {
  const {toggleModal} = useModal();
  const {handleSelectedGif} = useGif();
  const handleClick = () => {
    handleSelectedGif(id);
    toggleModal();
  }
  return (
    <div className='cardContainer'>
        <div 
          className="gifContainer" 
          style={{
            backgroundImage: `url(${imageUri})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: 240,
            height: 150,
          }}
          onClick={handleClick}
        >
        </div>
    </div>
  )
}

export default Card;