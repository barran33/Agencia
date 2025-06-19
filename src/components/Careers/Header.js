import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';
import { Link } from "react-router-dom"; // Asumiendo que Link se usa en otra parte, si no, puedes quitarlo

export default function Header() {
  const images = [
    {
      src: "https://i.ibb.co/m5QH2n5g/tesla369.jpg",
      alt: "Nikola Tesla",
    },
    {
      src: "https://i.ibb.co/fb8rMHM/thoth333.jpg",
      alt: "Thoth3",
    },
    {
      src: "https://c1.wallpaperflare.com/preview/161/528/949/buddha-meditation-relaxation-meditate.jpg", // Buda
      alt: "Buda meditando",
    },
    {
      src: "https://i.ibb.co/MxRs4zjQ/eis3.jpg",
      alt: "Albert Einstein",
    },
    {
      src: "https://i.ibb.co/xqbSFF7C/cosmos.jpg",
      alt: "cosmic",
    },
    {
      src: "https://i.ibb.co/MDPJjxVm/pitagoras33.jpg",
      alt: "cosmic",
    },
  ];

  
  const gridRef = useRef(null);
  const isInViewGrid = useInView(gridRef, { amount: 0.3 });

 
  const textRef = useRef(null);
  const isInViewText = useInView(textRef, { amount: 0.5 }); // Anima cuando el 50% del texto está visible

 
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Variantes para cada imagen individual
  const itemVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.7, rotate: -20 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  // Variantes para el contenedor del texto (para escalonar la aparición del título y párrafos)
  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Retraso entre el título y cada párrafo
      },
    },
  };

 
  const textItemVariants = {
    hidden: { opacity: 0, y: 30 }, // Comienza invisible y ligeramente abajo
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6, // Duración de la animación de cada elemento de texto
        ease: "easeOut",
      },
    },
  };


  return (
    <div className="relative overflow-hidden bg-black">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto lg:mx-12 max-w-full px-4 sm:static sm:px-6 lg:px-8">
          {/* Contenedor Flexbox para el texto y las imágenes en pantallas grandes */}
          <div className="lg:flex lg:items-start lg:gap-x-12">

            {/* Contenido del texto con animación de scroll */}
            <motion.div // Contenedor del texto
              ref={textRef}
              variants={textContainerVariants}
              initial="hidden"
              animate={isInViewText ? "visible" : "hidden"}
              className="sm:max-w-lg lg:w-1/2 lg:flex-shrink-0"
            >
              <motion.h1 // Título
                variants={textItemVariants}
                className="font text-4xl py-9 pt-6 font-bold tracking-tight text-cyan-400 sm:text-6xl"
              >
                Co§mic Imagination Specialists
              </motion.h1>
              <motion.p // Primer párrafo
                variants={textItemVariants}
                className="mt-12 text-xl leading-6 text-gray-300"
              >
                Nuestro equipo multidisciplinario está formado por científicos, ingenieros, expertos en tecnología y profesionales espirituales comprometidos con esta misión. Nos esforzamos por fusionar los principios científicos rigurosos con una comprensión holística y trascendental de la realidad. A través de nuestra investigación, desarrollo de software y colaboraciones, buscamos ofrecer soluciones que beneficien a individuos, comunidades y al entorno natural.
              </motion.p>
              <motion.p // Segundo párrafo
                variants={textItemVariants}
                className="mt-12 text-xl leading-6 text-gray-300"
              >
                Nos esforzamos por desarrollar aplicaciones y software que inspiren a las personas a explorar su potencial interior, a conectarse con su ser esencial y a encontrar un propósito más elevado en su vida. Nuestros productos están diseñados para fomentar la conciencia, la introspección y la conexión con lo sagrado en la era digital. A través de nuestras soluciones tecnológicas, buscamos promover el crecimiento personal, la sanación, la armonía interpersonal y una mayor comprensión de nuestra interdependencia con el cosmos.
              </motion.p>
            </motion.div>

            {/* Cuadrícula de imágenes con animación de scroll */}
            <div className="mt-10 lg:mt-0 lg:w-1/2">
              <motion.div
                ref={gridRef}
                variants={containerVariants}
                initial="hidden"
                animate={isInViewGrid ? "visible" : "hidden"}
                className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-3 xl:gap-6"
              >
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="w-full overflow-hidden rounded-lg shadow-lg"
                  >
                    <div className="aspect-w-3 aspect-h-4">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}