import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import teamMembers from './data';
import placeholderImage from '../assets/team-placeholder.jpg';

const ExecCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-wrap justify-center gap-12 mt-16 py-12">
      {teamMembers.map((member, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center relative"
          // onMouseEnter={() => setHoveredIndex(index)}
          // onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Outer Card Container - No hover scale */}
          <div className="w-[300px] h-[400px] rounded-lg bg-gradient-to-b from-gray-800 to-black p-4">
            {/* Inner Card with Image and Red Border - Has hover scale */}
            <div className={`w-full h-full rounded-lg relative transition-transform duration-300 ${
              hoveredIndex === index ? 'scale-105' : 'scale-100'
            }`}>
              {/* Red border effect */}
              <div className="absolute inset-0 border-2 border-red-500 rounded-lg"></div>
              
              {/* Image */}
              <img
                // src="./assets/images/Creatives/Anvi_Sarbhai.jpg"
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Hover Overlay with Social Links */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 flex items-center justify-center space-x-6 bg-red-600/70 rounded-lg transition-all duration-300">
                  <a 
                    href={member.socialLinks?.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-gray-200 transform hover:scale-110 transition-all duration-300"
                  >
                    <FaGithub size={28} />
                  </a>
                  <a 
                    href={member.socialLinks?.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-gray-200 transform hover:scale-110 transition-all duration-300"
                  >
                    <FaInstagram size={28} />
                  </a>
                  <a 
                    href={member.socialLinks?.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white hover:text-gray-200 transform hover:scale-110 transition-all duration-300"
                  >
                    <FaLinkedin size={28} />
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Name Banner - Old Style */}
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