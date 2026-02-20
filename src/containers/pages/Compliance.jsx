import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { motion } from "framer-motion"
import { useEffect } from "react"

function Compliance() {
    useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <Layout>
            <Navbar />
            <div className="bg-black min-h-screen pb-20 relative overflow-hidden font-sans selection:bg-cyan-500/30">
                
                {/* --- AMBIENT SUBTLE GRID --- */}
                <div className="absolute inset-0 z-0 opacity-[0.1]" 
                     style={{ 
                         backgroundImage: `linear-gradient(#0891b2 0.5px, transparent 0.5px), linear-gradient(90deg, #0891b2 0.5px, transparent 0.5px)`,
                         backgroundSize: '60px 60px' 
                     }}>
                </div>

                <div className="max-w-7xl mx-auto px-6 pt-44 relative z-10">
                    
                    {/* --- REFINED TITLE SECTION --- */}
                    <div className="max-w-3xl mb-24">
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <span className="w-12 h-[1px] bg-cyan-500/50"></span>
                            <span className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.5em]">
                                Strategic Governance
                            </span>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tighter mb-8 uppercase"
                        >
                            ENGINEERING <br />
                            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-zinc-500">
                                GLOBAL TRUST.
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-lg text-gray-400 max-w-xl leading-relaxed font-light"
                        >
                            We don't just facilitate certifications; we architect resilient systems. Our approach transforms regulatory requirements into a decisive competitive advantage for your organization.
                        </motion.p>
                    </div>

                    {/* --- STRATEGIC IDENTITY SECTION --- */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-40">
                        <motion.div className="md:col-span-6 space-y-8">
                            <div>
                                <h2 className="text-white text-2xl font-bold uppercase tracking-tight mb-4 text-zinc-100">Visionary Risk Management</h2>
                                <p className="text-gray-500 leading-relaxed font-light">
                                    In a volatile digital landscape, stability arises from impeccable governance. We simplify complex legal frameworks into fluid operational processes, shielding your most valuable asset: corporate reputation.
                                </p>
                            </div>
                            <div className="flex gap-12">
                                <div>
                                    <div className="text-cyan-500 text-3xl font-black mb-1">99%</div>
                                    <div className="text-gray-600 text-[10px] uppercase font-bold tracking-widest font-mono">Risk Mitigation</div>
                                </div>
                                <div>
                                    <div className="text-white text-3xl font-black mb-1">A+</div>
                                    <div className="text-gray-600 text-[10px] uppercase font-bold tracking-widest font-mono">Audit Precision</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* MINIMALIST LEAD AUDITOR CARD */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="md:col-span-6 bg-zinc-900/20 border border-white/5 p-12 rounded-[3rem] backdrop-blur-3xl relative group overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
                                <div className="w-12 h-12 border-t border-r border-cyan-500/50"></div>
                            </div>

                            <h3 className="text-white font-mono text-[10px] uppercase tracking-[0.4em] mb-12 opacity-40">Verified Credentials</h3>
                            
                            <div className="mb-12">
                                <p className="text-white text-3xl font-bold tracking-tighter uppercase mb-1">Jorge Barrantes</p>
                                <p className="text-cyan-500 font-mono text-xs uppercase tracking-widest">Lead Auditor // </p>
                            </div>

                            <div className="space-y-3">
                                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                                    <span className="text-gray-600 text-[9px] font-mono uppercase tracking-widest">Certification ID</span>
                                    <span className="text-gray-400 font-mono text-[9px]">FLLBPJPCWDT-RRJHJFRGD-WBHBKDWZKN </span>
                                </div>
                                <div className="flex justify-between items-end border-b border-white/5 pb-2">
                                    <span className="text-gray-600 text-[9px] font-mono uppercase tracking-widest">Accreditation</span>
                                    <span className="text-gray-400 font-mono text-[9px]">ISO/IEC 27001:2022 </span>
                                </div>
                                <div className="flex justify-between items-end">
                                    <span className="text-gray-600 text-[9px] font-mono uppercase tracking-widest">Valid Thru</span>
                                    <span className="text-gray-400 font-mono text-[9px]">Mon 7th Aug 2028 </span>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* --- CREATIVE PILLARS SECTION --- */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { 
                                label: "Regulatory Foresight", 
                                title: "ADAPTABILITY", 
                                desc: "We anticipate global regulatory shifts, ensuring your expansion remains unhindered by technical or legal barriers." 
                            },
                            { 
                                label: "Technical Rigor", 
                                title: "PRECISION", 
                                desc: "High-impact audits designed to detect vulnerabilities invisible to the untrained eye. Excellence in every bit." 
                            },
                            { 
                                label: "Strategic Shield", 
                                title: "RESILIENCE", 
                                desc: "Transforming your infrastructure into a resilient fortress capable of withstanding and recovering from threats in record time." 
                            }
                        ].map((pillar, i) => (
                            <motion.div 
                                key={i}
                                whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.02)" }}
                                className="p-10 rounded-[2.5rem] border border-white/5 flex flex-col justify-between h-[380px] transition-all duration-500"
                            >
                                <div className="text-cyan-500 font-mono text-[9px] uppercase tracking-[0.3em]">{pillar.label}</div>
                                <div>
                                    <h4 className="text-white text-4xl font-black mb-4 tracking-tighter italic">{pillar.title}</h4>
                                    <p className="text-gray-500 text-sm leading-relaxed font-light">{pillar.desc}</p>
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

export default Compliance;