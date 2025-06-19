import { Link } from "react-router-dom"
import { Typewriter } from "react-simple-typewriter"
import { motion } from "framer-motion"

const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08, // Retraso de 0.05 segundos entre la aparición de cada letra
            delayChildren: 0.08, // Retraso antes de que las letras empiecen a aparecer
            // AÑADIR ESTO PARA REPETIR EN BUCLE
            repeat: Infinity, // Repite la animación indefinidamente
            repeatType: "loop", // O "mirror" para ir y venir, o "reverse" para ir y volver al inicio
            repeatDelay: 2 // Opcional: Retraso de 2 segundos antes de que la animación se repita
        }
    }
};


// Variantes para cada letra individual
const letterVariants = {
    hidden: { opacity: 0, y: 20 }, // Empieza invisible y 20px abajo
    visible: {
        opacity: 1,
        y: 0, // Se mueve a su posición original
        transition: {
            type: "spring", // Animación tipo muelle para un rebote sutil
            stiffness: 200, // Rigidez del muelle
            damping: 15,
            repeat: Infinity, // Repite la animación indefinidamente
            repeatType: "reverse", // O "mirror" para ir y venir, o "reverse" para ir y volver al inicio
            repeatDelay:1.5  // Amortiguación del muelle
        }
    }
};

 
function Header(){
   const cosmicText = "Co§mic ";
   const imaginationText = "Imagination"
  return(
        <main>
        <div className="relative ">
        <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
        <meta name="google-adsense-account" content="ca-pub-6903011312899073"></meta>
            <div>
              <div>
                 <h1 className="text-4xl mt-12 text-gray-300 font-bold tracking-tight pb-18 sm:text-center sm:text-6xl">
                {cosmicText} {/* Texto estático "Co§mic " */}
                   <span className="inline-flex" style={{ color: 'cyan', fontWeight: 'bold' }}>
                      {/* Aquí reemplazamos el Typewriter existente */}
                      <motion.span
                          initial="hidden"
                          animate="visible"
                          variants={textContainerVariants}
                      >
                          {imaginationText.split('').map((char, index) => (
                              <motion.span key={index} variants={letterVariants}>
                                  {char}
                              </motion.span>
                          ))}
                      </motion.span>
                      ! {/* Puedes mantener el signo de exclamación fuera para que no se anime */}
                   </span>
                </h1>
               
                  <ul className='flex gap-3 items-center justify-center pt-19 '>
                    <li className='inline-flex border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out'>
                        <Link to='/category/programacion' className="mt-6 text-xl font-medium leading-8 text-cyan-400 sm:text-center">
                            Programación
                        </Link>
                    </li>                   
                    <li className='inline-flex border-b-2 border-transparent hover:border-gray-300 transition duration-300 ease-in-out'>
                        <Link to='/category/ciencia_espiritual' className="mt-6 text-xl font-medium leading-8 text-cyan-400 sm:text-center">
                           Ciencia&Espiritualidad
                        </Link> 
                    </li>
                  </ul>
              </div>
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden bg-black blur-lg sm:top-[calc(100%-30rem)]">
              </div>
            </div>
            <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-black blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-40rem)]">
              <img src="https://i.ibb.co/rfTsMsvT/cosmic39.jpg" className='w-full h-full object-cover'/>
              
            </div>

                
          </div>         
        </div>
      </main>
    )
 }
 export default Header
