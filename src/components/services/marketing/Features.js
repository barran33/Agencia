import { CheckIcon } from '@heroicons/react/24/outline'
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const features = [
  {
    name: 'Diseño y Lanzamiento de Programas Personalizados:',
    description: 'Creamos programas de Bug Bounty a medida, adaptados a tus necesidades de seguridad específicas y al presupuesto. Desde programas privados hasta públicos, gestionamos todo el ciclo para maximizar la efectividad y los hallazgos críticos.',
  },
  {
    name: 'Acceso a una Comunidad Global de Hackers Éticos:',
    description: 'Te conectamos con miles de investigadores de seguridad, hackers éticos y expertos en ciberseguridad de todo el mundo, quienes de forma colaborativa buscan y reportan vulnerabilidades en tus sistemas.',
  },
  {
    name: 'Triaje y Validación Expertos de Vulnerabilidades:',
    description: 'Nuestro equipo de especialistas valida, reproduce y clasifica cada informe de vulnerabilidad, eliminando duplicados y falsos positivos, para que solo recibas hallazgos legítimos y procesables.',
  },
  {
    name: 'Asesoramiento para la Remediación y Mejora Continua:',
    description: 'Ofrecemos orientación técnica detallada para corregir las vulnerabilidades encontradas. Además, te ayudamos a integrar los aprendizajes del programa en tus ciclos de desarrollo seguro (SDLC) para prevenir futuros fallos.',
  },
  {
    name: 'Reportes Ejecutivos y Métricas de Rendimiento:',
    description: 'Proporcionamos dashboards intuitivos y reportes ejecutivos con métricas clave del programa, incluyendo tipos de vulnerabilidades, tiempos de resolución y recompensas pagadas, para una toma de decisiones informada.',
  },
  {
    name: 'Compensación y Gestión de Recompensas:',
    description: 'Administramos el sistema de recompensas, asegurando pagos justos y transparentes a los investigadores por sus hallazgos, motivando así una participación activa y de alta calidad.',
  },
  {
    name: 'Marco Legal y Cumplimiento Normativo:',
    description: 'Te asesoramos sobre las mejores prácticas y los requisitos legales para operar un programa de Bug Bounty, asegurando que cumpla con las normativas de privacidad y seguridad de datos relevantes.',
  },
  {
    name: 'Entrenamiento y Concienciación para tu Equipo:',
    description: 'Ofrecemos sesiones de capacitación para tu equipo interno sobre cómo interactuar con los investigadores, entender los informes de vulnerabilidades y mejorar la postura de seguridad de tu organización.',
  },
];

const featureVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};


export default function Features() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-1700 py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-cyan-400">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300">All-in-one platform</p>
          <p className="mt-4 text-lg text-cyan-400">
            Nuestro servicio de Bug Bounty incluye:
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature, index) => (
              <FeatureItem key={feature.name + index} feature={feature} />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ feature }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {  amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      className="relative"
      variants={featureVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <dt>
        <CheckIcon className="absolute h-6 w-6 text-cyan-600" aria-hidden="true" />
        <p className="ml-9 text-lg font-medium leading-6 text-cyan-400">{feature.name}</p>
      </dt>
      <dd className="mt-2 ml-9 text-base text-gray-300">{feature.description}</dd>
    </motion.div>
  );
}