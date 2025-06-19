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

const subheadingTextVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut",
            delay: 0.2
        }
    }
};

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
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

const transferFeatures = [
    {
      id: 1,
      name: 'Física cuántica: La danza de las partículas ',
      description:" La física cuántica se ocupa del estudio de las partículas subatómicas y sus comportamientos. A nivel cuántico, las partículas no se comportan como objetos sólidos y predecibles, sino más bien como ondas de probabilidad que existen en múltiples estados simultáneamente. El principio de superposición nos dice que una partícula puede estar en varios lugares o estados al mismo tiempo hasta que se realice una medición. La física cuántica también nos muestra que la mera observación de una partícula afecta su estado. El famoso experimento de la doble rendija revela que una partícula puede comportarse como  partícula o como onda dependiendo de si se observa o no. Esto implica que la conciencia del observador está intrínsecamente relacionada con la manifestación de la realidad física. ",
      // CAMBIO AQUÍ: Reemplazado SparklesIcon por la URL de una imagen
      icon: 'https://i.ibb.co/rRJJFGQD/quatum3.png', // URL de ejemplo, ¡cámbiala por la tuya!
    },
    {
      id: 2,
      name: 'Cimática: La geometría del sonido y la forma',
      description:
        'La cimática es el estudio de los patrones vibracionales y la forma que se generan a través de la interacción del sonido con la materia. Al someter un medio, como arena o líquido, a diferentes frecuencias de sonido, se pueden observar patrones geométricos fascinantes que surgen en la superficie. Estos patrones cimáticos demuestran cómo el sonido, una forma de energía vibracional, tiene la capacidad de organizar y estructurar la materia. Desde la disposición de los átomos en una molécula hasta la configuración de los sistemas planetarios, los patrones vibracionales subyacen a la estructura y la armonía del universo. ',
      // CAMBIO AQUÍ: Reemplazado SignalIcon por la URL de una imagen
      icon:  'https://i.ibb.co/XPh0p36/sound3.png', // URL de ejemplo, ¡cámbiala por la tuya!
    },
    {
      id: 3,
      name: 'Psicología transpersonal: Explorando la conciencia más allá de los límites convencionales',
      description:
        'La psicología transpersonal se enfoca en la dimensión espiritual y trascendental de la experiencia humana. Va más allá de los límites de la mente individual y explora la conciencia como una entidad interconectada y universal. La psicología transpersonal reconoce la existencia de estados de conciencia expandidos y la posibilidad de trascender la identidad egoica para acceder a niveles más profundos de la experiencia.',
      // CAMBIO AQUÍ: Reemplazado EyeIcon por la URL de una imagen
      icon:  'https://i.ibb.co/qLTwghDL/scbook3.png', // URL de ejemplo, ¡cámbiala por la tuya!
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
              viewport={{  amount: 0.5 }}
              variants={mainTextVariants}
            >
            Una nueva cosmovisión científica:
            </motion.h2>
            <motion.p
              className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.5 }}
              variants={subheadingTextVariants}
            >
            La física cuántica, la cimática y la psicología transpersonal son disciplinas que han revolucionado nuestra comprensión del mundo físico y de la experiencia humana. A medida que exploramos los fenómenos a nivel microscópico, desde las partículas subatómicas hasta los patrones vibracionales de la materia, y expandimos nuestra comprensión de la conciencia y la espiritualidad, nos encontramos con una cosmovisión científica emergente que desafía las ideas tradicionales y nos invita a considerar la interconexión de todas las cosas.
            En este artículo, exploraremos los conceptos clave de estas tres disciplinas y cómo se entrelazan para formar una cosmovisión científica basada en la interdependencia y la unidad fundamental de la realidad.
            </motion.p>
          </div>

          {/* Sección de Características */}
          <div className="relative">
            <motion.dl
                className="mt-10 space-y-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={containerVariants}
            >
                {transferFeatures.map((item) => (
                  <motion.div key={item.id} className="relative" variants={itemVariants}>
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-cyan-500 text-white">
                        {/* CAMBIO AQUÍ: Usamos <img> en lugar del componente de icono */}
                        <img src={item.icon} alt={item.name} className="h-10 w-10" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-cyan-400">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-300">{item.description}</dd>
                  </motion.div>
                ))}
            </motion.dl>
          </div>

          {/* Sección de la Imagen Principal */}
          <motion.div
            className="relative -mx-4 mt-10 lg:mt-0"
            aria-hidden="true"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
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
              src="https://i.ibb.co/Wp6PZBSh/cerebro369.jpg"
              alt="Imagen representativa de cerebro y conocimiento"
            />
          </motion.div>
        </div>

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