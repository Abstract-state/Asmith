import React from 'react';
import profileImage from '../assets/profile.jpg'; // Replace with your image

function Hero() {
  return (
    <section className="mt-20 px-8 py-16 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        
        {/* Introduction Text on the Left */}
        <div className="md:col-span-3 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Hi, I’m Asmith <span role="img" aria-label="waving hand">👋</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-4">
            I’m a Computer Science Engineering student with a focus on software development, machine learning, and data science. I love working on innovative projects and contributing to technological advancements.
          </p>
          <div className="mt-4 flex flex-col md:flex-row md:space-x-4 text-sm text-gray-600 dark:text-gray-400">
            <p>📍 Vellore, India</p>
            <p>✅ Available for new projects</p>
          </div>
        </div>
        
        {/* Profile Image on the Right */}
        <div className="md:col-span-2 flex justify-center md:justify-end">
          <img
            src={profileImage}
            alt="Profile"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-gray-300 dark:border-gray-700 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
