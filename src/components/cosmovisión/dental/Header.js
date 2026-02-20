import { motion } from "framer-motion";
import React from 'react';

// --- Variantes de Animación (sin cambios, las mantenemos igual) ---
const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const imageGridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Esto hará que las imágenes hijas aparezcan escalonadamente
      delayChildren: 0.8 // Retraso antes de que los hijos comiencen a animarse
    }
  }
};

const imageItemVariants = {
  hidden: { opacity: 0, scale: 0.7, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  }
};

export default function Header() {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto lg:mx-12 max-w-full px-4 sm:px-6 lg:px-8
                        lg:flex lg:items-center lg:justify-between lg:gap-x-12">

          {/* Bloque de Texto */}
          <div className="sm:max-w-lg lg:w-1/2 lg:flex-shrink-0 lg:pr-8">
            <motion.h1
              className="font text-4xl py-9 pt-6 font-bold tracking-tight text-cyan-500 sm:text-6xl"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
             Co§movisión Universal
            </motion.h1>
              <motion.h2
                className="mt-15 text-2xl leading-6 text-gray-300"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ delay: 0.3, ...textVariants.visible.transition }}
              >
              La Integración del Conocimiento Científico y Espiritual para el Bienestar del Cosmos
              </motion.h2>
          </div>

          {/* BLOQUE DE IMÁGENES */}
          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:flex lg:justify-start lg:items-center">
            <div
              aria-hidden="true"
              className="pointer-events-none w-full"
            >
              <motion.div
                className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 lg:gap-x-16"
                initial="hidden"
                whileInView="visible"
                viewport={{  amount: 0.5 }}
                variants={imageGridContainerVariants}
              >
                {/* Primer contenedor de imagen */}
                <motion.div
                  className="relative rounded-lg flex-shrink-0"
                  variants={imageItemVariants}
                >
                    {/* *** IMAGEN CON EFECTO DE CLIC *** */}
                    <motion.img // Cambiado de <img> a <motion.img>              
                      src="https://i.ibb.co/d4y1twky/vision6.jpg"
                      alt="Universo con energía" // Mejorado el texto alternativo
                      className="block w-full h-auto object-contain rounded-lg cursor-pointer
                                 max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[380px]"
                      whileTap={{ scale: 0.9, y: 10, rotate: 5 }} // Efecto: Escala a 90%, se mueve 10px hacia abajo, rota 5 grados
                      transition={{ type: "spring", stiffness: 300, damping: 15 }} // Transición tipo muelle para el clic
                    />
                  </motion.div>

                  {/* Segundo contenedor de imagen */}
                  <motion.div
                    className="relative rounded-lg flex-shrink-0"
                    variants={imageItemVariants}
                  >
                    {/* *** IMAGEN CON EFECTO DE CLIC *** */}
                    <motion.img // Cambiado de <img> a <motion.img>
                      src="https://i.ibb.co/RG1t30ws/vision3.jpg"                     
                      alt="Espiritualidad y cosmos" // Mejorado el texto alternativo
                      className="block w-full h-auto object-contain rounded-lg cursor-pointer
                                 max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[380px]"
                      whileTap={{ scale: 0.9, y: 10, rotate: -5 }} // Efecto similar pero rotación opuesta
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}