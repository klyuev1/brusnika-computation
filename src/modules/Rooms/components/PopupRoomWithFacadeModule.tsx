import React from 'react';
import { FacadeModule } from '../../Facades/consts/IFacade'; //некорректно!
import { BASE_URL } from '../../../consts/base-url';

function PopupRoomWithFacadeModule({facade, handleSelectFacade}: FacadeModule) {

  const handleRadioChange = () => {
    handleSelectFacade(facade.id!);
  };

  return(
    <div className='popup-facade-room'>
      <input type='radio' name="facade" className='popup-facade-room__input' onChange={handleRadioChange} required />
      <div className='popup-facade-room__card'>
        <img src={`${BASE_URL}/${facade.link}`} className='popup-facade-room__img'  alt='facade'/>
        <h3 className='popup-facade-room__title'>{facade.name}</h3>
      </div >
    </div>
  )
}

export default PopupRoomWithFacadeModule;