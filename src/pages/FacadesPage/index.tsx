import React from 'react';
import Header from '../../modules/Header';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import Facades from '../../modules/Facades';
import Footer from '../../modules/Footer';
import Navbar from '../../modules/Navbar';


function FacadesPage() {

  return (
    <>
      <Header />
      <Navbar />
      <div className='block-with-navbar'>
        <ProtectedRoute element={Facades} />
        <Footer/>
      </div>
    </>
  );
}

export default FacadesPage;