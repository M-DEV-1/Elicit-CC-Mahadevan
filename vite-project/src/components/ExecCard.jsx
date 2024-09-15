// src/components/ProfileCard.js
import React, { useState } from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import TeamImg from '../assets/team-placeholder.jpg';

const ProfileCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex mt-5 relative w-64 h-80 mx-auto overflow-hidden rounded-lg shadow-lg bg-off-white transform transition-transform duration-400"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundColor: '#f9f6f4' }} // Off-white color
    >
      <div>
        <img
          src={TeamImg}
          className={`w-full h-full object-cover ${isHovered ? 'scale-105' : 'scale-100'} transition-transform duration-300`}
        />
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white text-center rounded-md p-2">
        <p className="text-lg font-bold">Cody Fisher</p>
        <p className="text-sm">Founder</p>
      </div>
      
      {isHovered && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center space-x-4 bg-black bg-opacity-50 text-white text-2xl">
          <a href="#" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="#" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="#" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
        </div>
      )}
    </div>
  );
}

export default ProfileCard;
