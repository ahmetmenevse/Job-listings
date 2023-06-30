/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Remove from './images/icon-remove.svg'

const Header = ({ keywords, removeKeywords, clearAll }) => {
  return (
    <div className='header-container'>
      <ul>
      {keywords.map((key,id)=> {
        return<li key={id}>{key}
        <button className="close" onClick={ () => removeKeywords(key) }>
        <img src={Remove} alt=''/>
        </button>
        </li>
        
      })}
      <a href="#" onClick={() => clearAll() }>Clear</a>
      </ul>
    </div>
  )
}

export default Header
