import { useState } from 'react';

const useForm = (callback) => {
  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
      callback(values);
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  };

  const handleSelect = (selected, name) => {
    setValues(values => ({ ...values, [name]: selected.value }));
  }

  return {
    handleChange,
    handleSelect,
    handleSubmit,
    values,
  }
};

export default useForm;