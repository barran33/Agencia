import { motion, useInView } from 'framer-motion'; // Importa motion y useInView
import React, { useRef } from 'react'; // Importa useRef

function Testimonial() {
    // Referencia para la imagen
    const imageRef = useRef(null);
    const isImageInView = useInView(imageRef, { once: false, amount: 0.5 }); // Anima una vez cuando el 50% de la imagen está visible

    // Referencia para el bloque de la cita (texto)
    const quoteRef = useRef(null);
    const isQuoteInView = useInView(quoteRef, { once: false, amount: 0.5 }); // Anima una vez cuando el 50% de la cita está visible

    // Variantes de animación para la imagen
    const imageVariants = {
        hidden: { opacity: 0, x: -100, scale: 0.8 }, // Comienza invisible, desplazada a la izquierda y ligeramente pequeña
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            transition: {
                type: "spring",
                damping: 10,
                stiffness: 100,
                duration: 1, // Duración de la animación
            },
        },
    };

    // Variantes de animación para el bloque de la cita
    const quoteVariants = {
        hidden: { opacity: 0, y: 50 }, // Comienza invisible y ligeramente hacia abajo
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8, // Duración de la animación
                ease: "easeOut",
            },
        },
    };

    // Variantes para el texto dentro de la cita, para un efecto escalonado
    const textStaggerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15, // Retraso entre cada elemento de texto
            },
        },
    };

    const textItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };


    return (
        <div className="bg-black pt-16 lg:py-24">
            <div className="bg-cyan-600 pb-16 lg:relative lg:z-10 lg:pb-0">
                <div className="lg:mx-12 lg:grid lg:max-w-full lg:grid-cols-3 lg:gap-8 lg:px-8">
                    <div className="relative lg:-my-8">
                        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-black lg:hidden" />
                        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:h-full lg:p-0">
                            {/* Imagen con animación de scroll */}
                            <motion.div
                                ref={imageRef}
                                variants={imageVariants}
                                initial="hidden"
                                animate={isImageInView ? "visible" : "hidden"}
                                className="overflow-hidden rounded-xl shadow-xl lg:h-full"
                            >
                                <div className="aspect-w-4 aspect-h-5 sm:aspect-w-4 sm:aspect-h-5 lg:aspect-w-4 lg:aspect-h-5 h-full bg-black">
                                    <img
                                        className="object-contain h-full w-full"
                                        src="https://i.ibb.co/ynF6Lgtb/joyboy3.jpg"
                                        alt="Jorge Barrantes"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
                        {/* Bloque de la cita con animación de scroll */}
                        <motion.div
                            ref={quoteRef}
                            variants={quoteVariants}
                            initial="hidden"
                            animate={isQuoteInView ? "visible" : "hidden"}
                            className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20"
                        >
                            <motion.blockquote // Bloque de cita con stagger para el contenido interno
                                variants={textStaggerVariants}
                                initial="hidden"
                                animate={isQuoteInView ? "visible" : "hidden"} // Anima cuando el contenedor padre es visible
                            >
                                <motion.div variants={textItemVariants}> {/* Envuelve el SVG y el párrafo para animarlos juntos o individualmente */}
                                    <svg
                                        className="h-6 w-6 text-white opacity-25"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                    >
                                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                                    </svg>
                                </motion.div>
                                <motion.p
                                    variants={textItemVariants}
                                    className="mt-6 text-2xl font-medium text-gray-50"
                                >
                                    Me gusta pensar que el proposito de la humanidad es. Crear un mundo mejor para las futuras generaciones
                                </motion.p>

                                <motion.footer
                                    variants={textStaggerVariants} // Opcional: para animar autor y título por separado
                                    className="mt-6"
                                >
                                    <motion.p variants={textItemVariants} className="text-base font-medium text-gray-50">Jorge Barrantes</motion.p>
                                    <motion.p variants={textItemVariants} className="text-base font-medium text-white">Founder & CEO, Co§mic Imagination </motion.p>
                                </motion.footer>
                            </motion.blockquote>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonial;