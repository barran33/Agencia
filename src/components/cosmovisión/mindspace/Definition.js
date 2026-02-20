import { motion } from "framer-motion";
import React from 'react';


const mainTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

// Variantes para el subtítulo y descripción (con un pequeño retraso)
const subheadingTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2 // Retraso para que aparezca después del título
        }
    }
};

// Variantes para la imagen principal
const mainImageVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: "easeOut"
        }
    }
};


// Variantes para el contenedor de características (mantener estas para el escalonamiento)
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};


const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0, //
        opacity: 1, // Se vuelve opaco
        transition: {
            type: "spring", // Animación tipo muelle
            stiffness: 100,
            damping: 10
        }
    }
};

const transferFeatures = [
    {
      id: 1,
      name: 'Geometría Sagrada: El Lenguaje Universal de la Creación ',
      description:" La Geometría Sagrada es un antiguo lenguaje simbólico que se encuentra en todas las culturas y tradiciones espirituales del mundo. Se basa en la comprensión de que las formas geométricas tienen una cualidad inherente que trasciende meramente lo físico. Estas formas, como el círculo, el triángulo, la espiral , el mandala o los sólidos platónicos, representan principios universales y arquetipos que se encuentran en todas las dimensiones de la existencia. La Geometría Sagrada nos enseña que la forma y la estructura son fundamentales para comprender la creación. A través de la contemplación y meditación de estos patrones geométricos, podemos acceder a una comprensión más profunda de la interconexión entre todas las cosas y la armonía inherente que subyace en el tejido del universo. La Geometría Sagrada nos invita a reconocer la belleza y la perfección que se manifiestan en el diseño divino de la realidad.",
      icon: 'https://i.ibb.co/BHmSJCc2/metatron-cube3.png', // <-- REEMPLAZA CON LA URL DE TU ICONO DE GEOMETRÍA SAGRADA
    },
    {
      id: 2,
      name: 'Alquimia Occidental',
      description:
        'La Alquimia Occidental es un sistema espiritual y filosófico que busca la transmutación de la materia y el espíritu. En su forma más profunda, la alquimia no se limita a la transformación de los metales en oro, sino que también implica la transmutación del ser humano en su forma más elevada y pura. La alquimia busca la unión de los opuestos y la integración de los aspectos materiales y espirituales de la existencia.La alquimia nos enseña que cada ser humano es un microcosmos que refleja el macrocosmos. A través del trabajo interior y la integración de nuestras polaridades internas, podemos alcanzar un estado de armonía y equilibrio. La alquimia también nos invita a explorar los misterios ocultos de nuestra propia naturaleza y a descubrir nuestro potencial para la autorrealización y la trascendencia.',
      icon:  'https://i.ibb.co/x9gJGpL/alchemy3.png', // <-- REEMPLAZA CON LA URL DE TU ICONO DE ALQUIMIA
    },
    {
      id: 3,
      name: 'Metafísica: La Exploración de lo Trascendental',
      description:
        'La Metafísica se ocupa de los principios y conceptos más allá de la física y la realidad material. Esta disciplina nos invita a explorar las preguntas fundamentales sobre el propósito de la existencia, la naturaleza de la conciencia y la relación entre el ser humano y el universo.',
      icon:  'https://i.ibb.co/PZcDFqQk/book.png', // <-- REEMPLAZA CON LA URL DE TU ICONO DE METAFÍSICA
    },
];


export default function Definition() {
    return (
      <div className="overflow-hidden text-color-cyan-400 py-16 lg:py-24">
        <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <svg
            className="absolute left-full hidden text-cyan-300 -translate-x-1/2 -translate-y-1/4 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-cyan-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
          </svg>

          {/* Sección de Título y Párrafo de Introducción */}
          <div className="relative">
            <motion.h2
              className="text-center text-3xl font-bold leading-8 tracking-tight text-cyan-400 sm:text-4xl"
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.5 }} // Animará cuando el 50% del título esté visible
              variants={mainTextVariants}
            >
            Una nueva perspectiva hacia el mundo espiritual:
            </motion.h2>
            <motion.p
              className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.5 }} // Animará cuando el 50% del párrafo esté visible
              variants={subheadingTextVariants}
            >
            En el camino de búsqueda de significado y trascendencia, diversas tradiciones y disciplinas han surgido, ofreciendo perspectivas únicas sobre la naturaleza de la realidad y el papel del ser humano en el universo. Tres de estas corrientes, la Geometría Sagrada, la Alquimia Occidental y la Metafísica, convergen en una cosmovisión espiritual que abarca tanto lo tangible como lo invisible, lo material y lo etéreo. En este artículo, exploraremos estos tres pilares y cómo se entrelazan para brindar una visión integral y enriquecedora de la existencia humana.
            </motion.p>
          </div>

          {/* Sección de Características (mantienen su animación original al scroll) */}
          <div className="relative">
            <motion.dl
                className="mt-10 space-y-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }} // Se anima solo una vez, cuando el 30% del elemento está en vista
                variants={containerVariants}
            >
                {transferFeatures.map((item) => (
                  <motion.div key={item.id} className="relative" variants={itemVariants}>
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-cyan-500 text-white">
                        {/* AQUÍ ES DONDE CAMBIAMOS EL ICONO POR UNA IMAGEN */}
                        <img src={item.icon} alt={item.name} className="h-10 w-10" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-cyan-400">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-300">{item.description}</dd>
                  </motion.div>
                ))}
            </motion.dl>
          </div>

          {/* Sección de la Imagen Principal (ahora con animación) */}
          <motion.div
            className="relative -mx-4 mt-10 lg:mt-0"
            aria-hidden="true"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // Animará cuando el 50% de la imagen esté visible
            variants={mainImageVariants}
          >
            {/* El SVG de fondo de la imagen se mantiene igual */}
            <svg
              className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
              width={784}
              height={404}
              fill="none"
              viewBox="0 0 784 404"
            >
              <defs>
                <pattern
                  id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-cyan-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
            </svg>
            <img
              className="relative mx-auto mt-12"
              width={490}
              src="https://i.ibb.co/dwGj8ns8/3030.jpg"
              alt="Imagen representativa de cerebro y conocimiento" // Mejorado alt text
            />
          </motion.div>
        </div> {/* Cierra el div con relative mx-auto max-w-xl ... */}

        {/* El SVG de fondo a la derecha se mantiene igual */}
        <svg
          className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
          width={404}
          height={784}
          fill="none"
          viewBox="0 0 404 784"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
              x={0}
              y={0}
              width={20}
              height={20}
              patternUnits="userSpaceOnUse"
            >
              <rect x={0} y={0} width={4} height={4} className="text-cyan-300" fill="currentColor" />
            </pattern>
          </defs>
          <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
        </svg>
      </div>
    );
}