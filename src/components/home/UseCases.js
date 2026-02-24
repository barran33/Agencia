import { motion } from "framer-motion";
import React from 'react';
import { Link } from 'react-router-dom';

// --- Variantes de Animación Profunda ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

const cases = [
  {
    id: 'case-1',
    title: 'Aura Clinical Core',
    href: '/solutions/aura',
    category: 'Private Practice',
    description: 'A seamless administrative atmosphere. We synchronize multidisciplinary workflows into a single intuitive pulse, ensuring your clinic operates with effortless clarity.',
    imageUrl: 'https://i.ibb.co/chL5xDrk/clinic33.jpg',
    tags: ['Ecosystem', 'Workflow'],
    compliance: 'Enterprise-Grade'
  },
  {
    id: 'case-2',
    title: 'MindSpace Vault',
    href: '/solutions/mindspace',
    category: 'Mental Health',
    description: 'A sanctuary for sensitive data. Beyond encryption, we provide a frictionless environment for psychiatric notes and therapy tracking, ensuring total patient intimacy.',
    imageUrl: 'https://i.ibb.co/fd9yZvYw/brainai.jpg',
    tags: ['Privacy', 'Telehealth'],
    compliance: 'Confidentiality'
  },
  {
    id: 'case-3',
    title: 'Dental Logic Pro',
    href: '/solutions/dental',
    category: 'Dental Offices',
    description: 'Master the art of clinical flow. We transform the chair-side experience with a high-fidelity digital odontogram that synchronizes with your billing in real-time.',
    imageUrl: 'https://i.ibb.co/4ZWCrpC0/dental33.jpg',
    tags: ['Imaging', 'Smart-Billing'],
    compliance: 'Precision'
  }
];

export default function UseCases() {
  return (
    <div className="bg-black py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Encabezado Profesional - Tipografía reducida */}
        <motion.div 
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[10px] font-black leading-7 text-cyan-400 uppercase tracking-[0.3em] font-mono">
            Success Stories
          </h2>
          <p className="mt-2 text-3xl font-black tracking-tight text-white sm:text-5xl uppercase italic">
            Solutions in <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Action</span>
          </p>
          <p className="mt-4 text-base leading-7 text-zinc-500">
            We bridge the gap between complex medical requirements and seamless digital execution. 
            Audited security for modern healthcare providers.
          </p>
        </motion.div>

        {/* Grid de Casos de Uso */}
        <motion.div 
          className="grid grid-cols-1 gap-6 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {cases.map((item) => (
            <Link to={item.href} key={item.id} className="block group">
              <motion.div
                variants={cardVariants}
                className="relative flex flex-col h-full overflow-hidden rounded-[2rem] bg-zinc-900/30 border border-white/5 group-hover:border-cyan-500/40 transition-all duration-500 shadow-2xl"
              >
                {/* Imagen con Overlay */}
                <div className="relative h-60 overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <motion.img
                    src={item.imageUrl}
                    alt={item.title}
                    className="h-full w-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-flex items-center rounded-full bg-black/60 px-3 py-1 text-[9px] font-black text-cyan-400 border border-white/10 backdrop-blur-md uppercase tracking-widest">
                      {item.category}
                    </span>
                  </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="flex flex-1 flex-col justify-between p-7">
                  <div className="flex-1">
                    <h3 className="text-xl font-black text-white group-hover:text-cyan-400 transition-colors uppercase italic tracking-tighter">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-xs leading-relaxed text-zinc-500 font-medium line-clamp-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-5">
                    <div className="flex space-x-2">
                      {item.tags.map(tag => (
                        <span key={tag} className="text-[8px] font-mono uppercase tracking-widest text-zinc-600">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-[9px] font-black text-cyan-500/80 uppercase tracking-tighter">
                      {item.compliance}
                    </span>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}