import React from 'react';
import Header from '../../modules/Header';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import Facades from '../../modules/Facades';
import Footer from '../../modules/Footer';
import Navbar from '../../modules/Navbar';
import Collections from '../../modules/Collections';


function CollectionsPage() {

  return (
    <>
      <Header />
      <Navbar />
      <div className='block-with-navbar'>
        <ProtectedRoute element={Collections} />
        <Footer/>
      </div>
    </>
  );
}

export default CollectionsPage;