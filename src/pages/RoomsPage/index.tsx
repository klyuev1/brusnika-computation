import React from 'react';
import { useAppSelector } from '../../store/hooks/hooks';
import Header from '../../modules/Header';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import Rooms from '../../modules/Rooms';
import Footer from '../../modules/Footer';
import Navbar from '../../modules/Navbar';


function RoomsPage() {

  return (
    <>
      <Header />
      <Navbar />
      <ProtectedRoute element={Rooms}/>
      <Footer/>
    </>
  );
}

export default RoomsPage;