import React from 'react';

const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700
      hover:shadow-xl hover:shadow-lime-500/10 hover:border-lime-500/20 
      transition-all duration-300">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 text-lime-500 transform transition-transform 
          duration-300 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-100 mb-2">
          {title}
        </h3>
        <p className="text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;