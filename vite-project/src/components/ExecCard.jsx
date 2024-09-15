// src/components/ExecCard.jsx
import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import teamMembers from './data'; // Importing the data
import placeHolder from '../assets/team-placeholder.jpg';

const ExecCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-5">
      {teamMembers.map((member, index) => {
        // We can't use useState directly inside map, we need to manage it differently
        const [isHovered, setIsHovered] = useState(false);

        return (
          <div 
            key={index}
            className="relative w-64 h-80 overflow-visible rounded-lg shadow-lg transform transition-transform duration-400 mb-8 bg-gray-900" // Changed the background to a shade of black
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)} 
          >
            <div className={`w-full h-full ${isHovered ? 'scale-105' : 'scale-100'} transition-transform duration-300 over`}>
              <img
                // Use placeholder or member image
                src={member.image || placeHolder}
                alt={member.name}
                className="w-full h-full object-cover rounded-lg p-1 bg-red-200"
              />
            </div>
            {isHovered && (
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
            {/* Adjust this block */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white w-56 text-center rounded-md p-2 shadow-lg z-10">
              <p className="text-lg font-bold text-gray-900">{member.name}</p> {/* Black text */}
              <p className="text-sm text-red-600">{member.role}</p> {/* Red text */}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ExecCard;
