import { CheckIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion'; // Importa motion

// --- Variantes de Animación ---

// Variantes para el contenedor principal de la sección (título y párrafo)
const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Retraso de 0.1s entre la aparición del título y el párrafo
      delayChildren: 0.1 // Opcional: Retraso inicial para toda la sección
    }
  }
};

// Variantes para el título h2
const h2Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

// Variantes para el párrafo principal
const pVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

// Variantes para el contenedor de todas las frases (dl)
const phrasesGridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, // Retraso de 0.15s entre cada frase
      delayChildren: 0.3 // Opcional: Retraso antes de que las frases empiecen a aparecer
    }
  }
};

// Variantes para cada frase individual (div con dt y dd)
const phraseItemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15
    }
  }
};


const features = [
  {
    name: 'Nikola Tesla',
    description: ' «Si lo que quieres es encontrar los secretos del universo, piensa en términos de energía, frecuencia y vibración»',
  },
  {
    name: 'Max Planck',
    description: '«Toda la materia se origina y existe sólo por la virtud de una fuerza. Debemos asumir que detrás de esta fuerza existe una mente consciente e inteligente. Esta mente es la matriz de toda la materia»',
  },
  {
    name: 'Carl G. Jung',
    description: '«La Naturaleza, la psique y la vida me parecen la divinidad Desplegada» ',
  },
  {
    name: 'Pitágoras',
    description: '«Hay Geometría en el zumbido de las cuerdas, hay música en la separación de las esferas»',
  },
  {
    name: 'Richard Feynman',
    description: '«El primer principio es que no debes engañarte a ti mismo y eres la persona más fácil de engañar. Una vez que no te engañas a ti mismo, es fácil que no engañes a los otros científicos.»',
  },
  {
    name: 'Erwin Schrodinger',
    description: '«Tanto física cuántica revela una unidad básica del universo. La Obra más fina es la creada por Dios, Según los principios de la Fisíca cuántica»',
  },
]

export default function Solution() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:py-24 lg:px-8"> {/* max-w-1700 cambiado a max-w-7xl para ser más estándar de Tailwind */}
        {/* Contenedor del Título y Párrafo - Animará toda la sección de cabecera */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.4 }} // Animará cuando el 40% de esta sección esté visible
          variants={sectionContainerVariants}
        >
          <motion.h2
            className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl" // Texto blanco para contraste con fondo negro
            variants={h2Variants} // Aplica las variantes para h2
          >
            Frases
          </motion.h2>
          <motion.p
            className="mt-4 text-lg text-gray-400" // Texto gris más claro para contraste
            variants={pVariants} // Aplica las variantes para el párrafo
          >
            {/* Aquí puedes añadir un párrafo introductorio si lo deseas */}
            Descubre las profundas reflexiones de mentes brillantes que han explorado la naturaleza de la realidad y la conciencia.
          </motion.p>
        </motion.div>

        {/* Contenedor de las Frases - Animará la cuadrícula de frases */}
        <motion.dl
          className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8"
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.2 }} // Animará cuando el 20% de la cuadrícula esté visible
          variants={phrasesGridContainerVariants} // Aplica las variantes para el contenedor de la cuadrícula
        >
          {features.map((feature) => (
            // Cada frase individual - Animará cada item
            <motion.div key={feature.name} className="relative" variants={phraseItemVariants}>
              <dt>
                {/* Nota: CheckIcon con absolute podría necesitar ajuste si el layout se vuelve complejo.
                           Asegúrate de que no se superponga con el texto. */}
                <CheckIcon className="absolute h-6 w-6 text-cyan-400" aria-hidden="true" /> {/* Color ajustado */}
                <p className="ml-9 text-lg font-medium leading-6 text-cyan-400">{feature.name}</p> {/* Texto blanco */}
              </dt>
              <dd className="mt-2 ml-9 text-base text-gray-300">{feature.description}</dd> {/* Texto gris más claro */}
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </div>
  )
}