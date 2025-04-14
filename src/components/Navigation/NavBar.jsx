import React, { useState } from 'react';
import NavItem from './NavItem';
import MobileNav from './MobileNav';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../assets/Logo.jpg';

const NavBar = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoClick = (e) => {
    e.preventDefault();
    scrollToSection('inicio');
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-lg z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" onClick={handleLogoClick} className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Synthesis Logo" 
                className="h-8 w-auto"
              />
              <span className="text-lime-400 font-bold text-xl">
                Synthesis
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <NavItem 
              link="#inicio" 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-300 hover:text-lime-400 transition-colors"
            >
              Inicio
            </NavItem>
            <NavItem 
              link="#servicios" 
              onClick={() => scrollToSection('servicios')}
              className="text-gray-300 hover:text-lime-400 transition-colors"
            >
              Servicios
            </NavItem>
            <NavItem 
              link="#portafolio" 
              onClick={() => scrollToSection('portafolio')}
              className="text-gray-300 hover:text-lime-400 transition-colors"
            >
              Portafolio
            </NavItem>
            <NavItem 
              link="#contacto" 
              onClick={() => scrollToSection('contacto')}
              className="text-gray-300 hover:text-lime-400 transition-colors"
            >
              Contacto
            </NavItem>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-400 hover:text-lime-400 p-2 transition-colors"
              onClick={toggleMenu}
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <MobileNav closeMenu={closeMenu} scrollToSection={scrollToSection} />
        </div>
      )}
    </nav>
  );
};

export default NavBar;