import CaseCard from "./CaseCard";
import Carousel from '@itseasy21/react-elastic-carousel';
import { motion } from "framer-motion"; // Importa motion
import React from 'react'; // Asegúrate de importar React si no lo está

// Define las variantes de animación fuera del componente CasesList
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Retraso de 0.1 segundos entre la aparición de cada CaseCard
            delayChildren: 0.2 // Opcional: Retraso antes de que las CaseCard empiecen a aparecer
        }
    }
};

const itemVariants = {
    hidden: { y: 50, opacity: 0 }, // Empieza 50px abajo y transparente
    visible: {
        y: 0, // Se desliza a su posición original
        opacity: 1, // Se vuelve opaco
        transition: {
            type: "spring", // Animación tipo muelle
            stiffness: 120,
            damping: 14
        }
    }
};

function CasesList(){

    const posts = [
        {
            id:'4321-zxcv',
          title: 'Científica',
          href: '/cosmovisión/científica',
          category: { name: 'Cosmovisión' },
          description:
            'Convergencia de la física cuántica, la cimática y la Psicología transpersonal...',
          date: 'Feb 12, 2022',
          datetime: '2020-02-12',
          imageUrl:
          'https://i.ibb.co/ymXbjSXm/at33.jpg',

        },


        {
            id:'5678-asdf',
          title: 'Espiritual.',
          href: '/cosmovisión/espiritual',
           category: { name: 'Cosmovisión' },
          description:
            'Un Enfoque Integrador de la Geometría Sagrada, la Alquimia Occidental y la Metafísica...',
          date: 'Mar 10, 2020',
          datetime: '2020-03-10',
          imageUrl:
          
          'https://i.ibb.co/DHDvKhxJ/im33.jpg',
          

        },

        {
          id:'3567-cdfs',
        title: ' Universal.',
        href: '/cosmovisión/universal',
        category: { name: 'Cosmovisión' },
        description:
          'La Integración del Conocimiento Científico y Espiritual para el Bienestar del Cosmos... ',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        imageUrl:
          'https://i.ibb.co/XfpJFk4P/uni3.jpg',
      },

      ];

      const  breakPoints = [
        { width: 1, itemsToShow: 1, itemsToScroll: 1 },
        { width: 1280, itemsToShow: 2, itemsToScroll: 2 },
        { width: 1750, itemsToShow: 3, itemsToScroll: 2 },
    ];

    return(
        <div className="relative bg-black  mx-auto max-w-full">
            {/* INICIO DE ESTILOS PERSONALIZADOS PARA EL CARRUSEL */}
            <style jsx>{`
               
            `}</style>
            {/* FIN DE ESTILOS PERSONALIZADOS PARA EL CARRUSEL */}

            <div className="absolute hover:cyan-400 inset-0">
                <div className="h-1/3 bg-black  sm:h-2/3" />
            </div>
            <div className="relative mx-auto max-w-full">

                {/* Contenedor principal de la animación para toda la sección del carrusel */}
                <motion.div
                    initial="hidden"
                    whileInView="visible" // Anima cuando el componente entra en la vista
                    viewport={{ once: false, amount: 0.3 }} // Se anima cada vez que entra en vista
                    variants={containerVariants} // Aplica las variantes del contenedor
                >


                    <Carousel
                        itemsToScroll={3}
                        itemsToShow={3}
                        breakPoints={breakPoints}
                        pagination={false}
                        itemPadding={[0, 48]}
                    >
                        {posts.map((post, index) => (
                            // Cada CaseCard se envuelve en un motion.div para la animación individual
                            <motion.div key={post.id} variants={itemVariants}>
                                <CaseCard index={index} data={post}/>
                            </motion.div>
                        ))}
                    </Carousel>
                </motion.div>

            </div>
        </div>

    );
}
export default CasesList;