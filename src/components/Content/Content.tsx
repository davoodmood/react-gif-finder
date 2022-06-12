import React from 'react'
import './styles.css'
import { useSearch } from '../../context/SearchContext'
import { useGif } from '../../context/GifContext';
import Card from './components/Card';
import backIcon from '../../assets/images/back.png'
import nextIcon from '../../assets/images/next.png'

function Content() {
    const { search } = useSearch();
    const { gifs, pagination, paginateTo } = useGif();

    const handleClick = (action: string) => {
        let offset: number;
        const limit = pagination.count;
        switch (action) {
            case 'increment':
                if ((pagination.count + pagination.offset) >= pagination.total_count - (pagination.total_count % pagination.count))  return;
                offset = pagination.offset + pagination.count;
                if (search.length > 0) paginateTo('search', offset, limit, search);
                else paginateTo('trending', offset, limit, search);
                break;
            case 'decrement':
                if( pagination.offset < 1) return;
                offset = pagination.offset - pagination.count;
                if (search.length > 0) paginateTo('search', offset, limit, search);
                else paginateTo('trending', offset, limit, search);
                break;
            default:
                break;
        }
    }

  return (
    <div className='mainContainer'>
        <div className='bodyTitle'>
            <h2>
                {
                    pagination.total_count < 1 ? "There isn't a gif for display... search for a new keyword" : search.length > 0 ? "Search Results" : "Trending"
                }
            </h2>
            {
                pagination.total_count > 0 && (
                    <div className='paginationContainer'>
                        <div className="icon back" onClick={() => handleClick('decrement')}>
                            <img src={backIcon} alt="Back"/>
                        </div>

                        <div className="paginationDetails">
                            {`${(pagination.offset + pagination.count)/pagination.count} / ${Math.floor(pagination.total_count / pagination.count)}` }
                        </div>
                        <div className="icon next" onClick={() => handleClick('increment')}>
                            <img src={nextIcon} alt="Next"/>
                        </div>
                    </div>
                )
            }
            
        </div>
        <div className='gridContainer'>
            {gifs.length > 0 && gifs.map((gif: gyphyData.GyphyDataObject) => {
                return (
                    <Card key={gif.id} id={gif.id} imageUri={gif.images.downsized_still.url}/>
                )
            })}
        </div>
    </div>
  )
}

export default Content;