import React from 'react';
import Header from '../../modules/Header';
import Footer from '../../modules/Footer';
import Navbar from '../../modules/Navbar';

function TeploPage() {
  
  return (
    <>
      <Header />
      <Navbar />
      <div className='block-with-navbar'>
        <div className='main-page-teplo'></div>
        <Footer/>
      </div>
    </>
  );
}

export default TeploPage;