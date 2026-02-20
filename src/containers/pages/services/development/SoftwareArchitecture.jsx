import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { motion } from "framer-motion"
import { useEffect } from "react"

function SoftwareArchitecture() {
    useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <Layout>
            <Navbar />
            <div className="bg-black min-h-screen pb-20 relative overflow-hidden font-sans selection:bg-cyan-500/30">
                
                {/* --- TECH GRID OVERLAY --- */}
                <div className="absolute inset-0 z-0 opacity-10" 
                     style={{ backgroundImage: `linear-gradient(#0891b2 1px, transparent 1px), linear-gradient(90deg, #0891b2 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-44 relative z-10">
                    
                    {/* --- HEADER SECTION --- */}
                    <div className="max-w-4xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-widest rounded-md">
                                Protocol 01 // Engineering
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-10"
                        >
                            SYSTEM <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-600">
                                ARCHITECTURE.
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed font-light mb-16"
                        >
                            Beyond writing code, we orchestrate <span className="text-cyan-400 font-medium">high-performance digital backbones</span>. Our systems are engineered for elastic scalability and mission-critical reliability.
                        </motion.p>
                    </div>

                    {/* --- BENTO GRID DISPLAY --- */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-20">
                        
                        {/* Box 1: Large Feature */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="md:col-span-8 p-12 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl relative overflow-hidden group"
                        >
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Cloud-Native Orchestration</h3>
                                <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                                    Multi-cloud deployments engineered with Kubernetes and Terraform. We build infrastructures that breathe and scale with your traffic.
                                </p>
                            </div>
                            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] group-hover:bg-cyan-500/20 transition-all duration-700"></div>
                        </motion.div>

                        {/* Box 2: Highlighted Metric */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="md:col-span-4 p-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-500 to-cyan-800 border border-white/10 flex flex-col justify-between"
                        >
                            <div className="text-5xl font-black text-white/20 font-mono italic">01</div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2">High-Availability</h3>
                                <p className="text-cyan-50 text-sm font-medium leading-snug">
                                    Redundant architectures ensuring 99.9% uptime for global-scale applications.
                                </p>
                            </div>
                        </motion.div>

                        {/* Box 3: Technical Detail */}
                        <motion.div 
                            className="md:col-span-4 p-10 rounded-[2.5rem] bg-zinc-900/60 border border-white/5 backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono tracking-tighter shadow-cyan-500/20">// EVENT_DRIVEN</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Real-time data processing using Kafka and RabbitMQ to eliminate system bottlenecks and latency.
                            </p>
                        </motion.div>

                        {/* Box 4: Wide Feature */}
                        <motion.div 
                            className="md:col-span-8 p-12 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 flex items-center justify-between group overflow-hidden"
                        >
                            <div className="max-w-md">
                                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Decoupled Ecosystems</h3>
                                <p className="text-gray-400 italic font-light">
                                    "We design microservices that allow your product to evolve without the weight of technical debt."
                                </p>
                            </div>
                            <div className="text-8xl opacity-10 group-hover:opacity-30 group-hover:text-cyan-400 group-hover:rotate-12 transition-all duration-700 select-none">
                                ⚙️
                            </div>
                        </motion.div>
                    </div>

                    {/* --- INDUSTRIAL STACK --- */}
                    <div className="mt-32 pt-20 border-t border-white/5 text-center">
                        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em] mb-12">Core Technology Stack</p>
                        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 opacity-30">
                            {['AWS', 'KUBERNETES', 'DOCKER', 'TERRAFORM', 'NODE.JS', 'PYTHON', 'REDIS'].map((tech) => (
                                <span key={tech} className="text-white font-black text-2xl tracking-tighter hover:text-cyan-400 hover:opacity-100 transition-all cursor-default">{tech}</span>
                            ))}
                        </div>
                    </div>

                    {/* --- TERMINAL CTA --- */}
                    <motion.div 
                        whileHover={{ borderColor: 'rgba(6,182,212,0.4)' }}
                        className="mt-40 bg-[#050505] border border-white/10 rounded-3xl p-10 font-mono relative overflow-hidden group"
                    >
                        <div className="flex gap-2 mb-8">
                            <div className="w-3 h-3 rounded-full bg-cyan-500/30 group-hover:bg-cyan-500/60 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-cyan-500/20 group-hover:bg-cyan-500/40 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/20 transition-colors"></div>
                        </div>
                        <div className="text-cyan-500 mb-2 font-bold">{'> system.init_audit_request()'}</div>
                        <div className="text-white text-lg mb-10 leading-relaxed max-w-2xl">
                            Ready to strengthen your digital core? Our architects are available for 
                            infrastructure reviews and deep-dive technical audits.
                        </div>
                        <button className="bg-cyan-500 hover:bg-white text-black px-10 py-4 rounded-xl font-black uppercase text-xs tracking-[0.2em] transition-all transform active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                            EXECUTE_PROTOCOL.SH
                        </button>
                    </motion.div>

                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default SoftwareArchitecture;