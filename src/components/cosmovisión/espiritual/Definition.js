import {
    SignalIcon,
    BeakerIcon,
    SparklesIcon,
    EyeIcon,
    FireIcon,
    
    
  } from '@heroicons/react/24/outline'
  
  const transferFeatures = [
    {
      id: 1,
      name: 'Geometría Sagrada: El Lenguaje Universal de la Creación ',
      description:" La Geometría Sagrada es un antiguo lenguaje simbólico que se encuentra en todas las culturas y tradiciones espirituales del mundo. Se basa en la comprensión de que las formas geométricas tienen una cualidad inherente que trasciende meramente lo físico. Estas formas, como el círculo, el triángulo, la espiral , el mandala o los sólidos platónicos, representan principios universales y arquetipos que se encuentran en todas las dimensiones de la existencia. La Geometría Sagrada nos enseña que la forma y la estructura son fundamentales para comprender la creación. A través de la contemplación y meditación de estos patrones geométricos, podemos acceder a una comprensión más profunda de la interconexión entre todas las cosas y la armonía inherente que subyace en el tejido del universo. La Geometría Sagrada nos invita a reconocer la belleza y la perfección que se manifiestan en el diseño divino de la realidad.",     
      icon: SparklesIcon,
    },
    {
      id: 2,
      name: 'Alquimia Occidental',
      description:
        'La Alquimia Occidental es un sistema espiritual y filosófico que busca la transmutación de la materia y el espíritu. En su forma más profunda, la alquimia no se limita a la transformación de los metales en oro, sino que también implica la transmutación del ser humano en su forma más elevada y pura. La alquimia busca la unión de los opuestos y la integración de los aspectos materiales y espirituales de la existencia.La alquimia nos enseña que cada ser humano es un microcosmos que refleja el macrocosmos. A través del trabajo interior y la integración de nuestras polaridades internas, podemos alcanzar un estado de armonía y equilibrio. La alquimia también nos invita a explorar los misterios ocultos de nuestra propia naturaleza y a descubrir nuestro potencial para la autorrealización y la trascendencia. ',
      icon:  FireIcon,
    },
    {
      id: 3,
      name: 'Metafísica: La Exploración de lo Trascendental',
      description:
        'La Metafísica se ocupa de los principios y conceptos más allá de la física y la realidad material. Esta disciplina nos invita a explorar las preguntas fundamentales sobre el propósito de la existencia, la naturaleza de la conciencia y la relación entre el ser humano y el universo.',
      icon:  EyeIcon,
    },
  ]
  export default function Definition() {
    return (
      <div className="overflow-hidden  py-10 lg:py-24">
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
             Una nueva perspectiva hacia el mundo espiritual:
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            En el camino de búsqueda de significado y trascendencia, diversas tradiciones y disciplinas han surgido, ofreciendo perspectivas únicas sobre la naturaleza de la realidad y el papel del ser humano en el universo. Tres de estas corrientes, la Geometría Sagrada, la Alquimia Occidental y la Metafísica, convergen en una cosmovisión espiritual que abarca tanto lo tangible como lo invisible, lo material y lo etéreo. En este artículo, exploraremos estos tres pilares y cómo se entrelazan para brindar una visión integral y enriquecedora de la existencia humana.
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
                className="relative mt-12 mx-auto"
                width={490}
                src="https://bafybeicxxh3dpeizhrnfbyls26j3go7horc2pd5fzwwiuuvi7js2ir7tpq.ipfs.w3s.link/geo.jpeg"
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
  