import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu = () => (
  <>
    <p><a href='../navbar/Navbar.jsx'>Home</a></p>
    <p><a href='#skills'>Skills</a></p>
    <p><a href='#education'>Education</a></p>
    <p><a href='#blog'>Blog</a></p>
    <p><a href='#about'>About</a></p>
    <p><a href='#contact'>Contact</a></p>
  </>

)

const Navbar = () => {
  const [toggleMenu, setTogglemenu] = useState(false);
  return (
    <div className='navbar' id='home'>
      <div className='navbar-links'>
        <div className='navbar-links_logo'>
          <p>DINESH</p>
        </div>
        <div className='navbar-links_container'>
          <Menu />
        </div>
      </div>
     
      <div className='navbar-menu'>
        {
          toggleMenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setTogglemenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setTogglemenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
  
}



export default Navbar