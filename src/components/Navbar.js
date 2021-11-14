import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

 const logo = require('../assets/images/soledreamstriplogo.png').default

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* <img src={logo} alt='Sole Dreams Logo'/> */}
            <h1 className=''>Sole</h1>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Inicio
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/services'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Servicios
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Quien Somos
              </Link>
            </li>

            <li>
              <Link
                to='/trip-info'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Hablar con Alguien
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Hablar con Alguien</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
