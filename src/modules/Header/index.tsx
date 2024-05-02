import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks/hooks';



function Header() {
  const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn);
  
  return (
    <>
      <header className= 'header' >
        <section className='header__func'>
                  
          <div className='header__box'>

            <Link className='header__logo' to='/'>Брусника. Расчет</Link>
            {isLoggedIn === true &&<NavLink className='header__link header__link-first' to='/teplo'>Тепло</NavLink>}
            {isLoggedIn === true &&<NavLink className='header__link' to='/landscaping'>Озеленение</NavLink>}
          
          </div>

          <div className='header__box'>
            
            {isLoggedIn === true && <Link className="header__user" to='/profile'><div className={`header__user-logo`}/></Link>}
            
            {isLoggedIn === false && <Link className='header__link' to='/signin'>Вход</Link>}
            {isLoggedIn === false && <Link className='header__link' to='/signup'>Регистрация</Link>}

          </div>
        </section>
      </header>
      <div className='header__margin'></div>
    </>
    
  );
}

export default Header;