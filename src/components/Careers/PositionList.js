import { CheckCircleIcon, ChevronRightIcon, EnvelopeIcon } from '@heroicons/react/20/solid';
import { motion, useInView } from 'framer-motion'; // Importa motion y useInView
import React, { useRef } from 'react'; // Importa useRef

const applications = [
    {
      applicant: {
        name: 'Ricardo Cooper',
        email: 'ricardo.cooper@39.com',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      date: '2023-01-07',
      dateFull: 'Junio 9, 2023',
      stage: 'Completed phone screening',
      href: '#',
    },
    {
      applicant: {
        name: 'Kristen Ramos',
        email: 'kristen.ramos@999.com',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      date: '2023-01-07',
      dateFull: 'Junio 9, 2023',
      stage: 'Completed phone screening',
      href: '#',
    },
    {
      applicant: {
        name: 'Ted Fox',
        email: 'ted.fox@363.com',
        imageUrl:
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      date: '2023-01-07',
      dateFull: 'Junio 9, 2023',
      stage: 'Completed phone screening',
      href: '#',
    },
  ]

function PositionsList(){
    // Refs para cada sección que queremos animar
    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, {  amount: 0.5 }); // Título y párrafo

    const filterRef = useRef(null);
    const isFilterInView = useInView(filterRef, {  amount: 0.5 }); // Filtro

    const listRef = useRef(null);
    const isListInView = useInView(listRef, { amount: 0.2 }); // Lista de aplicaciones

    // Variantes para elementos de texto (título y párrafo)
    const textVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    // Variantes para el contenedor de texto (para stagger)
    const textContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    // Variantes para el filtro
    const filterVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" },
        },
    };

    // Variantes para los elementos de la lista
    const listItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    // Variantes para el contenedor de la lista (para stagger)
    const listContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Retraso entre cada elemento de la lista
            },
        },
    };


    return(
        <div className="max-w-full mx-12 bg-black">
           <motion.div
                ref={headerRef}
                variants={textContainerVariants}
                initial="hidden"
                animate={isHeaderInView ? "visible" : "hidden"}
            >
                <motion.h2
                    variants={textVariants}
                    className="text-4xl font-seminbold text-cyan-400 pb-6"
                >
                    Open Positions
                </motion.h2>
                <motion.p
                    variants={textVariants}
                    className="text-xl font-semibold text-gray-300 max-w-3xl leading-9"
                >
                    Let's write some beautifull code and make smart designs. This is what we're crazy about, and we're looking for the ones who feel the same
                </motion.p>
            </motion.div>

            <motion.div
                ref={filterRef}
                variants={filterVariants}
                initial="hidden"
                animate={isFilterInView ? "visible" : "hidden"}
                className='grid grid-cols-12 pt-6'
            >
                <div className='col-span-3'> {/* Corregido 'cpl-span-3' a 'col-span-3' */}
                    <label htmlFor="location" className="block text-sm font-medium text-cyan-400">
                        Location
                    </label>
                    <select
                        id="location"
                        name="location"
                        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-cyan-400 focus:outline-none focus:ring-cyan-600 sm:text-sm"
                        defaultValue="Canada"
                    >
                        <option>United States</option>
                        <option>Canada</option>
                        <option>Mexico</option>
                        <option>Costa Rica</option>
                        <option>Perù</option>
                        <option>Colombia</option>
                        <option>España</option>
                    </select>
                </div>
            </motion.div>

           <motion.div
                ref={listRef}
                variants={listContainerVariants}
                initial="hidden"
                animate={isListInView ? "visible" : "hidden"}
                className="overflow-hidden bg-black shadow sm:rounded-md py-12"
            >
                <ul role="list" className="divide-y divide-gray-200">
                    {applications.map((application) => (
                        <motion.li
                            key={application.applicant.email}
                            variants={listItemVariants} // Aplica animación a cada elemento de la lista
                        >
                            <a href={application.href} className="block hover:bg-cyan-200">
                                <div className="flex items-center px-4 py-4 sm:px-6">
                                    <div className="flex min-w-0 flex-1 items-center">
                                        <div className="flex-shrink-0">
                                            <img className="h-12 w-12 rounded-full" src={application.applicant.imageUrl} alt="" />
                                        </div>
                                        <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
                                            <div>
                                                <p className="truncate text-sm font-medium text-cyan-400">{application.applicant.name}</p>
                                                <p className="mt-2 flex items-center text-sm text-gray-400">
                                                    <EnvelopeIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                                    <span className="truncate">{application.applicant.email}</span>
                                                </p>
                                            </div>
                                            <div className="hidden md:block">
                                                <div>
                                                    <p className="text-sm text-cyan-400">
                                                        Applied on <time dateTime={application.date}>{application.dateFull}</time>
                                                    </p>
                                                    <p className="mt-2 flex items-center text-sm text-gray-300">
                                                        <CheckCircleIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-green-400" aria-hidden="true" />
                                                        {application.stage}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                </div>
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </div>
    )
}

export default PositionsList