import React from 'react';
import Header from '../../modules/Header';
import Footer from '../../modules/Footer';
import Navbar from '../../modules/Navbar';

function LandscapingPage() {
  
  return (
    <>
      <Header />
      <Navbar />
      <div className='block-with-navbar'>
        <div className='main-page-landscaping'></div>
        <Footer/>
      </div>
    </>
  );
}

export default LandscapingPage;