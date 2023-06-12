import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Diseño web creativo:',
    description: 'Creamos diseños web atractivos , funcionales y unicos que reflejen la identidad de tu marca y se adapten a tus necesidades específicas. Nuestros diseñadores trabajan en estrecha colaboración contigo para capturar tu visión y crear una experiencia de usuario atractiva.',
  },
  { name: 'Desarrollo Full Stack:', description: 'Nuestros desarrolladores web dominan una amplia gama de tecnologías y lenguajes de programación para garantizar que tu aplicación web sea sólida tanto en el front-end como en el back-end. Utilizamos las mejores prácticas de desarrollo para garantizar la calidad, el rendimiento y la seguridad de tu aplicación.' },
  {
    name: 'Integraciones y APIs',
    description: 'Si necesitas integrar tu aplicación web con otros sistemas o servicios, estamos aquí para ayudarte. Nuestro equipo tiene experiencia en la creación de integraciones fluidas y en el desarrollo de APIs personalizadas para garantizar una comunicación perfecta entre tu aplicación y otras plataformas.',
  },
  { name: 'Aplicaciones web responsivas:', description: 'Sabemos que tus usuarios acceden a tus aplicaciones web desde diferentes dispositivos y pantallas. Por eso, desarrollamos aplicaciones web responsivas que se adaptan perfectamente a cualquier dispositivo, brindando una experiencia consistente y agradable sin importar el tamaño de la pantalla.' },
  { name: 'Pruebas rigurosas y garantía de calidad: ', description: 'Antes de lanzar tu aplicación web, nos aseguramos de que pase por pruebas rigurosas para garantizar su funcionalidad, rendimiento y seguridad. Nuestra garantía de calidad nos asegura de que tu aplicación cumpla con los más altos estándares.' },
  { name: '', description: 'En Co§mic Imagination, estamos comprometidos a hacer realidad tus sueños digitales y a ofrecerte soluciones web de calidad que te hagan destacar.' },
 
]

export default function Features() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-1700 py-16 px-4 sm:px-6 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:py-24 lg:px-8">
        <div>
          <h2 className="text-lg font-semibold text-cyan-500">Everything you need</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900">All-in-one platform</p>
          <p className="mt-4 text-lg text-gray-500">
          Nuestro servicio de desarrollo de aplicaciones web incluye:
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