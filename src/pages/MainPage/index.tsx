import React from 'react';
import { useAppSelector } from '../../store/hooks/hooks';
import Header from '../../modules/Header';
import Main from './components/Main';
import Footer from '../../modules/Footer';

function MainPage() {

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default MainPage;