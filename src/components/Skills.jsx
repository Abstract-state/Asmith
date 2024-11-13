import React from 'react';
import { SiPython, SiCplusplus, SiC, SiFlask, SiTensorflow, SiPandas, SiNumpy, SiScipy, SiMongodb, SiMysql, SiGithub, SiTailwindcss } from 'react-icons/si';
import { FaDatabase, FaGitAlt } from 'react-icons/fa';

function Skills() {
  return (
    <section id="skills" className="px-8 py-16 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Skills, Tools, and Technologies</h2>
        <div className="text-center text-lg mb-4 text-gray-600 dark:text-gray-400">The skills, tools, and technologies I am really good at:</div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* Programming Languages with Icons */}
          <div className="flex flex-col items-center">
            <SiPython className="text-5xl text-blue-600 dark:text-yellow-500" />
            <span className="mt-2 text-gray-900 dark:text-white">Python</span>
          </div>
          <div className="flex flex-col items-center">
            <SiCplusplus className="text-5xl text-blue-700 dark:text-yellow-500" />
            <span className="mt-2 text-gray-900 dark:text-white">C++</span>
          </div>
          <div className="flex flex-col items-center">
            <SiC className="text-5xl text-gray-900 dark:text-yellow-500" />
            <span className="mt-2 text-gray-900 dark:text-white">C</span>
          </div>

          {/* Programming Languages without Icons */}
          <div className="flex flex-col items-center">
            <img
              src="https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white"
              alt="Java"
              className="w-40 h-20"
            />
            <span className="mt-2 text-gray-900 dark:text-white">Java</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.shields.io/badge/R-276DC3?style=for-the-badge&logo=r&logoColor=white"
              alt="R"
              className="w-20 h-20"
            />
            <span className="mt-2 text-gray-900 dark:text-white">R</span>
          </div>

          {/* Frameworks & Libraries */}
          {/* Frameworks & Libraries */}
          
          <div className="flex flex-col items-center">
            <img
              src="https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white"
              alt="Spring Boot"
              className="w-40 h-20"
            />
            <span className="mt-2 text-gray-900 dark:text-white">Spring Boot</span>
          </div>

          <div className="flex flex-col items-center">
            <SiFlask className="text-5xl text-gray-900 dark:text-white" />
            <span className="mt-2 text-gray-900 dark:text-white">Flask</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTensorflow className="text-5xl text-orange-500 dark:text-yellow-400" />
            <span className="mt-2 text-gray-900 dark:text-white">TensorFlow</span>
          </div>
          <div className="flex flex-col items-center">
            <SiPandas className="text-5xl text-blue-800 dark:text-yellow-400" />
            <span className="mt-2 text-gray-900 dark:text-white">Pandas</span>
          </div>
          <div className="flex flex-col items-center">
            <SiNumpy className="text-5xl text-blue-400 dark:text-yellow-400" />
            <span className="mt-2 text-gray-900 dark:text-white">NumPy</span>
          </div>
          <div className="flex flex-col items-center">
            <SiScipy className="text-5xl text-blue-300 dark:text-yellow-400" />
            <span className="mt-2 text-gray-900 dark:text-white">SciPy</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.shields.io/badge/YOLOv5-FF6F00?style=for-the-badge&logo=yolo&logoColor=white"
              alt="YOLOv5"
              className="w-20 h-20"
            />
            <span className="mt-2 text-gray-900 dark:text-white">YOLOv5</span>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://img.shields.io/badge/Tableau-E97627?style=for-the-badge&logo=tableau&logoColor=white"
              alt="Tableau"
              className="w-40 h-20"
            />
            <span className="mt-2 text-gray-900 dark:text-white">Tableau</span>
          </div>

          {/* Tools */}
          <div className="flex flex-col items-center">
            <FaGitAlt className="text-5xl text-orange-600 dark:text-yellow-400" />
            <span className="mt-2 text-gray-900 dark:text-white">Git</span>
          </div>
          <div className="flex flex-col items-center">
            <SiGithub className="text-5xl text-gray-900 dark:text-white" />
            <span className="mt-2 text-gray-900 dark:text-white">GitHub</span>
          </div>
          <div className="flex flex-col items-center">
            <SiTailwindcss className="text-5xl text-teal-500 dark:text-yellow-400" />
            <span className="mt-2 text-gray-900 dark:text-white">Tailwind CSS</span>
          </div>

          {/* Databases */}
          <div className="flex flex-col items-center">
            <SiMongodb className="text-5xl text-green-600 dark:text-yellow-400" />
            <span className="mt-2 text-gray-900 dark:text-white">MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql className="text-5xl text-blue-800 dark:text-yellow-400" />
            <span className="mt-2 text-gray-900 dark:text-white">MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <FaDatabase className="text-5xl text-gray-600 dark:text-yellow-400" />
            <span className="mt-2 text-gray-900 dark:text-white">SQL & Databases</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
