import React from 'react'
import Logo from './components/Logo/';
import SearchBar from './components/SearchBar';
import "./styles.css"

function Navbar() {
  return (
    <div className='headerContainer'>
      <header className='header'>
          <div id="logo">
            <Logo />
          </div>
          <div className="searchBar">
            <SearchBar />
          </div>
      </header>
    </div>
  )
}

export default Navbar