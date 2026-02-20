import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"

function DentalProduct() {
    useEffect(() => { 
        window.scrollTo(0, 0) 
    }, [])

    const techFeatures = [
        {
            title: "Smart Odontogram",
            description: "Interactive 3D mapping with real-time procedural history updates. Reducing charting time by 40%.",
            icon: "🦷"
        },
        {
            title: "Automated Ecosystem",
            description: "Seamless integration between clinical chairside notes, inventory, and billing cycles.",
            icon: "⚙️"
        },
        {
            title: "Imaging Bridge",
            description: "Direct DICOM/X-Ray cloud syncing with AI-assisted diagnostic overlays.",
            icon: "📸"
        }
    ];

    return (
        <Layout>
            <Helmet>
                <title>Dental Logic Pro | Next-Gen Practice Management</title>
                <meta name="description" content="Streamlining clinical workflows, digital odontograms, and automated billing for modern dental centers." />
            </Helmet>
            
            <Navbar />
            
            <div className="bg-black pt-32 pb-20 min-h-screen overflow-hidden relative">
                {/* Neon Aura Background */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    
                    {/* Hero Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center md:text-left"
                    >
                        <span className="text-cyan-400 font-mono tracking-[0.3em] text-[10px] uppercase border border-cyan-400/40 px-4 py-1.5 rounded-full bg-cyan-400/5 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                            Clinical Excellence Build v1.4
                        </span>
                        <h1 className="text-6xl md:text-8xl font-black text-white mt-8 mb-6 leading-none tracking-tighter">
                            Dental <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">Logic Pro</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                            Master the art of clinical flow. We’ve engineered a <span className="text-white">high-fidelity interface</span> 
                            that synchronizes visual odontograms and practice management into a single digital pulse.
                        </p>

                        <div className="flex flex-wrap justify-center md:justify-start gap-6">
                            <button className="bg-cyan-500 text-black font-black py-4 px-10 rounded-2xl hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]">
                                Inquire Early Access
                            </button>
                            <div className="flex items-center text-gray-500 text-xs font-mono">
                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2 shadow-[0_0_8px_rgba(34,197,94,1)]"></span>
                                READY FOR BETA INTEGRATION
                            </div>
                        </div>
                    </motion.div>

                    {/* Technical Grid (Visual Cleanliness) */}
                    <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {techFeatures.map((item, index) => (
                            <motion.div 
                                key={index}
                                whileHover={{ y: -10, borderColor: 'rgba(34,211,238,0.4)' }}
                                className="p-10 rounded-[2.5rem] border border-white/5 bg-gradient-to-br from-gray-900/40 to-black transition-all group"
                            >
                                <div className="text-4xl mb-6 group-hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] transition-all">
                                    {item.icon}
                                </div>
                                <h3 className="text-white font-bold text-xl mb-4 group-hover:text-cyan-400 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Interactive Workflow Concept (Commercial appeal) */}
                    <div className="mt-40 relative">
                        <div className="absolute inset-0 bg-cyan-500/5 blur-3xl rounded-full" />
                        <div className="relative border border-cyan-500/20 bg-black/50 backdrop-blur-md p-12 rounded-[3rem] overflow-hidden">
                            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                                <div className="max-w-md text-center md:text-left">
                                    <h2 className="text-3xl font-black text-white mb-4 italic">Next-Gen Interface</h2>
                                    <p className="text-gray-400">
                                        Designed for high-speed dental environments where precision is non-negotiable. 
                                        Our interface minimizes clicks and maximizes patient care time.
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="h-20 w-1 bg-gradient-to-b from-cyan-500 to-transparent rounded-full" />
                                    <div className="h-32 w-1 bg-gradient-to-b from-cyan-500 to-transparent rounded-full hidden md:block" />
                                    <div className="h-20 w-1 bg-gradient-to-b from-cyan-500 to-transparent rounded-full" />
                                </div>
                                <button className="border-2 border-cyan-500/50 text-cyan-400 font-bold py-4 px-12 rounded-2xl hover:bg-cyan-500 hover:text-black transition-all">
                                    Request Tech Specs
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* System Meta-info */}
                    <div className="mt-32 text-center border-t border-white/5 pt-16">
                        <p className="text-gray-600 text-[10px] font-mono tracking-[0.5em] uppercase">
                            // DENTAL-LOGIC-ENGINE // BUILD_ID: 0092X // SECURED BY COSMIC IMAGINATION
                        </p>
                    </div>

                </div>
            </div>
            
            <Footer />
        </Layout>
    )
}

export default DentalProduct;