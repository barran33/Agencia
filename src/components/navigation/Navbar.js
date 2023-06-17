import { connect } from 'react-redux'
import { Popover, Transition } from '@headlessui/react'
import {ChatBubbleLeftEllipsisIcon,CommandLineIcon,SparklesIcon,ComputerDesktopIcon, BookOpenIcon, IdentificationIcon} from '@heroicons/react/24/outline'
import { useState, Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import logo_magic3 from 'assets/img/magic3.png'
import { DotLoader } from 'react-spinners'

const solutions = [
    {
      name: 'Cosmovisión',
      description: 'Observa nuestra forma de ver el mundo...',
      href: '/cosmovisión',
      icon: SparklesIcon,
    },
    {
      name: 'Servicios',
      description: '  Mira nuestros servicios.',
      href: '/servicios',
      icon: CommandLineIcon,
    },
    {
      name: 'Nosotros',
      description: 'Lee más sobre nostros.',
      href: '/nosotros',
      icon: IdentificationIcon,
    },
    {
      name: 'Especialistas',
      description: 'Conoce nuestro grupo de profesionales.',
      href: '/especialistas',
      icon: ComputerDesktopIcon,
    },
    {
      name: 'Blog',
      description: 'Aprende más sobre Co§mic Imagiantion.',
      href: '/blog',
      icon: BookOpenIcon,
    },
    {
      name: 'Contacto',
      description: 'Contáctanos en un instante! ',
      href: '/contacto',
      icon: ChatBubbleLeftEllipsisIcon,
    },
  ]

function Navbar(){

    const [loading,setLoading]=useState(true)

    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-white');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-white');
            }
        }
    }

    const [open, setOpen] = useState(false)

    return(
        <nav id='navbar' className='w-full  py-4 top-0 transition duration ease-in-out z-30 fixed'>
            <div className="px-4  sm:px-6">
            <div className="-ml-4 -mt-2  hidden lg:flex flex-wrap items-center justify-between sm:flex-nowrap md:px-4 px-2">
                    <Link to='/' className="ml-4 mt-2">
                    <img
                        src={'https://bafybeifbthqhc63mivqixm6qvnuttfomcc7qcmmd2u7vv5sgj5glj5cdzq.ipfs.w3s.link/magic3.png'}
                        width={210}
                        height={210}
                        className=""
                    />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to='/cosmovisión' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-cyan-500 transition duration-500 ease-in-out mx-5">Cosmovisión</NavLink>
                    <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-cyan-500 transition duration-500 ease-in-out mx-5">Servicios</NavLink>
                    <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-cyan-500 transition duration-500 ease-in-out mx-5">Nosotros</NavLink>
                    <NavLink to='/especialistas' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-cyan-500 transition duration-500 ease-in-out mx-5">Especialistas</NavLink>
                    <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-cyan-500 transition duration-500 ease-in-out mx-5">Blog</NavLink>
                    <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-gray-900 border-b-2 border-transparent hover:border-cyan-500 transition duration-500 ease-in-out mx-5">Contacto</NavLink>
                    
                    <Link
                        to="/contacto"
                        className="inline-flex ml-12 items-center rounded-md border border-transparent bg-cyan-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-cyan-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                    >
                        Hire us
                        <span className='px-2'>

                        <DotLoader className="ml-3 -mr-1 h-5 w-5" loading={loading} size={20} color="#f2f2f2" />
                        </span>
                    </Link>
                    </div>
                </div>
                {/* Mobile Navbar */}
                <div className="-ml-4 -mt-2 lg:hidden flex flex-wrap items-center justify-between sm:flex-nowrap md:px-4 px-2">
                    <Link to='/' className="ml-4 mt-3">
                    <img
                        src={'https://bafybeifbthqhc63mivqixm6qvnuttfomcc7qcmmd2u7vv5sgj5glj5cdzq.ipfs.w3s.link/magic3.png'}
                        width={210}
                        height={210}
                        className=""
                    />
                    </Link>
                    <div className="ml-4 mt-2 flex-shrink-0">
                      <Popover className="relative">
                          {({ open }) => (
                          <>
                              <Popover.Button
                              className={`
                                  ${open ? '' : 'text-opacity-90'}
                                  focus:ring-none focus:outline-none`}
                              >
                              {
                                  open ?
                                  <i  className='bx bx-x text-4xl mt-1'></i>
                                  :
                                  <i  className='bx bx-menu text-4xl mt-1'></i>
                              }
                              </Popover.Button>

                              <Transition
                              as={Fragment}
                              enter="transition ease-out duration-200"
                              enterFrom="opacity-0 translate-y-1"
                              enterTo="opacity-100 translate-y-0"
                              leave="transition ease-in duration-150"
                              leaveFrom="opacity-100 translate-y-0"
                              leaveTo="opacity-0 translate-y-1"
                              >
                              <Popover.Panel className="absolute -left-32 z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                                  <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                                  <div className="relative grid gap-8 bg-white p-7 lg:grid-cols-2">
                                      {solutions.map((item) => (
                                      <Link
                                          key={item.name}
                                          to={item.href}
                                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-cyan-500 focus-visible:ring-opacity-50"
                                      >
                                          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-cyan-400 rounded-md text-white sm:h-12 sm:w-12">
                                          <item.icon className="h-6 w-6" aria-hidden="true" />
                                          </div>
                                          <div className="ml-4">
                                          <p className="text-sm font-medium text-gray-900">
                                              {item.name}
                                          </p>
                                          <p className="text-sm text-gray-500">
                                              {item.description}
                                          </p>
                                          </div>
                                      </Link>
                                      ))}
                                  </div>
                                  <div className="bg-gray-50 p-4">
                                      <a
                                      href="##"
                                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-cyan-500 focus-visible:ring-opacity-50"
                                      >
                                      <span className="flex items-center">
                                          <span className="text-sm font-medium text-gray-900">
                                          Documentation
                                          </span>
                                      </span>
                                      <span className="block text-sm text-gray-500">
                                          Start integrating products and tools
                                      </span>
                                      </a>
                                  </div>
                                  </div>
                              </Popover.Panel>
                              </Transition>
                          </>
                          )}
                      </Popover>
                    </div>
                </div>
            </div>
        </nav>
    )
}
const mapStateToProps=state=>({

})

export default connect(mapStateToProps, {

}) (Navbar)

function IconOne() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="https://cdn-icons-png.flaticon.com/512/3626/svg"
      >
        <rect width="48" height="48" rx="8" fill="#30D6EA" />
        <path
          d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
          stroke="#0D92BA"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
          stroke="#0D92BA"
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
          stroke="#0D92BA "
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function IconTwo() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#30D6EA" />
        <path
          d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
          stroke="#0D92BA "
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
          stroke="#0D92BA "
          strokeWidth="2"
        />
      </svg>
    )
  }
  
  function IconThree() {
    return (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="8" fill="#30D6EA" />
        <rect x="13" y="32" width="2" height="4" fill="#0D92BA " />
        <rect x="17" y="28" width="2" height="8" fill="#0D92BA " />
        <rect x="21" y="24" width="2" height="12" fill="#0D92BA " />
        <rect x="25" y="20" width="2" height="16" fill="#0D92BA " />
        <rect x="29" y="16" width="2" height="20" fill="#0D92BA " />
        <rect x="33" y="12" width="2" height="24" fill="#0D92BA " />
      </svg>
    )
  }
