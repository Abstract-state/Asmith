import React from 'react';
import { FaLinkedin, FaGithub, FaCode, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex space-x-6 mb-4">
          {/* LinkedIn Link */}
          <a href="https://www.linkedin.com/in/asmith-vit/" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-yellow-400 hover:text-blue-800 dark:hover:text-yellow-300">
            <FaLinkedin className="text-3xl" />
          </a>
          
          {/* GitHub Link */}
          <a href="https://github.com/Abstract-state" target="_blank" rel="noopener noreferrer" className="text-gray-900 dark:text-yellow-400 hover:text-gray-700 dark:hover:text-yellow-300">
            <FaGithub className="text-3xl" />
          </a>
          
          {/* LeetCode Link */}
          <a href="https://leetcode.com/u/abstract_state/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300">
            <FaCode className="text-3xl" />
          </a>
          
          {/* Instagram Link */}
          <a href="https://www.instagram.com/abstract__state/" target="_blank" rel="noopener noreferrer" className="text-pink-600 dark:text-yellow-400 hover:text-pink-800 dark:hover:text-yellow-300">
            <FaInstagram className="text-3xl" />
          </a>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-center">Designed & Developed by Asmith © {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;
