import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import teamMembers from './data'; // Importing the data
import placeHolder from '../assets/team-placeholder.jpg';

const ExecCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-16 py-12">
      {teamMembers.map((member, index) => (
        <div 
          key={index}
          className="relative w-64 h-80 overflow-visible rounded-lg shadow-lg transform transition-transform duration-400 mb-8 bg-gray-900 flex-shrink-0" // Added flex-shrink-0
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)} 
        >
          <div className={`w-full h-full ${hoveredIndex === index ? 'scale-105' : 'scale-100'} transition-transform duration-300`}>
            <img
              src={member.image || placeHolder}
              alt={member.name}
              className="w-full h-full object-cover rounded-lg p-1 bg-red-200"
            />
          </div>
          {hoveredIndex === index && (
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center space-x-4 bg-red-600 bg-opacity-70 text-white text-2xl rounded-lg transition-transform scale-105 duration-300">
              <a href={member.socialLinks.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <FaGithub />
              </a>
              <a href={member.socialLinks.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <FaInstagram />
              </a>
              <a href={member.socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-gray-200">
                <FaLinkedin />
              </a>
            </div>
          )}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white w-56 text-center rounded-md p-2 shadow-lg z-10">
            <p className="text-lg font-bold text-gray-900">{member.name}</p>
            <p className="text-sm text-red-600">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExecCard;
