import React from 'react';
// Глобальные импорты
import PopupWithForm from '../../../components/PopupWithForm/PopupWithForm';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
// Внутримодульные импорты
import { Project } from "../consts/IProject";
import {Region, regionsData} from '../consts/regionsData';
import { usePostProjectMutation } from '../api/apiProjectSlice';
import { closeCreateProjectPopup } from '../store/projectPopupSlice';

function CreateProjectPopupOpen() {

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => state.projectPopup.isCreateProjectPopupOpen);
  const [handleCreateProject, {error, isLoading}] = usePostProjectMutation();
  const handleClose = () => dispatch(closeCreateProjectPopup());
  
  const [name, setName] = React.useState<string>('');
  const [region, setRegion] = React.useState<string>('');
  const [formData, setFormData] = React.useState<Region>({
    tOutside: 0,
    tInside: 0,
    rWall: 0,
    rWindow: 0,
    beta: 0,
    kHousehold: 0
  });

  React.useEffect(() => {
    if (error) {
      console.log(error)
    }
  },[error])

  React.useEffect(() => {
    setName('');
    setRegion('');
  }, [isOpen]);

  React.useEffect(() => {
    if (region && regionsData[region]) {
      setFormData(regionsData[region]);
    }
  }, [region]);


  function handleChangeName(e: React.ChangeEvent<HTMLInputElement>) {
    setName(e.target.value);
  }
  function handleChangeRegion(e: React.ChangeEvent<HTMLSelectElement>) {
    setRegion(e.target.value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const project: Project = {
      name: name!,
      ...formData,
    };
    await handleCreateProject(project)
    handleClose();
  }
   
  return (
    <PopupWithForm
      name='create-project'
      title='Cоздание проекта'
      buttonName={isLoading ? 'Создание...' : 'Создать проект'}
      isOpen={isOpen}
      isClose={handleClose}
      onSubmit={handleSubmit}
    >
      <label className='popup__label'>
        <h3 className='popup__input-name'>Наименование проекта:</h3>
        <input
          name='name' type='text'
          className='popup__input'
          minLength={2}
          maxLength={40}
          required
          value={name}
          onChange={handleChangeName}
        />
      </label>
      <label className='popup__label'>
        <h3 className='popup__input-name'>Регион:</h3>
        <select className='popup__select' id='region' onChange={handleChangeRegion} value={region} required >
          
          <option className='popup__select-item' value='' disabled>
            Выберите город
          </option>
          <option className='popup__select-item' value='Москва'>
            Москва
          </option>
          <option className='popup__select-item' value='Екатеринбург'>
            Екатеринбург
          </option>
          <option className='popup__select-item' value='Тюмень'>
            Тюмень
          </option>
          <option className='popup__select-item' value='Омск'>
            Омск
          </option>
          <option className='popup__select-item' value='Курган'>
            Курган
          </option>
          <option className='popup__select-item' value='Новосибирск'>
            Новосибирск
          </option>
          <option className='popup__select-item' value='Сургут'>
            Сургут
          </option>
        
        </select>
      </label>
    </PopupWithForm>
  );
}

export default CreateProjectPopupOpen;
