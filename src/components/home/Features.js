import { CheckIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion"; // Importa motion
import React from 'react'; // Asegúrate de importar React

const features = [
  {
    name: 'Cosmic',
    description:"En Cosmic Imagination, trascendemos la programación convencional. Creamos software con alma, integrando principios científicos y espirituales para un impacto duradero.",},
  { name: 'Cosmic', description: "Donde la imaginación cósmica se materializa en tecnología de vanguardia. Así es Cosmic Imagination." },
  {
    name: 'Cosmic',
    description: 'Cosmic Imagination: Creando el futuro del software con conciencia y propósito.',},
  { name: 'Cosmic', description: 'Soluciones digitales que inspiran y transforman. Software con una dimensión más profunda."' },
  { name: 'Cosmic', description: "Cosmic Imagination: Innovación en software, arraigada en la ciencia y elevada por la espiritualidad." },
  { name: 'Cosmic', description: "Desarrollamos soluciones de software innovadoras, impulsadas por la lógica de la ciencia y la inspiración de la espiritualidad. Cosmic Imagination: Diseñando el futuro digital." },
  { name: 'Cosmic', description: "Creamos software con una esencia única. Cosmic Imagination: Tecnología innovadora, con alma." },
  { name: 'Cosmic', description: "Donde la imaginación cósmica se materializa en tecnología de Vanguardia." },
];

// Define las variantes de animación fuera del componente Features
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Retraso entre cada elemento hijo animado (características)
            delayChildren: 0.2 // Retraso inicial antes de que los hijos empiecen
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 }, // Empieza 30px abajo y transparente
    visible: {
        y: 0, // Se desliza a su posición original
        opacity: 1, // Se vuelve opaco
        transition: {
            type: "spring", // Animación tipo muelle
            stiffness: 120,
            damping: 14
        }
    }
};

export default function Features() {
  return (
    <div className="bg-black">
      {/* Contenedor principal de toda la sección de Features */}
      <motion.div
        className="mx-auto max-w-full py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24"
        initial="hidden"
        whileInView="visible" // Anima cuando el componente entra en la vista
        viewport={{ once: false, amount: 0.3 }} // Se anima cada vez que entra en vista
        variants={containerVariants} // Aplica las variantes del contenedor
      >
        {/* Bloque de texto de la izquierda */}
        <motion.div variants={itemVariants}> {/* Animar este bloque como una unidad */}
          <h1 className="text-lg font-semibold text-gray-300">Desarrollo,Tecnología e Innovación </h1>
          <h3 className="mt-2 text-3xl font-bold tracking-tight text-cyan-400">Al servicio de Todos!</h3>
          <p className="mt-4 text-lg text-gray-300">
            
            "Cosmic Imagination: Diseñando el futuro digital con autenticidad y soluciones innovadoras que trascienden lo convencional."
          </p>
        </motion.div>

        {/* Cuadrícula de características de la derecha */}
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              // Cada característica individual se anima
              <motion.div key={feature.name} className="relative" variants={itemVariants}>
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-cyan-400">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-300">{feature.description}</dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </motion.div>
    </div>
  );
}