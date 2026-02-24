import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"
import { useEffect, useState, useMemo } from "react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { ShieldCheck, Lock, EyeOff, Terminal, Cpu, Database, ChevronRight, Activity, Zap } from "lucide-react"

// --- COMPONENTE: Vault Interface (El corazón del efecto) ---
const VaultInterface = () => {
    const [status, setStatus] = useState("SECURED");
    const sessionId = useMemo(() => Math.random().toString(16).slice(2, 10).toUpperCase(), []);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setStatus(prev => prev === "SECURED" ? "DECRYPTING" : "SECURED");
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="group relative w-full max-w-lg mx-auto">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-[2.5rem] opacity-10 group-hover:opacity-30 transition duration-1000"></div>
            
            <div className="relative bg-[#080808] border border-white/10 rounded-[2.2rem] p-5 md:p-8 shadow-2xl overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                    <Cpu size={40} className="text-cyan-500" />
                </div>

                <div className="flex justify-between items-center mb-8 font-mono">
                    <div className="space-y-1">
                        <div className="flex items-center gap-2">
                            <span className="relative flex h-2 w-2">
                                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${status === "SECURED" ? "bg-emerald-400" : "bg-cyan-400"}`}></span>
                                <span className={`relative inline-flex rounded-full h-2 w-2 ${status === "SECURED" ? "bg-emerald-500" : "bg-cyan-500"}`}></span>
                            </span>
                            <span className="text-[10px] text-white font-black tracking-[0.2em] uppercase">{status}</span>
                        </div>
                        <p className="text-[9px] text-zinc-600 tracking-widest uppercase">Protocol: ZK-Vault_v1</p>
                    </div>
                    <div className="bg-white/5 px-3 py-1 rounded-md border border-white/5">
                        <p className="text-[10px] text-cyan-500 font-mono font-bold">ID: {sessionId}</p>
                    </div>
                </div>

                <div className="relative bg-black rounded-2xl border border-white/5 p-6 min-h-[200px] flex flex-col justify-center overflow-hidden">
                    <AnimatePresence mode="wait">
                        {status === "DECRYPTING" ? (
                            <motion.div 
                                key="dec"
                                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                                className="font-mono text-[13px] leading-relaxed text-zinc-400"
                            >
                                <div className="flex gap-3">
                                    <span className="text-cyan-500 font-bold"> {'>'} </span>
                                    <p>
                                        <span className="text-white uppercase font-bold">Access_Granted:</span> Sanctuary protocol active. Reassembling psychiatric insights...
                                    </p>
                                </div>
                                <motion.div animate={{ opacity: [1, 0] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-2 h-4 bg-cyan-500 mt-2" />
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="enc"
                                initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                                className="flex flex-col items-center"
                            >
                                <ShieldCheck size={48} className="text-emerald-500 mb-4 opacity-80" />
                                <div className="space-y-2 w-full max-w-[200px]">
                                    <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                                        <motion.div animate={{ width: ["0%", "100%"] }} transition={{ duration: 3, repeat: Infinity }} className="h-full bg-emerald-500" />
                                    </div>
                                    <p className="text-[9px] text-center text-zinc-500 font-mono tracking-widest uppercase italic">Sanctuary Locked</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,255,255,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 flex items-center gap-3">
                        <Lock size={14} className="text-zinc-500" />
                        <div>
                            <p className="text-[8px] text-zinc-600 uppercase font-black">Security</p>
                            <p className="text-[10px] text-white font-mono">AES-256-GCM</p>
                        </div>
                    </div>
                    <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 flex items-center gap-3">
                        <Database size={14} className="text-zinc-500" />
                        <div>
                            <p className="text-[8px] text-zinc-600 uppercase font-black">Sovereignty</p>
                            <p className="text-[10px] text-white font-mono">Isolated</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function MindspaceVault() {
    useEffect(() => { window.scrollTo(0, 0) }, []);

    const features = [
        {
            title: "Absolute Integrity",
            description: "Transcending standard encryption to provide a sanctuary for mental health intelligence.",
            icon: "🛡️"
        },
        {
            title: "Zero-Knowledge",
            description: "A sovereign data architecture that shields the most sensitive psychiatric insights with total privacy.",
            icon: "👁️‍🗨️"
        },
        {
            title: "Clinical Sovereignty",
            description: "You hold the keys. We provide the fortress. Ensuring total patient intimacy by design.",
            icon: "🗝️"
        }
    ];

    return (
        <Layout>
            <Helmet>
                <title>Vault | MindSpace - Sovereign Data Sanctuary</title>
            </Helmet>
            <Navbar />
            
            <div className="bg-black pt-24 md:pt-32 pb-20 min-h-screen overflow-hidden relative selection:bg-cyan-500/30">
                {/* Neon Aura Accents */}
                <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    
                    {/* HERO SECTION (Estructura Aura) */}
                    <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
                        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-400/5 mb-6">
                                <span className="text-cyan-400 font-mono tracking-widest text-[10px] uppercase font-black">
                                    Operational build: v2.0_Vault
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] md:leading-[0.85] tracking-tighter italic uppercase">
                                MindSpace <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Vault</span>
                            </h1>
                            <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed mb-10 font-medium">
                                Beyond encryption. We provide a <span className="text-white font-bold underline decoration-cyan-500 underline-offset-4">sanctuary</span> for psychiatric notes and therapy tracking, ensuring absolute patient intimacy.
                            </p>
                            
                            <Link to="/contact" className="group relative inline-flex items-center justify-center px-10 py-4 font-black text-black transition-all duration-200 bg-white rounded-xl hover:bg-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.2)] uppercase text-xs tracking-widest">
                                Request Private Access
                            </Link>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mt-16 lg:mt-0">
                            <VaultInterface />
                        </motion.div>
                    </div>

                    {/* Technical Stats Section (Igual a Aura) */}
                    <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-white/5 py-12 md:py-16 bg-white/[0.01]">
                        {[
                            { label: "Encryption Layer", value: "AES-256" },
                            { label: "Privacy Model", value: "Zero-Knowledge" },
                            { label: "Integrity", value: "Sovereign" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-4xl md:text-3xl font-black text-white group-hover:text-cyan-400 transition-colors tracking-tighter uppercase">{stat.value}</div>
                                <div className="text-zinc-600 text-[10px] uppercase tracking-[0.4em] mt-3 font-mono font-bold">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Freedom Section (Estructura Aura - 2 Columnas) */}
                    <div className="mt-24 md:mt-40 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                <div className="bg-zinc-900/50 p-6 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-cyan-500/30 transition-all group">
                                    <Activity className="text-cyan-400 mb-6 group-hover:animate-pulse" size={24}/>
                                    <p className="text-3xl md:text-4xl font-black text-white italic">100%</p>
                                    <p className="text-zinc-500 text-[10px] font-mono tracking-widest mt-2 uppercase">Data Sovereignty</p>
                                </div>
                                <div className="bg-zinc-900/50 p-6 md:p-10 rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all group">
                                    <Zap className="text-blue-400 mb-6" size={24}/>
                                    <p className="text-3xl md:text-4xl font-black text-white italic">Zero</p>
                                    <p className="text-zinc-500 text-[10px] font-mono tracking-widest mt-2 uppercase">External Exposure</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 tracking-tighter italic leading-none uppercase">
                                Safeguarding <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic">Clinical Intel.</span>
                            </h2>
                            <p className="text-zinc-400 text-lg md:text-xl leading-relaxed font-medium">
                                We implement a sovereign data architecture that shields the most sensitive psychiatric insights with absolute integrity. Your data is invisible to everyone—including us.
                            </p>
                        </div>
                    </div>

                    {/* Capabilities Grid (Igual a Aura) */}
                    <div className="mt-24 md:mt-40">
                        <div className="flex items-center gap-6 mb-12 md:mb-16">
                            <h2 className="text-white text-2xl md:text-3xl font-black tracking-widest uppercase italic font-mono">Capabilities</h2>
                            <div className="h-px flex-grow bg-gradient-to-r from-white/20 to-transparent" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="group p-10 md:p-12 rounded-[2.5rem] border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-cyan-500/40 transition-all duration-500">
                                    <div className="text-4xl mb-8 group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                                    <h3 className="text-white text-xl font-black mb-4 uppercase tracking-tight">{feature.title}</h3>
                                    <p className="text-zinc-500 leading-relaxed text-sm font-medium">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA Card (Estructura Aura) */}
                    <div className="mt-24 md:mt-40 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                        <div className="relative bg-zinc-950 border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-12 md:p-24 text-center overflow-hidden">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-10 tracking-tighter italic uppercase leading-none">
                                Your clinical sanctuary <br/> is <span className="text-cyan-400 font-black">ready.</span>
                            </h2>
                            <Link 
                                to="/contact" 
                                className="inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 font-black py-5 px-14 rounded-2xl hover:bg-cyan-500 hover:text-black transition-all hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] uppercase tracking-widest text-xs"
                            >
                                Get Early Access
                            </Link>
                            <p className="mt-12 text-zinc-700 font-mono text-[9px] tracking-[0.4em] uppercase font-black">Private Deployment: Q2 2026</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default MindspaceVault;