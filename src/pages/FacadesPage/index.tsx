import React from 'react';
import { useAppSelector } from '../../store/hooks/hooks';
import Header from '../../modules/Header';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import Facades from '../../modules/Facades';
import Footer from '../../modules/Footer';


function FacadesPage() {

  return (
    <>
      <Header />
      <ProtectedRoute element={Facades} />
      <Footer/>
    </>
  );
}

export default FacadesPage;