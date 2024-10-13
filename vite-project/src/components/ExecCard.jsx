import React from 'react';
import teamMembers from './data';

const ExecCard = () => {
  // Group team members by committee
  const groupedMembers = teamMembers.reduce((acc, member) => { //accumulator
    if (!acc[member.committee]) {
      acc[member.committee] = []; // initialize an array for this committee if it doesn't exist
    }
    acc[member.committee].push(member); // add the current member to the committee array
    return acc;
  }, {});

  return (
    <div className="flex flex-col items-center gap-16 mt-16 py-12">
      {Object.entries(groupedMembers).map(([committee, members]) => (
        <div key={committee} className="w-full">
          {/* Committee Banner */}
          <div className="bg-gradient-to-r from-blue-200 to-white w-64 md:w-[350px] max-w-md mx-auto text-center rounded-md p-6 shadow-lg z-10 mb-12">
            <p className="text-3xl font-bold text-gray-900">{committee}</p>
          </div>

          {/* Member Cards */}
          <div className="flex flex-wrap justify-center gap-12">
            {members.map((member, index) => (
              <div key={index} className="flex flex-col items-center relative">
                {/* Outer Card Container */}
                <div className="w-[300px] h-[400px] rounded-lg bg-gradient-to-b from-gray-800 to-black p-4">
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
        </div>
      ))}
    </div>
  );
}

export default ExecCard;