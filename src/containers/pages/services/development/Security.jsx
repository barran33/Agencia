import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { motion } from "framer-motion"
import { useEffect } from "react"

function CybersecurityCompliance() {
    useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <Layout>
            <Navbar />
            <div className="bg-black min-h-screen pb-20 relative overflow-hidden font-sans selection:bg-cyan-500/30">
                
                {/* --- SECURITY GRID OVERLAY --- */}
                <div className="absolute inset-0 z-0 opacity-10" 
                     style={{ 
                         backgroundImage: `linear-gradient(to right, #0891b2 1px, transparent 1px), linear-gradient(to bottom, #0891b2 1px, transparent 1px)`,
                         backgroundSize: '60px 60px' 
                     }}>
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-44 relative z-10">
                    
                    {/* --- HEADER SECTION --- */}
                    <div className="max-w-4xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-[0.3em] rounded-md">
                                Protocol 03 // Security 
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-10 uppercase"
                        >
                            OFFENSE & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-500 to-cyan-700 italic">
                                DEFENSIVE.
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed font-light mb-16"
                        >
                            Comprehensive defense and risk management under global benchmarks. We merge **tactical operations** with data governance to ensure mission-critical business continuity.
                        </motion.p>
                    </div>

                    {/* --- BENTO GRID DISPLAY --- */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-20">
                        
                        {/* Box 1: Offensive Security */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="md:col-span-8 p-12 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl relative overflow-hidden group"
                        >
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight uppercase">Penetration Testing</h3>
                                <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                                    Simulating real-world adversaries to identify critical vulnerability vectors. We evaluate network resilience, application security, and human-tier risks against advanced threats.
                                </p>
                            </div>
                            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-[80px]"></div>
                        </motion.div>

                        {/* Box 2: LEAD AUDITOR HIGHLIGHT (The Cyan Box) */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="md:col-span-4 p-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-500 to-cyan-700 border border-white/20 flex flex-col justify-between shadow-[0_0_40px_rgba(6,182,212,0.2)]"
                        >
                            <div>
                                <div className="text-[10px] font-mono font-bold text-cyan-900 uppercase tracking-widest mb-2 bg-white/30 w-fit px-2 py-0.5 rounded">
                                    Official Accreditation
                                </div>
                                <h3 className="text-2xl font-black text-white leading-tight uppercase tracking-tighter">
                                    ISO/IEC 27001 <br/>Lead Auditor 
                                </h3>
                            </div>
                            
                            <div className="mt-8">
                                <p className="text-cyan-50 text-sm font-medium leading-snug mb-4">
                                    Certified capacity by Certiprof® to lead and manage Information Security Management System (ISMS) audits.
                                </p>
                                <div className="font-mono text-[9px] text-cyan-200/70 border-t border-cyan-400/30 pt-4">
                                    ID: FLLBPJPCWDT-RRJHJFRGD-WBHBKDWZKN
                                </div>
                            </div>
                        </motion.div>

                        {/* Box 3: Architecture & Hardening */}
                        <motion.div 
                            className="md:col-span-5 p-10 rounded-[2.5rem] bg-zinc-900/60 border border-white/5 backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono tracking-tighter">
                                // SYSTEM_HARDENING
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Implementation of micro-segmentation and rigorous access control policies. We ensure every data point is verified, encrypted, and monitored in real-time.
                            </p>
                        </motion.div>

                        {/* Box 4: Operational Resilience */}
                        <motion.div 
                            className="md:col-span-7 p-12 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 flex items-center justify-between group overflow-hidden"
                        >
                            <div className="max-w-xs">
                                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight uppercase">Operational Resilience</h3>
                                <p className="text-gray-500 text-sm italic font-light">
                                    Strategic development of Incident Response Plans (IRP) and Disaster Recovery protocols to minimize impact and ensure rapid restoration.
                                </p>
                            </div>
                            <div className="text-7xl opacity-5 group-hover:opacity-20 transition-opacity">🛡️</div>
                        </motion.div>
                    </div>

                    {/* --- TERMINAL CTA --- */}
                    <motion.div 
                        whileHover={{ borderColor: 'rgba(6,182,212,0.4)' }}
                        className="mt-40 bg-[#050505] border border-white/10 rounded-3xl p-10 font-mono relative overflow-hidden group"
                    >
                        <div className="text-cyan-500 mb-2 font-bold tracking-widest">{'> auditor.init_diagnosis()'}</div>
                        <div className="text-white text-lg mb-10 leading-relaxed max-w-2xl font-light">
                            Gain an objective perspective of your security posture. We conduct compliance audits and high-precision intrusion tests with professional rigor.
                        </div>
                        <button className="bg-cyan-500 hover:bg-white text-black px-10 py-4 rounded-xl font-black uppercase text-[10px] tracking-[0.2em] transition-all shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                            START_AUDIT_PROTOCOL.SH
                        </button>
                    </motion.div>

                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default CybersecurityCompliance;