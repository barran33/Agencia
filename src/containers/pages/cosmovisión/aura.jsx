import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"
import { useEffect } from "react"
import { Helmet } from "react-helmet-async"
import { motion } from "framer-motion"

function AuraProduct() {
    useEffect(() => { window.scrollTo(0, 0) }, [])

    const features = [
        {
            title: "Zero-Latency Sync",
            description: "Built on a private cloud architecture to ensure all clinical records update in real-time across all authorized devices.",
            icon: "⚡"
        },
        {
            title: "Security by Design",
            description: "End-to-end encryption protocols following international standards for medical data protection.",
            icon: "🛡️"
        },
        {
            title: "Scalable Infrastructure",
            description: "A system designed to grow with your clinic, from single-doctor practices to multi-center hospitals.",
            icon: "📈"
        }
    ];

    return (
        <Layout>
            <Helmet>
                <title>Aura Clinical Core | High-Performance Medical SaaS</title>
                <meta name="description" content="Next-generation orchestration for high-demand clinics. Real-time scheduling and secure data sync." />
            </Helmet>
            <Navbar />
            
            <div className="bg-black pt-32 pb-20 min-h-screen overflow-hidden relative">
                {/* Background Neon Blurs */}
                <div className="absolute top-0 -left-20 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
                <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    
                    {/* Hero Section */}
                    <div className="relative">
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }} 
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center md:text-left"
                        >
                            <span className="text-cyan-400 font-mono tracking-widest text-[10px] uppercase border border-cyan-400/40 px-3 py-1 rounded-full bg-cyan-400/5 shadow-[0_0_15px_rgba(34,211,238,0.2)]">
                                System Status: Operational Beta
                            </span>
                            <h1 className="text-6xl md:text-8xl font-black text-white mt-8 mb-8 leading-none tracking-tighter">
                                Aura <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-500 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">Clinical Core</span>
                            </h1>
                            <p className="text-xl text-gray-400 max-w-3xl leading-relaxed mb-10 mx-auto md:mx-0">
                                The central nervous system for modern healthcare providers. 
                                We are building a high-performance engine to <span className="text-cyan-400">orchestrate clinical workflows</span> with absolute precision and security.
                            </p>
                            
                            <div className="flex flex-wrap justify-center md:justify-start gap-6">
                                <button className="bg-cyan-500 text-black font-black py-4 px-10 rounded-xl hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_35px_rgba(34,211,238,0.6)]">
                                    Contact for early partnership
                                </button>
                                <div className="flex items-center text-gray-500 text-sm font-mono tracking-tighter">
                                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-ping mr-3"></span>
                                    V.2.0-STABLE_BUILD
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Technical Commitment Section (Neon Grid) */}
                    <motion.div 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-cyan-500/20 py-12 px-8 bg-cyan-500/[0.02]"
                    >
                        {[
                            { label: "Target Uptime", value: "99.9%" },
                            { label: "Architecture", value: "Cloud-Native" },
                            { label: "Compliance", value: "HIPAA Ready" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-4xl font-black text-white group-hover:text-cyan-400 transition-colors duration-500">{stat.value}</div>
                                <div className="text-cyan-500/60 text-[10px] uppercase tracking-[0.3em] mt-2 font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Features Grid */}
                    <div className="mt-40">
                        <h2 className="text-white text-3xl font-bold mb-16 tracking-tight text-center md:text-left flex items-center gap-4">
                            Built for <span className="text-cyan-400 font-mono italic underline decoration-cyan-500/30">Future Scalability</span>
                            <div className="hidden md:block h-[1px] flex-grow bg-gradient-to-r from-cyan-500/50 to-transparent"></div>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {features.map((feature, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ y: -10, borderColor: 'rgba(34,211,238,0.4)' }}
                                    className="p-8 rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/40 to-black transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
                                >
                                    <div className="text-4xl mb-6 filter drop-shadow-[0_0_10px_rgba(34,211,238,0.4)] group-hover:scale-110 transition-transform">{feature.icon}</div>
                                    <h3 className="text-white text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Final (Neon Container) */}
                    <div className="mt-40 relative">
                        <div className="absolute inset-0 bg-cyan-500/5 rounded-[40px] blur-2xl" />
                        <div className="relative bg-black border border-cyan-500/30 rounded-[40px] p-12 text-center shadow-[0_0_50px_rgba(34,211,238,0.05)]">
                            <h2 className="text-4xl font-bold text-white mb-6 tracking-tighter">Want to know more about our <span className="text-cyan-400">roadmap?</span></h2>
                            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
                                We are currently in the development phase and looking for medical centers 
                                interested in shaping the future of clinical management.
                            </p>
                            <button className="border-2 border-cyan-500 text-cyan-400 font-black py-4 px-12 rounded-2xl hover:bg-cyan-500 hover:text-black transition-all hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] uppercase tracking-widest text-sm">
                                Talk to an expert
                            </button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </Layout>
    )
}
export default AuraProduct