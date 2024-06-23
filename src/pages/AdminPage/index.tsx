import React from 'react';
import Header from '../../modules/Header';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import Facades from '../../modules/Facades';
import AdminPanel from './AdminPanel';


function AdminPage() {

  return (
    <>
      <Header />
      <ProtectedRoute element={AdminPanel} />
    </>
  );
}

export default AdminPage;