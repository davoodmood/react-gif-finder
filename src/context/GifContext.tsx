import React, { createContext, useContext, useState, useRef} from "react";
import { ApiParams } from "../api/endpoints";
import api from "../api"

const GifContext = createContext<any>({});

function useProvideGif() {
    const [gifs, setGifs] = useState<giphyData.GiphyDataObject[]>([]);
    const [selectedGif, setSelectedGif] = useState<giphyData.GiphyDataObject | null>(null);
    const pagination = useRef<giphyPagination.giphyPaginationObject>({
        count: 12,
        offset: 0,
        total_count: 12
    })

    const handleSelectedGif = (id: string) => {
        const filteredSelectedGif: NonNullable<giphyData.GiphyDataObject[]> = gifs.filter((gif: giphyData.GiphyDataObject) => gif.id === id);
        setSelectedGif(filteredSelectedGif[0]);
    }

    const paginateTo = (endpoint: string, offset: number, limit: number, query: string) => {
        if (endpoint === 'search') fetchGifs({endpoint, offset, limit, query})
        else fetchGifs({endpoint, offset, limit})
    }

    const fetchGifs = ({endpoint, limit, offset, rating, lang, query}: ApiParams) => {
        async function apiCall() {
            let response: any;
            try {
                switch (endpoint) {
                    case 'search':
                        response = await api.fetchSearch(limit, offset, rating, lang, `${query}`);
                        break;
                    default:
                        response = await api.fetchTrending(limit, offset, rating);
                        break;
                }
                setGifs(response.data);
                pagination.current = response.pagination
            } catch (error: any) {
                console.error(error)
                pagination.current = {
                    count: 12,
                    offset: 0,
                    total_count: 12
                }
            }
        }
        apiCall();
    }

    return {
        pagination: pagination.current,
        gifs,
        fetchGifs,
        selectedGif,
        handleSelectedGif,
        paginateTo
    }
}


export const useGif = () => {
    return useContext(GifContext);
}

export default function GifProvider({children}: {children: React.ReactNode}) {
    const gif = useProvideGif();

    return (
        <GifContext.Provider value={gif}>
            {children}
        </GifContext.Provider>
    )
}
