import React from 'react';

const MobileNav = ({ closeMenu, scrollToSection }) => {
  const handleClick = (e, sectionId) => {
    e.preventDefault();
    closeMenu();
    scrollToSection(sectionId);
  };

  return (
    <div className="px-4 pt-2 pb-3 space-y-1 bg-gray-800 border-t border-gray-700">
      <a
        href="#inicio"
        className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-lime-400 
          hover:bg-gray-700 rounded-md transition-colors"
        onClick={(e) => handleClick(e, 'inicio')}
      >
        Inicio
      </a>
      <a
        href="#servicios"
        className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-lime-400 
          hover:bg-gray-700 rounded-md transition-colors"
        onClick={(e) => handleClick(e, 'servicios')}
      >
        Servicios
      </a>
      <a
        href="#portafolio"
        className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-lime-400 
          hover:bg-gray-700 rounded-md transition-colors"
        onClick={(e) => handleClick(e, 'portafolio')}
      >
        Portafolio
      </a>
      <a
        href="#contacto"
        className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-lime-400 
          hover:bg-gray-700 rounded-md transition-colors"
        onClick={(e) => handleClick(e, 'contacto')}
      >
        Contacto
      </a>
    </div>
  );
};

export default MobileNav;