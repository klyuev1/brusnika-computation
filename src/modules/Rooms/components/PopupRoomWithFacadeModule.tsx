import React from 'react';
import { FacadeModule } from '../../Facades/consts/IFacade'; //некорректно!
import { BASE_URL } from '../../../consts/base-url';

function PopupRoomWithFacadeModule({facade, setHeight, setWidth, setAreaWall, setAreaWindow, setNumberFacade}: FacadeModule) {
  
  const handleRadioChange = () => {
    setHeight((facade.height)/1000);
    setWidth((facade.width)/1000);
    setAreaWall(facade.areaWall);
    setAreaWindow(facade.areaWindow);
    setNumberFacade(facade.name);
  };


  return(
    <article className='popup-facade-room'>
      <input type='radio' name="facade" className='popup-facade-room__input' onChange={handleRadioChange} required />
      <div className='popup-facade-room__card'>
        <img src={`${BASE_URL}/${facade.link}`} className='popup-facade-room__img'  alt='facade'/>
        <h3 className='popup-facade-room__title'>{facade.name}</h3>
      </div >
    </article>
  )
}

export default PopupRoomWithFacadeModule;