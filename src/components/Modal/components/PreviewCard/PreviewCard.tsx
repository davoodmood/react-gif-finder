import React, { SyntheticEvent } from 'react'
import { useGif } from '../../../../context/GifContext';
import './styles.css';

function PreviewCard() {
    const {selectedGif} = useGif();
    
    const handleCopy = (e: SyntheticEvent) => {
        navigator.clipboard.writeText(selectedGif.images.downsized_medium.url)
        .then(() => {
            alert('Text copied to clipboard');
        })
        .catch((error: any) => {
            console.log('Error in copying text: ', error);
        });
    }
  return (
    <div className='previewContainer'>
         <h1>{selectedGif.title }</h1>
         <div className="previewRow">
            <div 
                style={{
                    backgroundImage: `url(${selectedGif.images.downsized_medium.url})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: `${selectedGif.images.downsized_medium.height}px`,
                }}
            />
         </div>
         <div className='previewUrl code' onClick={handleCopy}>
            <p>{selectedGif.images.downsized_medium.url}</p> 
         </div>
    </div>
  )
}

export default PreviewCard