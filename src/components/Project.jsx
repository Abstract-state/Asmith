import React from 'react';

function Projects() {
  return (
    <section id="projects" className="px-8 py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Project 1 - Vision Insight */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Vision Insight</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Developed a real-time object detection and tracking system using YOLOv5 for surveillance applications. This project utilized computer vision techniques to analyze video frames and track objects effectively.
            </p>
            <div className="mt-4">
              <a href="https://github.com/Abstract-state/Vision-Insight" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-yellow-400 hover:underline">View on GitHub</a>
            </div>
          </div>

          {/* Project 2 - 911 Calls Data Analysis */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">911 Calls Data Analysis</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Analyzed 911 emergency call data to determine high-frequency areas and categorize call types (EMS, Fire, Traffic). This project provided valuable insights for resource optimization and understanding emergency patterns.
            </p>
            <div className="mt-4">
              <a href="https://github.com/Abstract-state/911-Calls-Data-Analysis" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-yellow-400 hover:underline">View on GitHub</a>
            </div>
          </div>

          {/* Project 3 - Knowledge Pal */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Knowledge Pal</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Developed an AI-powered chatbot using Azure QNA maker, LUIS, and BOT services to assist high school students with their studies via WhatsApp. The chatbot provided real-time responses to their questions.
            </p>
            <div className="mt-4">
              <a href="https://github.com/Abstract-state/Knowledge-Pal" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-yellow-400 hover:underline">View on GitHub</a>
            </div>
          </div>

          {/* Project 4 - Green Guard */}
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Green Guard</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              An AI-Guided Plant Restoration System that detects and treats plant diseases using a unique dataset and a ResNet model. The system was integrated with a Flask backend to provide precise plant health solutions.
            </p>
            <div className="mt-4">
              <a href="https://github.com/Abstract-state/Green-Guard" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-yellow-400 hover:underline">View on GitHub</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;
