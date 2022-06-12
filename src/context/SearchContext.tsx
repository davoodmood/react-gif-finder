import React, {createContext, useContext, useState} from "react";
import { useGif } from "./GifContext";

export type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T; 
    currentTarget?: T;
}

const SearchContext = createContext<any>({});

function useProvideSearch(fetchGifs: Function) {
    const [search, setSearch] = useState<string>('');
    const onSearch = (event: HTMLElementEvent<HTMLInputElement>) => {
        event.preventDefault();
        setSearch(event.target?.value);

        if (event.target.value.length > 0) fetchGifs({endpoint: 'search', query: event.target.value});
        else fetchGifs({endpoint: 'trending'});
    }
    return {
        search,
        onSearch
    }
}

export const useSearch = () => {
    return useContext(SearchContext);
}

export default function SearchProvider({children}: {children: React.ReactNode}) {
    const {fetchGifs} = useGif();

    const search = useProvideSearch(fetchGifs);

    return (
        <SearchContext.Provider value={search}>
            {children}
        </SearchContext.Provider>
    )
}