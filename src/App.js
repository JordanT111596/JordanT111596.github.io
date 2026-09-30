import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import FormContext, { emptyForm } from './contexts/FormContext';

function App() {
  // Lives above the router so a half-written message survives switching pages
  const [form, setForm] = useState(emptyForm);

  return (
    <FormContext.Provider value={{ form, setForm }}>
      <Router>
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
      </Router>
    </FormContext.Provider>
  );
}

export default App;
