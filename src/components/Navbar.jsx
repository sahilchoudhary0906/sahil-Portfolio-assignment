import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tabs] = useState([
    { name: "Home", link: "#" },
    { name: "About", link: "#about" },
    { name: "Portfolio", link: "#portfolio" },
    { name: "Contact Me", link: "#contactme" },
  ]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 p-4 z-50 shadow-md">
      <div className="flex items-center justify-between">
        <h1 className="text-white text-2xl font-bold">Sahil</h1>

        <button
          className="text-white md:hidden text-2xl"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

  
        <nav className="hidden md:flex space-x-8">
          {tabs.map((tab, index) => (
            <a
              href={tab.link}
              key={index}
              className="text-white text-lg font-medium transition duration-300 hover:scale-110"
            >
              {tab.name}
            </a>
          ))}
          <a
            href="./sahil resume .pdf"
            download
            className="text-white text-lg font-medium transition duration-300 hover:scale-110"
          >
            Download Resume
          </a>
        </nav>
      </div>

      {isOpen && (
        <nav className="md:hidden mt-4 space-y-4">
          {tabs.map((tab, index) => (
            <a
              href={tab.link}
              key={index}
              className="block text-white text-lg font-medium transition duration-300 hover:scale-105"
            >
              {tab.name}
            </a>
          ))}
          <a
            href="./sahil resume .pdf"
            download
            className="block text-white text-lg font-medium transition duration-300 hover:scale-105"
          >
            Download Resume
          </a>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
