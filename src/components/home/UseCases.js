import { motion } from "framer-motion";
import React from 'react';

// --- Variantes de Animación ---

// Variantes para el contenedor del título y subtítulo principal
const mainHeaderContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Retraso entre la aparición del título y el subtítulo
      delayChildren: 0.1 // Pequeño retraso inicial para todo el encabezado
    }
  }
};

// Variantes para el título principal
const mainTitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

// Variantes para el subtítulo/descripción principal
const mainSubtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 0.1 // Pequeño retraso después del título
    }
  }
};

// Variantes para el contenedor de todas las tarjetas (posts)
const postsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15, // Cada tarjeta aparece con un retraso de 0.15 segundos
            delayChildren: 0.2 // Las tarjetas empiezan a aparecer un poco después de que el contenedor sea visible
        }
    }
};

// Variantes para cada tarjeta individual (post item)
const postItemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.95 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        }
    }
};

// Variantes para la imagen dentro de cada tarjeta
const postImageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut"
    }
  }
};

// Variantes para los elementos de texto dentro de cada tarjeta
const postTextVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};


const posts = [
  {
      id:'1234-qwer',
    title: 'Ciencia',
    href: '/cosmovisión/científica',
    category: { name: 'Magia' },
    description:
      'La ciencia y la espiritualidad son dos caras de la misma moneda en la búsqueda del conocimiento y la verdad.',
    date: 'Jun 9, 2023',
    datetime: '2023-06-9',
    imageUrl:
      'https://i.ibb.co/4RfcStJ6/93g.jpg',
    readingTime: '6 min',
    author: {
      name: '',
      href: '#',
      imageUrl:
        'https://bafybeiaivrifvvqho6bmskcruncblfcwdnfl3h3dudaz6uuuw3re4xhpbe.ipfs.w3s.link/magic6.png',
    },
  },
  {
      id:'5678-asdf',
    title: 'Espiritualidad',
    href: '/cosmovisión/espiritual',
    category: { name: ' Magia', href: '/cosmovisión/espiritual' },
    description:
      'La espiritualidad nos recuerda que somos parte de un cosmos interconectado, mientras que la ciencia nos muestra cómo esas conexiones se manifiestan a nivel cósmico',
    date: 'Jun 9, 2023',
    datetime: '2023-06-09',
    imageUrl:
      'https://i.ibb.co/YTpPJndG/IMG-362.jpg',
      
    readingTime: '6 min',
    author: {
      href: '#',
      imageUrl:
        'https://bafybeiaivrifvvqho6bmskcruncblfcwdnfl3h3dudaz6uuuw3re4xhpbe.ipfs.w3s.link/magic6.png',
    },
  },
  {
      id:'4321-zxcv',
    title: 'Cosmos',
    href: '/cosmovisión/universal',
    category: { name: 'magia', href: '/cosmovisión/universal' },
    description:
      'El cosmos es el lienzo en el que la ciencia y la espiritualidad se entrelazan, revelando la maravilla y el misterio de nuestro universo.',
    date: 'Jun 9, 2023',
    datetime: '2023-06-09',
    imageUrl:
      'https://i.ibb.co/fdcBBmjG/cosmic369.jpg',
    readingTime: '6 min',
    author: {
      href: '#',
      imageUrl:
        'https://bafybeiaivrifvvqho6bmskcruncblfcwdnfl3h3dudaz6uuuw3re4xhpbe.ipfs.w3s.link/magic6.png',
    },
  },
]

 export default function UseCases() {
  return (
    <div className="relative bg-black-50 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-black sm:h-2/3" />
      </div>
      <div className="relative mx-auto lg:mx-12 max-w-full">
        {/* Contenedor del Título y Subtítulo Principal */}
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{  amount: 0.5 }} // Se anima cuando el 50% del elemento está visible
          variants={mainHeaderContainerVariants}
        >
          {/* Título Principal */}
          {/* Nota: Este h1 está vacío. Si quieres un título para la sección, ponlo aquí */}
          <motion.h1
            className="text-3xl font-bold tracking-tight text-cyan-300 sm:text-4xl"
            variants={mainTitleVariants}
          >
            {/* Título de la sección, por ejemplo: "Nuestra Cosmovisión" */}
          </motion.h1>
          {/* Subtítulo/Descripción Principal */}
          <motion.h1
            className="mx-auto mt-3 max-w-2xl text-2xl text-cyan-300 sm:mt-4"
            variants={mainSubtitleVariants}
          >
            El cosmos es el laboratorio en el que la ciencia y la espiritualidad convergen, revelando la interconexión de todas las cosas y la infinita inteligencia de la consciencia Universal
          </motion.h1>
        </motion.div>

        {/* CONTENEDOR PRINCIPAL DE LAS TARJETAS (con animación de entrada) */}
        <motion.div
            className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3"
            initial="hidden"
            whileInView="visible"
            viewport={{  amount: 0.3 }} // Se anima cuando el 30% del contenedor de tarjetas está visible
            variants={postsContainerVariants}
        >
          {posts.map((post) => (
            // CADA TARJETA INDIVIDUAL (con animación de entrada y escalonamiento para su contenido)
            <motion.div
                key={post.id}
                className="flex flex-col overflow-hidden rounded-lg shadow-lg"
                variants={postItemVariants} // Aplica la animación de entrada para la tarjeta
            >
              <div className="flex-shrink-0 flex justify-center">
                {/* Imagen con animación de entrada, clic y hover */}
                <motion.img
                    className="w-3/4 aspect-square object-cover cursor-pointer mx-auto"
                    src={post.imageUrl}
                    alt={post.title}
                    variants={postImageVariants} // Aplica la animación de entrada para la imagen
                    whileTap={{ scale: 0.96 }}
                    whileHover={{ scale: 1.20 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-black p-6">
                <div className="flex-1">
                  {/* Categoría */}
                  <motion.p className="text-sm font-medium text-cyan-400" variants={postTextVariants}>
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </motion.p>
                  {/* Título del Post */}
                  <a href={post.href} className="mt-2 block">
                    <motion.p className="text-xl font-semibold text-gray-300" variants={postTextVariants}>{post.title}</motion.p>
                    {/* Descripción del Post */}
                    <motion.p className="mt-3 text-base text-cyan-400" variants={postTextVariants}>{post.description}</motion.p>
                  </a>
                </div>
                {/* Información del Autor y Fecha */}
                <motion.div className="mt-6 flex items-center" variants={postTextVariants}>
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt={post.author.name || "Author"} />
                    </a>
                  </div>
                  <div className="ml-3">
                    <motion.p className="text-sm font-medium text-cyan-300" variants={postTextVariants}>
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name || "Desconocido"}
                      </a>
                    </motion.p>
                    <motion.div className="flex space-x-1 text-sm text-gray-300" variants={postTextVariants}>
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </motion.div>
                    
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}