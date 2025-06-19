import { motion, useInView } from 'framer-motion'; // Importa motion y useInView
import React, { useRef } from 'react'; // Importa useRef

const stats = [
  { label: 'Founded', value: '2023' },
  { label: 'Employees', value: '6' },
  { label: 'Beta Users', value: '369' },
  { label: 'Raised', value: '$390M' },
];

// Variantes de animación para el contenido principal (texto y estadísticas)
const contentVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.2 // Anima los hijos con un retraso
    },
  },
};

// Variantes de animación para cada estadística individual
const statItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function TestStats() {
  const contentRef = useRef(null);
  const isInView = useInView(contentRef, {  amount: 0.3 }); // Activa cuando el 30% del contenido está visible

  return (
    <div className="relative bg-black py-16 sm:py-24">
      <div className="lg:mx-12 lg:grid lg:max-w-full lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        {/* Lado izquierdo (Tarjeta de Testimonio) - Puedes añadirle una animación si quieres */}
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-500 lg:right-72" />
            <svg
              className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
              width={404}
              height={392}
              fill="none"
              viewBox="0 0 404 392"
            >
              <defs>
                <pattern
                  id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            {/* Testimonial card*/}
            <motion.div // Animar la tarjeta de testimonio
              className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl"
              initial={{ opacity: 0, x: -50 }} // Empieza a la izquierda y transparente
              whileInView={{ opacity: 1, x: 0 }} // Se mueve a la posición y se vuelve opaco
              viewport={{  amount: 0.3 }} // Cuando el 30% está visible, anima una vez
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <img
                className="absolute inset-0 h-full w-full object-cover"
                src='https://i.ibb.co/5g4SgsHh/cosmic36.jpg'
                alt=""
              />
              <div className="absolute inset-0  mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-600 via-aqua-300 opacity-90" />
              <div className="relative px-8">
                <div>
                </div>
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg
                      className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative text-white">
                      Vamos a trascender los limites de existencia en la humanidad interpretando el lenguaje de la naturaleza para entrar en armonía con el universo.
                    </p>
                  </div>

                  <footer className="mt-4">
                    <p className="text-xl font-semibold text-white">
                      -Jorge Barrantes. Fundador y CEO Co§mic Imagination</p>
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Lado derecho (Contenido y Stats) */}
        <motion.div
          ref={contentRef}
          className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0"
          variants={contentVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Content area */}
          <motion.div variants={statItemVariants} className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">
              Nuestro propósito es:
            </h2>
            <div className="mt-6 space-y-6 text-gray-300">
              <p className="text-lg">
                Unificar los aspectos más elevados de la ciencia y la espiritualidad para crear soluciones innovadoras y conscientes que promuevan la evolución y el bienestar de la humanidad y del cosmos en su conjunto. Comprendemos que el progreso tecnológico por sí solo no es suficiente para abordar los desafíos actuales que enfrentamos como sociedad. Es necesario integrar una perspectiva más amplia y profunda que honre nuestra conexión intrínseca con el cosmos y nos guíe hacia un futuro sostenible y armonioso.
              </p>
              <p className="text-base text-gray-300 leading-7">
                En Co§mic Imagination, creemos que la tecnología y la espiritualidad no son entidades separadas, sino aspectos complementarios de nuestra existencia. Reconocemos que el bienestar humano está estrechamente vinculado al bienestar del entorno en el que vivimos. Por lo tanto, adoptamos un enfoque integral en nuestras soluciones, considerando tanto el impacto humano como el impacto en el ecosistema global.
                Únete a nosotros en esta emocionante aventura hacia la integración del conocimiento científico y espiritual. Juntos, podemos imaginar y crear un futuro donde la tecnología y la espiritualidad trabajen en armonía para el beneficio de todos. Explora nuestras soluciones, sé parte de nuestra comunidad y caminemos juntos hacia una nueva era de conciencia y bienestar cósmico.
              </p>
            </div>
          </motion.div>

          {/* Stats section */}
          <motion.div variants={statItemVariants} className="mt-10">
            <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
              {stats.map((stat, index) => (
                <motion.div // Anima cada stat individualmente
                  key={stat.label}
                  className="border-t-2 border-cyan-300 pt-6"
                  variants={statItemVariants}
                >
                  <dt className="text-base font-medium text-gray-300">{stat.label}</dt>
                  <dd className="text-3xl font-bold tracking-tight text-cyan-400">{stat.value}</dd>
                </motion.div>
              ))}
            </dl>
            <motion.div variants={statItemVariants} className="mt-10">
              <a href="#" className="text-base font-medium text-cyan-500">
                Learn more about how we're changing the world
                <span aria-hidden="true"> &rarr;</span>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}