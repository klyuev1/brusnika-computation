import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const isTeploPage = location.pathname.includes('/teplo');
  const isLandscapingPage = location.pathname.includes('/landscaping');
  const isRoomsPage = location.pathname.includes('/rooms');

  const [aboutModule, setAboutModule] = React.useState<string>('');
  
  useEffect(() => {
    if (location.pathname.includes('/teplo')) {
      setAboutModule('/teplo');
    } 
    if (location.pathname.includes('/landscaping')) {
      setAboutModule('/landscaping');
    }
  },[location])
  
  

  
  return (
    <div className="navbar">

      <div className='navbar__top-box'>

        {isRoomsPage ? (
          <Link className='navbar__heading navbar__heading-back' to='/teplo/projects'><div className='navbar__heading-back-icon'/>Назад</Link>
        ) : (
          <h3 className='navbar__heading'>Компоненты</h3>
        )}
        
        <Link className='navbar__info' to={aboutModule}>О модуле<div className='navbar__info-icon' /></Link>
      </div>

      <div className='navbar__middle-box'>
        {isTeploPage && (
          <>
            <Link className='navbar__link' to='/teplo/projects'><div className='navbar__link-icon' />Проекты</Link>
            <Link className='navbar__link' to='/teplo/facades'><div className='navbar__link-icon' />Фасады</Link>
          </>
        )}
        
        {isLandscapingPage && (
          <>
            <Link className='navbar__link' to='/landscaping/projects'><div className='navbar__link-icon' />Проекты</Link>
            <Link className='navbar__link' to='/landscaping/colections'><div className='navbar__link-icon' />Коллекции</Link>
          </>
        )}
      </div>

    </div>

  );
}
export default Navbar;
