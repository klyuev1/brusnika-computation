import { useState } from 'react';
import UseValidation, { FormValue } from '../../../hooks/UseValidation';

interface FormHelperProps {
  initialValues: FormValue;
}

// interface FormHelper {
//   formValue: FormValue;
//   formErrors: Record<string, string>;
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   // resetForm: () => void;
// }

export const useProfileFormHelper = ({ initialValues }: FormHelperProps) => {
  const [formValue, setFormValue] = useState(initialValues);
  const { formErrors, isValidForm, handleChange, resetForm } = UseValidation({ formValue, setFormValue });
  // const [formErrors, setFormErrors] = useState<Record<string, string>>({}); // Уточняем тип для formErrors

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log('Handling change event:', e.target.value);
  //   const { name, value } = e.target;
  //   setFormValue(prevState => ({
  //     ...prevState,
  //     [name]: value
  //   }));
  // };

  // const resetForm = () => {
  //   console.log('Resetting form');
  //   setFormValue(initialValues);
  //   setFormErrors({}); // Сбрасываем ошибки при сбросе формы
  // };

  return { formValue, formErrors, isValidForm, handleChange, resetForm };
};