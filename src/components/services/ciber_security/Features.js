import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Evaluación y análisis de riesgos',
    description: 'Realizamos una evaluación exhaustiva de tus sistemas y aplicaciones para identificar posibles vulnerabilidades. ',
  },
  { name: 'Protección de la red', description: 'Implementamos medidas de seguridad sólidas para proteger tu infraestructura de red. Esto incluye el establecimiento de cortafuegos, la segmentación de redes, el monitoreo constante y la detección temprana de intrusos.' },
  {
    name: 'Protección de aplicaciones:',
    description: 'Tus aplicaciones son puntos de acceso críticos y deben estar protegidas. Realizamos pruebas exhaustivas para detectar vulnerabilidades y asegurarnos de que tus aplicaciones estén actualizadas y protegidas contra ataques ',
  },
  { name: 'Educación y concienciación: ', description: 'Reconocemos que los empleados son una línea de defensa crucial en la ciberseguridad. Ofrecemos programas de capacitación y concienciación para educar a tu equipo sobre las mejores prácticas de seguridad y cómo reconocer y responder a posibles amenazas.' },
  { name: '', description: 'En Co§mic Imagination, nos comprometemos a proteger tu empresa y tu reputación en línea' },
  { name: '', description: 'Nuestro enfoque holístico de la ciberseguridad garantiza que todas las áreas críticas estén protegidas, desde la infraestructura de red hasta las aplicaciones y los datos sensibles.' },
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-1700 py-12 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-cyan-500">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">All-in-one platform</p>
          <p className="mt-4 text-lg text-gray-500">
          Nuestros servicios de ciberseguridad incluyen:
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