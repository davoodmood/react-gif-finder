import React from 'react'
import logoImage from '../../../../assets/images/logo.svg'
import "./styles.css"

function Logo() {
  return (
      <div className='logoContainer'>
        <img src={logoImage} className="App-logo" alt="logo" />
        <h1 className="title">Gif Finder</h1>
      </div>

  )
}

export default Logo