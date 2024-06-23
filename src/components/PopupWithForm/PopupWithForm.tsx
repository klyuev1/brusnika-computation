import React, { ReactNode } from 'react';


export interface PopupWithFormProps {
  name: string;
  title: string;
  buttonName: string;
  isOpen: boolean;
  isClose: () => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
}

function PopupWithForm({name, title, buttonName, isOpen, isClose, onSubmit, children}: PopupWithFormProps) {
  let container: string;
  if (name === "create-collection") {
    container = "popup__container-wide"
  }
  else {
    container = "popup__container"
  }
  return (
    <div className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''} `}>
      <div className={container}>
        <div className='popup__div'></div>
        <form className='popup__form' onSubmit={onSubmit}>
          <div className='popup__header'>
            <h2 className='popup__title'>{title}</h2>
            <button className='popup__button-close' onClick={isClose} type='button'> </button>
          </div>
          {children}
          <button className={`popup__button-submit popup__button-submit_type_${name}`} type='submit'>
            {buttonName}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
