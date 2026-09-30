import React from 'react';

export const emptyForm = { name: "", subject: "", email: "", message: "" };

const FormContext = React.createContext({
  form: emptyForm,
  setForm: () => {}
});

export default FormContext;
