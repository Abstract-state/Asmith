import React from 'react';

function Contact() {
  return (
    <section id="contact" className="px-8 py-16 bg-white dark:bg-gray-900 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Get in Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">Feel free to reach out for collaborations, job opportunities, or just a friendly chat!</p>
            
            <div className="mb-4">
              <a href="mailto:asmithkr1314@gmail.com" className="text-blue-500 dark:text-yellow-400 hover:underline">asmithkr1314@gmail.com</a>
            </div>
            
            <div className="flex space-x-6 mt-4">
              <a href="https://www.linkedin.com/in/asmith-vit/" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-yellow-400 hover:underline">LinkedIn</a>
              <a href="https://github.com/Abstract-state" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-yellow-400 hover:underline">GitHub</a>
              <a href="https://www.instagram.com/abstract__state/" target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-yellow-400 hover:underline">Instagram</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <form action="https://formspree.io/f/{your-formspree-id}" method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 dark:text-gray-400 mb-1">Name</label>
                <input type="text" id="name" name="name" required className="w-full p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-400 mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-400 mb-1">Message</label>
                <textarea id="message" name="message" rows="4" required className="w-full p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 dark:bg-yellow-500 text-white dark:text-gray-900 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-yellow-400 transition-colors duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
