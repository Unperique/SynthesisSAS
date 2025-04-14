import React from 'react';
import { FaInstagram, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contacto" className="py-16 bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Contáctanos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl 
            border border-gray-700/50 hover:border-gray-600/50 transition-colors">
            <ContactForm />
          </div>
          
          {/* Contact Info */}
          <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl shadow-xl 
            border border-gray-700/50 hover:border-gray-600/50 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-6">
              Información de contacto
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="bg-gray-700/50 p-2 rounded-lg">
                  <FaEnvelope className="text-lime-400 text-xl" />
                </div>
                <span className="text-gray-300">
                  <a href="mailto:info@synthesis.com" 
                     className="hover:text-lime-400 transition-colors">
                    synthesis@gmail.com
                  </a>
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-gray-700/50 p-2 rounded-lg">
                  <FaWhatsapp className="text-lime-400 text-xl" />
                </div>
                <span className="text-gray-300">
                  <a href="tel:+573006157904" 
                     className="hover:text-lime-400 transition-colors">
                    +57 300 6157904
                  </a>
                </span>
              </div>

              <div className="flex items-center space-x-3">
                <div className="bg-gray-700/50 p-2 rounded-lg">
                  <FaWhatsapp className="text-lime-400 text-xl" />
                </div>
                <span className="text-gray-300">
                  <a href="tel:+573145780636" 
                     className="hover:text-lime-400 transition-colors">
                    +57 314 5780636
                  </a>
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-gray-700/50 p-2 rounded-lg">
                  <FaInstagram className="text-lime-400 text-xl" />
                </div>
                <span className="text-gray-300">
                  <a href="https://instagram.com/synthesis" 
                     className="hover:text-lime-400 transition-colors">
                    @synthesis
                  </a>
                </span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white mb-4">
                Síguenos
              </h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/synthesis"
                  rel="noopener noreferrer"
                  className="bg-gray-700/50 p-3 rounded-lg text-gray-300 
                    hover:bg-gray-600/50 hover:text-lime-400 
                    transition-all duration-300"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="https://wa.me/573006157904"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700/50 p-3 rounded-lg text-gray-300 
                    hover:bg-gray-600/50 hover:text-lime-400 
                    transition-all duration-300"
                >
                  <FaWhatsapp size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;