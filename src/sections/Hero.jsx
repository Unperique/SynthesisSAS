import React from 'react';
import bgImage from '../assets/Fondo.png';

const Hero = ({ scrollToSection }) => {
  if (typeof scrollToSection !== 'function') {
    console.error('scrollToSection prop must be a function');
    scrollToSection = () => {};
  }

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Background with overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          filter: 'brightness(0.9)',
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/40" />

      {/* Content */}
      <div className="relative min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center md:text-left md:max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Soluciones digitales
              <span className="block text-lime-400">creativas para tu negocio</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-12 max-w-2xl leading-relaxed">
              Transformamos ideas en experiencias digitales extraordinarias con diseño 
              y desarrollo web de alta calidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start">
              <button 
                onClick={() => scrollToSection('contacto')}
                className="bg-lime-500 hover:bg-lime-400 text-white font-bold 
                  py-4 px-8 rounded-lg transition-all duration-300 shadow-lg 
                  hover:shadow-lime-500/50 transform hover:-translate-y-1"
              >
                Contáctanos
              </button>
              
              <button 
                onClick={() => scrollToSection('portafolio')}
                className="border-2 border-lime-500 text-lime-400 
                  hover:bg-lime-500 hover:text-white font-bold py-4 px-8 
                  rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                Ver portafolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;