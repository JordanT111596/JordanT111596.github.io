import { useState } from "react";
import type { ReactElement, ReactNode } from "react";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import type { RenderResult } from "@testing-library/react";
import { FormContext, emptyForm } from "../contexts/FormContext";
import type { ContactForm } from "../types";

interface RenderOptions {
  readonly route?: string;
  readonly initialForm?: ContactForm;
}

interface FormProviderProps {
  readonly children: ReactNode;
  readonly initialForm: ContactForm;
}

const FormProvider = ({ children, initialForm }: FormProviderProps): JSX.Element => {
  const [form, setForm] = useState<ContactForm>(initialForm);
  return <FormContext.Provider value={{ form, setForm }}>{children}</FormContext.Provider>;
};

export const renderWithProviders = (
  ui: ReactElement,
  { route = "/", initialForm = emptyForm }: RenderOptions = {},
): RenderResult =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <FormProvider initialForm={initialForm}>{ui}</FormProvider>
    </MemoryRouter>,
  );

export const filledForm: ContactForm = {
  name: "Ada Lovelace",
  subject: "Let's work together",
  email: "ada@example.com",
  message: "Loved the portfolio & the Workday section!",
};
