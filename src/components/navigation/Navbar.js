import { connect } from 'react-redux';
import { Popover, Transition } from '@headlessui/react';
// ELIMINADAS LAS IMPORTACIONES DE HEROICONS
import { useState, Fragment } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo_magic3 from 'assets/img/magic3.png'; 
import { DotLoader } from 'react-spinners';

// URLs de ejemplo para los iconos (¡REEMPLAZA CON TUS PROPIOS URLs DE PRODUCCIÓN!)
const ICON_URLS = {
  Space369: 'https://i.ibb.co/tTRJWGNC/space369.png', 
  Service: 'https://i.ibb.co/SFGsfSQ/programming33.png', 
  Identification: 'https://i.ibb.co/67gLS6Qw/group3.png',
  ComputerDesktop: 'https://i.ibb.co/kVpJd3rS/specialist3.png', 
  Blog: 'https://i.ibb.co/DDZpLHvK/blog333.png', 
  ChatBubble: 'https://i.ibb.co/gMwCG7R6/contact333.png', 
};

const solutions = [
    {
      name: 'Cosmovisión',
      description: 'Observa nuestra forma de ver el mundo...',
      href: '/cosmovisión',
      iconUrl: ICON_URLS.Space369, // Usar URL en lugar del componente de icono
    },
    {
      name: 'Servicios',
      description: '  Mira nuestros servicios.',
      href: '/servicios',
      iconUrl: ICON_URLS.Service, // Usar URL
    },
    {
      name: 'Nosotros',
      description: 'Lee más sobre nostros.',
      href: '/nosotros',
      iconUrl: ICON_URLS.Identification, // Usar URL
    },
    {
      name: 'Especialistas',
      description: 'Conoce nuestro grupo de profesionales.',
      href: '/especialistas',
      iconUrl: ICON_URLS.ComputerDesktop, // Usar URL
    },
    {
      name: 'Blog',
      description: 'Aprende más sobre Co§mic Imagiantion.',
      href: '/blog',
      iconUrl: ICON_URLS.Blog, // Usar URL
    },
    {
      name: 'Contacto',
      description: 'Contáctanos en un instante! ',
      href: '/contacto',
      iconUrl: ICON_URLS.ChatBubble, // Usar URL
    },
  ];

function Navbar(){

    const [loading,setLoading]=useState(true)

    window.onscroll = function() {scrollFunction()}

    function scrollFunction() {
        if(document.getElementById('navbar')) {
            if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
                document.getElementById('navbar').classList.add('shadow-navbar');
                document.getElementById('navbar').classList.add('bg-black');
            }else{
                document.getElementById('navbar').classList.remove('shadow-navbar');
                document.getElementById('navbar').classList.remove('bg-black');
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
                        src={'https://i.ibb.co/39SbjcZF/cm336.jpg'}
                        width={210}
                        height={210}
                        className=""
                        alt="Logo Magic3" // Siempre añade alt text para accesibilidad
                    />
                    </Link>
                    <div className="ml-4 mt-2  flex-shrink-0">
                    <NavLink to='/cosmovisión' className="text-lg inline-flex font-medium leading-6 text-cyan-300 border-b-2 border-transparent hover:border-cyan-500 transition duration-500 ease-in-out mx-5">Cosmovisión</NavLink>
                    <NavLink to='/servicios' className="text-lg inline-flex font-medium leading-6 text-cyan-300 border-b-2 border-transparent hover:border-cyan-500 transition duration-500 ease-in-out mx-5">Servicios</NavLink>
                    <NavLink to='/nosotros' className="text-lg inline-flex font-medium leading-6 text-cyan-300 border-b-2 border-transparent hover:border-cyan-500 transition duration-500 ease-in-out mx-5">Nosotros</NavLink>
                    <NavLink to='/especialistas' className="text-lg inline-flex font-medium leading-6 text-cyan-300 border-b-2 border-transparent hover:border-cyan-500 transition duration-500 ease-in-out mx-5">Especialistas</NavLink>
                    <NavLink to='/blog' className="text-lg inline-flex font-medium leading-6 text-cyan-300 border-b-2 border-transparent hover:border-cyan-500 transition duration-500 ease-in-out mx-5">Blog</NavLink>
                    <NavLink to='/contacto' className="text-lg inline-flex font-medium leading-6 text-cyan-300 border-b-2 border-transparent hover:border-cyan-500 transition duration-500 ease-in-out mx-5">Contacto</NavLink>

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
                        src={'https://i.ibb.co/39SbjcZF/cm336.jpg'}
                        width={210}
                        height={210}
                        className=""
                        alt="Logo Magic3" // Siempre añade alt text para accesibilidad
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
                                  <i  className='bx  text-cyan-300 bx-x text-4xl mt-1'></i>
                                  :
                                  <i  className='bx bx-menu  text-cyan-300 text-4xl mt-1'></i>
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
                                  <div className="relative grid gap-8 bg-black p-7 lg:grid-cols-2">
                                      {solutions.map((item) => (
                                      <Link
                                          key={item.name}
                                          to={item.href}
                                          className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-cyan-200 focus:outline-none focus-visible:ring focus-visible:ring-cyan-500 focus-visible:ring-opacity-50"
                                      >
                                          <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-cyan-400 rounded-md text-cyan sm:h-12 sm:w-12">
                                          {/* CAMBIO CLAVE AQUÍ: Usamos <img> en lugar de <item.icon /> */}
                                          <img src={item.iconUrl} alt={`${item.name} icon`} className="h-10 w-10" aria-hidden="true" />
                                          </div>
                                          <div className="ml-4">
                                          <p className="text-sm font-medium text-cyan-500">
                                              {item.name}
                                          </p>
                                          <p className="text-sm text-gray-400">
                                              {item.description}
                                          </p>
                                          </div>
                                      </Link>
                                      ))}
                                  </div>
                                  <div className="bg-cyan-300 p-4">
                                      <a
                                      href="##"
                                      className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-cyan-500 focus-visible:ring-opacity-50"
                                      >
                                      <span className="flex items-center">
                                          <span className="text-sm font-medium text-gray-900">
                                          Documentation
                                          </span>
                                      </span>
                                      <span className="block  text-sm text-black"> {/* Cambiado de Black a black (minúscula) */}
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

