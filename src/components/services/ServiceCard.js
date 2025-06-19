// ServiceCard.jsx
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { motion } from 'framer-motion'; 

export default function ServiceCard({ data, index }) {
  const [isHovered, setIsHovered] = useState(false);

  // Definimos las variantes para la animación
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, 
        ease: "easeOut", 
        delay: index * 0.1, 
      },
    },
  };

  return (
    <motion.div 
      className="group block w-full max-w-[350px] mx-auto relative aspect-w-3 aspect-h-3 bg-gray-600 hover:bg-gray-900 transition-all duration-300 ease-in-out
                 overflow-hidden rounded-lg shadow-lg transform"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Propiedades de Framer Motion
      variants={cardVariants}
      initial="hidden" // Estado inicial al montar el componente
      whileInView="visible" // Anima a "visible" cuando entra en la vista
      viewport={{  amount: 0.2 }} 
    >
      <Link
        to={data.href}
        className="w-full h-full flex flex-col" 
      >
        {/* Contenedor principal del contenido de la tarjeta, USA LAS CLASES ORIGINALES */}
        <div className="w-full h-full flex flex-col justify-between p-10">
          {/* Contenedor de la imagen/icono del servicio, USA LAS CLASES ORIGINALES */}
          <div className="flex-shrink-0 flex justify-center mt-12 items-center h-1/2">
            <img
              src={data.img}
              alt={data.title || "Icono de servicio"}
              className={`w-24 h-24 object-contain transition duration-300 ease-in-out ${
                isHovered ? 'scale-110' : ''
              }`}
            />
          </div>

          {/* Contenedor para el título y la descripción, USA LAS CLASES ORIGINALES */}
          <div className="flex-grow flex flex-col justify-center text-center">
            <h2
              className={`text-xl font-semibold transition duration-300 ease-in-out ${
                isHovered ? 'text-cyan-400' : 'text-white'
              }`}
            >
              {data.title}
            </h2>
            <p className="text-sm font-light text-gray-50 mt-2">
              {data.description.length > 100
                ? `${data.description.substring(0, 36)}...👀`
                : data.description}
            </p>
          </div>
        </div>

        {/* Sección del botón "Learn More" que aparece al hacer hover */}
        <div
          className={`absolute bottom-0 left-0 w-full text-center py-2 transition-all duration-300 ease-in-out
                      ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`}
        >
          <span className="text-sm font-semibold bg-black text-cyan-400 mt-3 hover:underline">
            Learn More <span aria-hidden="true">&rarr;</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}