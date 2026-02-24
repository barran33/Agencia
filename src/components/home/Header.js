import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.5,
        }
    }
};

const letterVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        }
    }
};

function Header() {
    const cosmicText = "Cosmic ";
    const imaginationText = "Imagination";

    // Estilo Neón para el texto "Imagination"
    const neonTextStyle = {
        color: '#00FFFF',
        textShadow: `
            0 0 5px #00FFFF,
            0 0 10px #00FFFF,
            0 0 20px #00FFFF
        `,
        fontWeight: 'bold'
    };

    return (
        <main className="relative bg-black overflow-hidden">
            {/* 1. CONTENIDO: Mantenemos tus clases de padding exactas pt-24, pt-32, pt-40 */}
            <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-0 sm:pt-32 sm:pb-0 lg:px-8 lg:pt-40 lg:pb-0">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-7xl">
                        <span className="text-gray-200">{cosmicText}</span>
                        <span className="inline-flex" style={neonTextStyle}>
                            <motion.span
                                initial="hidden"
                                animate="visible"
                                variants={textContainerVariants}
                            >
                                {imaginationText.split('').map((char, index) => (
                                    <motion.span key={index} variants={letterVariants}>
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </span>
                    </h1>

                    <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
                        Specialized Software Solutions for the <strong>Healthcare Industry</strong>. 
                        We build secure SaaS platforms, patient management systems, and enterprise-grade infrastructure 
                        for clinics and medical institutions.
                    </p>

                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/solutions"
                            className="rounded-md bg-cyan-500 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_15px_rgba(0,255,255,0.4)] hover:bg-cyan-400 transition-all"
                        >
                            Our Solutions
                        </Link>
                        <Link to="/contact" className="text-sm font-semibold leading-6 text-white hover:text-cyan-400 transition-colors">
                            Contact an Expert <span aria-hidden="true">→</span>
                        </Link>
                    </div>

                    <ul className='flex gap-8 items-center justify-center mt-6 border-t border-gray-800 pt-4'>
                        <li className='inline-flex group'>
                            <Link to='/services' className="text-sm font-medium text-gray-300 hover:text-cyan-400 hover:[text-shadow:0_0_8px_#00FFFF] transition-all duration-300">
                                PRIVATE CLINICS
                            </Link>
                        </li>
                        <li className='inline-flex group'>
                            <Link to='/services' className="text-sm font-medium text-gray-300 hover:text-cyan-400 hover:[text-shadow:0_0_8px_#00FFFF] transition-all duration-300">
                                DENTAL OFFICES
                            </Link>
                        </li>
                        <li className='inline-flex group'>
                            <Link to='/services' className="text-sm font-medium text-gray-300 hover:text-cyan-400 hover:[text-shadow:0_0_8px_#00FFFF] transition-all duration-300">
                                MENTAL HEALTH
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* 2. SECCIÓN DE FONDO: Ahora con Z-0 para que no se esconda */}
            <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
                {/* Rejilla Tecnológica Brilla sutilmente */}
                <div 
                    className="absolute inset-0 opacity-25" 
                    style={{ 
                        backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.15) 1px, transparent 1px)`,
                        backgroundSize: '45px 45px' 
                    }}
                ></div>

                {/* Resplandor Cyan Central */}
                <div 
                    className="absolute inset-0"
                    style={{
                        background: 'radial-gradient(circle at 50% 40%, rgba(0, 255, 255, 0.15) 0%, transparent 70%)'
                    }}
                ></div>

                {/* Degradado para fundirse con el resto de la página */}
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-60"></div>
            </div>
        </main>
    );
}

export default Header;