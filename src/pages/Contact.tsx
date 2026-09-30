import { useContext } from "react";
import type { ChangeEvent, FormEvent, ReactElement } from "react";
import { FormContext, emptyForm } from "../contexts/FormContext";
import type { ContactFormField, ContactInputField } from "../types";
import { buildMailtoLink, openMailClient } from "../utils/mailto";

const inputFields: readonly ContactInputField[] = [
    { id: "name", label: "Name", placeholder: "Name", type: "text" },
    { id: "subject", label: "Subject", placeholder: "Subject", type: "text" },
    { id: "email", label: "Email address", placeholder: "Email@address.com", type: "email" },
];

export const Contact = (): ReactElement => {
    const { form, setForm } = useContext(FormContext);

    const updateField =
        (field: ContactFormField) =>
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>
            setForm((current) => ({ ...current, [field]: e.target.value }));

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        openMailClient(buildMailtoLink(form));
    };

    return (
        <div className="container pb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10 mt-5 card">
                    <div className="card-body">
                        <h1 className="text-primary text-center mb-3">Contact</h1>
                        <form onSubmit={handleSubmit} aria-label="Contact form">
                            {inputFields.map(({ id, label, placeholder, type }) => (
                                <div className="my-4" key={id}>
                                    <label htmlFor={id} className="form-label">
                                        {label}
                                    </label>
                                    <input
                                        type={type}
                                        className="form-control"
                                        id={id}
                                        placeholder={placeholder}
                                        value={form[id]}
                                        onChange={updateField(id)}
                                        required
                                    />
                                </div>
                            ))}
                            <div className="my-4">
                                <label htmlFor="message" className="form-label">
                                    Message
                                </label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows={3}
                                    placeholder="Message"
                                    value={form.message}
                                    onChange={updateField("message")}
                                    required
                                />
                            </div>
                            <div className="d-flex gap-3 my-4">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-outline-primary"
                                    onClick={() => setForm(emptyForm)}
                                >
                                    Clear
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
