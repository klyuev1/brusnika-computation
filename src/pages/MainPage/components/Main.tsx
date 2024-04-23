import React from 'react';

import NavTab from './NavTab';
import AboutProject from './AboutProject';
import Techs from './Modules';
import AboutMe from './AboutMe';


function Main() {
    
  return (
    <main className='main'>
      <div className='main__container'>
        <h1 className='main__title'>Брусника. Расчет</h1>
      </div>
      <NavTab />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;