import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

// Datos de las soluciones médicas
const solutions = [
    {
        id: 'aura',
        title: 'Aura Core OS',
        category: 'Private Clinics',
        description: 'Experience the next evolution in clinical orchestration. A high-performance operating environment designed to synchronize complex multidisciplinary workflows with zero-latency precision.',
        img: 'https://i.ibb.co/KpdVxLcR/health33.jpg',
        href: '/solutions/aura'
    },
    {
        id: 'mindspace',
        title: 'Cognitive Aegis',
        category: 'Mental Health',
        description: 'Transcending standard encryption to provide a sanctuary for mental health intelligence. We implement a sovereign data architecture that shields the most sensitive psychiatric insights with absolute integrity.',
        img: 'https://i.ibb.co/S4GF9Xr8/cerebro.jpg',
        href: '/solutions/mindspace'
    },
    {
        id: 'dental',
        title: 'Smart Dental Workflow',
        category: 'Dental Offices',
        description: 'Where dental excellence meets algorithmic efficiency. Automate the entire clinical lifecycle—from high-fidelity digital imaging to intelligent billing—transforming your practice into a high-output digital asset',
        img: 'https://i.ibb.co/CKvbBDKq/dentist.jpg',
        href: '/solutions/dental'
    }
];

function Cosmovisión() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            <Helmet>
                <title>Solutions | Cosmic Imagination</title>
                <meta name="description" content="Medical Software Solutions & Health-Tech Engineering." />
            </Helmet>
            
            <Navbar />
            
            <div className="bg-black pt-32 min-h-screen">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    
                    {/* Header Integrado */}
                    <div className="text-center mb-20">
                        <motion.h2 
                            initial={{ opacity: 0 }} 
                            animate={{ opacity: 1 }}
                            className="text-cyan-400 font-bold tracking-[0.3em] uppercase text-xs mb-4"
                        >
                            Success Stories
                        </motion.h2>
                        <motion.h1 
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-5xl md:text-7xl font-black text-white mb-8"
                        >
                            SaaS Solutions in <span className="text-cyan-400">Real Action</span>
                        </motion.h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            We bridge the gap between complex medical requirements and seamless digital execution. 
                            High-performance systems for modern healthcare providers.
                        </p>
                    </div>

                    {/* CasesList Integrada */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-24">
                        {solutions.map((item) => (
                            <motion.div
                                key={item.id}
                                whileHover={{ y: -10 }}
                                className="bg-gray-900/40 border border-white/5 rounded-2xl overflow-hidden hover:border-cyan-500/30 transition-all duration-500"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-cyan-500/20 text-cyan-400 text-[10px] font-bold px-3 py-1 rounded-full border border-cyan-500/30 backdrop-blur-md uppercase">
                                            {item.category}
                                        </span>
                                    </div>
                                    <img 
                                        src={item.img} 
                                        alt={item.title} 
                                        /* Se eliminaron las clases grayscale y hover:grayscale-0 */
                                        className="w-full h-full object-cover transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
                                </div>
                                
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                        {item.description}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-[10px] text-gray-500 font-mono">#HEALTH-TECH</span>
                                        <Link 
                                            to={item.href}
                                            className="text-cyan-400 text-xs font-bold border-b border-cyan-500/20 hover:border-cyan-400 pb-1 transition-all"
                                        >
                                            View Case Study →
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </Layout>
    )
}

export default Cosmovisión