import React from 'react';
// Глобальные импорты
import PopupWithForm from '../../../components/PopupWithForm/PopupWithForm';
import { useAppDispatch, useAppSelector } from '../../../store/hooks/hooks';
// Внутримодульные импорты
import PopupRoomWithFacadeModule from './PopupRoomWithFacadeModule';
// import { Room } from "../consts/IRoom";
import { usePostRoomMutation } from '../api/apiRoomSlice';
import { closeCreateRoomPopup } from '../store/roomPopupSlice';
import { useGetFacadesQuery } from '../../Facades/api/apiFacadeSlice';

function CreateRoomPopup() {

  const { data: facades } = useGetFacadesQuery();

  const projectID = useAppSelector((state) => state.projectID);
  const [handleCreateRoom, {error, isLoading}] = usePostRoomMutation();

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(state => state.roomPopup.isCreateRoomPopupOpen);
  const handleClose = () => dispatch(closeCreateRoomPopup());
  
  const [floor, setFloor] = React.useState<number | undefined>();
  const [number, setNumber] = React.useState('');
  const [name, setName] = React.useState('');
  const [areaRoom, setAreaRoom] = React.useState<number | undefined>();
  

  React.useEffect(() => {
    if (error) {
      console.log(error)
    }
  },[error])

  React.useEffect(() => {
    setFloor(undefined);
    setNumber('');
    setName('');
    setAreaRoom(undefined);
  }, [isOpen]);


  function handleChangeFloor(e: React.ChangeEvent<HTMLInputElement>) {
    setFloor(e.target.value === '' ? undefined : +e.target.value);
  }
  function handleChangeNumber(e: React.ChangeEvent<HTMLInputElement>) {
    setNumber(e.target.value);
  }
  function handleChangeName(e: React.ChangeEvent<HTMLSelectElement>) {
    setName(e.target.value);
  }
  function handleChangeAreaRoom(e: React.ChangeEvent<HTMLInputElement>) {
    setAreaRoom(e.target.value === '' ? undefined : +e.target.value);
  }

  const [selectedFacades, setSelectedFacades] = React.useState<string[]>([]);

  const handleSelectFacade = (facadeId: string) => {
    if (selectedFacades.includes(facadeId)) {
      setSelectedFacades(selectedFacades.filter(id => id !== facadeId));
    } else {
      setSelectedFacades([...selectedFacades, facadeId]);
    }
    console.log(selectedFacades)
  };
    
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const room = {
      floor: floor!,
      number: number!,
      name: name!,
      areaRoom: areaRoom!,
    };

    if (typeof projectID === 'string' && selectedFacades.length > 0) {
      await handleCreateRoom({ projectID, facadeIDs:selectedFacades, room })
      handleClose();
    } 
  } 

  return(
    <PopupWithForm
    name='create-project'
    title='Cоздание комнаты'
    buttonName={isLoading ? 'Создание...' : 'Создать комнату'}
    isOpen={isOpen}
    isClose={handleClose}
    onSubmit={handleSubmit}
    >
      <div className='popup__input-section'>
        <label className='popup__label'>
          <h3 className='popup__input-name'>Номер этажа:</h3>
          <input
            name='floor' type='number' className='popup__input' required
            onChange={handleChangeFloor} value={floor}
          />
        </label>      

        <label className='popup__label'>
          <h3 className='popup__input-name'>Номер комнаты:</h3>
          <input
            name='numberRoom' type='text' className='popup__input' required
            onChange={handleChangeNumber} value={number}
          />
        </label>
      </div>
      
      <label className='popup__label'>
        <h3 className='popup__input-name'>Наименование комнаты:</h3>
        
        <select name='name' className='popup__select' required onChange={handleChangeName} value={name}>

          <option className='popup__select-item' value='' selected disabled>
            Выберите тип помещения
          </option>
          <option className='popup__select-item' value='Жилая комната'>
            Жилая комната
          </option>
          <option className='popup__select-item' value='Кухня-гостинная'>
            Кухня-гостинная
          </option>

        </select>
      
      </label>
      
      <label className='popup__label'>
        <h3 className='popup__input-name'>Площадь помещения:</h3>
        <input
          name='areaRoom' type='number' className='popup__input' required
          onChange={handleChangeAreaRoom} value={areaRoom || '' }
        />
      </label>
      
      <label className='popup__label'>
        
        <h3 className='popup__input-name'>Тип фасада</h3>
        
        <div className='popup-facade-room__box'>
          {facades && facades.map((facade) => (
            <PopupRoomWithFacadeModule 
              facade={facade}
              key={facade.id}
              handleSelectFacade={handleSelectFacade}
            />
          ))}
        </div>

      </label>

    </PopupWithForm>
  )
}

export default CreateRoomPopup;