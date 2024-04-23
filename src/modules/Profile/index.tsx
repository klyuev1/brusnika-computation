import React, {useState, useEffect } from 'react';
// import UseValidation from '../../utils/UseValidation'; 
import { useProfileFormHelper } from './helpers/profileFormHelper';

// import { FormValue } from "../../models/props";
import { useGetUserQuery} from '../../store/api/apiProfileSlice';

import { useSignOut } from './helpers/signOutHelper';
import { useUpdateProfile } from './helpers/updateProfileHelper';

function Profile() {
  const { onSignOut } = useSignOut();
  const { onUpdateProfile } = useUpdateProfile();
  const initialValues = { name: '', email: '', password: '' };
  const { formValue, formErrors, isValidForm, handleChange, resetForm } = useProfileFormHelper({ initialValues });
  const { data: user } = useGetUserQuery();

  const [isChanges, setIsChanges] = useState(false);

  useEffect(() => {
    if (user && ((formValue.email !== user.email) || (formValue.name !== user.name))) {
        setIsChanges(true);
    } else {
        setIsChanges(false);
    }
  }, [formValue, setIsChanges]);

  useEffect(() => {
    if (user) {
      resetForm(user!, {}, true);
    }
    setIsChanges(false);
  }, [user, resetForm]);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onUpdateProfile(formValue.name, formValue.email)
  }

  return (
    <section className='profile'>
      <h1 className='profile__title'>Привет, {user && user.name}!</h1>
      <form className='profile__form' noValidate>
        
        <label className='profile__label'>
          Имя
          <input
            className={`profile__input ${formErrors.name ? "profile__input_error" : ""}`}
            id='name' name='name' type="name" placeholder='Ваше имя' required
            value={formValue.name} 
            onChange={handleChange}
          />
        </label>
        <span className="profile__input-span_error">{formErrors.name}</span>
        
        <label className='profile__label'>
          E-mail
          <input
            className={`profile__input ${formErrors.email ? "profile__input_error" : ""}`}
            id='email' name='email' type="email" placeholder='Ваш Email' required
            value={formValue.email} 
            onChange={handleChange}
          />
        </label>
        <span className="profile__input-span_error">{formErrors.email}</span>

      </form>

      <button
        className='profile__edit-button'type='submit'
        disabled={!isValidForm  || !isChanges}
        onClick={handleSubmit}
        >Редактировать</button>
      <button className='profile__exit-button' type='button' 
        onClick={onSignOut}
      >Выйти из аккаунта</button>

    </section>
  )
}

export default Profile;