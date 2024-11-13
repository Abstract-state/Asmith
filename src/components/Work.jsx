import React from 'react';
import wellsFargoLogo from '../assets/wellsfargo.png'; // Replace with the actual path to your logo image
import cogknitLogo from '../assets/cogknit.png';       // Replace with the actual path to your logo image
import genericLogo from '../assets/generic.png';       // Placeholder for generic company logo

function Work() {
  return (
    <section id="work" className="px-8 py-16 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center md:text-left">My Work Experience</h2>
        <div className="relative border-l-4 border-gray-300 dark:border-gray-700 ml-12">

          {/* Wells Fargo Experience - Drop Effect and Animation */}
          <div className="mb-16 group relative">
            {/* Time Indicator */}
            <div className="absolute -left-48 top-6 w-40 text-sm text-gray-500 dark:text-gray-400 text-right">
              Jun 2024 - Jul 2024
            </div>
            {/* Marker with Drop Effect and Animation */}
            <div className="absolute -left-5 top-4 w-9 h-9 bg-red-500 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900 shadow-2xl animate-pulse">
              <span className="text-white font-bold">WF</span>
            </div>
            {/* Experience Card */}
            <div className="ml-20 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img src={wellsFargoLogo} alt="Wells Fargo Logo" className="w-12 h-12 mr-4 rounded" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Intern Analyst - Wells Fargo</h3>
              </div>
              <p className="text-sm text-gray-500">On-site • Chennai, Tamil Nadu, India</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Completed a Summer Internship focused on end-to-end application development. Led the design and implementation of algorithms for a financial application, contributing to both backend development and user-facing functionality.
              </p>
              <div className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                Skills: Python (Programming Language), Algorithms, and more.
              </div>
            </div>
          </div>

          {/* Cogknit Semantics Pvt. Ltd Experience */}
          <div className="mb-16 group relative">
            {/* Time Indicator */}
            <div className="absolute -left-48 top-6 w-40 text-sm text-gray-500 dark:text-gray-400 text-right">
              Oct 2023 - Dec 2023
            </div>
            {/* Marker without Drop Effect */}
            <div className="absolute -left-5 top-4 w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900">
              <span className="text-white font-bold">CS</span>
            </div>
            {/* Experience Card */}
            <div className="ml-20 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img src={cogknitLogo} alt="Cogknit Logo" className="w-12 h-12 mr-4 rounded" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">AI/ML Intern - Cogknit Semantics Pvt. Ltd</h3>
              </div>
              <p className="text-sm text-gray-500">On-site • Bengaluru, Karnataka, India</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Contributed to a cutting-edge Computer Vision project focused on surveillance for sophisticated object detection. Achieved exceptional zero-shot detection in a challenging project, demonstrating problem-solving and technical expertise.
              </p>
              <div className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                Skills: Artificial Intelligence, Computer Vision, and more.
              </div>
            </div>
          </div>

          {/* Data Science Intern Experience */}
          <div className="mb-16 group relative">
            {/* Time Indicator */}
            <div className="absolute -left-48 top-6 w-40 text-sm text-gray-500 dark:text-gray-400 text-right">
              Aug 2023 - Sep 2023
            </div>
            {/* Marker without Drop Effect */}
            <div className="absolute -left-5 top-4 w-9 h-9 bg-orange-500 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-900">
              <span className="text-white font-bold">CS</span>
            </div>
            {/* Experience Card */}
            <div className="ml-20 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <img src={cogknitLogo} alt="Cogknit Logo" className="w-12 h-12 mr-4 rounded" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Data Science Intern</h3>
              </div>
              <p className="text-sm text-gray-500">On-site</p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Contributed to dataset accuracy and reliability by performing detailed image and video annotation. Advanced model training precision by applying predictive analytics and machine learning models for in-depth analysis and interpretation.
              </p>
              <div className="mt-4 text-sm text-gray-700 dark:text-gray-400">
                Skills: Pandas, NumPy, and more.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Work;
