import React from 'react';

const FormContext = React.createContext({
  name: "",
  setName: () => {},
  subject: "",
  setSubject: () => {},
  email: "",
  setEmail: () => {},
  message: "",
  setMessage: () => {}
});

export default FormContext;
