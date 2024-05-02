import React from 'react';
// Глобальные импорты
import { useAppDispatch } from '../../store/hooks/hooks';
// Внутримодульные импорты
import {ProjLogo} from '../../ui/icons/ProjLogo';
import ProjectTable from './components/ProjectTable';
import { openCreateProjectPopup } from './store/projectPopupSlice';
import CreateProjectPopup from './components/CreateProjectPopup';


function Projects() {  

  const dispatch = useAppDispatch();

  const handleCreateProjectClick = () => {
    dispatch(openCreateProjectPopup())
  }

  return (
    <>
      <section className= 'projects' >
        <div className='projects__up-container'>
          <div className='projects__title-box'>
            <ProjLogo/><h2 className='projects__title'>Проекты</h2>
          </div>
          <button className='projects__button' type='button' onClick={handleCreateProjectClick}>Создать проект</button>
        </div>
        <ProjectTable />
      </section>

      <CreateProjectPopup />
      
    </>
  );
}

export default Projects;
