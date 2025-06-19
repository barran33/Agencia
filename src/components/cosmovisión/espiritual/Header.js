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

// --- Componente Header ---

export default function Header() {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        {/* Contenedor principal que ahora será un flexbox en pantallas grandes */}
        {/* CLAVE: Usamos lg:flex (que es flex-row por defecto) y colocamos el texto primero en el JSX */}
        <div className="relative mx-auto lg:mx-12 max-w-full px-4 sm:px-6 lg:px-8
                        lg:flex lg:items-center lg:justify-between lg:gap-x-12">

          {/* Bloque de Texto: Estará a la izquierda en pantallas grandes (orden normal de flex-row) */}
          <div className="sm:max-w-lg lg:w-1/2 lg:flex-shrink-0 lg:pr-8">
            <motion.h1
              className="font text-4xl py-9 pt-6 font-bold tracking-tight text-cyan-500 sm:text-6xl"
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
             Co§movisión Espiritual
            </motion.h1>
              <motion.h2
                className="mt-15 text-2xl leading-6 text-gray-300"
                initial="hidden"
                animate="visible"
                variants={textVariants}
                transition={{ delay: 0.3, ...textVariants.visible.transition }}
              >
              Un Enfoque Integrador de la Geometría Sagrada, la Alquimia Occidental y la Metafísica:
              </motion.h2>
          </div>

          {/* BLOQUE DE IMÁGENES: Estará a la derecha en pantallas grandes */}
          <div className="mt-10 lg:mt-0 lg:w-1/2 lg:flex lg:justify-start lg:items-center">
            <div
              aria-hidden="true"
              className="pointer-events-none w-full"
            >
              {/*
                motion.div para la animación del grupo de imágenes
                CLAVE PARA EL EFECTO SCROLL:
                - `whileInView="visible"`: Cambia el estado a "visible" cuando el elemento entra en la vista.
                - `viewport={{ once: true, amount: 0.5 }}`: Configura cuándo se activa la animación.
              */}
              <motion.div
                className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6 lg:gap-x-16"
                initial="hidden"
                whileInView="visible" // <-- Activa la animación al entrar en la vista
                viewport={{  amount: 0.5 }} // <-- Configuración del viewport
                variants={imageGridContainerVariants}
              >
                {/* Primer contenedor de imagen */}
                <motion.div
                  className="relative rounded-lg flex-shrink-0"
                  variants={imageItemVariants }
                 
                >
                    <img
                      src="https://i.ibb.co/DP735CPf/IMG-36.jpg"
                      
                      alt=""
                      className="block w-full h-auto object-contain rounded-lg
                                 max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[380px]"
                    />
                  </motion.div>

                  {/* Segundo contenedor de imagen */}
                  <motion.div
                    className="relative rounded-lg flex-shrink-0"
                    variants={imageItemVariants}
                  >
                    <img
                      src="https://i.ibb.co/5gV7W24C/Im369.jpg"
                      alt=""
                      className="block w-full h-auto object-contain rounded-lg
                                 max-w-[180px] sm:max-w-[220px] md:max-w-[280px] lg:max-w-[320px] xl:max-w-[380px]"
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