import React from 'react';
import { FaInstagram, FaWhatsapp, FaTwitter, FaEnvelope, FaFacebook } from 'react-icons/fa';

const About = () => {
  return (
    <div id="about" className="w-full px-6 py-10 text-center bg-white">
      <h2 className="text-4xl font-semibold text-gray-800 mb-6 md:text-3xl sm:text-2xl">About Me</h2>
      
      <div className="container flex flex-col items-center md:flex-row md:justify-center md:space-x-8">
        <div className="img mb-4 md:w-96 animate-slideUp md:mb-0">
          <img src="./sahilformal.jpg" alt="Sahil" className="rounded-3xl w-64 h-64 object-cover sm:w-52 sm:h-52 md:w-80 md:h-80" />
        </div>
        
        <div className="text max-w-lg text-gray-600 text-lg sm:text-base sm:mt-4 md:mt-0 md:text-left md:text-xl">
          <p>
            I'm Sahil, a passionate Front-End Developer with a knack for creating beautiful and functional user interfaces. 
            I specialize in building responsive and interactive web applications that provide an excellent user experience.
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-6 space-x-4 text-2xl">
        <a href="https://www.instagram.com/chhokruaa?igsh=NDJlajJheHJiNjVl" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600">
          <FaInstagram />
        </a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600">
          <FaWhatsapp />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400">
          <FaTwitter />
        </a>
        <a href="mailto:chdsahil237@gmail.com" className="text-gray-600 hover:text-red-600">
          <FaEnvelope />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100009864552868" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default About;
