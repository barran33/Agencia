import { CheckIcon } from '@heroicons/react/24/outline'
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const features = [
  {
    name: 'Evaluación y Análisis Integral de Riesgos:',
    description: 'Realizamos una auditoría exhaustiva de tus activos digitales, infraestructuras y procesos para identificar vulnerabilidades y amenazas potenciales, proporcionando una visión clara de tu postura de seguridad actual.',
  },
  {
    name: 'Protección Avanzada de Red y Perímetro:',
    description: 'Implementamos soluciones de seguridad robustas, incluyendo firewalls de próxima generación, sistemas de detección y prevención de intrusiones (IDS/IPS), y segmentación de red, para fortificar tu infraestructura contra accesos no autorizados y ataques.',
  },
  {
    name: 'Seguridad de Aplicaciones y Desarrollo Seguro (DevSecOps):',
    description: 'Integramos prácticas de seguridad en todo el ciclo de vida del desarrollo de software (SDLC). Realizamos pruebas de seguridad (SAST/DAST) y auditorías de código para asegurar que tus aplicaciones sean resilientes desde su concepción.',
  },
  {
    name: 'Gestión de Identidades y Accesos (IAM):',
    description: 'Establecemos políticas y tecnologías para gestionar de forma segura las identidades digitales y controlar el acceso a los recursos de tu organización, minimizando el riesgo de accesos privilegiados indebidos.',
  },
  {
    name: 'Implementación de SGSI ISO 27001:2022:',
    description: 'Te guiamos en la implementación y certificación de un Sistema de Gestión de Seguridad de la Información (SGSI) basado en la norma ISO/IEC 27001:2022, asegurando el cumplimiento normativo y una gestión sistemática de la seguridad de la información.',
  },
  {
    name: 'Pentesting y Pruebas de Intrusión:',
    description: 'Realizamos pruebas de penetración (pentesting) éticas y controladas en tus sistemas, aplicaciones y redes para simular ataques reales, identificar vulnerabilidades explotables y evaluar la efectividad de tus controles de seguridad.',
  },
  {
    name: 'Educación y Concienciación en Ciberseguridad:',
    description: 'Capacitamos a tu equipo con programas de concienciación personalizados para que reconozcan amenazas como el phishing y la ingeniería social, fortaleciendo la "última línea de defensa" humana de tu organización.',
  },
  {
    name: 'Monitoreo, Detección y Respuesta a Incidentes (MDR):',
    description: 'Ofrecemos monitoreo 24/7 de tus sistemas, detección temprana de amenazas y una respuesta rápida y coordinada ante cualquier incidente de seguridad para minimizar el impacto y restaurar la normalidad.',
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
      <div className="mx-auto max-w-1700 py-12 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-cyan-400">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300">All-in-one platform</p>
          <p className="mt-4 text-lg text-cyan-400">
          Nuestros servicios de ciberseguridad incluyen:
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