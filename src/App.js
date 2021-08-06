import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import FormContext from './contexts/FormContext';

function App() {

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const value = { name, setName, subject, setSubject, email, setEmail, message, setMessage };

  return (
    <FormContext.Provider value={value}>
      <Router>
        {/* The Navbar running through the router to link to each of my pages in the portfolio */}
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/react-portfolio/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        {/* My footer is displayed on each page */}
        <Footer />
      </Router>
    </FormContext.Provider>
  );
}

export default App;
