import React from 'react';

function About() {
  return (
    <section id="about" className="px-8 py-16 bg-gray-100 dark:bg-gray-800 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center md:text-left">About Me</h2>
        <div className="text-gray-700 dark:text-gray-300 space-y-4">
          <p>
            I’m Asmith, a dynamic Computer Science Engineering student from VIT Vellore. I am adept in software development, machine learning (ML), data science, data structures, and algorithms.
          </p>
          <p>
            My internships have equipped me with hands-on experience in advanced projects such as algorithm design, computer vision, and predictive analytics, showcasing my ability to address complex computational challenges.
          </p>
          <p>
            I’m proficient in various programming languages and analytical frameworks, and I'm dedicated to leveraging my expertise in software engineering and data science to innovate solutions for complex problems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
