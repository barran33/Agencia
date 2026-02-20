import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { motion } from "framer-motion"
import { useEffect } from "react"

function Specialists() {
    useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <Layout>
            <Navbar />
            <div className="bg-black min-h-screen pb-20 relative overflow-hidden font-sans selection:bg-cyan-500/30">
                
                {/* --- AMBIENT NEON FLARES --- */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-cyan-500/[0.07] blur-[120px] rounded-full pointer-events-none" />
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-900/[0.05] blur-[100px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-6 pt-44 relative z-10">
                    
                    {/* --- HEADER --- */}
                    <div className="max-w-4xl mb-24">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <span className="w-12 h-[1px] bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.5)]"></span>
                            <span className="text-cyan-400 font-mono text-[10px] uppercase tracking-[0.5em] drop-shadow-[0_0_5px_rgba(34,211,238,0.4)]">
                                Cosmic Imagination // Engineering Core
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-8 uppercase"
                        >
                            ELITE SQUAD. <br />
                            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-200 to-zinc-600 drop-shadow-[0_0_10px_rgba(6,182,212,0.2)]">
                                BOLD ARCHITECTS.
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-gray-400 max-w-2xl leading-relaxed font-light"
                        >
                            We don't just write code; we build digital legacies. Led by visionary developers and security strategists, our team transforms complex requirements into scalable, high-revenue infrastructure.
                        </motion.p>
                    </div>

                    {/* --- FOUNDER & COLLECTIVE SECTION --- */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-40">
                        <div className="md:col-span-5">
                            <motion.div 
                                whileHover={{ y: -5, borderColor: 'rgba(6,182,212,0.3)' }}
                                className="p-10 rounded-[3rem] bg-zinc-900/40 border border-white/5 backdrop-blur-3xl relative overflow-hidden transition-colors duration-500 shadow-2xl shadow-cyan-500/[0.02]"
                            >
                                <div className="relative z-10">
                                    <div className="mb-12">
                                        <h2 className="text-white text-3xl font-bold uppercase tracking-tighter mb-1">Jorge Barrantes</h2>
                                        <p className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.4em] drop-shadow-[0_0_3px_rgba(6,182,212,0.6)]">Founder // Software Engineer</p>
                                    </div>
                                    
                                    <div className="space-y-6">
                                        <p className="text-gray-400 font-light leading-relaxed">
                                            As the visionary behind **Cosmic Imagination**, I bridge the gap between pure engineering and business-driven security. My focus is on creating architectures that are not only impenetrable but also commercially dominant.
                                        </p>
                                        <div className="flex gap-3">
                                            {['Full-Stack', 'Sec-Ops', 'Arch'].map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-cyan-500/5 border border-cyan-500/20 rounded-full text-[9px] font-mono text-cyan-400 uppercase tracking-widest shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                {/* Animated Inner Glow */}
                                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all duration-700"></div>
                            </motion.div>
                        </div>

                        <div className="md:col-span-7 flex flex-col justify-center space-y-12">
                            <div>
                                <h3 className="text-white text-3xl font-bold uppercase tracking-tight mb-4">Scalable Squad Capability</h3>
                                <p className="text-gray-500 text-lg font-light leading-relaxed">
                                    When the project demands it, we deploy a specialized unit of senior engineers. We operate as a modular squad—lean enough for agility, yet powerful enough to execute enterprise-level deployments.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-white/5">
                                <div>
                                    <h4 className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 drop-shadow-[0_0_5px_rgba(6,182,212,0.3)]">// THE_UNIT_POWER</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Our core collective integrates specialized roles in high-concurrency backend, advanced frontend design, and offensive security.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-4 drop-shadow-[0_0_5px_rgba(6,182,212,0.3)]">// ENTERPRISE_READINESS</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Designed for big-ticket projects. We provide the technical muscle required for high-stakes digital transformations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* --- WHY COSMIC IMAGINATION --- */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { 
                                title: "FOUNDER VISION", 
                                desc: "Every line of code is reviewed under a founder’s perspective: value, performance, and long-term scalability." 
                            },
                            { 
                                title: "SENIOR DYNAMICS", 
                                desc: "No junior-level mistakes. Our core team consists of seasoned pros ready for high-concurrency challenges." 
                            },
                            { 
                                title: "SECURE BY DESIGN", 
                                desc: "Security isn't an afterthought. We build fortified software using industry-leading auditing standards." 
                            }
                        ].map((item, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -5, backgroundColor: 'rgba(6,182,212,0.03)', borderColor: 'rgba(6,182,212,0.2)' }}
                                className="p-10 rounded-[2.5rem] bg-zinc-900/20 border border-white/5 transition-all duration-500 group"
                            >
                                <h4 className="text-white text-2xl font-black mb-4 tracking-tighter italic uppercase group-hover:text-cyan-50 transition-colors">
                                    {item.title}
                                </h4>
                                <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-gray-400 transition-colors">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default Specialists;