import React from 'react';
import { motion } from 'framer-motion'; // <-- Importa motion

// Define la información de la única imagen que quieres mostrar
const singleCosmicImage = {
    title: '', // Puedes cambiar este título
    size: 'Explora lo Infinito', // Puedes cambiar este texto (o dejarlo vacío si no es relevante)
    source: 'https://bafybeia65pb6ezdgiefw7obt2plu6jothfdmk5jrdsc7w7v5o6gyohuima.ipfs.w3s.link/cimatica.jpeg' // ¡Asegúrate de que esta sea la URL de la imagen que deseas mostrar!
};

// --- Variantes de Animación para la Tarjeta de Imagen ---
const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 }, // Estado inicial: invisible, un poco más abajo, ligeramente encogido
    visible: {
        opacity: 1, // Estado final: visible
        y: 0,       // Posición original
        scale: 1,   // Tamaño original
        transition: {
            duration: 0.7, // Duración de la animación
            ease: "easeOut" // Tipo de easing para una animación suave
        }
    }
};

export default function SingleImageCosmicDisplay() {
    return (
        <ul role="list" className="grid grid-cols-1 place-items-center py-8 px-4">
           
            <motion.li
                key={singleCosmicImage.source}
                className="relative w-full max-w-md"
                initial="hidden"
                whileInView="visible"
                viewport={{  amount: 0.5 }}
                variants={cardVariants}
            >
                <div
                    className="group block w-full overflow-hidden rounded-lg bg-cyan-400 focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100
                                flex justify-center items-center p-4">
                    <img
                        src={singleCosmicImage.source}
                        alt={singleCosmicImage.title || "Imagen cósmica"}
                        className="pointer-events-none object-contain h-auto w-auto max-w-full max-h-full group-hover:opacity-75"
                    />
                    <button type="button" className="absolute inset-0 focus:outline-none">
                        <span className="sr-only">Ver detalles de {singleCosmicImage.title}</span>
                    </button>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-cyan-400 text-center">{singleCosmicImage.title}</p>
                <p className="pointer-events-none block text-sm font-medium text-cyan-500 text-center">{singleCosmicImage.size}</p>
            </motion.li>
        </ul>
    );
}