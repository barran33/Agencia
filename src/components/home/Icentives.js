const incentives = [
    {
      name: 'Ciencia',
      imageSrc: 'https://bafybeiadplr5swigsgulzt4iujx6i4hoa4jjmnrv4yqtmhsr3trfxfzlvi.ipfs.w3s.link/36.png',
      description: "La ciencia sin espiritualidad es coja, la espiritualidad sin ciencia es ciega.",
    },
    {
      name: 'Espiritualidad',
      imageSrc: 'https://bafybeid4g63jyjr7wbuktr6jpd6dpah2zslwtpfcm25o5xad4n65potct4.ipfs.w3s.link/396.png',
      description: "La espiritualidad nos conecta con la esencia del universo, y la ciencia nos desvela sus secretos.",
    },
    {
      name: 'Tecnología',
      imageSrc: 'https://bafybeicjuyisq7olx2rhpxjx77bud365bdqdq5tb7hsenilpsk7buexrjq.ipfs.w3s.link/99.png',
      description:
        "La tecnología es solo una herramienta, pero puede ser utilizada para llevar a cabo grandes cosas cuando se combina con la sabiduría espiritual",
    },
  ]
  
  export default function Incentives() {
    return (
      <div className="bg-white">
        <div className="mx-auto  py-24  sm:py-32 l">
          <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900">
                Unificamos el conocimiento científico y espiritual para mejorar el bienestar del Cosmos en General
              </h1>
              <h2 className="mt-4 text-gray-500">
              La tecnología es una extensión de nuestra capacidad humana, pero es nuestra sabiduría espiritual la que guía su uso para el bienestar de todos.
              La ciencia despierta nuestra curiosidad, la espiritualidad despierta nuestra conciencia
              </h2>
              
            </div>
            <div className="mt-16 grid grid-cols-1 gap-y-10 gap-x-8 lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="sm:flex lg:block">
                  <div className="sm:flex-shrink-0">
                    <img className="h-16 w-16" src={incentive.imageSrc} alt="" />
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-medium text-gray-900">{incentive.name}</h3>
                    <p className="mt-2 text-sm text-gray-500">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }