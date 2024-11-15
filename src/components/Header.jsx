import React, { useState } from 'react'; 
import ThemeToggle from './ThemeToggle';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-4 shadow-md fixed top-0 left-0 right-0 z-50 w-full">
      <div className="max-w-7xl mx-auto flex items-center justify-between overflow-hidden">
        
        {/* Logo Placeholder */}
        <div className="flex items-center">
          <span className="text-3xl font-bold tracking-wider text-black">{'Asmith'}</span>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <a href="#about" className="text-black dark:text-white hover:text-black dark:hover:text-yellow-400 transition transform hover:scale-105 duration-200">About</a>
          <a href="#skills" className="text-black dark:text-white hover:text-black dark:hover:text-yellow-400 transition transform hover:scale-105 duration-200">Skills</a>
          <a href="#projects" className="text-black dark:text-white hover:text-black dark:hover:text-yellow-400 transition transform hover:scale-105 duration-200">Projects</a>
          <a href="#work" className="text-black dark:text-white hover:text-black dark:hover:text-yellow-400 transition transform hover:scale-105 duration-200">Work</a>
          <a href="#testimonials" className="text-black dark:text-white hover:text-black dark:hover:text-yellow-400 transition transform hover:scale-105 duration-200">Testimonials</a>
          <a href="#contact" className="text-black dark:text-white hover:text-black dark:hover:text-yellow-400 transition transform hover:scale-105 duration-200">Contact</a>
        </nav>

        {/* Dark/Light Toggle and Resume Button */}
        <div className="ml-4 flex items-center space-x-4">
          {/* Theme Toggle Button */}
          <ThemeToggle />
          
          {/* Resume Download Button */}
          <a
            href="/Asmith-Resume.pdf"  // Updated path to point to public folder
            download="Asmith_Resume.pdf"  // This triggers direct download with a specific filename
            className="hidden md:inline-block px-4 py-2 bg-yellow-500 text-white font-medium rounded-lg shadow hover:bg-yellow-600 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden ml-4">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-gray-800 dark:bg-gray-700 p-4 mt-2 rounded-md shadow-md">
          <ul className="space-y-4 text-white text-lg">
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li><a href="#work" onClick={() => setMenuOpen(false)}>Work</a></li>
            <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
