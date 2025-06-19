import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importa motion
import { Typewriter } from 'react-simple-typewriter'; // Importa Typewriter

function Header() {
    // Variantes de animación para el título
    const h1Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    };

    return (
        <main>
            <div className="relative">
                <div className="mx-auto max-w-full xl:mx-12 xl:pt-40 xl:pb-64 lg:pt-40 lg:pb-48 pt-24 pb-12">
                    <div>
                        <div>
                            {/* h1 con efecto Framer Motion */}
                            <motion.h1
                                className="text-3xl text-gray-300 font-bold tracking-tight pb-6 sm:text-3xl"
                                variants={h1Variants}
                                initial="hidden"
                                animate="visible"
                            >
                                En Cosmic Imagination, somos una empresa de software con una visión audaz y trascendental. Nos apasiona la exploración y la integración del conocimiento científico y espiritual para contribuir al bienestar del cosmos en general.
                            </motion.h1>

                            {/* p con efecto Typewriter */}
                            <p className="mt-6 text-xl leading-9 text-cyan-400 max-w-3xl">
                                <Typewriter
                                    words={[
                                        'Innovando para un futuro consciente.',
                                        'Conectando la ciencia con la trascendencia.',
                                        'Tecnología al servicio del cosmos.',
                                        'Creando un impacto positivo en la era digital.'
                                    ]}
                                    loop={true} // Repetir infinitamente
                                    cursor // Mostrar el cursor
                                    cursorStyle='_' // Estilo del cursor
                                    typeSpeed={60} // Velocidad de escritura
                                    deleteSpeed={40} // Velocidad de borrado
                                    delaySpeed={1500} // Pausa antes de borrar/escribir la siguiente palabra
                                />
                            </p>
                        </div>
                    </div>

                    <div className="absolute inset-x-0 top-[calc(100%-20rem)] -z-10 transform-gpu overflow-hidden bg-black blur-lg lg:top-[calc(100%-45rem)] sm:top-[calc(100%-40rem)]">
                        <img src="https://i.ibb.co/rfTsMsvT/cosmic39.jpg" className='w-full h-full object-cover' alt="Cosmic Background" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Header;







