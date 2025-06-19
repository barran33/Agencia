import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Importa motion
import React from 'react'; // Asegúrate de importar React

function CaseCard({data, index}) {

    // Variantes para la animación de entrada de la imagen
    const imageEntranceVariants = {
        hidden: { opacity: 0, scale: 0.8 }, // Empieza transparente y un poco más pequeña
        visible: {
            opacity: 1, // Se vuelve completamente visible
            scale: 1, // Vuelve a su tamaño normal
            transition: {
                delay: 0.3, // Retraso para que aparezca después de que la tarjeta se muestre
                duration: 0.8, // Duración de la animación
                ease: "easeOut", // Curva de easing
                type: "spring", // Tipo de animación con muelle
                stiffness: 150,
                damping: 18
            }
        }
    };

    return(
        <Link
        to={data.href}
            onMouseEnter={()=>{
                const title_element = document.getElementById(index)
                if(title_element) {
                    title_element.classList.add('text-cyan-500') // Cambia a cian al pasar el mouse
                    title_element.classList.remove('text-gray-300') // Asegura que el color normal se quite
                }
            }}
            onMouseLeave={()=>{
              const title_element = document.getElementById(index)
              if(title_element) {
                  title_element.classList.remove('text-cyan-500') // Quita cian
                  title_element.classList.add('text-gray-300') // Vuelve a su color normal
              }
          }}

          className="flex flex-col overflow-hidden rounded-lg shadow-lg h-full">
          <div className="flex-shrink-0 relative">
            {/* Aquí implementamos motion.img y las propiedades de Framer Motion */}
            <motion.img
                id={data.id}
                className="h-96 w-full transition duration-300 ease-in-out object-contain cursor-pointer"
                src={data.imageUrl}
                alt={data.title || "Imagen de caso"}
                // Animación de clic y hover
                whileTap={{ scale: 1.1 }} // Se amplifica un 10% al hacer clic
                whileHover={{ scale: 1.03 }} // Se agranda un 3% al pasar el mouse
                // Animación de ENTRADA de la imagen cuando la tarjeta se hace visible
                initial="hidden" // Estado inicial
                animate="visible" // Estado final (se activará cuando el padre se active)
                variants={imageEntranceVariants} // Aplica las variantes definidas
            />
          </div>
          <div className="flex flex-1 flex-col justify-between bg-black p-6">
            <div className="flex-1">
              <p className="text-sm font-medium text-cyan-400">
                {/* Aquí podrías mostrar data.category.name si no está vacío */}
                {data.category && data.category.name && (
                    <span className="hover:underline">{data.category.name}</span>
                )}
              </p>
              <a href={data.href} className="mt-2 block">
                <p id={index} className=" lg:text-4xl pt-2 pb-3 text-2xl font-semibold transition duration-300 ease-in-out text-gray-300">{data.title}</p> {/* Asegura que el color normal sea text-gray-300 */}
                <p className="mt-3 text-xl leading-9 text-cyan-400">{data.description.length > 180 ? data.description.slice(0,149) + '...' : data.description}</p>
              </a>
            </div>
          </div>
        </Link>
      )
}
export default CaseCard;