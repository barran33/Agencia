import { motion } from "framer-motion"


const incentives = [
    {
      name: 'Ciencia',
      imageSrc: 'https://i.ibb.co/v6dHp0K9/at33.png',
      description: "La ciencia sin espiritualidad es coja, la espiritualidad sin ciencia es ciega.",
    },
    {
      name: 'Espiritualidad',
      imageSrc: 'https://i.ibb.co/hFYk92cQ/om33.png',
      description: "La espiritualidad nos conecta con la esencia del universo, y la ciencia nos desvela sus secretos.",
    },
    {
      name: 'Tecnología',
      imageSrc: 'https://i.ibb.co/mryjsDF4/monitor33.png',
      description:
        "La ciencia y la tecnología son solo una herramienta, pero puede ser utilizada para llevar a cabo grandes cosas cuando se combina con la sabiduría espiritual",
    },
  ]
  
  const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  export default function Incentives() {
    return (
      <div className="bg-black">
        <div className="mx-auto  py-24  sm:py-32 l">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-300">
                Unificamos el conocimiento científico y espiritual para mejorar el bienestar del Cosmos en General
              </h1>
              <h1 className="mt-4 text-cyan-400">La tecnología es una extensión de nuestra capacidad humana, pero es nuestra sabiduría espiritual la que guía su uso para el bienestar de todos.</h1>
              <h1 className="mt-4 text-cyan-400">La ciencia despierta nuestra curiosidad, la espiritualidad despierta nuestra conciencia</h1>
              <h1 className="mt-4 text-cyan-400">En el despertar espiritual, el alma se encuentra con la conciencia y se dan cuenta de que son una y la misma.</h1>
            </div>

            <motion.div
                className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3"
                initial="hidden"
                whileInView="visible" // Anima cuando el componente entra en la vista
                viewport={{  amount: 0.3 }} // Solo se anima una vez y cuando el 30% del componente está visible
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.3 // Cada hijo aparece con un retraso de 0.2 segundos
                        }
                    }
                }}
            >
              {incentives.map((incentive) => (
                <motion.div
                    key={incentive.name}
                    className="sm:flex lg:block"
                    variants={itemVariants} // Aplica las variantes de animación al item
                >
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-300">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-cyan-400">{incentive.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    )
}


  
  