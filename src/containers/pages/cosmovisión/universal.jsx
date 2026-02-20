import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"

function MindspaceProduct() {
    useEffect(() => { window.scrollTo(0, 0) }, [])

    const techSpecs = [
        {
            title: "Zero-Knowledge Encryption",
            description: "Your data is encrypted before it even leaves your device. Not even we can see your clinical notes.",
            icon: "🔐"
        },
        {
            title: "Distraction-Free UI",
            description: "A minimalist writing environment designed to keep your focus entirely on the patient's narrative.",
            icon: "✍️"
        },
        {
            title: "Audit Logs",
            description: "Comprehensive tracking of every data access, ensuring 100% transparency and legal protection.",
            icon: "📜"
        }
    ];

    return (
        <Layout>
            <Helmet>
                <title>MindSpace Vault | Privacy-First Mental Health Software</title>
                <meta name="description" content="The ultimate sanctuary for clinical notes. Auditor-grade encryption for mental health professionals." />
            </Helmet>
            <Navbar />
            
            <div className="bg-black pt-32 pb-20 min-h-screen overflow-hidden">
                {/* Efecto de resplandor Neón Cian en el fondo */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    
                    {/* Header Section */}
                    <div className="relative z-10">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-cyan-400 font-mono tracking-[0.3em] text-[10px] uppercase border border-cyan-400/30 px-4 py-1.5 rounded-full bg-cyan-400/5 shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                                Privacy Protocol v1.0
                            </span>
                            <h1 className="text-6xl md:text-8xl font-black text-white mt-8 mb-6 tracking-tighter">
                                MindSpace <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">Vault</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-12">
                                A digital sanctuary for the most sensitive information. We provide 
                                <span className="text-cyan-400"> auditor-grade encryption</span> for clinical notes, 
                                ensuring that the therapist-patient bond remains unbreakable and private.
                            </p>
                            
                            <div className="flex flex-wrap gap-6">
                                <button className="bg-cyan-500 text-black font-black py-4 px-10 rounded-2xl hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                                    Join Private Beta
                                </button>
                                <div className="flex items-center text-gray-500 text-sm font-medium italic">
                                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse mr-2 shadow-[0_0_10px_rgba(34,211,238,1)]"></span>
                                    Currently in active development
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Security Standards Section con bordes Neón */}
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }}
                        className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-0.5 bg-cyan-500/20 border border-cyan-500/30 rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(34,211,238,0.05)]"
                    >
                        {[
                            { label: "Encryption", value: "AES-256-GCM" },
                            { label: "Privacy Standard", value: "HIPAA Compliant" },
                            { label: "Data Sovereignty", value: "EU/US Based" }
                        ].map((stat, i) => (
                            <div key={i} className="bg-black p-10 text-center hover:bg-cyan-950/20 transition-colors">
                                <div className="text-2xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-cyan-400 text-[10px] uppercase tracking-widest font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Features Grid */}
                    <div className="mt-40">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <h2 className="text-white text-4xl font-bold tracking-tight">
                                Designed for <br/> <span className="text-cyan-400">Deep Work</span>
                            </h2>
                            <p className="text-gray-400 max-w-sm text-sm border-l border-cyan-500/50 pl-6 italic">
                                Technology should disappear during a session. MindSpace 
                                is invisible when you need to listen, and invincible when you need to store.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {techSpecs.map((spec, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ y: -8, borderColor: 'rgba(34,211,238,0.5)' }}
                                    className="p-8 rounded-[2rem] border border-white/5 bg-gray-900/20 backdrop-blur-sm transition-all duration-300 group"
                                >
                                    <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center text-2xl mb-6 border border-cyan-500/20 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                        {spec.icon}
                                    </div>
                                    <h3 className="text-white text-lg font-bold mb-3">{spec.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        {spec.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Section con efecto Neón Glow */}
                    <div className="mt-40 relative group">
                        <div className="absolute inset-0 bg-cyan-500/5 rounded-[3rem] blur-xl group-hover:bg-cyan-500/10 transition-all" />
                        <div className="relative border border-cyan-500/20 p-12 md:p-20 rounded-[3rem] text-center overflow-hidden bg-black">
                            <h2 className="text-4xl font-bold text-white mb-6">Shape the future of <br/>Mental Health Tech</h2>
                            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                                We are looking for mental health professionals to participate in our 
                                early testing phase. Help us build the sanctuary your patients deserve.
                            </p>
                            <button className="bg-white text-black font-black py-5 px-14 rounded-2xl hover:bg-cyan-400 transition-all hover:shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                                Connect with the Dev Team
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default MindspaceProduct;