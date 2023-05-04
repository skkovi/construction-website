import '../Css/Header.css';
import { Link } from 'react-router-dom';
import moretti from '../Images/Moretti.png'
import phoneIcon from '../Images/phoneIcon.png'
import hamburger from '../Images/hamburger.png'
import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className="Header">
      <div className='nav-section'>
        <Link to="/">
          <img className='morettiLogo' src={moretti} alt='' />
        </Link>
        <ul className='navButton'>
          <li className='ref-list'>
            <Link to="/">
              <button className='nav-a'>Home</button>
            </Link>
          </li>
          <li className='ref-list'>
            <Link to="/services">
              <button className='nav-a'>Services</button>
            </Link>
          </li>
          <li className='ref-list'>
            <Link to="/about">
              <button className='nav-a'>Portfolio</button>
            </Link>
          </li>
          <li className='ref-list'>
            <Link to="/contact">
              <button className='nav-a'>Contact</button>
            </Link>
          </li>
        </ul>
        <div className='callNow'>
          <img className='phoneIcon' src={phoneIcon} alt='' />
          <a className='callNowText' href='tel:+19147388722'>1 (914) 738-8722</a>
        </div>
      </div>
      {isOpen && (
        <div className='mobile-menu'>
          <div className='mobile-menuStyle'>
            <Link to="/">
              <button className='menuButtons' onClick={toggleMenu}>Home</button>
            </Link>
            <Link to="/services">
              <button className='menuButtons' onClick={toggleMenu}>Services</button>
            </Link>
            <Link to="/about">
              <button className='menuButtons' onClick={toggleMenu}>Portfolio</button>
            </Link>
            <Link to="/contact">
              <button className='menuButtons' onClick={toggleMenu}>Contact</button>
            </Link>
          </div>
        </div>
      )}
      <img className='mobile-hamburger' onClick={toggleMenu} src={hamburger} alt='' />
    </div>
  );
}
export default Header;
