import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Información de contacto
            </h3>
            <div className="space-y-4">
              <p className="text-gray-400 flex items-center gap-3 hover:text-lime-400 transition-colors">
                <FaEnvelope className="text-lime-500" />
                <a href="mailto:info@synthesis.com">synthesis@gmail.com</a>
              </p>
              <p className="text-gray-400 flex items-center gap-3 hover:text-lime-400 transition-colors">
                <FaPhone className="text-lime-500" />
                <a href="tel:+573145780636">+57 314 5780636</a>
              </p>
              <p className="text-gray-400 flex items-center gap-3 hover:text-lime-400 transition-colors">
                <FaPhone className="text-lime-500" />
                <a href="tel:+573006157904">+57 300 6157904</a>
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              Síguenos
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/synthesis" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-lime-400 
                  hover:bg-gray-700 transition-all duration-300"
              >
                <FaInstagram size={24} />
              </a>
              <a 
                href="https://wa.me/573006157904" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-800 p-3 rounded-lg text-gray-400 hover:text-lime-400 
                  hover:bg-gray-700 transition-all duration-300"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center lg:text-right">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Synthesis
              <br className="hidden lg:block" />
              <span className="text-gray-500">Todos los derechos reservados.</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;