import React from 'react';
import { useAppSelector } from '../../store/hooks/hooks';
import Header from '../../modules/Header';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import Projects from '../../modules/Projects';
import Footer from '../../modules/Footer';
import Navbar from '../../modules/Navbar';

function ProjectsPage() {
  
  return (
    <>
      <Header />
      <Navbar />
      <ProtectedRoute element={Projects} />
      <Footer/>
    </>
  );
}

export default ProjectsPage;