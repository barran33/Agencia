import moment from "moment"
import { useEffect, useRef } from "react" 
import { Link } from "react-router-dom"
import { motion, useInView } from 'framer-motion'; 


function BlogCardHorizontal({data, index}){
    // --- Framer Motion Hooks y Variantes ---
    const cardRef = useRef(null);
    const isCardInView = useInView(cardRef, {  amount: 0.2 }); // Animar cuando el 20% de la tarjeta esté visible, solo una vez.

    const cardVariants = {
        hidden: { opacity: 0, y: 50 }, 
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6, 
                ease: "easeOut", 
                delay: index * 0.1 
            }
        },
    };
    // --- Fin Framer Motion Hooks y Variantes ---

    return(
        <motion.li // Cambiamos <li> por <motion.li>
            ref={cardRef} // Asignamos la referencia
            variants={cardVariants} // Asignamos las variantes de animación
            initial="hidden" // Estado inicial
            animate={isCardInView ? "visible" : "hidden"} 
        >
            <Link to={`/blog/${data.slug}`}
                onMouseEnter={()=>{
                    const img = document.getElementById(index)
                    if(img) img.classList.add('object-fill') // Añade verificación para img
                    const title = document.getElementById(`title`+data.id)
                    if(title) title.classList.add('text-cyan-500') // Añade verificación para title
                }}
                onMouseLeave={()=>{
                    const img = document.getElementById(index)
                    if(img) img.classList.remove('object-fill') // Añade verificación para img
                    const title = document.getElementById(`title`+data.id)
                    if(title) title.classList.remove('text-cyan-500') // Añade verificación para title
                }}
            className=" block bg-black relative block hover:shadow-3xl  rounded-lg transition duration-300 ease-in-out">
                <div className="flex items-center  my-10 ">
                  <div className="lg:flex min-w-0 lg:flex-1 items-center">
                    <div className="flex-shrink-0">
                      <img id={index} className="h-60 w-60  object-cover rounded-lg" src={data.thumbnail} alt={data.title} /> {/* Añadido alt text */}
                    </div>
                    <div className="min-w-0 flex-1 px-8  ">
                    <p id={`title`+data.id} className=" lg:mt-0 text-cyan-400  hover:text-gray-300 lg:absolute lg:top-4 leading-10 text-3xl pb-4 font-semibold transition duration-300 ease-in-out">{data.title.length > 80 ? data.title.slice(0,79):data.title}</p>
                    <div className="lg:absolute lg:top-28">

                        <span className=" hover:text-gray-300  mx-1 font-medium text-cyan-400 text-sm "><Link to={`/category/${data.category.slug}`}>{data.category.name}</Link></span> <span className="text-gray-300">&middot;</span>
                        <span className="mt-2 ml-2 mr-1 font-medium text-gray-300 text-sm">{moment(data.published).format('LL')}</span> <span className="text-gray-300">&middot;</span>
                        <span className="mt-2 mx-2 font-medium text-gray-300 text-sm">{data.time_read} min read</span>
                        <p className="mt-4 text-lg font-regular text-cyan-400 leading-8">{data.description.length > 300 ? data.description.slice(0,149):data.description}</p>
                    </div>
                  </div>
                </div>
                </div>
              </Link>
            </motion.li> 
          )
      }
      export default BlogCardHorizontal