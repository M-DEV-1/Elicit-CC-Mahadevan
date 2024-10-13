import React from 'react';
import teamMembers from './data';
import placeholderImage from '../assets/team-placeholder.jpg';

const ExecCard = () => {
  return (
    <div className="flex flex-wrap justify-center gap-12 mt-16 py-12">
      {teamMembers.map((member, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center relative"
        >
          {/* Outer Card Container */}
          <div className="w-[250px] h-[350px] rounded-lg bg-gradient-to-b from-gray-800 to-black p-4">
            {/* Inner Card with Image and Red Border */}
            <div className="w-full h-full rounded-lg relative">
              {/* Red border effect */}
              <div className="absolute inset-0 border-2 border-red-500 rounded-lg"></div>
              
              {/* Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Name Banner */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white w-48 text-center rounded-md p-2 shadow-lg z-10">
            <p className="text-lg font-bold text-gray-900">{member.name}</p>
            <p className="text-sm text-red-600">{member.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExecCard;
