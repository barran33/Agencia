import { motion } from "framer-motion"; // Importa motion
import React from 'react'; // Asegúrate de que React esté importado

// Define las variantes de animación fuera del componente TechStack
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Retraso de 0.1 segundos entre cada imagen
            delayChildren: 0.2 // Opcional: Retraso antes de que las imágenes empiecen a aparecer
        }
    }
};

const itemVariants = {
    hidden: { y: 30, opacity: 0 }, // Empieza 30px abajo y transparente
    visible: {
        y: 0, // Se desliza a su posición original
        opacity: 1, // Se vuelve opaco
        transition: {
            type: "spring", // Animación tipo muelle
            stiffness: 150, // Rigidez del muelle
            damping: 12 // Amortiguación del muelle
        }
    }
};

function TechStack(){
    return(
        <div className="bg bg-black"> {/* Cambié "bg bg-black" a "bg-black" si solo quieres el fondo negro */}
      <div className="mx-auto max-w-1700 py-16  sm:py-36 sm:px-6 ">
        {/* Aquí puedes añadir un título si lo deseas, actualmente está vacío y con texto negro sobre fondo negro */}
        <h2 className="text-4xl font-bold tracking-tight text-cyan-400 text-center mb-10">
           TechStack
        </h2>
        {
          
        }
        <motion.div
            className="mt-10 flow-root lg:mt-10"
            initial="hidden"
            whileInView="visible" // 
            viewport={{  amount: 0.3 }} // 
            variants={containerVariants}
        >
          <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
            {/* CADA IMAGEN INDIVIDUAL (se convierte en motion.div para aplicar itemVariants) */}
            <motion.div
                className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0"
                variants={itemVariants}
            >
              <img className="h-14" src="https://bafybeigvj3z2lemqhvstdmbdgm25h7u2at6hdoh6lfbs5varmjf6su5yn4.ipfs.w3s.link/programacion.png" alt="Programming" />
            </motion.div>

            <motion.div
                className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0"
                variants={itemVariants}
            >
              <img className="h-16" src="https://i.ibb.co/d4SpxWDH/snake33.png" alt="Python" />
            </motion.div>

            <motion.div
                className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0"
                variants={itemVariants}
            >
              <img
                className="h-14"
                src="https://bafkreigon65p3nuldaqpblydizhzljc5jhesgubdmughcuypwfpaya7xhy.ipfs.dweb.link/?filename=react.png"
                alt="React"
              />
            </motion.div>

            <motion.div
                className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0"
                variants={itemVariants}
            >
              <img
                className="h-14"
                src="https://i.ibb.co/39QrKGBN/icons8-django-500.png"
                alt="Django"
              />
            </motion.div>

            <motion.div
                className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0"
                variants={itemVariants}
            >
              <img
                className="h-14"
                src="https://bafkreigs6zndzs5spg5yjziys6ypurln4pz3fw3ephv775iyesuoyolgei.ipfs.dweb.link/?filename=js.png"
                alt="Javascript"
              />
            </motion.div>

            <motion.div
                className="mt-4 ml-8 flex flex-shrink-0 flex-grow lg:ml-4 lg:flex-grow-0"
                variants={itemVariants}
            >
                <img
                  className="h-14"
                  src="https://i.ibb.co/svN46gs8/s3s3.png"
                  alt="Next.js"
                />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
    )
}
export default TechStack;