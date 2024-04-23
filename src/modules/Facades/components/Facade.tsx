import React, { useEffect } from 'react';
// Внутримодульные импорты
import { openSelectedFacade } from '../store/selectedFacadeSlice';
import { useDeleteFacadeMutation } from '../api/apiFacadeSlice';
import { FacadeProps } from '../consts/IFacade';
import { useAppDispatch } from '../../../store/hooks/hooks';
import { BASE_URL } from '../../../consts/base-url';

function Facade({facade}: FacadeProps) {

  const dispatch = useAppDispatch();
  const [handleDeleteFacade, {error} ] = useDeleteFacadeMutation();

  function handleDeleteClick() {
    handleDeleteFacade(facade)
  }

  const handleClick = () => {
    dispatch(openSelectedFacade(facade));
  }

  useEffect(() => {
    if (error) {
      console.log(error);
    }
  }, [error]);

  return (
    <article className='element'>
      <button className='element__button' type='button' onClick={handleClick}>
        <img className='element__photo' src={`${BASE_URL}/${facade.link}`} alt='facade'/>
        <div className='element__div'>
          <h3 className='element__number'>{facade.name}</h3>
          <button className='element__button-delete' type='button' onClick={handleDeleteClick}></button>
        </div>
      </button>
    </article>
  );
}

export default Facade;
