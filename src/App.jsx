import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Projects from './components/Project';
import Testimonials from './components/testiomonials';
import Contact from './components/contact';
import Footer  from './components/Footer';

function App() {
  useEffect(() => {
    const darkMode = localStorage.getItem('theme') === 'dark';
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
