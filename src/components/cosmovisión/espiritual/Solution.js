import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: ' Hermes:420',
    description: '«Entrenar el alma, el cuerpo y la mente para que trabajen en armonía NO es algo fácil. Es un esfuerzo constante de Todos los días. Pero es deber de cualquier ser humano que quiera aprender a  dessarrollar su maximo potencial»',
  },
  {
    name: 'Platón',
    description: '«Si no conoces la geometría, no entres»',
  },
  {
    name: 'Seneca',
    description: ' «Si vives en armonía con la naturaleza nunca serás pobre; si vives de acuerdo a lo que otros piensan, nunca serás rico»',
  },
  {
    name: 'Kepler',
    description: '«Dios es geometría» ',
  },
  {
    name: 'Napoleón Hill',
    description: '«Lo que la mente pueda concebir y creer, es lo que la mente puede Crear»',
  },
  {
    name: 'Nikola Tesla',
    description: '«El día en que la ciencia comience a estudiar los fenómenos no físicos, progresará más en una década que en todos los siglos anteriores de su existencia»',
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