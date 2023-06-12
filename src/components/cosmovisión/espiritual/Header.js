export default function Header() {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto lg:mx-12 max-w-full px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl py-9 pt-6 font-bold tracking-tight text-cyan-500 sm:text-6xl">
             Co§movisión Espiritual
            </h1>
              <h2 className="mt-15 text-2xl leading-6 text-gray-900">
              Un Enfoque Integrador de la Geometría Sagrada, la Alquimia Occidental y la Metafísica:

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
                          src="https://bafybeigkztvpl5zfpp2uppacscfw7c3dcidczopb6robalkl757afcpole.ipfs.w3s.link/66.jpeg" 
                          alt=""
                          className="relative mx-auto object-cover object-center h-full w-full"
                        />
                      </div>
                      <div className=" relative  mx-auto overflow-hidden rounded-lg" style={{ width: "300px", height: "200px" }}>
                        <img                   
                          src="https://bafkreidolriese7detzb7gzfyg6of4n6kw5qaeg725ohioqm5mslbglr2m.ipfs.dweb.link/?filename=c%26e.jpeg "                        
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
