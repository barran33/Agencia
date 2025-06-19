import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const files = [
  {
    title: 'Conoce el unniverso',
    size: '',
    source: 'https://i.ibb.co/8DVShzKx/IMG-363.jpg', // URL corregida
  },
  {
    title: 'Explora el cosmos',
    size: '',
    source: 'https://i.ibb.co/yBKg6C4Y/cosmos3.jpg', // URL corregida
  },
  {
    title: 'Descubre el infinito',
    size: '',
    source: 'https://i.ibb.co/21HtWjS1/IMG-2882.jpg', // URL corregida
  },
  // Puedes añadir más imágenes aquí
];

// Variantes de animación para el contenedor de la cuadrícula
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Retraso entre la animación de cada imagen
      delayChildren: 0.2 // Retraso antes de que empiece la animación de la primera imagen
    },
  },
};

// Variantes de animación para cada elemento de la imagen (li)
const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export default function ImgGrid() {
  const ref = useRef(null);
  // Anima cuando el 20% del componente está visible, y solo una vez
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.ul
      role="list"
      ref={ref} // Asigna la referencia al elemento ul
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'} // Dispara la animación cuando está en vista
    >
      {files.map((file) => (
        <motion.li // Cada elemento de la lista es ahora un motion.li
          key={file.source}
          className="relative"
          variants={itemVariants} // Aplica las variantes de animación al elemento li
        >
          <div className="group block w-full overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <div className="aspect-w-16 aspect-h-9 sm:aspect-w-4 sm:aspect-h-3 lg:aspect-w-16 lg:aspect-h-9">
              <img
                src={file.source}
                alt=""
                className="pointer-events-none object-contain h-full w-full group-hover:opacity-75"
              />
            </div>
            <button type="button" className="absolute inset-0 focus:outline-none">
              <span className="sr-only">Ver detalles de {file.title}</span>
            </button>
          </div>
          <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-300">{file.title}</p>
          <p className="pointer-events-none block text-sm font-medium text-gray-500">{file.size}</p>
        </motion.li>
      ))}
    </motion.ul>
  );
}