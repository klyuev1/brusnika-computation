import React, { useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { useAppDispatch } from "../store/hooks/hooks";
import { setIsLoggedIn } from "../store/reducers/authSlice";
import Register from '../modules/Register';
import Login from '../modules/Login';
import MainPage from './MainPage';
import ProjectsPage from './ProjectsPage';
import RoomsPage from './RoomsPage';
import FacadesPage from './FacadesPage';
import ProfilePage from './ProfilePage';
import NotFoundPage from './NotFoundPage';

function App() {
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    const jwtCookie = document.cookie.split('; ').find(row => row.startsWith('jwt='));
    if (!jwtCookie) {
      dispatch(setIsLoggedIn(false));
    }
  }, [dispatch]);
  
  return (
    <div className="app">
      <Routes>
        <Route path='/signup' element={ <Register /> }/>
        <Route path='/signin' element={ <Login /> }/>
        <Route path='/profile' element={ <ProfilePage /> }/>

        <Route path='/' element={ <MainPage /> }/>
        <Route path='/teplo/projects' element={ <ProjectsPage /> }/>
        <Route path={`/teplo/projects/:projectID/rooms`} element={ <RoomsPage /> }/>
        <Route path='/teplo/facades' element={ <FacadesPage /> }/>
        {/* <Route path='/teplo' element={}/> */}



        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </div>
  );
}
export default App;