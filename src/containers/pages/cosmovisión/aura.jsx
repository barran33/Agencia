import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import Footer from "components/navigation/Footer"
import { useEffect, useState } from "react"
import { Helmet } from "react-helmet-async"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"

// --- COMPONENTE: Live Workflow Orchestrator (Optimized for all screens) ---
const WorkflowOrchestrator = () => {
    const nodes = [
        { id: 'PATIENT', label: 'Patient Entry', icon: '👤', color: 'bg-blue-500' },
        { id: 'CLINICAL', label: 'Diagnosis Core', icon: '🧠', color: 'bg-cyan-500' },
        { id: 'PHARMA', label: 'E-Prescription', icon: '💊', color: 'bg-purple-500' },
        { id: 'BILLING', label: 'Smart Billing', icon: '💳', color: 'bg-emerald-500' }
    ];

    const [activeNode, setActiveNode] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveNode((prev) => (prev + 1) % nodes.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative p-6 md:p-8 rounded-[2rem] md:rounded-[3rem] bg-zinc-950 border border-white/10 shadow-2xl overflow-hidden min-h-[380px] md:min-h-[400px] flex flex-col justify-center">
            {/* Grid Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#22d3ee 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />
            
            <div className="relative z-10 space-y-6 md:space-y-8">
                <div className="flex justify-between items-center mb-4">
                    <span className="text-[9px] md:text-[10px] font-mono text-cyan-400 tracking-[0.3em] uppercase">Workflow Live Monitor</span>
                    <div className="flex gap-2 items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                        <span className="text-[9px] md:text-[10px] font-mono text-gray-500 uppercase">Sync Active</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-3 md:gap-4">
                    {nodes.map((node, index) => {
                        const isActive = activeNode === index;
                        return (
                            <motion.div
                                key={node.id}
                                animate={{ 
                                    opacity: isActive ? 1 : 0.4,
                                    x: isActive ? (window.innerWidth > 768 ? 20 : 10) : 0,
                                    scale: isActive ? 1.02 : 1
                                }}
                                className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl md:rounded-2xl border ${isActive ? 'border-cyan-500/50 bg-cyan-500/5' : 'border-white/5 bg-transparent'} transition-all duration-500`}
                            >
                                <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl ${node.color} flex items-center justify-center text-lg shadow-lg flex-shrink-0`}>
                                    {node.icon}
                                </div>
                                <div className="flex-grow">
                                    <h4 className="text-[10px] md:text-xs font-bold text-white font-mono uppercase tracking-widest">{node.label}</h4>
                                    <p className="text-[8px] md:text-[9px] text-gray-500 font-mono italic">
                                        {isActive ? '>>> PROCESSING_DATA_FLOW...' : 'STANDBY_READY'}
                                    </p>
                                </div>
                                {isActive && (
                                    <motion.div 
                                        layoutId="cursor"
                                        className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Sincronización Global Footer */}
                <div className="pt-4 border-t border-white/5">
                    <div className="flex justify-between text-[8px] md:text-[9px] font-mono text-gray-600 mb-2 uppercase">
                        <span>Orchestration Integrity</span>
                        <span className="text-cyan-400">100%</span>
                    </div>
                    <div className="h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                        <motion.div 
                            animate={{ width: ["0%", "100%"] }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="h-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

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
            </Helmet>
            <Navbar />
            
            <div className="bg-black pt-24 md:pt-32 pb-20 min-h-screen overflow-hidden relative selection:bg-cyan-500/30">
                {/* Neon Accents */}
                <div className="absolute top-0 -left-20 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-cyan-500/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
                
                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    
                    {/* HERO SECTION */}
                    <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }} 
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-400/5 mb-6">
                                <span className="text-cyan-400 font-mono tracking-widest text-[9px] md:text-[10px] uppercase">
                                    Operational build: v2.4
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[0.9] md:leading-[0.85] tracking-tighter italic">
                                Aura <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Clinical Core</span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-400 max-w-xl leading-relaxed mb-10">
                                Beyond simple administration. We provide a <span className="text-white font-bold underline decoration-cyan-500">seamless atmosphere</span> that synchronizes complex multidisciplinary workflows into a single intuitive pulse.
                            </p>
                            
                            <Link to="/contact" className="group relative inline-flex items-center justify-center px-8 md:px-10 py-4 font-black text-black transition-all duration-200 bg-cyan-500 rounded-xl hover:bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.4)] uppercase text-[10px] md:text-xs tracking-widest">
                                Join Private Beta
                            </Link>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-16 lg:mt-0"
                        >
                            <WorkflowOrchestrator />
                        </motion.div>
                    </div>

                    {/* Technical Stats Section */}
                    <div className="mt-24 md:mt-40 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-white/5 py-12 md:py-16 bg-white/[0.01]">
                        {[
                            { label: "Uptime SLA", value: "99.99%" },
                            { label: "Deployment", value: "Cloud-Native" },
                            { label: "Standard", value: "HIPAA Certified" }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-4xl md:text-5xl font-black text-white group-hover:text-cyan-400 transition-colors">{stat.value}</div>
                                <div className="text-gray-500 text-[9px] md:text-[10px] uppercase tracking-[0.4em] mt-3 font-mono">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Administrative Freedom Section */}
                    <div className="mt-24 md:mt-40 grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                                <div className="bg-zinc-900/50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 hover:border-cyan-500/30 transition-all">
                                    <span className="text-cyan-400 text-[10px] font-mono tracking-widest block mb-4 uppercase">Time Recovered</span>
                                    <p className="text-3xl md:text-4xl font-black text-white">+120h</p>
                                    <p className="text-gray-500 text-[10px] md:text-xs mt-2 italic">Monthly clinical average</p>
                                </div>
                                <div className="bg-zinc-900/50 p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 hover:border-blue-500/30 transition-all">
                                    <span className="text-blue-400 text-[10px] font-mono tracking-widest block mb-4 uppercase">Latency</span>
                                    <p className="text-3xl md:text-4xl font-black text-white">0.02s</p>
                                    <p className="text-gray-500 text-[10px] md:text-xs mt-2 italic">Global data propagation</p>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 md:mb-8 tracking-tighter italic leading-none">
                                Stop losing hours on <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 underline decoration-zinc-800">manual admin.</span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                                Aura Clinical Core reduces administrative friction by up to **40%**. Our engine automates the tedious data entry, allowing your staff to focus on what matters: **High-quality patient care.**
                            </p>
                        </div>
                    </div>

                    {/* Capabilities Grid */}
                    <div className="mt-24 md:mt-40">
                        <div className="flex items-center gap-6 mb-12 md:mb-16">
                            <h2 className="text-white text-2xl md:text-3xl font-black tracking-widest uppercase italic">Capabilities</h2>
                            <div className="h-px flex-grow bg-gradient-to-r from-white/20 to-transparent" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                            {features.map((feature, index) => (
                                <div key={index} className="group p-8 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-cyan-500/40 transition-all duration-500">
                                    <div className="text-4xl mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">{feature.icon}</div>
                                    <h3 className="text-white text-lg md:text-xl font-bold mb-4">{feature.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Final CTA Card */}
                    <div className="mt-24 md:mt-40 relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-[2rem] md:rounded-[3rem] blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                        <div className="relative bg-zinc-950 border border-white/10 rounded-[2.5rem] md:rounded-[3.5rem] p-10 md:p-20 text-center overflow-hidden">
                            <h2 className="text-3xl md:text-6xl font-black text-white mb-10 tracking-tighter italic">
                                Ready to orchestrate <br/> your <span className="text-cyan-400">clinical future?</span>
                            </h2>
                            <Link 
                                to="/contact" 
                                className="inline-flex items-center justify-center bg-transparent border-2 border-cyan-500 text-cyan-400 font-black py-4 md:py-5 px-10 md:px-14 rounded-xl md:rounded-2xl hover:bg-cyan-500 hover:text-black transition-all hover:shadow-[0_0_50px_rgba(34,211,238,0.5)] uppercase tracking-widest text-[10px] md:text-xs"
                            >
                                Get Early Access
                            </Link>
                            <p className="mt-10 text-gray-600 font-mono text-[8px] md:text-[9px] tracking-[0.4em] uppercase">Limited slots available for Q2 2026</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default AuraProduct;