import { connect } from 'react-redux';
import { Popover, Transition } from '@headlessui/react';
import { useState, Fragment, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { DotLoader } from 'react-spinners';

const ICON_URLS = {
  Solutions: 'https://i.ibb.co/4RdGMdXn/opportunity.png', 
  Services: 'https://i.ibb.co/F4NnVrgy/cloud-computing.png', 
  Compliance: 'https://i.ibb.co/4npt83wv/compliance.png',
  Experts: 'https://i.ibb.co/HLSYK4Md/experts33.png', 
  Contact: 'https://i.ibb.co/v6S9dHrZ/communicate.png', 
};

const navigation = [
    {
      name: 'Solutions',
      description: 'Specialized ecosystems for Private Clinics, Dental & Mental Health.',
      href: '/solutions',
      iconUrl: ICON_URLS.Solutions,
    },
    {
      name: 'Services',
      description: 'Custom software engineering and cloud infrastructure.',
      href: '/services',
      iconUrl: ICON_URLS.Services,
    },
    {
      name: 'Compliance',
      description: 'Auditor-grade security and Law 8968 standards.',
      href: '/compliance',
      iconUrl: ICON_URLS.Compliance,
    },
    {
      name: 'Experts',
      description: 'Our elite team of developers and health-tech advisors.',
      href: '/specialist',
      iconUrl: ICON_URLS.Experts,
    },
    {
      name: 'Contact',
      description: 'Ready to scale? Let’s talk about your project.',
      href: '/contact',
      iconUrl: ICON_URLS.Contact,
    },
  ];

function Navbar(){
    const [loading, setLoading] = useState(true);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
        // Aumentado py-4 a py-6 para hacerlo más ancho
        <nav id='navbar' className={`w-full py-6 top-0 transition-all duration-300 ease-in-out z-50 fixed ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg border-b border-white/10 py-4' : 'bg-transparent'}`}>
            <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8"> {/* max-w-[90%] para usar más ancho de pantalla */}
                
                {/* Desktop Navbar */}
                <div className="hidden lg:flex items-center justify-between">
                    <Link to='/' className="flex-shrink-0">
                        <img
                            src={'https://i.ibb.co/4nKFXwbQ/logo33.jpg'}
                            width={220} // Aumentado de 180 a 220
                            className="hover:opacity-80 transition-opacity"
                            alt="Cosmic Imagination Logo"
                        />
                    </Link>
                    
                    <div className="flex items-center space-x-4"> {/* Aumentado el espacio entre links */}
                        {navigation.map((link) => (
                            <NavLink 
                                key={link.name}
                                to={link.href} 
                                // text-base es un poco más grande que text-sm
                                className={({ isActive }) => `text-base font-bold px-5 py-2 rounded-full transition-all duration-300 ${isActive ? 'text-cyan-400 bg-cyan-400/10' : 'text-gray-200 hover:text-cyan-400 hover:bg-white/5'}`}
                            >
                                {link.name}
                            </NavLink>
                        ))}

                        <Link
                            to="/contact"
                            // Aumentado padding y font-size del botón
                            className="ml-8 inline-flex items-center rounded-full bg-cyan-400 px-8 py-3 text-lg font-black text-black hover:bg-cyan-300 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                        >
                            Hire us
                            <DotLoader className="ml-3" loading={loading} size={18} color="#000000" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Navbar */}
                <div className="lg:hidden flex items-center justify-between">
                    <Link to='/'>
                        <img src={'https://i.ibb.co/4nKFXwbQ/logo33.jpg'} width={180} alt="Logo" /> {/* Logo móvil un poco más grande */}
                    </Link>
                    
                    <Popover className="relative">
                        {({ open }) => ( // Aseguramos que open esté disponible aquí
                        <>
                            <Popover.Button className="text-cyan-400 p-2 focus:outline-none">
                                <i className={`bx ${open ? 'bx-x' : 'bx-menu'} text-5xl`}></i>
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
                                <Popover.Panel className="absolute right-0 z-50 mt-4 w-screen max-w-sm transform px-4">
                                    <div className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl ring-1 ring-white/20">
                                        <div className="relative grid gap-6 p-6">
                                            {navigation.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    to={item.href}
                                                    className="-m-3 flex items-center rounded-xl p-3 transition duration-150 ease-in-out hover:bg-white/5"
                                                >
                                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-cyan-400/20 rounded-lg text-cyan-400">
                                                        <img src={item.iconUrl} alt={item.name} className="h-8 w-8 brightness-125" />
                                                    </div>
                                                    <div className="ml-4">
                                                        <p className="text-lg font-bold text-white">{item.name}</p>
                                                        <p className="text-sm text-gray-400">{item.description}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                        <div className="bg-cyan-400 p-5">
                                            <Link to="/contact" className="flex items-center justify-center font-black text-black text-base uppercase tracking-wider">
                                                Start Transformation
                                            </Link>
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>
                        )}
                    </Popover>
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, {})(Navbar);