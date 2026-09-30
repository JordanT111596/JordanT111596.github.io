import type { ContactForm } from "../types";
import { EMAIL } from "../data/links";

export const buildMailtoLink = (form: ContactForm): string => {
    const body =
        `${form.message}\n\nPlease contact me back via email at ${form.email}` +
        `\n\nThis message was sent from ${form.name} using the portfolio contact page!`;
    return `mailto:${EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
};

export const openMailClient = (link: string): void => {
    window.location.assign(link);
};
