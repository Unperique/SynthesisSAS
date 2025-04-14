import React from 'react';
import PortfolioItem from '../components/PortfolioItem';

const PMUstudio = new URL('../assets/PMUstudio.png', import.meta.url).href;
const UTPcorporate = new URL('../assets/UTPcorporate.jpg', import.meta.url).href;

const Portfolio = () => {
  const projects = [
    {
      title: "PMU Studio SM",
      description: "Sitio web responsivo con sistema de reservas online y menú digital, Api de Google Maps.",
      tags: ["Web Design", "React", "UX/UI"],
      imageSrc: PMUstudio
    },
    {
      title: "UTP Corporate Doctorado",
      description: "Sistema de infomación para el programa de doctorado de la UTP, con reportes y gestión del organo administrativo.",
      tags: ["Private Web", "PostgreSQL", "Laravel"],
      imageSrc: UTPcorporate
    }
  ];

  return (
    <section id="portafolio" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full" 
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(132, 204, 22, 0.15) 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Nuestro Portafolio
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explora algunos de nuestros proyectos más destacados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <PortfolioItem key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;