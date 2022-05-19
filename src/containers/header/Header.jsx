import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import dinesh from '../../assets/dinesh.JPG';
const Header = () => {
  return (
    <div className='header section__padding'>
      <div className='header-content'>
        <h1 className='gradient__text'>Hey! I am Dinesh Kumar Rana</h1>
        <p>Let's share knowledge!</p>
        <div className='header-content__input'>
          <input type="email" placeholder='your email address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='header-content__people'>
          <img src={people} alt="people" />
          <p>1600 people requested in last 24 hours</p>
        </div>
      </div>
      <div className='header-image'>
          <img src={dinesh} alt="dinesh" />
      </div>
    </div>
  )
}

export default Header