import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="px-8 py-16 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">Reach Me</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-10">Any question or remarks? Just write us a message!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="bg-black text-white p-8 rounded-lg relative overflow-hidden">
            <div className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-gray-700 rounded-full opacity-30"></div>
            <div className="absolute bottom-[-30px] right-[-30px] w-48 h-48 bg-gray-700 rounded-full opacity-30"></div>

            <h3 className="text-3xl font-semibold mb-4">Contact Information</h3>
            <p className="mb-8">Say something to start a live chat!</p>

            <div className="flex items-center mb-6">
              <FaPhoneAlt className="mr-4 text-xl" />
              <span>+91 870 919 4772</span>
            </div>
            <div className="flex items-center mb-6">
              <FaEnvelope className="mr-4 text-xl" />
              <span>asmithkr1314@gmail.com</span>
            </div>
            <div className="flex items-center mb-6">
              <FaMapMarkerAlt className="mr-4 text-xl" />
              <span>VIT Vellore, Tamil Nadu, India</span>
            </div>

            <div className="flex space-x-4 mt-50">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter className="text-2xl hover:text-blue-400 transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl hover:text-pink-400 transition-colors" />
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                <FaDiscord className="text-2xl hover:text-indigo-400 transition-colors" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg relative">
            <form action="https://formspree.io/f/xnnqvgwj" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-900 dark:text-gray-400 mb-1">First Name</label>
                  <input type="text" id="firstName" name="firstName" required className="w-full p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-900 dark:text-gray-400 mb-1">Last Name</label>
                  <input type="text" id="lastName" name="lastName" required className="w-full p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600" />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 dark:text-gray-400 mb-1">Email</label>
                <input type="email" id="email" name="email" required className="w-full p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600" />
              </div>

              <div className="mb-6">
                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-900 dark:text-gray-400 mb-1">Phone Number</label>
                <input type="text" id="phoneNumber" name="phoneNumber" required className="w-full p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600" />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 dark:text-gray-400 mb-1">Message</label>
                <textarea id="message" name="message" rows="4" required className="w-full p-2 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600"></textarea>
              </div>

              <div className="relative">
                <button type="submit" className="bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 transition-colors duration-300">
                  Send Message
                </button>
                <div className="absolute top-1/2 right-[-40px] transform -translate-y-1/2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h12m-6-6h6m-3 12h6m-3 6h3" />
                  </svg>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
