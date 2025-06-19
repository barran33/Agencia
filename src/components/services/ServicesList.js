import React from 'react';
import ServiceCard from "./ServiceCard"; // Asegúrate de que la ruta sea correcta a tu ServiceCard

const SERVICE_DATA = [
  {
    id: 1,
    title: 'Desarrollo Web',
    description: 'Creamos sitios web y aplicaciones a medida, desde el diseño responsive hasta la implementación de funcionalidades avanzadas y comercio electrónico, para asegurar una presencia digital impactante y efectiva.',
    href: '/servicios/desarrollo_web',
    img: 'https://i.ibb.co/p6Mch1FC/programming3.png'
  },
  {
    id: 2,
    title: 'Bug Bounty',
    description: 'Ofrecemos servicios especializados de Bug Bounty diseñados para identificar y mitigar vulnerabilidades en tus sistemas antes de que puedan ser explotadas.',
    href: '/servicios/bug_bounty',
    img: 'https://i.ibb.co/35BBfySK/hacker3.png'
  },
  {
    id: 3,
    title: 'Ciberseguridad',
    description: 'Ofrecemos soluciones robustas de ciberseguridad para proteger tus datos y sistemas contra amenazas. Implementamos firewalls, cifrado de datos y auditorías de seguridad para garantizar la integridad de tu información.',
    href: '/servicios/security',
    img: 'https://i.ibb.co/pv1B7wmK/cybercrime3.png'
  },
  // ... más servicios
];

function ServicesList({ section_title }) {
    return(
        <>
            {/* El div principal ahora tiene el fondo negro y asegura que ocupe al menos toda la altura de la vista */}
            <div className="relative bg-black pb-20 lg:px-8 lg:pb-28 min-h-screen"> 
                {/* Eliminamos el div absoluto que causaba la parte blanca al no cubrir todo */}
                {/* <div className="absolute inset-0">
                    <div className="h-1/3 bg-black sm:h-2/3" />
                </div> */}
                <div className="relative mx-auto max-w-full">
                    <div className="text-left">
                        <h2 className="text-3xl font-bold tracking-tight text-cyan-400 sm:text-4xl">{section_title}</h2>
                    </div>
                    <div className="mx-auto mt-14 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
                        {SERVICE_DATA.map((post, index) => (
                            <ServiceCard key={post.id} data={post} index={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ServicesList;