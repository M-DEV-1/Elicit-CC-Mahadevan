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
            className="relative w-64 h-80 overflow-visible rounded-lg shadow-lg bg-off-white transform transition-transform duration-400 mb-8" // Add margin-bottom here
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ backgroundColor: '#f9f6f4' }} // Off-white color
          >
            <div className={`w-full h-full ${isHovered ? 'scale-105' : 'scale-100'} transition-transform duration-300`}>
              <img
                // Use placeholder or member image
                src={member.image || placeHolder}
                alt={member.name}
                className="w-full h-full object-cover rounded-lg" // Add the rounded-lg class here
              />
            </div>
            {isHovered && (
              <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center space-x-4 bg-black bg-opacity-50 text-white text-2xl">
                <a href={member.socialLinks.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href={member.socialLinks.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </a>
                <a href={member.socialLinks.linkedin} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
              </div>
            )}
            {/* Adjust this block */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white w-56 text-center rounded-md p-2 shadow-lg z-10">
              <p className="text-lg font-bold">{member.name}</p>
              <p className="text-sm">{member.role}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ExecCard;
