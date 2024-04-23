import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  
  
  return (
    <div className="navbar">

      <div className='navbar__top-box'>
        <h3 className='navbar__heading'>Компоненты</h3>
        <Link className='navbar__info' to=''>О модуле<div className='navbar__info-icon' /></Link>
      </div>

      <div className='navbar__middle-box'>
        <Link className='navbar__link' to=''><div className='navbar__link-icon' />Проекты</Link>
        <Link className='navbar__link' to=''><div className='navbar__link-icon' />Фасады</Link>
      
      </div>
    </div>

  );
}
export default Navbar;
