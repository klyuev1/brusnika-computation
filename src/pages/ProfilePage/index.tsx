import React from 'react';
import { useAppSelector } from '../../store/hooks/hooks';
import Header from '../../modules/Header';
import ProtectedRoute from '../../components/ProtectedRoute/ProtectedRoute';
import Profile from '../../modules/Profile';



function ProfilePage() {

  return (
    <>
      <Header/>
      <ProtectedRoute element={Profile} />
    </>
  );
}

export default ProfilePage;