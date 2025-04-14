import React from 'react';
import ServiceCard from '../components/ServiceCard';
import { FaDesktop, FaCode, FaMobileAlt } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaDesktop className="w-12 h-12 text-lime-500" />,
      title: "Diseño Web",
      description: "Creamos sitios web modernos y atractivos que capturan la esencia de tu marca.",
    },
    {
      icon: <FaCode className="w-12 h-12 text-lime-500" />,
      title: "Desarrollo Web",
      description: "Desarrollamos aplicaciones web robustas y escalables con las últimas tecnologías.",
    },
    {
      icon: <FaMobileAlt className="w-12 h-12 text-lime-500" />,
      title: "Diseño Responsivo",
      description: "Aseguramos que tu sitio web se vea perfecto en todos los dispositivos.",
    },
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800" />
      
      {/* Subtle glow effects */}
      <div className="absolute -left-24 top-24 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl" />
      <div className="absolute -right-24 bottom-24 w-96 h-96 bg-lime-500/5 rounded-full blur-3xl" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Transformamos ideas en experiencias digitales excepcionales con nuestros servicios especializados.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;