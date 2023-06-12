import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: ' Carl Sagan ',
    description: '«La ciencia no es solamente compatible con la espiritualidad, sino que es una profunda fuente de espiritualidad»',
  },
  {
    name: 'Albert Einstein',
    description: '«El hombre encuentra a Dios detrás de cada puerta que la ciencia logra abrir»',
  },
  {
    name: 'Hermes_4:20',
    description: ' «La imaginación da Luz a la vida y alimenta el pensamiento»',
  },
  {
    name: 'Willian Blake',
    description: '«La imaginación es la escencia de nuestra propia existencia,  Somos pura imaginación» ',
  },
  {
    name: 'Albert Einstein',
    description: '«La lógica te llevara de la A a la B, La imaginación a todas partes»',
  },
  {
    name: 'Petrus Jacobus Joubert',
    description: '«La imaginación es el ojo del Alma»',
  },
]

export default function Solution() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-1700 py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Frases</h2>
          <p className="mt-4 text-lg text-gray-500">
            
          </p>
        </div>
        <dl className="mt-12 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-4 lg:gap-x-8">
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
  )
}