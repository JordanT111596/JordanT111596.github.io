import type { Dispatch, ReactNode, SetStateAction } from "react";

export type ProjectMedia =
    | { readonly type: "video"; readonly src: string }
    | { readonly type: "image"; readonly src: string; readonly alt?: string };

export interface Project {
    readonly name: string;
    readonly link?: string;
    readonly media?: ProjectMedia;
    readonly desc?: string;
    readonly tech?: string;
    readonly repoLink?: string;
}

export interface ProjectSectionProps {
    readonly title: string;
    readonly intro?: ReactNode;
    readonly projects: readonly Project[];
    readonly columns?: "col-md-4" | "col-md-6";
}

export interface ContactForm {
    readonly name: string;
    readonly subject: string;
    readonly email: string;
    readonly message: string;
}

export type ContactFormField = keyof ContactForm;

export interface ContactFormContextValue {
    readonly form: ContactForm;
    readonly setForm: Dispatch<SetStateAction<ContactForm>>;
}

export interface ContactInputField {
    readonly id: Exclude<ContactFormField, "message">;
    readonly label: string;
    readonly placeholder: string;
    readonly type: "text" | "email";
}

export interface NavItem {
    readonly to: string;
    readonly label: string;
}
