import React from 'react';
import UseValidation, { FormValue } from '../../../hooks/UseValidation';

interface FormHelperProps {
  initialValues: FormValue;
}

export const useFormHelper = ({ initialValues }: FormHelperProps) => {
  const [formValue, setFormValue] = React.useState<FormValue>(initialValues);
  const { formErrors, isValidForm, handleChange, resetForm } = UseValidation({ formValue, setFormValue });

  React.useEffect(() => {
    resetForm(initialValues, {}, false);
  }, [resetForm]);

  return { formValue, formErrors, isValidForm, handleChange };
};
