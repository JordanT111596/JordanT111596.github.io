import React, { useContext } from "react";
import FormContext, { emptyForm } from "../contexts/FormContext";

const fields = [
    { id: "name", label: "Name", placeholder: "Name" },
    { id: "subject", label: "Subject", placeholder: "Subject" },
    { id: "email", label: "Email address", placeholder: "Email@address.com", type: "email" },
];

function Contact() {
    const { form, setForm } = useContext(FormContext);

    const updateField = (e) => setForm({ ...form, [e.target.id]: e.target.value });

    function handleFormSubmit(e) {
        e.preventDefault();

        // Opens the visitor's email client with the message prefilled, ready to send
        const body = `${form.message}\n\nPlease contact me back via email at ${form.email}`
            + `\n\nThis message was sent from ${form.name} using the portfolio contact page!`;
        window.location.href = "mailto:JordanT111596@gmail.com"
            + "?subject=" + encodeURIComponent(form.subject)
            + "&body=" + encodeURIComponent(body);
    }

    return (
        <div className="container pb-5">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10 mt-5 card">
                    <div className="card-body">
                        <h1 className="text-primary text-center mb-3">Contact</h1>
                        <form onSubmit={handleFormSubmit}>
                            {fields.map(({ id, label, placeholder, type = "text" }) => (
                                <div className="my-4" key={id}>
                                    <label htmlFor={id} className="form-label">{label}</label>
                                    <input type={type} className="form-control" id={id} placeholder={placeholder}
                                        value={form[id]} onChange={updateField} required />
                                </div>
                            ))}
                            <div className="my-4">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="3" placeholder="Message"
                                    value={form.message} onChange={updateField} required />
                            </div>
                            <div className="d-flex gap-3 my-4">
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="button" className="btn btn-outline-primary" onClick={() => setForm(emptyForm)}>Clear</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
