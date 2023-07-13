import React from 'react';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopBtn from './components/BackToTopBtn';

const App = () => {
  return (
  <div>
    <Header />
    <Hero />
    <About />
    <Skills />
    <Contact />
    <Footer />
    <BackToTopBtn />
  </div>
  )
};

export default App;