import { motion } from "framer-motion";
import React from 'react';

// --- Variantes de Animación Profunda ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 120, damping: 12 } 
  }
};

const cases = [
  {
    id: 'case-1',
    title: 'Aura Clinical Core',
    category: 'Private Practice',
    description: 'A seamless administrative atmosphere. We synchronize multidisciplinary workflows into a single intuitive pulse, ensuring your clinic operates with effortless clarity.',
    imageUrl: 'https://i.ibb.co/chL5xDrk/clinic33.jpg',
    tags: ['Ecosystem', 'Workflow'],
    compliance: 'Enterprise-Grade'
  },
  {
    id: 'case-2',
    title: 'MindSpace Vault',
    category: 'Mental Health',
    description: 'A sanctuary for sensitive data. Beyond encryption, we provide a frictionless environment for psychiatric notes and therapy tracking, ensuring total patient intimacy.',
    imageUrl: 'https://i.ibb.co/fd9yZvYw/brainai.jpg',
    tags: ['Privacy', 'Telehealth'],
    compliance: 'Confidentiality'
  },
  {
    id: 'case-3',
    title: 'Dental Logic Pro',
    category: 'Dental Offices',
    description: 'Master the art of clinical flow. We transform the chair-side experience with a high-fidelity digital odontogram that synchronizes with your billing in real-time. Stop managing paperwork and start optimizing every minute of specialized dental surgery.',
    imageUrl: 'https://i.ibb.co/4ZWCrpC0/dental33.jpg',
    tags: ['Imaging', 'Smart-Billing'],
    compliance: 'Precision'
  }
];

export default function UseCases() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Encabezado Profesional */}
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-base font-semibold leading-7 text-cyan-400 uppercase tracking-widest">
            Success Stories
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl">
            SaaS Solutions in <span style={{ color: 'cyan', textShadow: '0 0 10px #00FFFF' }}>Real Action</span>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-400">
            We bridge the gap between complex medical requirements and seamless digital execution. 
            Audited security for modern healthcare providers.
          </p>
        </motion.div>

        {/* Grid de Casos de Uso */}
        <motion.div 
          className="grid grid-cols-1 gap-8 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cases.map((item) => (
            <motion.div
              key={item.id}
              variants={cardVariants}
              className="group relative flex flex-col overflow-hidden rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500/50 transition-colors duration-500"
            >
              {/* Imagen con Overlay de Color */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <motion.img
                  src={item.imageUrl}
                  alt={item.title}
                  className="h-full w-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20">
                  <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-cyan-400 border border-cyan-500/30 backdrop-blur-md">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Contenido de la Tarjeta */}
              <div className="flex flex-1 flex-col justify-between p-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-100 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-gray-800 pt-6">
                  <div className="flex space-x-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-tighter text-gray-500">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-cyan-500/80">
                    {item.compliance}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}