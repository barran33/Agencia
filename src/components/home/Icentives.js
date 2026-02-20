import { motion } from "framer-motion"

const incentives = [
    {
      name: 'Exponential Growth',
      imageSrc: 'https://i.ibb.co/SXmVJ0wb/monitor369.png',
      description: "Architecture that scales with your ambition. From solo practices to multi-city clinical networks without missing a beat.",
    },
    {
      name: 'Surgical Precision',
      imageSrc: 'https://i.ibb.co/4L4Vt8b/design-variant.png',
      description: "Eliminate administrative friction. Our intelligent automation orchestrates your clinical workflow, allowing you to focus exclusively on your patient's recovery.",
    },
    {
      name: 'Bulletproof Security',
      imageSrc: 'https://i.ibb.co/vvzFfWbJ/hacker33.png',
      description: "Architectural Immunity. We build beyond encryption, engineering high-resilience digital frameworks where data integrity is absolute.",
    },
    
]
  
const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Incentives() {
    return (
      <div className="bg-black">
        <div className="mx-auto py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4">
            {/* Contenedor de texto Centrado y en una sola línea */}
            <div className="text-center mb-16 -mt-10 lg:-mt-14 relative z-10">
              <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl lg:text-5xl">
                Optimizing Healthcare Operations with <span style={{ color: 'cyan', textShadow: '0 0 15px #00FFFF' }}>Next-Gen SaaS</span>
              </h2>
              <p className="mt-6 text-cyan-400 font-medium italic text-lg">
                Efficiency is not an option; it's a requirement in modern medicine.
              </p>
              <p className="mt-4 text-gray-500 max-w-4xl mx-auto text-base">
                We bridge the gap between complex medical workflows and seamless digital experiences, 
                ensuring that technology serves as a powerful extension of your clinical expertise.
              </p>
            </div>

            <motion.div
                className="grid grid-cols-1 gap-y-12 gap-x-12 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.3 }}
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.3 
                        }
                    }
                }}
            >
              {incentives.map((incentive) => (
                <motion.div
                    key={incentive.name}
                    className="flex flex-col items-center text-center p-6 rounded-2xl border border-transparent hover:border-gray-900 transition-all duration-300"
                    variants={itemVariants}
                >
                  <div className="flex-shrink-0 mb-6">
                    <img 
                        className="h-20 w-20 object-contain transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)]" 
                        src={incentive.imageSrc} 
                        alt={incentive.name} 
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-200 tracking-wider uppercase mb-3">
                      {incentive.name}
                    </h3>
                    <p className="text-sm text-cyan-400 leading-relaxed">
                      {incentive.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    )
}