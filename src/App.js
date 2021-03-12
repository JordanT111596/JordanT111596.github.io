import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
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
  );
}

export default App;
