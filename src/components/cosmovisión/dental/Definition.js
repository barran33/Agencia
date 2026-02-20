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
      name: 'Punto de vista ',
      description:" La Cosmovisión Universal reconoce que tanto la ciencia como la espiritualidad son caminos válidos hacia la comprensión de la realidad. La ciencia nos ofrece un marco basado en la observación, la experimentación y la lógica, mientras que la espiritualidad se basa en la experiencia subjetiva, la conexión con lo trascendente y la exploración de la conciencia. Ambos enfoques tienen sus propias fortalezas y limitaciones, pero juntos pueden proporcionar una visión más completa y enriquecedora de la existencia.",
      icon: 'https://i.ibb.co/6cy6XcZX/eye3.png',
    },

    {
      id: 2,
      name: 'Perspectivas',
      description:
        'Desde la perspectiva científica, hemos logrado grandes avances en la comprensión de las leyes naturales, el funcionamiento del universo y la interconexión de todas las cosas. La cosmología, la física cuántica, la biología y muchas otras disciplinas científicas nos han revelado la intrincada red de relaciones y procesos que sustentan la realidad. Estos conocimientos científicos nos permiten apreciar la belleza y la complejidad del cosmos, así como reconocer nuestro papel como seres interdependientes en el tejido de la existencia. Por otro lado, la espiritualidad nos ofrece una visión holística y trascendente de la realidad. A través de prácticas como la meditación, la introspección y la conexión con lo sagrado, podemos explorar nuestra naturaleza esencial y nuestra relación con algo más grande que nosotros mismos. La espiritualidad nos brinda un sentido de propósito, conexión y trascendencia, y nos ayuda a cultivar valores como el amor, la compasión y la sabiduría en nuestra vida cotidiana.',
      icon:  'https://i.ibb.co/x9gJGpL/alchemy3.png', // <-- REEMPLAZA CON LA URL DE TU ICONO DE ALQUIMIA
    },
    {
      id: 3,
      name: 'Proposito',
      description:
        'La Cosmovisión Universal busca integrar estos dos enfoques complementarios para lograr una visión más completa y enriquecedora del cosmos. Reconoce que la realidad es multidimensional y que existen niveles de existencia que trascienden nuestra comprensión científica actual. Al mismo tiempo, valora el conocimiento científico como una herramienta poderosa para explorar y comprender el funcionamiento del universo. Reconocemos que el bienestar del cosmos está intrínsecamente vinculado a nuestra propia evolución y transformación. Como seres conscientes, tenemos la capacidad de impactar y ser impactados por el cosmos en su totalidad. Nuestras acciones, pensamientos y emociones causan efectos a través de la red interconectada de la existencia, influyendo en el bienestar del mundo que nos rodea.',
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
            Imaginación Co§mica:
            </motion.h2>
            <motion.p
              className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-300"
              initial="hidden"
              whileInView="visible"
              viewport={{  amount: 0.5 }} // Animará cuando el 50% del párrafo esté visible
              variants={subheadingTextVariants}
            >
            En el vasto espectro del conocimiento humano, tanto el científico como el espiritual han desempeñado roles importantes en la búsqueda de respuestas y significado. Sin embargo, estos dos enfoques a menudo se han considerado opuestos o incluso irreconciliables. La Cosmovisión Universal es un intento de unificar y sintetizar el conocimiento científico y espiritual en un todo coherente que busca mejorar el bienestar del cosmos en su totalidad.


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
              src="https://i.ibb.co/YKLGD0C/mg6.jpg"
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