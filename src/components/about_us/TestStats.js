
const stats = [
    { label: 'Founded', value: '2021' },
    { label: 'Employees', value: '5' },
    { label: 'Beta Users', value: '521' },
    { label: 'Raised', value: '$25M' },
  ]
  
  export default function TestStats() {
    return (
      <div className="relative bg-white py-16 sm:py-24">
        <div className="lg:mx-12 lg:grid lg:max-w-full lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
          <div className="relative sm:py-16 lg:py-0">
            <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
              <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-gray-50 lg:right-72" />
              <svg
                className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12"
                width={404}
                height={392}
                fill="none"
                viewBox="0 0 404 392"
              >
                <defs>
                  <pattern
                    id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={392} fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
              </svg>
            </div>
            <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
              {/* Testimonial card*/}
              <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src='https://bafybeiesg3rkrhlrzawkzir7db622t4wfaxbcmygmkd47xxj6rxrwc66fa.ipfs.w3s.link/cosmic.jpg'
                  alt=""
                />
                <div className="absolute inset-0 bg-cyan-500 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-600 via-aqua-300 opacity-90" />
                <div className="relative px-8">
                  <div>
                  </div>
                  <blockquote className="mt-8">
                    <div className="relative text-lg font-medium text-white md:flex-grow">
                      <svg
                        className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-cyan-400"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                        Vamos a trascender los limites de existencia en la  humanidad interpretando el lenguaje de la naturaleza para entrar en armonía con el universo.
                      </p>
                    </div>
  
                    <footer className="mt-4">
                      <p className="text-xl font-semibold text-white">
                        -Jorge Barrantes. Fundador y CEO Co§mic Imagination</p>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
  
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
            {/* Content area */}
            <div className="pt-12 sm:pt-16 lg:pt-20">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Nuestro propósito es:
              </h2>
              <div className="mt-6 space-y-6 text-gray-500">
                <p className="text-lg">
                Unificar los aspectos más elevados de la ciencia y la espiritualidad para crear soluciones innovadoras y conscientes que promuevan la evolución y el bienestar de la humanidad y del cosmos en su conjunto. Comprendemos que el progreso tecnológico por sí solo no es suficiente para abordar los desafíos actuales que enfrentamos como sociedad. Es necesario integrar una perspectiva más amplia y profunda que honre nuestra conexión intrínseca con el cosmos y nos guíe hacia un futuro sostenible y armonioso.
                </p>    
                <p className="text-base leading-7">
                En Co§mic Imagination, creemos que la tecnología y la espiritualidad no son entidades separadas, sino aspectos complementarios de nuestra existencia. Reconocemos que el bienestar humano está estrechamente vinculado al bienestar del entorno en el que vivimos. Por lo tanto, adoptamos un enfoque integral en nuestras soluciones, considerando tanto el impacto humano como el impacto en el ecosistema global.
                Únete a nosotros en esta emocionante aventura hacia la integración del conocimiento científico y espiritual. Juntos, podemos imaginar y crear un futuro donde la tecnología y la espiritualidad trabajen en armonía para el beneficio de todos. Explora nuestras soluciones, sé parte de nuestra comunidad y caminemos juntos hacia una nueva era de conciencia y bienestar cósmico.
                </p>
              </div>
            </div>
  
            {/* Stats section */}
            <div className="mt-10">
              <dl className="grid grid-cols-2 gap-x-4 gap-y-8">
                {stats.map((stat) => (
                  <div key={stat.label} className="border-t-2 border-gray-100 pt-6">
                    <dt className="text-base font-medium text-gray-500">{stat.label}</dt>
                    <dd className="text-3xl font-bold tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10">
                <a href="#" className="text-base font-medium text-cyan-500">
                  Learn more about how we're changing the world
                  <span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }