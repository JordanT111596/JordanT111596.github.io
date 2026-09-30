import type { ReactElement } from "react";
export const Footer = (): ReactElement => (
    <footer className="py-3 text-center">
        <span className="text-muted">&copy; {new Date().getFullYear()} Jordan Triplett</span>
    </footer>
);
