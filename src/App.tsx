import type { ReactElement } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { FormContext, emptyForm } from "./contexts/FormContext";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Portfolio } from "./pages/Portfolio";
import type { ContactForm } from "./types";

export const App = (): ReactElement => {
    // Lives above the router so a half-written message survives switching pages
    const [form, setForm] = useState<ContactForm>(emptyForm);

    return (
        <FormContext.Provider value={{ form, setForm }}>
            <BrowserRouter>
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/portfolio" element={<Portfolio />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="*" element={<About />} />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </FormContext.Provider>
    );
};
