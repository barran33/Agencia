const posts = [
  {
      id:'1234-qwer',
    title: 'ciencia',
    href: '/cosmovisión/científica',
    category: { name: 'Magia' },
    description:
      'La ciencia y la espiritualidad son dos caras de la misma moneda en la búsqueda del conocimiento y la verdad.',
    date: 'Jun 9, 2023',
    datetime: '2023-06-9',
    imageUrl:
      'https://bafybeif2gs5r5o36fmx7c74s54rwdaqwpco5dwb2jpk3gaeac42rw7hfem.ipfs.w3s.link/939.jpeg',
    readingTime: '6 min',
    author: {
      name: '',
      href: '#',
      imageUrl:
        'https://bafybeiaivrifvvqho6bmskcruncblfcwdnfl3h3dudaz6uuuw3re4xhpbe.ipfs.w3s.link/magic6.png',
      
    },
  },
  {
      id:'5678-asdf',
    title: 'Espiritualidad',
    href: '/cosmovisión/espiritual',
    category: { name: ' Magia', href: '/cosmovisión/espiritual' },
    description:
      'La espiritualidad nos recuerda que somos parte de un cosmos interconectado, mientras que la ciencia nos muestra cómo esas conexiones se manifiestan a nivel cósmico',
    date: 'Jun 9, 2023',
    datetime: '2023-06-09',
    imageUrl:
      'https://bafybeigt4xmb7vi2rwm66gze6mukvsxre2duntyjllj4l3gnch4zbyzgru.ipfs.w3s.link/universe.png',
    readingTime: '6 min',
    author: {
      
      href: '#',
      imageUrl:
        'https://bafybeiaivrifvvqho6bmskcruncblfcwdnfl3h3dudaz6uuuw3re4xhpbe.ipfs.w3s.link/magic6.png',
    },
  },
  {
      id:'4321-zxcv',
    title: '',
    href: '/cosmovisión/universal',
    category: { name: 'magia', href: '/cosmovisión/universal' },
    description:
      'El cosmos es el lienzo en el que la ciencia y la espiritualidad se entrelazan, revelando la maravilla y el misterio de nuestro universo.',
    date: 'Jun 9, 2023',
    datetime: '2023-06-09',
    imageUrl:
      'https://bafybeihhfisfvljzn6mi3jgzmwswis3iee7dz6qkhp4skx5ywivddxcvii.ipfs.w3s.link/universe3.jpeg',
    readingTime: '6 min',
    author: {
      
      href: '#',
      imageUrl:
        'https://bafybeiaivrifvvqho6bmskcruncblfcwdnfl3h3dudaz6uuuw3re4xhpbe.ipfs.w3s.link/magic6.png',
    },
  },
]
  export default function UseCases() {
    return (
      <div className="relative bg-gray-50  pt-16 pb-20  lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto lg:mx-12 max-w-full">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"></h2>
            <p className="mx-auto mt-3 max-w-2xl text-2xl text-gray-900 sm:mt-4">
            El cosmos es el laboratorio en el que la ciencia y la espiritualidad convergen, revelando la interconexión de todas las cosas y la infinita inteligencia de la consciencia Universal
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-cyan-400">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }