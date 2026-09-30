import { createContext } from "react";
import type { ContactForm, ContactFormContextValue } from "../types";

export const emptyForm: ContactForm = { name: "", subject: "", email: "", message: "" };

export const FormContext = createContext<ContactFormContextValue>({
  form: emptyForm,
  setForm: () => undefined,
});
