import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const CTA = ({ scrollToSection }) => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Glass-like overlay */}
      <div className="absolute inset-0 backdrop-blur-[120px]">
        <div className="absolute inset-0 bg-gradient-to-tr from-lime-500/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-bl from-lime-500/5 to-transparent" />
      </div>

      {/* Modern geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 w-1/2 h-1/2 bg-lime-500/10 rounded-full blur-3xl transform rotate-12" />
        <div className="absolute -right-1/4 bottom-1/4 w-1/2 h-1/2 bg-lime-500/5 rounded-full blur-3xl transform -rotate-12" />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative">
        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          <span className="text-white">¿Listo para transformar tu</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-500">
            presencia digital?
          </span>
        </h2>
        
        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Hagamos realidad tu proyecto. En Synthesis combinamos diseño y tecnología 
          para crear experiencias digitales excepcionales.
        </p>
        
        <button 
          onClick={() => scrollToSection('contacto')}
          className="group relative inline-flex items-center gap-3 bg-lime-500 
            text-white font-bold py-4 px-8 rounded-lg transition-all duration-300
            hover:bg-lime-400 transform hover:-translate-y-1 
            hover:shadow-[0_0_2rem_0_rgba(132,204,22,0.3)]"
        >
          <span className="text-lg relative z-10">Comencemos</span>
          <FaArrowRight className="relative z-10 transition-transform group-hover:translate-x-1" />
          <div className="absolute inset-0 bg-gradient-to-r from-lime-500 to-lime-400 
            rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </button>
      </div>
    </section>
  );
};

export default CTA;