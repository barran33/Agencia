export default function Header() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto lg:mx-12 max-w-full px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl py-9 pt-6 font-bold tracking-tight text-cyan-500 sm:text-6xl">
             Co§movisión Científica
            </h1>
              <h2 className="mt-15 text-2xl leading-6 text-gray-900">
              La convergencia de la física cuántica, la cimática y la psicología transpersonal: 

              {/* Resto del contenido del artículo */}

              </h2>
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
                  <div className=" relative mx-auto overflow-hidden rounded-lg" style={{ width: "300px", height: "200px" }}>
                        <img                                          
                          src="https://bafybeiebi57flnmeilrgy6xwvub3bwkevu3w2zndvyhgeqessb2isqaty4.ipfs.w3s.link/fisica-cuantica.jpeg" 
                          alt=""
                          className="relative mx-auto object-cover object-center h-full w-full"
                        />
                      </div>
                      <div className=" relative  mx-auto overflow-hidden rounded-lg" style={{ width: "300px", height: "200px" }}>
                        <img                   
                          src="https://bafybeigj3gmzu4kcufu62mw75c4k67oqwwtiussrstmgxver5a4gga6pam.ipfs.w3s.link/shutterstock.png"                        
                          alt=""
                          className="relative object-cover object-center h-full w-full"
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
    
  )
}
