import {
    SignalIcon,
    BeakerIcon,
    SparklesIcon,
    EyeIcon,
    
    
  } from '@heroicons/react/24/outline'
  
  const transferFeatures = [
    {
      id: 1,
      name: 'Física cuántica: La danza de las partículas ',
      description:" La física cuántica se ocupa del estudio de las partículas subatómicas y sus comportamientos. A nivel cuántico, las partículas no se comportan como objetos sólidos y predecibles, sino más bien como ondas de probabilidad que existen en múltiples estados simultáneamente. El principio de superposición nos dice que una partícula puede estar en varios lugares o estados al mismo tiempo hasta que se realice una medición. La física cuántica también nos muestra que la mera observación de una partícula afecta su estado. El famoso experimento de la doble rendija revela que una partícula puede comportarse como  partícula o como onda dependiendo de si se observa o no. Esto implica que la conciencia del observador está intrínsecamente relacionada con la manifestación de la realidad física. ",     
      icon: SparklesIcon,
    },
    {
      id: 2,
      name: 'Cimática: La geometría del sonido y la forma',
      description:
        'La cimática es el estudio de los patrones vibracionales y la forma que se generan a través de la interacción del sonido con la materia. Al someter un medio, como arena o líquido, a diferentes frecuencias de sonido, se pueden observar patrones geométricos fascinantes que surgen en la superficie. Estos patrones cimáticos demuestran cómo el sonido, una forma de energía vibracional, tiene la capacidad de organizar y estructurar la materia. La cimática nos muestra que las vibraciones son la base de la creación de formas en el mundo físico. Desde la disposición de los átomos en una molécula hasta la configuración de los sistemas planetarios, los patrones vibracionales subyacen a la estructura y la armonía del universo. ',
      icon:  SignalIcon,
    },
    {
      id: 3,
      name: 'Psicología transpersonal: Explorando la conciencia más allá de los límites convencionales',
      description:
        'La psicología transpersonal se enfoca en la dimensión espiritual y trascendental de la experiencia humana. Va más allá de los límites de la mente individual y explora la conciencia como una entidad interconectada y universal. La psicología transpersonal reconoce la existencia de estados de conciencia expandidos y la posibilidad de trascender la identidad egoica para acceder a niveles más profundos de la experiencia.',
      icon:  EyeIcon,
    },
  ]
  export default function Definition() {
    return (
      <div className="overflow-hidden  py-16 lg:py-24">
        <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-1700 lg:px-8">
          <svg
            className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
          </svg>
  
          <div className="relative">
            <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
            Una nueva cosmovisión científica:
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            La física cuántica, la cimática y la psicología transpersonal son disciplinas que han revolucionado nuestra comprensión del mundo físico y de la experiencia humana. A medida que exploramos los fenómenos a nivel microscópico, desde las partículas subatómicas hasta los patrones vibracionales de la materia, y expandimos nuestra comprensión de la conciencia y la espiritualidad, nos encontramos con una cosmovisión científica emergente que desafía las ideas tradicionales y nos invita a considerar la interconexión de todas las cosas.
            En este artículo, exploraremos los conceptos clave de estas tres disciplinas y cómo se entrelazan para formar una cosmovisión científica basada en la interdependencia y la unidad fundamental de la realidad.
            </p>
          </div>
  
         
            <div className="relative">
  
              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-cyan-500 text-white">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
  
            <div className="relative -mx-4 mt-10 lg:mt-0" aria-hidden="true">
              <svg
                className="absolute left-1/2 -translate-x-1/2 translate-y-16 transform lg:hidden"
                width={784}
                height={404}
                fill="none"
                viewBox="0 0 784 404"
              >
                <defs>
                  <pattern
                    id="ca9667ae-9f92-4be7-abcb-9e3d727f2941"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={784} height={404} fill="url(#ca9667ae-9f92-4be7-abcb-9e3d727f2941)" />
              </svg>
              <img
                className="relative mx-auto mt-12"
                width={490}
                src="https://bafybeieohobmxpqfwzww2vpr674a5ht2n4mrnuxhkclzswdqps7lnx5p3m.ipfs.w3s.link/693.jpeg"
                alt=""
              />
            </div>
          </div>
  
          <svg
            className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
          </svg>
  
         
          </div>
        
     
    )
  }
  