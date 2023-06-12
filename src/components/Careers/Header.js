export default function Header() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto lg:mx-12 max-w-full px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl py-9 pt-6 font-bold tracking-tight text-gray-900 sm:text-6xl">
             Co§mic Imagination Specialists
            </h1>
            <p className="mt-12 text-xl leading-6 text-gray-900">
            Nuestro equipo multidisciplinario está formado por científicos, ingenieros, expertos en tecnología y profesionales espirituales comprometidos con esta misión. Nos esforzamos por fusionar los principios científicos rigurosos con una comprensión holística y trascendental de la realidad. A través de nuestra investigación, desarrollo de software y colaboraciones, buscamos ofrecer soluciones que beneficien a individuos, comunidades y al entorno natural.
            
            </p >
            <p className="mt-12 text-xl leading-6 text-gray-900">Nos esforzamos por desarrollar aplicaciones y software que inspiren a las personas a explorar su potencial interior, a conectarse con su ser esencial y a encontrar un propósito más elevado en su vida. Nuestros productos están diseñados para fomentar la conciencia, la introspección y la conexión con lo sagrado en la era digital. A través de nuestras soluciones tecnológicas, buscamos promover el crecimiento personal, la sanación, la armonía interpersonal y una mayor comprensión de nuestra interdependencia con el cosmos.</p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-full"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img                                                     
                          src="https://ichef.bbci.co.uk/news/640/cpsprodpb/12273/production/_104155347_6-1.jpg"
                          alt=""
                          className="h-64 w-44 overflow-hidden rounded-lg"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img                           
                          src="https://vivancoculturadevino.es/blog/wp-content/uploads/2019/01/pitagoras-filosofo.png"                         
                          alt=""
                          className="relative mx-auto h-96 lg:mx-12 max-w-full"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img                            
                         src="https://c1.wallpaperflare.com/preview/161/528/949/buddha-meditation-relaxation-meditate.jpg"                                     
                          alt=""
                          className="relative mx-auto h-96 lg:mx-12 max-w-full"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img                                                                                   
                          src="https://www.omradio.com.mx/sad/imagenes/articulos/91.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img                        
                         src="https://i.pinimg.com/736x/85/79/00/857900e024309a3e5d6d0f0001a8b6f9.jpg"
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img                                          
                          src="https://images.tcdn.com.br/img/img_prod/680735/camiseta_nikola_tesla_1295_2_a0b11212bc70ccf4b9a313b7ab9cdcd1.jpg" 
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img                   
                          src="https://i.pinimg.com/originals/33/3f/16/333f167b06dbff318e79f55b91ad88b1.jpg"                        
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}