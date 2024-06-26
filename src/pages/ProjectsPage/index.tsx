import React from 'react';
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
      <div className='block-with-navbar'>
        <ProtectedRoute element={Projects} />
        <Footer/>
      </div>
      
    </>
  );
}

export default ProjectsPage;