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
      name: 'Punto de vista ',
      description:" La Cosmovisión Universal reconoce que tanto la ciencia como la espiritualidad son caminos válidos hacia la comprensión de la realidad. La ciencia nos ofrece un marco basado en la observación, la experimentación y la lógica, mientras que la espiritualidad se basa en la experiencia subjetiva, la conexión con lo trascendente y la exploración de la conciencia. Ambos enfoques tienen sus propias fortalezas y limitaciones, pero juntos pueden proporcionar una visión más completa y enriquecedora de la existencia.",     
      icon: SparklesIcon,
    },
    {
      id: 2,
      name: 'Perspectivas',
      description:
        'Desde la perspectiva científica, hemos logrado grandes avances en la comprensión de las leyes naturales, el funcionamiento del universo y la interconexión de todas las cosas. La cosmología, la física cuántica, la biología y muchas otras disciplinas científicas nos han revelado la intrincada red de relaciones y procesos que sustentan la realidad. Estos conocimientos científicos nos permiten apreciar la belleza y la complejidad del cosmos, así como reconocer nuestro papel como seres interdependientes en el tejido de la existencia. Por otro lado, la espiritualidad nos ofrece una visión holística y trascendente de la realidad. A través de prácticas como la meditación, la introspección y la conexión con lo sagrado, podemos explorar nuestra naturaleza esencial y nuestra relación con algo más grande que nosotros mismos. La espiritualidad nos brinda un sentido de propósito, conexión y trascendencia, y nos ayuda a cultivar valores como el amor, la compasión y la sabiduría en nuestra vida cotidiana. ',
      icon:  FireIcon,
    },
    {
      id: 3,
      name: 'Proposito',
      description:
        'La Cosmovisión Universal busca integrar estos dos enfoques complementarios para lograr una visión más completa y enriquecedora del cosmos. Reconoce que la realidad es multidimensional y que existen niveles de existencia que trascienden nuestra comprensión científica actual. Al mismo tiempo, valora el conocimiento científico como una herramienta poderosa para explorar y comprender el funcionamiento del universo. Reconocemos que el bienestar del cosmos está intrínsecamente vinculado a nuestra propia evolución y transformación. Como seres conscientes, tenemos la capacidad de impactar y ser impactados por el cosmos en su totalidad. Nuestras acciones, pensamientos y emociones causan efectos a través de la red interconectada de la existencia, influyendo en el bienestar del mundo que nos rodea.',
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
             Imaginación Co§mica:
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
            En el vasto espectro del conocimiento humano, tanto el científico como el espiritual han desempeñado roles importantes en la búsqueda de respuestas y significado. Sin embargo, estos dos enfoques a menudo se han considerado opuestos o incluso irreconciliables. La Cosmovisión Universal es un intento de unificar y sintetizar el conocimiento científico y espiritual en un todo coherente que busca mejorar el bienestar del cosmos en su totalidad. 
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
                src="https://bafybeibbxuxlewf4nvltqryljg7556e5iebxumycwvbnpui2ebwh3p7i44.ipfs.w3s.link/thoth.jpeg"
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
  