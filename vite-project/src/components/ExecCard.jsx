import React, { useState } from 'react';
import teamMembers from './data';
import placeholderImage from '../assets/team-placeholder.jpg';

const ExecCard = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex flex-wrap justify-center gap-6 mt-16 py-12">
      {teamMembers.map((member, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center"
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {/* Outer Card Container */}
          <div 
            className={`w-[300px] h-[400px] rounded-lg bg-gradient-to-b from-gray-800 to-black p-4 transition-transform duration-300 ${hoveredIndex === index ? 'scale-105' : 'scale-100'}`}
          >
            {/* Inner Card with Image and Red Border */}
            <div className="w-full h-full rounded-lg relative p-3">
              <div className="absolute inset-0 border  rounded-lg"></div>
              <img
                src={placeholderImage}
                alt={member.name}
                className="w-full h-full object-cover rounded-lg border-red-500"
              />
            </div>
          </div>

          {/* Name Banner - Redesigned */}
          <div className="w-[300px] mt-4 bg-black py-2 px-4 relative">
            
            {/* <div className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-[1.5px] bg-red-600"></div>
            
            <div className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-[1.5px] bg-red-600"></div> */}
            {/* Name text */}
            <h3 className="text-center text-l font-bold text-[#E5DAB9] tracking-[0.2em] relative z-10 font-serif">
              {member.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExecCard;