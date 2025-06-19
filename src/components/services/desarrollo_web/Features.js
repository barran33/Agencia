import { CheckIcon } from '@heroicons/react/24/outline';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const features = [
  {
    name: 'Diseño UX/UI Centrado en el Usuario:',
    description: 'Creamos experiencias de usuario intuitivas y atractivas, diseñando interfaces (UI) que no solo se ven bien, sino que son altamente usables y eficientes, asegurando que tus usuarios disfruten cada interacción.',
  },
  {
    name: 'Desarrollo Web Full Stack Personalizado:',
    description: 'Dominamos las tecnologías de frontend y backend para construir aplicaciones web robustas y escalables desde cero. Nos especializamos en frameworks modernos para garantizar rendimiento, seguridad y mantenibilidad.',
  },
  {
    name: 'Desarrollo de Aplicaciones Multiplataforma (PWA):',
    description: 'Creamos Aplicaciones Web Progresivas (PWA) que ofrecen una experiencia similar a una aplicación nativa, con capacidades offline, notificaciones push y acceso directo desde el escritorio, compatibles en todos los dispositivos.',
  },
  {
    name: 'Integración Avanzada de APIs y Servicios:',
    description: 'Conectamos tu aplicación web con sistemas externos, servicios de terceros y bases de datos a través de integraciones API personalizadas, optimizando flujos de trabajo y expandiendo las funcionalidades de tu plataforma.',
  },
  {
    name: 'Optimización de Rendimiento y SEO Técnico:',
    description: 'Aseguramos que tu aplicación web sea rápida, eficiente y esté optimizada para motores de búsqueda (SEO técnico), mejorando su visibilidad, el tiempo de carga y la experiencia general del usuario.',
  },
  {
    name: 'Mantenimiento y Soporte Continuo:',
    description: 'Ofrecemos planes de mantenimiento y soporte post-lanzamiento para garantizar que tu aplicación web esté siempre actualizada, segura y funcionando a su máximo rendimiento, incluyendo monitoreo y resolución de incidencias.',
  },
  {
    name: 'Migración y Modernización de Plataformas:',
    description: 'Ayudamos a modernizar tus sistemas legacy, migrando aplicaciones y bases de datos a tecnologías más recientes, lo que mejora la seguridad, el rendimiento y la flexibilidad de tu infraestructura digital.',
  },
  {
    name: 'Consultoría y Estrategia Digital:',
    description: 'Ofrecemos asesoramiento experto para definir la hoja de ruta tecnológica de tu proyecto, identificando las mejores soluciones y arquitecturas para alcanzar tus objetivos de negocio.',
  },
];
// Define the animation variants for the features
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
      <div className="mx-auto text-cyan-400 max-w-1700 py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-cyan-400">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300">All-in-one platform</p>
          <p className="mt-4 text-lg text-cyan-400">
            Nuestro servicio de desarrollo de aplicaciones web incluye:
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
  );
}

function FeatureItem({ feature }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {  amount: 0.2 });

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