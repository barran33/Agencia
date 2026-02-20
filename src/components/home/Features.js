import { CheckIcon } from '@heroicons/react/24/outline';
import { motion } from "framer-motion";
import React from 'react';

const features = [
  {
    name: 'Full Legal Compliance',
    description: 'Designed under Law 8968 (Costa Rica) and HIPAA-aligned frameworks to ensure every patient record is handled with absolute legality.'
  },
  {
    name: 'Zero-Knowledge Privacy',
    description: 'Advanced encryption where only you can access the medical notes. Even we can’t see your sensitive data.'
  },
  {
    name: 'Lead Auditor Oversight',
    description: 'Architecture supervised by an ISO/IEC 27001 Lead Auditor, ensuring the highest global standards in information security.'
  },
  {
    name: 'High-Availability Cloud',
    description: 'Your clinic never stops. 99.9% uptime guaranteed with automated backups and real-time data recovery.'
  },
  {
    name: 'Intuitive UX/UI',
    description: 'Software that doesn’t require a manual. We focus on reducing the cognitive load for doctors and administrative staff.'
  },
  {
    name: 'Interoperable Systems',
    description: 'Seamless integration between clinical records, laboratory results, and automated billing workflows.'
  },
];

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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 14
    }
  }
};

export default function Features() {
  return (
    <section className="bg-black w-full overflow-hidden">
      <motion.div
        className="mx-auto max-w-7xl py-16 px-6 sm:py-24 lg:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-0">
          
          {/* Bloque de texto lateral: El Gancho de Autoridad */}
          <motion.div variants={itemVariants} className="lg:pr-8">
          <div className="border-l-2 border-cyan-500/50 pl-6">
            <h2 className="text-sm font-semibold text-cyan-400 uppercase tracking-[0.2em]">
              The Gold Standard
            </h2>
            <h3 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Medical Intelligence <br className="hidden sm:block" /> 
              <span style={{ color: 'cyan', textShadow: '0 0 15px rgba(0,255,255,0.5)' }}>Without Compromise.</span>
            </h3>
            <p className="mt-6 text-lg text-gray-400 leading-relaxed">
              We don’t just build apps; we engineer the <span className="text-gray-100 font-medium">backbone of modern healthcare</span>. 
              By merging advanced SaaS agility with the rigor of <span className="text-cyan-300/90">ISO 27001 Lead Auditor expertise</span>, we ensure your clinical workflow is as fast as it is invulnerable.
            </p>
          </div>
        </motion.div>

          {/* Cuadrícula de características: Los Pilares Técnicos */}
          <div className="lg:col-span-2">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
              {features.map((feature) => (
                <motion.div 
                  key={feature.name} 
                  className="relative group p-2 rounded-xl transition-all duration-300 hover:bg-white/5" 
                  variants={itemVariants}
                >
                  <dt>
                    <div className="absolute flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 group-hover:border-cyan-400 transition-colors">
                      <CheckIcon className="h-6 w-6 text-cyan-400" aria-hidden="true" />
                    </div>
                    <p className="ml-14 text-lg font-bold leading-7 text-gray-100 group-hover:text-cyan-400 transition-colors">
                      {feature.name}
                    </p>
                  </dt>
                  <dd className="mt-2 ml-14 text-base text-gray-400 leading-7">
                    {feature.description}
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}