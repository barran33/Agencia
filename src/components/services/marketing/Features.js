import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Estrategia de marketing personalizada:',
    description: ' Trabajaremos con el cliente para comprender sus objetivos comerciales y desarrollar una estrategia de marketing personalizada que se adapte a sus ideas,  necesidades y presupuesto. Utilizamos una combinación de tácticas tradicionales y digitales para maximizar el impacto y alcanzar a tu audiencia objetivo.',
  },
  { name: 'Marketing digital:', description: 'Nuestro equipo de expertos en marketing digital se encargará de aumentar tu visibilidad en línea y mejorar tu presencia en los motores de búsqueda.' },
  {
    name: 'Análisis y seguimiento',
    description: 'Realizamos un seguimiento constante de tus actividades de marketing y analizamos los resultados para optimizar continuamente nuestras estrategias. Utilizamos herramientas de análisis de datos para medir el rendimiento de tus campañas y realizar ajustes necesarios para mejorar los resultados.',
  },
  { name: 'Publicidad en línea', description: 'Desarrollamos campañas de publicidad en línea efectivas para aumentar la visibilidad de tu marca y atraer tráfico cualificado a tu sitio web.' },
  { name: '', description: 'En Co§mic Imagination, nos apasiona ayudarte a alcanzar el éxito en el mundo del marketing.' },
  { name: '', description: 'Nuestro enfoque estratégico nos permiten ofrecerte soluciones de marketing efectivas y adaptadas a tu empresa.' },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-1700 py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-cyan-500">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">All-in-one platform</p>
          <p className="mt-4 text-lg text-gray-500">
            Nuestro servicio de marketing incluye:
          </p>
        </div>
        <div className="mt-12 lg:col-span-2 lg:mt-0">
          <dl className="space-y-10 sm:grid sm:grid-flow-col sm:grid-cols-2 sm:grid-rows-4 sm:gap-x-6 sm:gap-y-10 sm:space-y-0 lg:gap-x-8">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <CheckIcon className="absolute h-6 w-6 text-green-500" aria-hidden="true" />
                  <p className="ml-9 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-9 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}