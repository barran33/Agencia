import Layout from "hocs/layouts/Layout"
import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { motion } from "framer-motion"
import { useEffect } from "react"

function AIDataIntelligence() {
    useEffect(() => { window.scrollTo(0, 0) }, [])

    return (
        <Layout>
            <Navbar />
            <div className="bg-[#020202] min-h-screen pb-20 relative overflow-hidden font-sans selection:bg-cyan-500/30">
                
                {/* --- NEON NEURAL GRID OVERLAY --- */}
                <div className="absolute inset-0 z-0 opacity-20" 
                     style={{ 
                         backgroundImage: `radial-gradient(circle at 2px 2px, #06b6d4 1px, transparent 0)`,
                         backgroundSize: '32px 32px' 
                     }}>
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-0"></div>

                <div className="max-w-7xl mx-auto px-6 pt-44 relative z-10">
                    
                    {/* --- HEADER SECTION --- */}
                    <div className="max-w-4xl">
                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex items-center gap-3 mb-6"
                        >
                            <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-[10px] uppercase tracking-widest rounded-md">
                                Protocol 02 // Intelligence
                            </span>
                            <div className="h-[1px] w-20 bg-cyan-500/30"></div>
                        </motion.div>

                        <motion.h1 
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-4xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter mb-10"
                        >
                            DATA <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-500 italic">
                                INTELLIGENCE.
                            </span>
                        </motion.h1>

                        <motion.p 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed font-light mb-16"
                        >
                            Transforming noise into strategic foresight. We deploy <span className="text-cyan-400 font-medium text-glow-cyan">neural architectures</span> that learn, adapt, and automate complex decision-making at light speed.
                        </motion.p>
                    </div>

                    {/* --- BENTO GRID DISPLAY --- */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-20">
                        
                        {/* Box 1: Predictive Modeling */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="md:col-span-8 p-12 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl relative overflow-hidden group"
                        >
                            <div className="relative z-10">
                                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Predictive Modeling</h3>
                                <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                                    Anticipate market shifts and user behavior with high-precision neural networks. We turn historical data into a roadmap for future growth.
                                </p>
                            </div>
                            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] group-hover:bg-cyan-500/20 transition-all duration-700"></div>
                        </motion.div>

                        {/* Box 2: Cognitive Automation */}
                        <motion.div 
                            whileHover={{ y: -5 }}
                            className="md:col-span-4 p-10 rounded-[2.5rem] bg-gradient-to-br from-cyan-600 to-cyan-800 border border-white/10 flex flex-col justify-between shadow-[0_0_30px_rgba(6,182,212,0.1)]"
                        >
                            <div className="text-5xl font-black text-white/20 font-mono italic">02</div>
                            <div>
                                <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">Cognitive Automation</h3>
                                <p className="text-cyan-50/80 text-sm font-medium leading-snug">
                                    Systems that reduce operational friction by automating cognitive tasks with LLM-powered logic.
                                </p>
                            </div>
                        </motion.div>

                        {/* Box 3: Data Orchestration */}
                        <motion.div 
                            className="md:col-span-4 p-10 rounded-[2.5rem] bg-zinc-900/60 border border-white/5 backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-bold text-cyan-400 mb-4 font-mono tracking-tighter shadow-cyan-500/50">// DATA_ORCHESTRATION</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                Scalable Data Lake architectures to centralize, clean, and process multi-source information for real-time inference.
                            </p>
                        </motion.div>

                        {/* Box 4: NLP */}
                        <motion.div 
                            className="md:col-span-8 p-12 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 flex items-center justify-between group overflow-hidden"
                        >
                            <div className="max-w-md">
                                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">Natural Language Processing</h3>
                                <p className="text-gray-400 italic font-light">
                                    "Beyond chatbots: we build machines that understand context, sentiment, and the subtle nuances of human interaction."
                                </p>
                            </div>
                            <div className="text-8xl opacity-10 group-hover:opacity-30 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-700 select-none">
                                🧠
                            </div>
                        </motion.div>
                    </div>

                    {/* --- AI TECH STACK --- */}
                    <div className="mt-32 pt-20 border-t border-white/5 text-center">
                        <p className="text-[10px] font-mono text-gray-600 uppercase tracking-[0.5em] mb-12">Intelligence Stack & Frameworks</p>
                        <div className="flex flex-wrap justify-center gap-x-16 gap-y-8 opacity-30">
                            {['PYTORCH', 'TENSORFLOW', 'HUGGINGFACE', 'OPENAI', 'PANDAS', 'NVIDIA_CUDA', 'SNOWFLAKE'].map((tech) => (
                                <span key={tech} className="text-white font-black text-2xl tracking-tighter hover:text-cyan-400 hover:opacity-100 transition-all cursor-default">{tech}</span>
                            ))}
                        </div>
                    </div>

                    {/* --- NEURAL TERMINAL CTA --- */}
                    <motion.div 
                        whileHover={{ borderColor: 'rgba(6,182,212,0.4)' }}
                        className="mt-40 bg-[#050505] border border-white/10 rounded-3xl p-10 font-mono relative overflow-hidden group"
                    >
                        <div className="flex gap-2 mb-8">
                            <div className="w-3 h-3 rounded-full bg-cyan-500/30 group-hover:bg-cyan-500/60 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-cyan-500/20 group-hover:bg-cyan-500/40 transition-colors"></div>
                            <div className="w-3 h-3 rounded-full bg-cyan-500/10 group-hover:bg-cyan-500/30 transition-colors"></div>
                        </div>
                        <div className="text-cyan-500 mb-2 font-bold">{'> intelligence.initialize_discovery()'}</div>
                        <div className="text-white text-lg mb-10 leading-relaxed max-w-2xl">
                            Is your organization sitting on untapped data goldmines? 
                            Let's build the models that will define your future market position.
                        </div>
                        <button className="bg-cyan-500 hover:bg-white text-black px-10 py-4 rounded-xl font-black uppercase text-xs tracking-[0.2em] transition-all transform active:scale-95 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                            DISCOVER_PATTERNS.EXE
                        </button>
                    </motion.div>

                </div>
            </div>
            <Footer />
        </Layout>
    )
}

export default AIDataIntelligence;