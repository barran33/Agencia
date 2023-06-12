import { CheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Nikola Tesla',
    description: ' «Si lo que quieres es encontrar los secretos del universo, piensa en términos de energía, frecuencia y vibración»',
  },
  {
    name: 'Max Planck',
    description: '«Toda la materia se origina y existe sólo por la virtud de una fuerza. Debemos asumir que detrás de esta fuerza existe una mente consciente e inteligente. Esta mente es la matriz de toda la materia»',
  },
  {
    name: 'Carl G. Jung',
    description: '«La Naturaleza, la psique y la vida me parecen la divinidad Desplegada» ',
  },
  {
    name: 'Pitágoras',
    description: '«Hay Geometría en el zumbido de las cuerdas, hay música en la separación de las esferas»',
  },
  {
    name: 'Richard Feynman',
    description: '«El primer principio es que no debes engañarte a ti mismo y eres la persona más fácil de engañar. Una vez que no te engañas a ti mismo, es fácil que no engañes a los otros científicos.»',
  },
  {
    name: 'Erwin Schrodinger',
    description: '«Tanto física cuántica revela una unidad básica del universo. La Obra más fina es la creada por Dios, Según los principios de la Fisíca cuántica»',
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