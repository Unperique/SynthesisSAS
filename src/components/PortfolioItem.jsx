import React from 'react';

const PortfolioItem = ({ title, description, tags, imageSrc }) => (
  <div className="bg-gray-800 rounded-lg shadow-xl overflow-hidden transition-all 
    hover:scale-105 hover:shadow-2xl hover:shadow-lime-500/10 duration-300">
    <div className="relative">
      <img 
        src={imageSrc || "../assets/Logo.jpg"} 
        alt={title}
        className="w-full h-64 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-transparent 
        opacity-0 hover:opacity-100 transition-opacity duration-300 
        flex items-end justify-start p-6">
        <p className="text-gray-200 text-sm transform translate-y-4 
          hover:translate-y-0 transition-transform duration-300">
          {title === "PMU Studio SM" && (
            <a
              href="https://desarrollogroup.online"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lime-500 text-white font-bold py-2 px-4 rounded-lg 
                hover:bg-lime-400 transition-all duration-300 shadow-lg 
                hover:shadow-lime-500/50 transform hover:-translate-y-1"
            >
              Ver proyecto
            </a>
          )}
        </p>
      </div>
    </div>
    
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-100 mb-3">{title}</h2>
      <p className="text-gray-400 mb-4 line-clamp-3">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-sm bg-gray-700 text-lime-400 
              rounded-full font-medium border border-lime-500/20
              hover:bg-gray-600 transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default PortfolioItem;