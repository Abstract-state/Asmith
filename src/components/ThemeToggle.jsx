import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check localStorage to set initial theme mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-2xl focus:outline-none p-2 rounded-full bg-gray-300 dark:bg-gray-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg"
    >
      {darkMode ? (
        <FaSun className="text-yellow-500" />
      ) : (
        <FaMoon className="text-gray-800 dark:text-yellow-400" />
      )}
    </button>
  );
}

export default ThemeToggle;
