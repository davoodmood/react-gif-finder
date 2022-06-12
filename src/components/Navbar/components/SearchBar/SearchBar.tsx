import React, { useMemo, useEffect, ChangeEvent }  from 'react'
import { useSearch } from '../../../../context/SearchContext';
import debounce from 'lodash.debounce';
import "./styles.css"

const DEBOUNCE_TIMEOUT = 500;

function SearchBar() {
  const { onSearch } = useSearch();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event);
  }

  const debouncedChangeHandler = useMemo(
    // eslint-disable-next-line react-hooks/exhaustive-deps
    () => debounce(changeHandler, DEBOUNCE_TIMEOUT), []
  )

  useEffect (() => {
    return () => {
      debouncedChangeHandler.cancel();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className='searchContainer'>
        <input 
          type="text" 
          onChange={debouncedChangeHandler}
          placeholder="Search for Gifs ..."  
        ></input>
    </div>
  )
}

export default SearchBar