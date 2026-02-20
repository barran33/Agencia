import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"

// Services data aligned with: Software Architecture, AI, and Cybersecurity
const core_services = [
    {
        title: 'Custom Software Architecture',
        tag: 'Engineering',
        description: 'Engineering high-performance digital backbones. We design scalable, cloud-native infrastructures tailored to orchestrate complex clinical and business workflows.',
        img: 'https://i.ibb.co/2Yj1YRq9/system33.png',
        href: '/services/software-architecture',
        features: ['Microservices Design', 'Cloud-Native Infrastructure', 'Event-Driven Systems']
    },
    {
        title: 'AI & Data Intelligence',
        tag: 'Intelligence',
        description: 'Transforming raw data into strategic foresight. We implement neural models and predictive analytics to automate decision-making in high-demand environments.',
        img: 'https://i.ibb.co/xSg5Lxmb/deep-learning3.png', 
        href: '/services/ai-intelligence',
        features: ['Predictive Modeling', 'Neural Network Training', 'Data Lake Orchestration']
    },
    {
        title: 'Cybersecurity & Compliance',
        tag: 'Protection',
        description: 'Auditor-grade security for the digital age. We enforce Zero-Trust protocols and HIPAA/GDPR standards to ensure the integrity and privacy of your most sensitive data.',
        img: 'https://i.ibb.co/RG2Q6yGF/hacker66.png',
        href: '/services/security',
        features: ['Zero-Trust Architecture', 'Encryption at Rest/Transit', 'Regulatory Compliance']
    },
]

function Services() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout>
            <Helmet>
                <title>Services | Co§mic Imagination - Software & Digital Science</title>
                <meta name="description" content="Custom software architecture, AI data intelligence, and professional cybersecurity compliance solutions." />
            </Helmet>

            <Navbar />

            <div className="bg-black min-h-screen pt-32 pb-20 overflow-hidden relative">
                {/* Neon Background Effects */}
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    
                    {/* Header Section */}
                    <div className="text-center mb-32">
                        <motion.span 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-cyan-400 font-mono tracking-[0.5em] text-[10px] uppercase border border-cyan-400/30 px-4 py-1.5 rounded-full bg-cyan-400/5"
                        >
                            Industrial Grade Expertise
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-black text-white mt-8 mb-6 tracking-tighter"
                        >
                            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">Disciplines</span>
                        </motion.h1>
                        <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                            We specialize in the intersection of high-fidelity engineering, 
                            artificial intelligence, and absolute digital sovereignty.
                        </p>
                    </div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {core_services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -15 }}
                                className="group relative flex flex-col h-full p-8 rounded-[2.5rem] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent backdrop-blur-md transition-all duration-500 hover:border-cyan-500/30"
                            >
                                {/* Image Container */}
                                <div className="relative flex justify-center items-center h-40 mb-8 overflow-hidden rounded-3xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-all duration-500">
                                    <img 
                                        src={service.img} 
                                        alt={service.title} 
                                        className="w-20 h-20 object-contain group-hover:scale-110 transition-all duration-700 opacity-100" 
                                    />
                                    
                                    {/* Subtle Glow behind the icon */}
                                    <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                                </div>

                                <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.2em] mb-2 font-bold">
                                    {service.tag}
                                </span>
                                <h3 className="text-white text-2xl lg:text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors tracking-tight">
                                    {service.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                                    {service.description}
                                </p>

                                {/* Technical Specs List */}
                                <ul className="mb-8 space-y-2 border-t border-white/5 pt-6">
                                    {service.features.map((feat, i) => (
                                        <li key={i} className="text-[10px] font-mono text-gray-500 flex items-center group-hover:text-gray-300 transition-colors">
                                            <span className="w-1 h-1 bg-cyan-500 rounded-full mr-3 shadow-[0_0_8px_rgba(34,211,238,1)]"></span>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <a 
                                    href={service.href}
                                    className="inline-flex items-center text-white text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-cyan-400 transition-all"
                                >
                                    Explore Protocol
                                    <svg className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="mt-40 border border-cyan-500/20 rounded-[3rem] p-12 lg:p-20 text-center bg-gradient-to-b from-cyan-500/[0.03] to-transparent"
                    >
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter">
                            Ready to evolve your <br/> <span className="text-cyan-400 italic">digital infrastructure?</span>
                        </h2>
                        <button className="bg-white text-black font-black py-5 px-14 rounded-2xl hover:bg-cyan-400 transition-all hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] uppercase text-sm tracking-widest">
                            Book Technical Consultation
                        </button>
                    </motion.div>

                </div>
            </div>

            <Footer />
        </Layout>
    )
}

export default Services;