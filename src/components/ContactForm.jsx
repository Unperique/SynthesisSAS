import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappMessage = `Hola, soy ${formData.nombre}. Mi correo es ${formData.email}. ${formData.mensaje}`;
    const whatsappNumber = '573006157904'; 
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-800">
      <div className="mb-6">
        <label htmlFor="nombre" className="block text-gray-300 font-semibold mb-2">
          Nombre
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 
            text-gray-100 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 
            outline-none transition-colors duration-200 placeholder-gray-500"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 
            text-gray-100 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 
            outline-none transition-colors duration-200 placeholder-gray-500"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="mensaje" className="block text-gray-300 font-semibold mb-2">
          Mensaje
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          rows="4"
          className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 
            text-gray-100 focus:border-lime-500 focus:ring-2 focus:ring-lime-500/20 
            outline-none transition-colors duration-200 resize-none placeholder-gray-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-lime-500 text-white font-bold py-3 px-6 rounded-lg
          hover:bg-lime-600 transition-all duration-300 shadow-lg hover:shadow-lime-500/25
          transform hover:-translate-y-0.5 active:transform-none"
      >
        Enviar mensaje
      </button>
    </form>
  );
};

export default ContactForm;