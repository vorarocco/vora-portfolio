import React from 'react'
import './toggle.css'

const Toggle = () => {
  return (
    <div className='t'>
        <img src="/images/sun.png" alt="icon" className="t-icon" />
        <img src="/images/moon3.png" alt="icon" className="t-icon" />
        <div className="t-button"></div>
    </div>
  )
}

export default Toggle