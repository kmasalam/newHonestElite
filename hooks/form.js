import { useState } from 'react';
export const useForm = (callback, initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };
  const onAvtChange = (value) => {
    setValues({ ...values, ['avatar']: value });
  };
  const onSubmit = (event) => {
    if (event) event.preventDefault();
    callback();
  };
  return {
    onChange,
    onAvtChange,
    onSubmit,
    values, 
    setValues
  };
};